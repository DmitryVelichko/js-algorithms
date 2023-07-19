var MinStack = function () {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
// T: O(1)
MinStack.prototype.push = function (val) {
    if (this.stack.length === 0) {
        this.minStack.push(val)
        this.stack.push(val)
    } else {
        this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]))
        this.stack.push(val)
    }
};

/**
 * @return {void}
 */
// T: O(1)
MinStack.prototype.pop = function () {
    if (!this.stack.length) return null
    this.minStack.pop()
    this.stack.pop()

};

/**
 * @return {number}
 */
// T: O(1)
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
// T: O(1)
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
};
