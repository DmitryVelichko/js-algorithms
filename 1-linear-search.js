// Linear Search O(n)

const array = [1,4,5,8,5,1,2,7,5,2,11]
let count = 0
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i;
        }
    }
    return null
}

console.log(linearSearch(array, 11))
console.log('count = ', count)

import Comparator from '../../utils/comparator/Comparator';

/**
 * Parent class for Min and Max Heaps.
 */
export default class Heap {
  /**
   * @constructs Heap
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly');
    }

    // Array representation of the heap.
    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }
