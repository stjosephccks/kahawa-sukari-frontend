// Cache queue implementation with data comparison
class CacheQueue {
  constructor(key, maxSize = 5) {
    this.key = `cache_queue_${key}`;
    this.maxSize = maxSize;
  }

  // Get the current queue from localStorage
  getQueue() {
    try {
      const queue = localStorage.getItem(this.key);
      return queue ? JSON.parse(queue) : [];
    } catch (error) {
      console.error(`Error reading cache queue for ${this.key}:`, error);
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
    const queue = this.getQueue();
    if (queue.length === 0) return true;
    
    const latestData = queue[0].data;
    return JSON.stringify(latestData) !== JSON.stringify(newData);
  }

  // Add new data to the queue if it's different
  enqueue(newData) {
    if (!newData) return;
    
    const queue = this.getQueue();
    const now = new Date().toISOString();
    
    // Only add if data is different from the latest
    if (queue.length === 0 || this.isDataDifferent(newData)) {
      queue.unshift({
        data: newData,
        timestamp: now,
        expiry: this.calculateExpiry()
      });

      // Keep queue size under maxSize
      if (queue.length > this.maxSize) {
        queue.pop();
      }

      this.saveQueue(queue);
      return true; // Data was added to queue
    }
    
    return false; // Data was not added (duplicate)
  }

  // Get the latest data from the queue
  getLatest() {
    const queue = this.getQueue();
    if (queue.length === 0) return null;
    
    // Check if latest item is expired
    const latest = queue[0];
    if (new Date(latest.expiry) < new Date()) {
      return null; // Return null if expired
    }
    
    return latest.data;
  }

  // Calculate expiry time (default: 1 day from now)
  calculateExpiry(days = 1) {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + days);
    return expiry.toISOString();
  }

  // Clear the entire queue
  clear() {
    try {
      localStorage.removeItem(this.key);
    } catch (error) {
      console.error(`Error clearing cache queue for ${this.key}:`, error);
    }
  }
}

export default CacheQueue;
