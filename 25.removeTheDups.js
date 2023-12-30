// Given a list of integers, Modify the removeDups0 function so it returns the list in the same order, but without duplicated items.

function removeDups(list) {
    let len = list.length, arr = [], j = 0;

    for (let i = 0; i < len; ++i) {
        if (list[i] != list[i + 1]) {
            arr[j] = list[i];
            j += 1;
        }
    }
    return arr;
}