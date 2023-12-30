/* Given a function that takes in an amount of money and a list of coin denominations, and returns the minimum number of coins needed to make the amount.
If it is not possible to make the amount with the given denominations, the function should return -1. */

function coinChange(amount, coins) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}