// Given a list of integers, modify the reflect() function so it returns the list concatenated with its reflection.

function reflect(arr) {
    let len = arr.length, str = "", arr2 = [];

    for (let i in arr) {
        arr2[i] = arr[i]
    }

    for (let i = arr.length - 1; i >= 0; --i) {
        arr2.push(arr[i])
    }

    return arr2
}