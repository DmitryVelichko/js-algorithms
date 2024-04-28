// Selecion Sort, Сортировка выбором - O(n^2)
// Пробегаемся по массиву -> находим минимальный элемент -> меняем с первым элементом -> снова пробегаемся и находим минимальный 
//элемент -> меняем со вторым элементом

const arr = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j
            }
        }
