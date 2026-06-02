// Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min.

// const arr = [1, 2, 10, 3, 4, 5]

function maxElement() {
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i]
    }
    return max
}

// console.log(maxElement(nums))

function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const item = arr[i]

        if (item < min) {
            min = item;
        } else if (item > max) {
            max = item;
        }
    }

    return { min, max };
}


const numbers = [5, 1, 3, 412, 12, 512];
const result = findMinMax(numbers);

// console.log(`Минимальное значение: ${result.min}`);
// console.log(`Максимальное значение: ${result.max}`);

// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [
    {
        name: 'Alex',
        city: 'Moscow',
    },
    {
        name: 'Ivan',
        city: 'Moscow',
    },
    {
        name: 'Vasya',
        city: 'Moscow',
    },
    {
        name: 'Joe',
        city: 'New York'
    },
    {
        name: 'Johan',
        city: 'Berlin'
    },
]

const groupByCity = (array) => {
    const hash = {}
    for (const obj of people) {
        if (hash[obj.city] === undefined) hash[obj.city] = obj.name
        else if (typeof hash[obj.city] === "string") hash[obj.city] = [hash[obj.city], obj.name]
        else hash[obj.city].push(obj.name)
    }
    return hash
}

// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/

const groupByCity1 = (array) => {
    const result = {}

    for (const item of array) {
        const { city, name } = item

        if (!result[city]) {
            result[city] = name
        } else if (Array.isArray(result[city])) {
            result[city].push(name)
        } else {
            result[city] = [result[city], name]
        }
    }

    return result
}

const groupByCity2 = (array) =>
    array.reduce((acc, { city, name }) => {
        if (!acc[city]) {
            // первый человек в городе → строка
            acc[city] = name
        } else if (typeof acc[city] === "string") {
            // второй человек → превращаем в массив
            acc[city] = [acc[city], name]
        } else {
            // третий и далее → пушим в массив
            acc[city].push(name)
        }
        return acc
    }, {});



console.log(groupByCity2(people))

// Объединение интервалов в массиве

const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]];  // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

// O(n log n), O(1)
function merge(intervals) {
    if (intervals.length < 2) return intervals

    intervals.sort((a, b) => a[0] - b[0])

    let result = [intervals[0]]

    for (let interval of intervals) {
        let recent = result[result.length - 1];

        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1])
        } else {
            result.push(interval)
        }
    }

    return result
}

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));

// Преобразовать строку в объект, разделяя свойства по точке.

// RESULT
/*
{
  one: {
    two: {
      three: {
        four: {
          five: }
        }
      }
    }
  }
}
*/

function strToObject(str) {
    return str.split('.').reduceRight((acc, key) => ({ [key]: acc }), {});
}

const str = 'one.two.three.four.five';
console.log(strToObject(str));

// const str = 'one.two.three.four.five';
// const arrStr = str.split('.')
// const result = arrStr.reduceRight((acc, val) => {
//     return { [val]: acc }
// }, {});

// console.log(result);

// Написать функцию sleep, которая останавливает выполнение кода на определенное время.

console.log('Начало');
function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}
await sleep(2000); // Приостанавливаем выполнение на 2 секунды
console.log('Прошло 2 секунды');



// 226. Invert Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, invert the tree, and return its root.

 

// Example 1:


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// DFS recursive pre-order: O(n), Space: O(h) h = height of the tree (for 2 nodes h = 2, for 1 node h = 0).
// Space O(h), for a skewed tree: O(n) linked list, for a balanced binary tree: O(log n)
var invertTree = function (root) {

    if (!root) return null

    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
};


// DFS iterative
// Time: O(n), space: O(h) (best - O(log n) for BST, O(n) for linked list)
var invertTree2 = function (root) {
    if (root === null) return null; 

    const stack = [root]; 

    while (stack.length > 0) {
        const node = stack.pop(); 

        [node.left, node.right] = [node.right, node.left];

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return root; 
};

// 141. Linked List Cycle
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

 

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:


// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:


// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
 

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.
 

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// slow, fast. В цикле смещаем их на 1, 2 шага, затем проверяем: Если равны, то true

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// O(n), O(1)
var hasCycle = function (head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (fast === slow) return true
    }
    return false
};