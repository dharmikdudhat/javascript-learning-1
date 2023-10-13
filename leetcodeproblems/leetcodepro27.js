/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k. */
let nums = [1,1,2,3,4,5,4,5,6]; 
let val = 1;

let removeElement = function(nums, val) {
    let k ;
    for(i = 0;i < nums.length;i++){
        if (val == nums[i]){
            nums[i] = nums[i+1];
            k++;
        }
    };
    console.log(k);
    
};