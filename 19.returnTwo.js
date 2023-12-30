/* Given a list of integers, Modify the returnTwo function so it returns a list with the smallest number in position 0 
and the biggest number in position 1. */

function returnTwo(list) {
    let min = list[0], max = list[0];

    for (let i in list) {
        if (list[i] < min) {
            min = list[i];
        }
        if (list[i] > max) {
            max = list[i];
        }
    }
    return [min, max];
}