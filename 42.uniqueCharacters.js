/* Given a string, returns a boolean indicating whether it contains only unique characters.
Obs: The solution should be case -sensitive. */

function hasUniqueCharacters(str) {
    let arr = str.split("");
    let len = arr.length;
    let check = 0;

    for (let i = 0; i < len; ++i) {
        for (let j = i + 1; j < len; ++j) {
            if (arr[i] == arr[j]) {
                check = 1;
                break;
            }
        }
    }

    if (check == 1) {
        return false;
    } else return true;
}