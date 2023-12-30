/* Given a string, modify the countVowels function so it returns how many vowels a string has.
Note: The string can be in Upper Case */

function countVowels(str) {
    let count = 0, arr1 = ["a", "e", "i", "o", "u"], arr2 = ["A", "E", "I", "O", "U"]

    for (let i = 0; i < str.length; ++i) {
        for (let j = 0; j < 5; ++j) {
            if (str[i] == arr1[j] || str[i] == arr2[j]) {
                count += 1
            }
        }
    }
    return count
}