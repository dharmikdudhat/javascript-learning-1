/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k. */
let nums = [3,2,2,3]; 
let val = 3;

let removeElement = function(nums, val) {
    let newne = nums;
    for(i = 0;i < newne.length;i++){
        if (val != newne[i]){
            nums.splice(i,1);
            nums.push(newne[i]);
        }else{
            nums.splice(i,1);
        }
    };
    return nums;
    
};

console.log(removeElement(nums,val));