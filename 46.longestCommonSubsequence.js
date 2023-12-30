/* Given two strings, returns the longest common subsequence between them.
A subsequence is a sequence of characters that appear in the same relative order, but in this case it should be necessarily contiguous. */

function longCommonSub(str1, str2) {
    const dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
    let maxLen = 0, endIndex = 0;

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLen) {
                    maxLen = dp[i][j];
                    endIndex = i;
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }

    const lcs = str1.slice(endIndex - maxLen, endIndex);
    return lcs;
}