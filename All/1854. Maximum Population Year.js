// 1854. Maximum Population Year
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

// The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

// Return the earliest year with the maximum population.

// Example 1:

// Input: logs = [[1993,1999],[2000,2010]]
// Output: 1993
// Explanation: The maximum population is 1, and 1993 is the earliest year with this population.
// Example 2:

// Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
// Output: 1960
// Explanation: 
// The maximum population is 2, and it had happened in years 1960 and 1970.
// The earlier year between them is 1960.


// Constraints:

// 1 <= logs.length <= 100
// 1950 <= birthi < deathi <= 2050

/**
 * @param {number[][]} logs
 * @return {number}
 */
//  Time Complexity: O(n+y), where n is the number of logs and y is the range of years (constant 101). Updating yearChanges takes O(n). Iterating through yearChanges takes O(y), which is effectively constant.
// Space Complexity: O(y), for the yearChanges array of size 101.
var maximumPopulation = function (logs) {
    const yearChanges = new Array(101).fill(0); // Array to track changes in population (1950-2050)

    // Increment and decrement for each log
    for (const [birth, death] of logs) {
        yearChanges[birth - 1950]++; // Population increases in the birth year
        yearChanges[death - 1950]--; // Population decreases in the death year
    }

    let maxPopulation = 0;
    let currentPopulation = 0;
    let earliestYear = 1950;

    // Calculate population for each year and track the maximum
    for (let year = 0; year < 101; year++) {
        currentPopulation += yearChanges[year];
        if (currentPopulation > maxPopulation) {
            maxPopulation = currentPopulation;
            earliestYear = 1950 + year; // Convert back to the actual year
        }
    }

    return earliestYear;
};
