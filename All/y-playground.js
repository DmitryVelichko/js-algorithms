const arr = [-3, 2, 4]

function fun(arr) {
    const res = []
    for(const num of arr) {
        res.push(num * num)
    }
    return res.sort((a,b) => a - b)
}

console.log(fun(arr)) // [4, 9, 16]