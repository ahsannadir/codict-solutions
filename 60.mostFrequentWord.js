/* Given a function that takes in a string and returns the most frequent word.
If there are multiple words with the same frequency, return any of them.
Obs: Ignore punctuation and capitalization.*/

function mostFrequentWord(str) {
    const words = str.toLowerCase().match(/\b\w+\b/g) || [];
    const wordCount = new Map();

    for (const word of words) {
        const cleanedWord = word.replace(/[^a-z]/g, '');
        wordCount.set(cleanedWord, (wordCount.get(cleanedWord) || 0) + 1);
    }

    let mostFrequent = '';
    let maxCount = 0;

    for (const [word, count] of wordCount) {
        if (count > maxCount) {
            mostFrequent = word;
            maxCount = count;
        }
    }

    return mostFrequent;
}