// Given a string return the string in the reverse order.

function reverseAllWords(str) {
    let arr = str.split(" "), len = arr.length, str = "";

    for (let i = len - 1; i >= 1; --i) {
        str = str + arr[i] + " ";
    }

    str = str + arr[0];
    return str;
}