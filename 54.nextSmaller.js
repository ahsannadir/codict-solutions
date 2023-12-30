/* Given a function that takes in an integer n and returns the next smaller integer that has the same digits as n.
If there is no smaller integer with the same digits, return -1. */

function nextSmaller(n) {
    const digits = Array.from(String(n), Number);

    let i = digits.length - 1;
    while (i > 0 && digits[i - 1] <= digits[i]) {
        i--;
    }

    if (i === 0) {
        return -1;
    }

    let j = digits.length - 1;
    while (digits[j] >= digits[i - 1]) {
        j--;
    }

    [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];

    j = digits.length - 1;
    while (i < j) {
        [digits[i], digits[j]] = [digits[j], digits[i]];
        i++;
        j--;
    }

    return parseInt(digits.join(''));
}