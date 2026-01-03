

function range(arr) {
    arr.sort((a, b) => a - b)// 1234567 89 10
    const res = [String(arr[0])]
    let isInterval = false
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] - arr[i - 1] === 1) {
            isInterval = true
            continue
        }
        if (isInterval) {
            res[res.length - 1] += `-${arr[i - 1]}`
            isInterval = false
        }

        if (arr[i]) res.push(String(arr[i]))
    }

    return res.join()
}
console.log(range([1, 4, 2, 5, 3, 9, 8, 11, 0])) // '0-5, 8-9, 11' 
console.log(range([1, 4, 3, 2])) // '1-4'