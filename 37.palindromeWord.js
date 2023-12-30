// Given a word, modify palindromeCheck0 function so it returns true if the string is a palindrome or false otherwise.

function palindromeCheck(str) {
    let arr = str.split(""), len = arr.length, str2 = "";

    for (let i = len - 1; i >= 0; --i) {
        str2 += arr[i];
    }

    if (str == str2) {
        return true;
    } else return false;
}