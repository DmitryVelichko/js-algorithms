// 1491. Average Salary Excluding the Minimum and Maximum Salary
// Easy

// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.



// Example 1:

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
// Example 2:

// Input: salary = [1000,2000,3000]
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2000


// Constraints:

// 3 <= salary.length <= 100
// 1000 <= salary[i] <= 106
// All the integers of salary are unique.

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let minVal = salary[0]
    let maxVal = salary[0]
    let sum = salary[0]

    for (let i = 1; i < salary.length; i++) {
        if (minVal > salary[i]) minVal = salary[i]
        if (maxVal < salary[i]) maxVal = salary[i]
        sum += salary[i]

    }
    sum -= minVal + maxVal
    return sum / (salary.length - 2)
}

console.log(average([4000, 3000, 1000, 2000]))