// Given an array of integers, return the indices of the two numbers such that they add up to a specific target.

function twoSum(nums, target) {
    let idx = [], len = nums.length;
    
    for (let i = 0; i < len; ++i) {
        if (nums[i] + nums[i + 1] == target) {
            idx.push(i);
            idx.push(i + 1);
        }
    }
    return idx;
}