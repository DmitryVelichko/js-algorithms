// Create alphabet array: ['a', 'b', 'c', ..., 'z'].
const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

/**
 * Generates a cipher map out of the alphabet.
 * Example with a shift 3: {'a': 'd', 'b': 'e', 'c': 'f', ...}
 *
 * @param {string[]} alphabet - i.e. ['a', 'b', 'c', ... , 'z']
 * @param {number} shift - i.e. 3
 * @return {Object} - i.e. {'a': 'd', 'b': 'e', 'c': 'f', ..., 'z': 'c'}
 */
