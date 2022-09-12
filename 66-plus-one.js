/**
 * @param {number[]} digits
 * @return {number[]}
 */
 const plusOne = (digits) => {
    // we need to work backwards incase we need to carry a number 
    // we will iterate backwards and decrement through the for loop
    for ( let i = digits.length - 1; i >=0; i--) {
        // if there is no carry operator in place 
        if (digits[i] <9) {
            digits[i] = digits[i] + 1 
            return digits
        // if our current digit is a 9
        } else {
            // we need to set it to a 0 and do a carry operator
            digits[i] = 0
        }
        
    }
    // edgecase for input of 99
    // we a 1 to the begin to get 100, and return the digits as is
    digits.unshift(1)
    return digits
}