/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
    Если 2 строки s и t анаграммы возвращаем true, false если нет

    Создаем hashmap

    длина s и t разная? return false

    Проходимся в цикле for по длине s
        если буквы из s нет в хэше инициализируем нулем
        if (hash[t[i]] === undefined) hash[t[i]] = 0

        хэш[буква из s]++
        хэш[буква из t]--
    
    Проходимся в цикле for по хэшу
        if (hash[key] !==0) return false

    return true

 */

// O(n), O(1)/O(k) - 24 буквы в алфавите
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const hash = {}

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) hash[s[i]] = 0
        if (hash[t[i]] === undefined) hash[t[i]] = 0

        hash[s[i]]++
        hash[t[i]]--
    }

    for (let key in hash) {
        if (hash[key] !== 0) return false
    }
    return true
};