/* Given a string and the "Pig Latin equivalent".
In Pig Latin, a word is translated by moving the first letter to the end of the word and adding "ay". */

function pigLatin(str) {
    let arr = str.split(""), len = arr.length, str2 = "";

    for (let i = 1; i < len; ++i) {
        str2 += arr[i]
    }

    return str2 + arr[0] + "ay"
}