/* Given a list of strings, Modify the firstCharo function so it returns return the same list,
in the same order, but with only the first char of each item. */

function firstChar(list) {
    let arr = [];

    for (let i = 0; i < list.length; ++i) {
        arr.push(list[i][0]);
    }
    return arr;
}