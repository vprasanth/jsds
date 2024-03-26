class HeapItem {
  constructor(item, priority = item) {
    this.item = item;
    this.priority = priority;
  }
}

/**
 * Creates a new (min) Heap
 * @class {Heap} Instance of min heap
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  /**
   * @param {HeapItem} item
   */
  push(item) {
    this.heap.push(item);
    this._bubbleUp();
  }

  /**
   * @returns {HeapItem} Root node
   */
  pop() {
    const min = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this._bubbleDown();
    return min;
  }

  /**
   * @returns {HeapItem} Root node
   */
  peek() {
    return this.heap[0];
  }

  /**
   * @returns {number} Size of heap
   */
  size() {
    return this.heap.length;
  }

  _bubbleDown() {
    let index = 0;
    let min = index;
    const n = this.size();

    while (index < n) {
      let left = 2 * index + 1;
      let right = left + 1;

      if (
        (left < n && this.heap[left].priority < this.heap[min].priority) ||
        (right < n && this.heap[right].priority < this.heap[min].priority)
      ) {
        // pick smaller child if both are present
        if (right < n) {
          min =
            this.heap[left].priority < this.heap[right].priority ? left : right;
        } else {
          min = left;
        }
      }

      if (min === index) break;
      // do the swap
      [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
      index = min;
    }
  }

  _bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const element = this.heap[index];
      // parent index is i-1/2
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent.priority <= element.priority) break;
      // need to swap child with parent
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }
}

export { MinHeap, HeapItem };
