/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        nums[i] = nums[i] * nums[i]; 
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (nums[j] > nums[j+1]) {
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp; 
            }
        }
    }
    return nums;
};
