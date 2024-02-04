// 76. Minimum Window Substring
// Solved
// Hard
// Topics
// Companies
// Hint
// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?

  /**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return "";

 const map = {}; // Словарь для подсчёта символов в t
 // Заполнение словаря символами из t
 for (let char of t) {
   if (map[char] == null) map[char] = 1;
   else map[char]++;
 }

 let start = 0, end = 0, minLen = Infinity, minStart = 0;
 let counter = t.length; // Счётчик для отслеживания, когда найдено окно

 // Перемещаем конечный указатель
 while (end < s.length) {
   const endChar = s[end];
   // Если символ есть в t, уменьшаем счётчик
   if (map[endChar] > 0) counter--;
   // Уменьшаем количество символов в словаре и расширяем окно
   if (map[endChar] != null) map[endChar]--;
   end++;

   // Когда все символы найдены, пытаемся сузить окно
   while (counter === 0) {
     // Обновляем минимальное окно
     if (end - start < minLen) {
       minStart = start;
       minLen = end - start;
     }

