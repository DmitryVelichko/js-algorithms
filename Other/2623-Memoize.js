// 2623. Memoize
// Medium

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.




// Constraints:

// 0 <= a, b <= 105
// 1 <= n <= 10
// at most 105 function calls
// at most 105 attempts to access callCount
// input function is sum, fib, or factorial

/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = {}

    return function (...args) {
        const key = JSON.stringify(args)

        if (key in cache) return cache[key]

        const result = fn(...args)
        cache[key] = result

        return result
    }

}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */