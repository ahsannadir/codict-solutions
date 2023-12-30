// Given a number, make it negative

function turnToNegative(num) {
    if (num > 0) {
        return num - (num * 2);
    } else {
        return num;
    }
}