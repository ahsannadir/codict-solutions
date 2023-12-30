// Given a list of integers, all numbers are equal except for one. Modify the findUnique function so it returns the only different number.

function findUnique(list) {
    let unique = 0, len = list.length;

    for (let i = 0; i < len; ++i) {
        if (list[i] != list[i + 1] && list[i] != list[i + 2] && list[i] != list[i - 1]) {
            return list[i];
        }
    }
}