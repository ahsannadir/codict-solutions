// Modify removeSpaces function so it takes a string and returns it without spaces.

function removeSpaces(str) {
    let words = str.split(" ").length;

    for (let i = 0; i < words; ++i) {
        str = str.replace(" ", "");
    }

    return str;
}