/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = (x) => {
    // if x is less than 0, we will have to return false 
    // we can use this to eliminate anything below 0
    if(x < 0) return false
    // create a variable reverse
    let reverse = 0
        // we need to create a for loop to iterate through the num
        // we need to increment and divide i by 10 to access the positions in num
        // every time we iterate, we will create a decibel and extract the part above decibel
        // for example, 121 because 12.1, and we will extract 1
        // the remainder will be multiplied by 10, then the next decibel will be extracted
        for(let i=x; i>=1; i = Math.floor(i/10)) reverse = reverse*10 + i%10
        // then we need to see if reverse is equal to x
        return reverse === x
    
}