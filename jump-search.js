function mergesort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  return merge(mergesort(leftArr), mergesort(rightArr))
}

function merge(leftArr, rightArr) {
 