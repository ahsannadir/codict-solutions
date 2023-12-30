// Given an array of numbers, return the sum of all of the positive ones.

function positiveSum(arr) {
    let sum = 0;

    for (let i in arr) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}