import Sort from '../Sort';

export default class CountingSort extends Sort {
  /**
   * @param {number[]} originalArray
   * @param {number} [smallestElement]
   * @param {number} [biggestElement]
   */
  sort(originalArray, smallestElement = undefined, biggestElement = undefined) {
    // Init biggest and smallest elements in array in order to build number bucket array later.
    let detectedSmallestElement = smallestElement || 0;
    let detectedBiggestElement = biggestElement || 0;

    if (smallestElement === undefined || biggestElement === undefined) {
      originalArray.forEach((element) => {
        // Visit element.
        this.callbacks.visitingCallback(element);

        // Detect biggest element.
        if (this.comparator.greaterThan(element, detectedBiggestElement)) {
          detectedBiggestElement = element;
        }
