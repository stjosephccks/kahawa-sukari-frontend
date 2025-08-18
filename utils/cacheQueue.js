// Cache queue implementation with data comparison
class CacheQueue {
  constructor(key, maxSize = 5, cacheDurationHours = 4) {
    this.key = `cache_queue_${key}`;
    this.maxSize = maxSize;
    this.cacheDurationMs = cacheDurationHours * 60 * 60 * 1000; // Convert hours to milliseconds
  }

  // Get the current queue from localStorage
  getQueue() {
    try {
      const queue = localStorage.getItem(this.key);
      return queue ? JSON.parse(queue) : [];
    } catch (error) {
      console.error(`Error reading cache queue for ${this.key}:`, error);
      this.clear(); // Clear invalid cache
      return [];
    }
  }

  // Save the queue to localStorage
  saveQueue(queue) {
    try {
      localStorage.setItem(this.key, JSON.stringify(queue));
    } catch (error) {
      console.error(`Error saving cache queue for ${this.key}:`, error);
    }
  }

  // Check if new data is different from the latest in queue
  isDataDifferent(newData) {
    if (!newData || !Array.isArray(newData)) return true;
    
    const queue = this.getQueue();
    if (queue.length === 0) return true;
    
    const latestData = queue[0].data;
    return JSON.stringify(latestData) !== JSON.stringify(newData);
  }

  // Add new data to the queue
  enqueue(newData) {
    if (!newData || !Array.isArray(newData)) return false;
    
    const queue = this.getQueue();
    const now = new Date();
    
    // Clean up any expired items first
    const validQueue = queue.filter(item => new Date(item.expiry) > now);
    
    // Only add if data is different from the latest or if queue is empty
    if (validQueue.length === 0 || this.isDataDifferent(newData)) {
      validQueue.unshift({
        data: newData,
        timestamp: now.toISOString(),
        expiry: new Date(now.getTime() + this.cacheDurationMs).toISOString()
      });

      // Keep queue size under maxSize
      if (validQueue.length > this.maxSize) {
        validQueue.length = this.maxSize;
      }

      this.saveQueue(validQueue);
      return true;
    }
    
    return false;
  }

  // Get the latest valid data from the queue
  getLatest() {
    const now = new Date();
    const queue = this.getQueue();
    
    // Find the first non-expired item
    const validItem = queue.find(item => new Date(item.expiry) > now);
    
    // If found, move it to the front for faster access next time
    if (validItem) {
      const newQueue = [
        validItem,
        ...queue.filter(item => item !== validItem)
      ].slice(0, this.maxSize);
      
      // Only update if the queue changed
      if (JSON.stringify(queue) !== JSON.stringify(newQueue)) {
        this.saveQueue(newQueue);
      }
      
      return validItem.data;
    }
    
    return null;
  }

  // Clear the entire queue
  clear() {
    try {
      localStorage.removeItem(this.key);
      return true;
    } catch (error) {
      console.error(`Error clearing cache queue for ${this.key}:`, error);
      return false;
    }
  }
}

export default CacheQueue;
