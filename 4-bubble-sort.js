// Bubble Sort, O(n^2)

const arr = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr)); // O(n*n)

// Сортирует массив за лучшее время

function bubbleSortBestTime(arr) {
  let isSorted; // Добавим переменную, отвечающую на вопрос - отсортирован наш массив или нет.

  for (let i = 0; i < arr.length; i++) {
    isSorted = true; // Предположим, что наш массив отсортирован.

    for (let j = 0; j < arr.length - i; j++) { // так как при каждой итерации цикла наибольший элемент перемещается в конец массива, нам нет нужды выполнять проверку для уже отсортированных элементов.
      if (arr[j] > arr[j + 1]) {
    