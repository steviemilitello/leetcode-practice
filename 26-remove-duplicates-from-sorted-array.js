/**
 * @param {number[]} nums
 * @return {number}
 */
 const removeDuplicates = (nums) => {
    // we must set the index counter to zero so track the numbers in the array
    let indexCounter = 0
    
    for (let i = 0; i < nums.length; i++) {
        // if the number in the index in the array is not equal to the previous index
        if(nums[i] != nums[i - 1]) {
        // we will increment the index counter
        nums[indexCounter] = nums[i]
        indexCounter++
        }
    }
    return indexCounter
}