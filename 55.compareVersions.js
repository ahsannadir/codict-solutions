/* Given a function that compares two software version numbers and returns the result of their comparison.
The function should return -1 if the first version is smaller, 0 if they are equal, and 1 if the first version is greater. */

function compareVersions(v1, v2) {
    const v1Array = v1.split('.');
    const v2Array = v2.split('.');

    const maxLength = Math.max(v1Array.length, v2Array.length);

    for (let i = 0; i < maxLength; i++) {
        const num1 = parseInt(v1Array[i]) || 0;
        const num2 = parseInt(v2Array[i]) || 0;

        if (num1 < num2) {
            return -1;
        } else if (num1 > num2) {
            return 1;
        }
    }

    return 0;
}