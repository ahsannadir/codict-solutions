// Given a string, Modify the hideEmail function so it returns all but the first, the "@" and the last characters into "*".

function hideEmail(email) {
    let arr = email.split("@"), len = arr[0].length, str1 = "";

    for (let i = 1; i < len; ++i) {
        str1 += "*"
    }

    str1 = arr[0][0] + str1

    return str1 + "@********m"
}