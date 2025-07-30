import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook to handle Server-Sent Events (SSE)
 * @param {string} eventName - The name of the event to listen for
 * @param {Function} onMessage - Callback function when a message is received
 * @param {Object} options - Options for the SSE connection
 * @param {string} options.url - The SSE endpoint URL (default: '/api/sse')
 * @param {boolean} options.enabled - Whether the connection should be active (default: true)
 * @param {Object} options.reconnectOptions - Options for reconnection
 * @param {number} options.reconnectOptions.initialDelay - Initial delay before reconnecting (ms)
 * @param {number} options.reconnectOptions.maxDelay - Maximum delay between reconnection attempts (ms)
 * @param {number} options.reconnectOptions.maxRetries - Maximum number of retry attempts (0 for infinite)
 * @returns {Object} - Connection status and methods
 */
export function useSSE(eventName, onMessage, options = {}) {
  const {
    url = '/api/sse',
    enabled = true,
    reconnectOptions = {
      initialDelay: 1000,
      maxDelay: 30000,
      maxRetries: 10,
    },
  } = options;

  const [eventSource, setEventSource] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const reconnectAttempts = useRef(0);
  const reconnectTimer = useRef(null);
  const isMounted = useRef(true);

  const connect = useCallback(() => {
    if (!enabled) return;

    // Clean up any existing connection
    if (eventSource) {
      eventSource.close();
    }

    try {
      const source = new EventSource(url);
      setEventSource(source);

      // Handle connection open
      source.onopen = () => {
        if (isMounted.current) {
          setIsConnected(true);
          setError(null);
          reconnectAttempts.current = 0;
          console.log(`SSE: Connected to ${url}`);
        }
      };

      // Handle errors
      source.onerror = (error) => {
        if (isMounted.current) {
          console.error('SSE Error:', error);
          setIsConnected(false);
          setError(error);
          attemptReconnect();
        }
      };

      // Handle custom events
      source.addEventListener(eventName, (event) => {
        try {
          const data = JSON.parse(event.data);
          onMessage(data);
        } catch (err) {
          console.error('Error parsing SSE message:', err);
        }
      });

      // Handle keep-alive messages
      source.addEventListener('keep-alive', () => {
        // Just keep the connection alive
      });

      // Handle connection established
      source.addEventListener('connected', () => {
        if (isMounted.current) {
          setIsConnected(true);
          setError(null);
        }
      });

      return () => {
        source.close();
      };
    } catch (error) {
      console.error('Failed to create EventSource:', error);
      setError(error);
      attemptReconnect();
    }
  }, [url, eventName, onMessage, enabled]);

  const attemptReconnect = useCallback(() => {
    if (!isMounted.current) return;
    
    const { initialDelay, maxDelay, maxRetries } = reconnectOptions;
    
    if (maxRetries > 0 && reconnectAttempts.current >= maxRetries) {
      console.error(`SSE: Max reconnection attempts (${maxRetries}) reached`);
      return;
    }

    const delay = Math.min(
      initialDelay * Math.pow(2, reconnectAttempts.current),
      maxDelay
    );

    console.log(`SSE: Attempting to reconnect in ${delay}ms (attempt ${reconnectAttempts.current + 1})`);
    
    reconnectTimer.current = setTimeout(() => {
      if (isMounted.current) {
        reconnectAttempts.current++;
        connect();
      }
    }, delay);
  }, [reconnectOptions, connect]);

  // Set up connection on mount and when dependencies change
  useEffect(() => {
    isMounted.current = true;
    
    if (enabled) {
      connect();
    }

    // Cleanup on unmount
    return () => {
      isMounted.current = false;
      if (eventSource) {
        eventSource.close();
      }
      if (reconnectTimer.current) {
        clearTimeout(reconnectTimer.current);
      }
    };
  }, [connect, enabled]);

  // Reconnect when connection is lost
  useEffect(() => {
    if (!isConnected && enabled) {
      attemptReconnect();
    }
  }, [isConnected, enabled, attemptReconnect]);

  return {
    isConnected,
    error,
    reconnect: connect,
    disconnect: () => {
      if (eventSource) {
        eventSource.close();
        setIsConnected(false);
      }
    },
  };
}
