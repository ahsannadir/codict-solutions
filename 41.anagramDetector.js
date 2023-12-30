/* Given two strings, returns a boolean indicating whether they are anagrams of each other.
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.
Obs: The function should be case -insensitive. */

function anagramDetector(str1, str2) {
    let len1 = str1.length, len2 = str2.length, check1 = 0, check2 = 0;

    if (len1 == len2) {
        for (let i = 0; i < len1; ++i) {
            for (let j = 0; j < len1; ++j) {
                if (str1[i] == str2[j]) {
                    check1 += 1
                }
            }
        }

        for (let i = 0; i < len2; ++i) {
            for (let j = 0; j < len2; ++j) {
                if (str2[i] == str1[j]) {
                    check2 += 1
                }
            }
        }
    } else return false

    if (check1 == check2) {
        return true
    } else return false
}