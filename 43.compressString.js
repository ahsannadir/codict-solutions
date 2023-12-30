/* Given a string, returns a new string where any sequence of the same character is replaced with the character followed by the number of occurrences.
If the compressed string is not smaller than the original string, the function should return the original string.*/

function compressString(str) {
    let count = 1, chars = str.split(""), result = "";
    
    for (let i = 0; i < chars.length; i++) {
        let cur = chars[i];
        let next = chars[i + 1];
        if (cur === next) {
            count++;
        } else {
            result += chars[i] + count
            count = 1;
        }
    }
    return result
}