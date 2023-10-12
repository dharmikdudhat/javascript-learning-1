/* You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space. */

nums = [1, 2, 2, 3, 3, 4, 4];

var singleNonDuplicate = function (nums) {
  // for (i = 0;i< nums.length;i++){
  //     if (nums[i] != nums[i+1]  && nums[i] != nums[i-1]){
  //         return nums[i];
  //     }
  // }

  let x = 0;
  let y = nums.length - 1;
  while (x < y) {
    let mid = Math.floor((x + y) / 2);
    if (mid % 2 == 1) {
      mid--;
    }

    if (nums[mid] != nums[mid + 1]) {
      y = mid;
    } else {
      x = mid + 2;
    }
  }
  return nums[x];
};

console.log(singleNonDuplicate(nums));
