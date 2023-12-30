// Given a string, remove the first and last character of it and return it.

function removeChars(str) {
    let arr = str.split(""), len = arr.length, str2 = "";

    for (let i = 1; i < len - 1; ++i) {
        str2 += arr[i]
    }
    return str2
}