/* Write a function that takes a string and returns the string encoded using the ROT13 cipher.
The ROT13 cipher works by replacing each letter in the string with the letter that is 13 places down the alphabet.
If a character is not a letter, it should be returned unchanged.*/

function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function (char) {
        const charCode = char.charCodeAt(0);
        const offset = charCode <= 90 ? 65 : 97;
        return String.fromCharCode((charCode - offset + 13) % 26 + offset);
    });
}