// Given a list of integers, Modify the allEqualo function so it returns true if all items in the list have the same value, or false otherwise.

function allEqual(list) {
    let len = list.length, count = 0;

    for (let i = 0; i < len; ++i) {
        if (list[i] == list[i + 1]) {
            count += 1;
        }
    }
    if (count == len - 1) {
        return true;
    } else return false;
}