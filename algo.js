/**
 * Interpolation search implementation.
 *
 * @param {*[]} sortedArray - sorted array with uniformly distributed values
 * @param {*} seekElement
 * @return {number}
 */
 export default function interpolationSearch(sortedArray, seekElement) {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  while (leftIndex <= rightIndex) {
    const rangeDelta = sortedArray[rightIndex] - sortedArray[leftIndex];
    const indexDelta = rightIndex - leftIndex;
    const valueDelta = seekElement - sortedArray[leftIndex];

    // If valueDelta is less then zero it means that there is no seek element
    // exists in array since the lowest element from the range is already higher
    // then seek element.
    if (valueDelta < 0) {
      return -1;
    }

