// Write a function that takes in a string and removes any duplicate characters from the string. The function should return the modified string.

function removeDups(str) {
    let arr = str.split(""), len = arr.length, str2 = "";

    for (let i = 0; i < len; ++i) {
        if (arr[i] != arr[i + 1]) {
            str2 += arr[i];
        }
    }
    return str2;
}