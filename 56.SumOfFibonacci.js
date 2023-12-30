/* Given a function that computes the n-th value in the Fibonacci sequence,
where each value in the sequence is the sum of the three previous values in the sequence.
The first three values in the sequence are 1,1,2. */

function sumFibonacci(n) {
    let fibo = [];

    if (n <= 0) {
        return 0;
    }

    fibo[0] = 0;
    fibo[1] = 1;

    let sum = fibo[0] + fibo[1];

    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        sum += fibo[i];

    }
    return sum;
}