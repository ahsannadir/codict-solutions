/* Given a function that takes in a list of intervals, where each interval is represented as a pair of integers [start, end],
and returns the sum of the lengths of all the intervals.*/

function sumOfIntervals(itv) {
    let totalLength = 0;
    let mergedIntervals = [];

    itv.sort((a, b) => a[0] - b[0]);

    for (const interval of itv) {
        if (!mergedIntervals.length || interval[0] > mergedIntervals[mergedIntervals.length - 1][1]) {
            mergedIntervals.push(interval);
        } else {
            mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
                mergedIntervals[mergedIntervals.length - 1][1],
                interval[1]
            );
        }
    }

    for (const interval of mergedIntervals) {
        totalLength += interval[1] - interval[0];
    }

    return totalLength;
}