// Given a string with words, modify findShortest function so it returns the length of the shortest word.

function findShortest(str) {
    let arr = str.split(" "), shortest = arr[0].length;

    for (let i in arr) {
        if (arr[i].length < shortest) {
            shortest = arr[i].length;
        }
    }
    return shortest;
}