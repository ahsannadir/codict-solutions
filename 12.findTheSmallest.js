// Given an array of Integers, find and return the smallest integer.

function findTheSmallest(arr) {
    let min = arr[0];

    for (let i in arr) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}