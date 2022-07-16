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


/**
 * Generates Cartesian Product of two sets.
 * @param {*[]} setA
 * @param {*[]} setB
 * @return {*[]}
 */
 export default function cartesianProduct(setA, setB) {
  // Check if input sets are not empty.
  // Otherwise return null since we can't generate Cartesian Product out of them.
 