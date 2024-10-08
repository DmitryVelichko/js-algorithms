// You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

// If you choose a job that ends at time X you will be able to start another job that starts at time X.

 

// Example 1:



// Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
// Output: 120
// Explanation: The subset chosen is the first and fourth job. 
// Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.
// Example 2:



// Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
// Output: 150
// Explanation: The subset chosen is the first, fourth and fifth job. 
// Profit obtained 150 = 20 + 70 + 60.
// Example 3:



// Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
// Output: 6
 

// Constraints:

// 1 <= startTime.length == endTime.length == profit.length <= 5 * 104
// 1 <= startTime[i] < endTime[i] <= 109
// 1 <= profit[i] <= 104

/**
 * @param {number[]} startTime - Массив, содержащий время начала каждой работы.
 * @param {number[]} endTime - Массив, содержащий время окончания каждой работы.
 * @param {number[]} profit - Массив, содержащий прибыль от каждой работы.
 * @return {number} - Максимальная возможная прибыль от выполнения работ.
 */
var jobScheduling = function(startTime, endTime, profit) {
    const numJobs = profit.length; // Количество работ
    const jobs = new Array(numJobs);

    // Создаем массив jobs, содержащий тройки [время окончания, время начала, прибыль] для каждой работы
    for (let i = 0; i < numJobs; ++i) {
        jobs[i] = [endTime[i], startTime[i], profit[i]];
    }

    // Сортируем работы по времени окончания в порядке возрастания
    jobs.sort((a, b) => a[0] - b[0]);
    const dp = new Array(numJobs + 1).fill(0);

    // Проходим по каждой работе и определяем максимальную возможную прибыль для данной работы
    for (let i = 0; i < numJobs; ++i) {
        const [endTime, startTime, profit] = jobs[i];

        // Находим индекс последней работы, завершившейся ранее, чем начинается текущая работа
        const latestNonConflictJobIndex = upperBound(jobs, i, startTime);

        // Выбираем максимум между прибылью от выполнения текущей работы и максимальной прибылью
        // от работ, завершившихся ранее
        dp[i + 1] = Math.max(dp[i], dp[latestNonConflictJobIndex] + profit);
    }

    // Возвращаем максимальную прибыль, которую можно получить от выполнения работ
    return dp[numJobs];
};

/**
 * @param {number[][]} jobs - Массив работ в формате [[время окончания, время начала, прибыль], ...]
 * @param {number} endIndex - Индекс текущей работы
 * @param {number} targetTime - Время начала текущей работы
 * @return {number} - Индекс последней работы, завершившейся ранее, чем начинается текущая работа
 */
function upperBound(jobs, endIndex, targetTime) {
    let low = 0;
    let high = endIndex;

    // Бинарный поиск для нахождения индекса последней работы, завершившейся ранее
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (jobs[mid][0] <= targetTime) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    // Возвращаем индекс последней работы, завершившейся ранее, чем начинается текущая работа
    return low;
};

console.log(jobScheduling([1,2,3,3], [3,4,5,6],[50,10,40,70])) // 120