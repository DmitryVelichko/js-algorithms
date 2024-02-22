// 997. Find the Town Judge
// Easy
// Topics
// Companies
// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

 

// Example 1:

// Input: n = 2, trust = [[1,2]]
// Output: 2
// Example 2:

// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:

// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
 

// Constraints:

// 1 <= n <= 1000
// 0 <= trust.length <= 104
// trust[i].length == 2
// All the pairs of trust are unique.
// ai != bi
// 1 <= ai, bi <= n

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    // Создаем массив для подсчета входящих и исходящих доверий для каждого человека
    // Индексы массива представляют метки людей от 1 до n
    const incomingTrust = Array(n + 1).fill(0);
    const outgoingTrust = Array(n + 1).fill(0);

    // Итерируем по массиву trust и увеличиваем соответствующие счетчики
    for (const [a, b] of trust) {
        outgoingTrust[a]++;
        incomingTrust[b]++;
    }

    // Ищем человека, который имеет входящие доверия от всех, кроме самого себя, и не имеет исходящих доверий
    for (let i = 1; i <= n; i++) {
        if (incomingTrust[i] === n - 1 && outgoingTrust[i] === 0) {
            return i; // Мы нашли городского судью
        }
    }

    return -1; // Городской судья не найден
};

// Примеры использования
console.log(findJudge(2, [[1,2]])); // Вывод: 2
console.log(findJudge(3, [[1,3],[2,3]])); // Вывод: 3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])); // Вывод: -1
