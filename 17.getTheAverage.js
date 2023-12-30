// Given a list of numbers, modify the getAverageo function so it returns the average of that list.

function getAverage(arr) {
    let total = arr.length, sum = 0;

    for (let i in arr) {
        sum += arr[i];
    }
    return sum / total;
}