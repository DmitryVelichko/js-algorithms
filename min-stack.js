// https://www.youtube.com/watch?v=_aKd8xsOa30&ab_channel=shirinsetayesh

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function


var MinStack = function() {
   
    this.stack = []
    this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length === 0) {
        this.min.push(val)
    } else {
        let minimum = Math.min(val, this.min[this.min.length - 1])
        this.min.push(minimum)
    }
    
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

