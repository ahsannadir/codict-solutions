// Given an integer, modify the squareltAllO function so it returns every digit of that integer squared and concatenated.

function squareItAll(n) {
    let str = "" + n, arr = str.split(""), str2 = "";

    for (let i in arr) {
        str2 += arr[i] * arr[i];
    }

    return str2;
}