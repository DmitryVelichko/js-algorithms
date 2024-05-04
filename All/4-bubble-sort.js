// Bubble Sort, O(n^2)

const arr = [9,8,7,6,5,4,3,2,1,1,0,-1,8,9,-2,-3];


function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if(arr[j+1] === undefined) console.log('1 !!!')
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

    for (let j = 0; j < arr.length - i - 1; j++) { // так как при каждой итерации цикла наибольший элемент перемещается в конец массива, нам нет нужды выполнять проверку для уже отсортированных элементов.
      if(arr[j+1] === undefined) console.log('2 !!!')
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        isSorted = false; // Так как мы поменяли элементы местами, значит, наш массив не отсортирован. Устанавливаем значение false.
      }
    }
