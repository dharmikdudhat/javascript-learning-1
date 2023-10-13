/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

var twoSum = function (nums, target) {
    const numToIndex = new Map(); 

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

       
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }

        
        numToIndex.set(nums[i], i);
    }
};

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 12;
console.log(twoSum(nums,target));