const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.some = function (callback) {
    for(let el of this) {
        callback()
    }
}

console.log(arr.some((el) => el === 5));
console.log(arr.some((el) => el === 9));