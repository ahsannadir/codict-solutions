// Given a number, modify the isPrime function so it returns true if the number is prime, or false otherwise

function isPrime(n) {
    let check = 0;

    for (let i = 2; i < n / 2; ++i) {
        if (n % i == 0) {
            check += 1;
            break;
        }
    }

    if (check == 1) {
        return false;
    } else return true;
}
