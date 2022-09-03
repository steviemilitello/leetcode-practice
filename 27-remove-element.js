/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 const removeElement = (nums, val) => {
    // if the nums array isn't true, return 0 to account for edge cases
    if(!nums) return 0
    // we need to iterate through every element of the nums array 
    for(let i = 0; i < nums.length; i++) {
        // if the number is equal to the value we are looking for
        if(nums[i] ===val) {
            // we need to splice if true 
            nums.splice(i, 1)
            // we will remove the element, and then reset the index
            i--
        }
        
    }
    return nums.length
}