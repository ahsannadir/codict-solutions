/* Write a function that takes in a string of digits representing a number and returns a new string of digits representing the next number.
The input string may have leading zeros.*/

function stringIncrementer(str) {
    const leadingZeros = str.match(/^0*/)[0];
    const numberStr = str.replace(/^0*/, '');

    if (numberStr === "") {
        return leadingZeros + "1";
    }

    const incrementedNumber = (parseInt(numberStr, 10) + 1).toString();
    const result = leadingZeros + "0".repeat(Math.max(0, numberStr.length - incrementedNumber.length)) + incrementedNumber;

    return result;
}