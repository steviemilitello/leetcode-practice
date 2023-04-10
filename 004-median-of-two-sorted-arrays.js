/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 // if we have an odd amount of numbers in the array, the median is the middle 
// if we have an even amount of numbers, the median is the average of the two middle numbers
const findMedianSortedArrays = (nums1 = [], nums2 = []) => {
    // two pointers i1 and i2
    let i1 = 0
    let i2 = 0
    // we need to get the length of both arrays
    const len1 = nums1.length
    const len2 = nums2.length
    // total length
    const len = len1 + len2
    // if total length is 0, return null, no possible solution
    if(len === 0) {
        return null 
    }
    // merged array, where we will copy the numbers to
    const merged = []
    // we need to iterate over the arrays using a while loop
    while(i1<len1 && i2<len2){
        // if the element is nums1 is greater than or equal to the element in nums2, push to first one into the new array
        // we increment after pushing into the new array
        if(nums1[i1] <= nums2[i2]){
            merged.push(nums1[i1++])
        // otherwise push the second element
        } else {
            merged.push(nums2[i2++])
        }
    }
    // if the array still has elements left, merge the remaining elements
    while(i1 < len1) {
        merged.push(nums1[i1++])
    }
    // and the same for the second array
    while(i2 < len2) {
        merged.push(nums2[i2++])
    }
    // we need to find if the median is odd or even
    // if there is a remainder, it is odd
    const isOdd = len%2
    // if it's odd, we find the middle value and return it 
    // other get the average of the two middle values
    if(isOdd){
        return merged[(len -1)/2]
    } else {
        return (merged[len/2] + merged[len/2 - 1])/2
    }
}