// Given a list of integers, modify the findSecondo function so it returns the second highest number in that list.

function findSecond(list) {
    let max = list[0], len = list.length, arr = [], j = 0;

    for (let i in list) {
        if (max < list[i]) {
            max = list[i];
        }
    }

    for (let i in list) {
        if (list[i] != max) {
            arr[j] = list[i];
            j += 1;
        }
    }

    let max2 = arr[0];

    for (let i in arr) {
        if (max2 < arr[i]) {
            max2 = arr[i];
        }
    }
    return max2

}