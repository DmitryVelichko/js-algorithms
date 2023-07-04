// 1) Написать функцию, которая принимает массив с четными и нечетными числами и возвращает такой же массив, в котором четные числа стоят на своих местах, а нечетные остортированы в порядке возрастания 
const sortArr = (nums) => {
    const oddNums = nums.filter(num => num % 2 !== 0); // Отфильтровываем нечетные числа
    const sortedOddNums = oddNums.sort((a, b) => a - b); // Сортируем нечетные числа по возрастанию
    
    let sortedArr = [];
    let oddIndex = 0;
  
    // Обходим исходный массив и вставляем четные числа на свои места, а нечетные числа заменяем отсортированными нечетными числами
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        sortedArr.push(nums[i]);
      } else {
        sortedArr.push(sortedOddNums[oddIndex]);
        oddIndex++;
      }
    }
    
    return sortedArr;
  };
  
  console.log(sortArr([2, 3, 1, 7, 4, 9, 5, 8])); // [2, 1, 3, 5, 4, 7, 9, 8]



console.log(sortArr([2, 3, 1, 7, 4, 9, 5, 8])) // => [2, 1, 3, 5, 4, 7, 9, 8]

// 2) Написать функцию, которая бы вернула 100 самых частовстречаемых элементов в массиве (массив состоит только из строк)

const findTop100FrequentElements = (arr) => {
    // Создаем словарь для подсчета частоты встречаемости элементов
    const frequencyMap = {};
  
    // Подсчитываем частоту встречаемости каждого элемента в массиве
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }
  
    // Преобразуем словарь в массив пар [элемент, частота] и сортируем его по убыванию частоты
    const sortedFrequencyArray = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);
  
    // Получаем только элементы (ключи) из отсортированного массива
    const top100Elements = sortedFrequencyArray.slice(0, 100).map(entry => entry[0]);
  
    return top100Elements;
  };
  
  // Пример использования:
  const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'pear', 'pear', 'pear', 'grape'];
  const top100 = findTop100FrequentElements(array);
  console.log(top100);