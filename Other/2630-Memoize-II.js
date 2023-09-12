// 2630. Memoize II

// Hard

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// fn can be any function and there are no constraints on what type of values it accepts. Inputs are considered identical if they are === to each other.



// Example 1:

// Input: 
// getInputs = () => [[2,2],[2,2],[1,2]]
// fn = function (a, b) { return a + b; }
// Output: [{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]
// Explanation:
// const inputs = getInputs();
// const memoized = memoize(fn);
// for (const arr of inputs) {
//   memoized(...arr);
// }

