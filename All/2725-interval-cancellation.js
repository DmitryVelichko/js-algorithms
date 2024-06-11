// 2725. Interval Cancellation
// Easy

// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.

 

// Example 1:

// Input: fn = (x) => x * 2, args = [4], t = 35, cancelT = 190
// Output: 
// [
//    {"time": 0, "returned": 8},
//    {"time": 35, "returned": 8},
//    {"time": 70, "returned": 8},
//    {"time": 105, "returned": 8},
//    {"time": 140, "returned": 8},
//    {"time": 175, "returned": 8}
// ]
// Explanation: 
// const cancel = cancellable(x => x * 2, [4], 35);
// setTimeout(cancel, 190);

