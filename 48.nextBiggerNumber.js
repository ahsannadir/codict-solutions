/* Given a positive integer, returns the next bigger number that can be formed using the same digits.
Obs: If it is not possible to form a bigger number with the same digits, return -1. */

function nextBiggerNumber(number) {
    const digits = String(number).split('');
    let i = digits.length - 1;

    while (i > 0 && digits[i - 1] >= digits[i]) {
        i--;
    }

    if (i <= 0) {
        return -1;
    }

    let j = digits.length - 1;
    while (digits[j] <= digits[i - 1]) {
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