// 2693. Call Function with Custom Context
// Medium

// Enhance all functions to have the callPolyfill method. The method accepts an object obj as it's first parameter and any number of additional arguments. The obj becomes the this context for the function. The additional arguments are passed to the function (that the callPolyfill method belongs on).

// For example if you had the function:

// function tax(price, taxRate) {
//   const totalCost = price * (1 + taxRate);
//   console.log(`The cost of ${this.item} is ${totalCost}`);
// }
// Calling this function like tax(10, 0.1) will log "The cost of undefined is 11". This is because the this context was not defined.
