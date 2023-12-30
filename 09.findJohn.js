// Modify findJohn function so it takes an array of values and returns true if it contains an element equal to "John" or false otherwise.

function findJohn(arr) {
    for (let i in arr) {
        if (arr[i] == 'John') {
            return true;
        }
    }
    return false;
}