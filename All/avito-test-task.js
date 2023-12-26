
// ; напиши алгоритм на js для объединения двух отсортированных массивов неповторяющихся чисел
// ; ChatGPT
// ; Конечно! Вот пример алгоритма на JavaScript для объединения двух отсортированных массивов, содержащих неповторяющиеся числа:


function mergeArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      mergedArray.push(arr2[j]);
      j++;
    } else {
      // Если числа равны, добавляем одно из них и увеличиваем оба индекса
      mergedArray.push(arr1[i]);
      i++;
      j++;
    }
  }

  // Добавляем оставшиеся элементы из первого массива (если остались)
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Добавляем оставшиеся элементы из второго массива (если остались)
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}



// напиши алгоритм на js на нахождение пар чисел в массиве, сумма которых даст k:

// const arr = [1, 3, 4, 5, 2];
// findPairs(arr, 7) // [[3, 4], [5, 2]]
// ChatGPT
// Вот пример алгоритма на JavaScript для нахождения пар чисел в массиве, сумма которых равна заданному числу k:

function findPairs(arr, k) {
  const pairs = [];
  const numSet = new Set(arr); // Создаем множество для быстрого поиска чисел в массиве

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const complement = k - currentNum; // Ищем комплементарное число

    if (numSet.has(complement) && complement !== currentNum) {
      pairs.push([currentNum, complement]);
    }
  }

  return pairs;
}
