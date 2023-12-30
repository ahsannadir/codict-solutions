/* Given a function that takes in an array of integers and returns the element that appears more than n/2 times in the array,
where n is the number of elements in the array.
If there is no such element, the function should return -1.*/

function dominantNumber(arr) {
    const countMap = new Map();
    const n = arr.length;

    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);

        if (countMap.get(num) > n / 2) {
            return num;
        }
    }

    return -1;
}