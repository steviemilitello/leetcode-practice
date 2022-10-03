/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const searchInsert = (nums, target) => {
    // first we need to iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // we need to compare each index to target
        // create a condition to see if the nums is greater than or equal to the target
    // if it is true, we will return the output of the index of the array
        if (nums[i] >= target) {
            return i
        }
    }
    // we will return the length of the nums to get to the end of the array
    return nums.length
    
}