/* Given a function that takes in two strings: a ransom note and a magazine.
The function should return a boolean indicating whether it is possible to write the ransom note using the letters from the magazine.
You may assume that both the ransom note and the magazine contain only lowercase letters.*/

function ransomNote(rNote, magazine) {
    const ransomMap = new Map();

    for (const char of magazine) {
        ransomMap.set(char, (ransomMap.get(char) || 0) + 1);
    }

    for (const char of rNote) {
        if (!ransomMap.has(char) || ransomMap.get(char) === 0) {
            return false;
        }
        ransomMap.set(char, ransomMap.get(char) - 1);
    }

    return true;
}