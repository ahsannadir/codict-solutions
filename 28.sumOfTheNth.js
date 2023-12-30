/* Given a param "list", and another param "n".
Modify the sumRange function so it returns the sum of the first nth items of the list */

function sumRange(list, n) {
    let sum = 0

    for (let i = 0; i < n; ++i) {
        sum += list[i];
    }

    return sum;
}