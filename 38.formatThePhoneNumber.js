// Given a string, with 10 numbers (from 0 to 9), modify the formatO function so it returns another string formatted like a phone number.

function format(str) {
    let arr = str.split(""), phone = "";

    phone = "(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + " " + arr[6] + arr[7] + arr[8] + arr[9]

    return phone
}