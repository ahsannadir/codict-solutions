// Given a positive integer, Modify the divisors function so it returns a list with all the divisors of that integer

function divisors(n) {
    let arr = [], j = 0;

    for (let i = 0; i <= n; ++i) {
        if (n % i == 0) {
            arr[j] = i;
            j += 1;
        }
    }
    return arr;
}