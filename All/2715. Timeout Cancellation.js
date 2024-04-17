// 2715. Timeout Cancellation
// Easy

// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, specifically at cancelT ms. In that case, fn should never be called.

 
// Example 1:

// Input: fn = (x) => x * 5, args = [2], t = 20, cancelT = 50
// Output: [{"time": 20, "returned": 10}]
// Explanation: 
// const cancel = cancellable((x) => x * 5, [2], 20); // fn(2) called at t=20ms
// setTimeout(cancel, 50);

// The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened after the execution of fn(2) at 20ms.
// Example 2:

// Input: fn = (x) => x**2, args = [2], t = 100, cancelT = 50 
// Output: []
// Explanation: 
// const cancel = cancellable((x) => x**2, [2], 100); // fn(2) not called
// setTimeout(cancel, 50);

// The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
// Example 3:

