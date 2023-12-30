// Given a string formatted in snake_case, modify the snakeToPascal function so it returns the same string but formatted in PascalCase

function snakeToPascal(word) {
    let arr = word.split('_'), str = "", len = arr.length;

    for (let i = 0; i < len; ++i) {
        str += arr[i][0].toUpperCase();
        for (let j = 1; j < arr[i].length; ++j) {
            str += arr[i][j];
        }
    }
    return str;
}