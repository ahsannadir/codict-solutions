function translate(str) {
    let str2 = "", arr = str.split(" "), len = arr.length;

    for (let i = 0; i < len - 1; ++i) {
        str2 += arr[i] + " P";
    }

    str2 += arr[len - 1];
    str2 = "P" + str2;
    return s2;
}