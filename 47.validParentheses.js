// Given a string containing only parentheses, returns a boolean indicating whether the parentheses are balanced.

function validParentheses(str) {
    let len = str.length, check = 0;

    for (let i = 0; i < len; ++i) {
        if (str[i] != str[i + 1]) {
            check += 1;
        }
    }
    if (check == 1) {
        return false;
    } else return true;
}