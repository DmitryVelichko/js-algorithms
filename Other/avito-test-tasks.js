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
  
