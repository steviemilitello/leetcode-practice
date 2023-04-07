// inputs and expected outputs
// inputs are nums param which is an array of number integers
// other input is target, which is also a number 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// we are given an array, and in this array of numbers we find two that add up to the target
// each input must have one solution, and you may not use the same element twice
// for example, if the target was 4, we could not return [0, 0]

const twoSum = (nums, target) => {
    // we want to use an object here to store values 
    let numObject = {}
    // after that we have iterate through the array
    // as we iterate through every element in nums we are getting the index and num  
    for(let [index, num] of nums.entries()) {
            // if the num does not equal undefined (it exists) we can return the results
            if(numObject[num] !== undefined) return [numObject[num], index]
            numObject[target-num] = index
        
    }
}