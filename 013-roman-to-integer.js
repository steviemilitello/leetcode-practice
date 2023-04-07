/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // we can create a map to map every roman numeral to an integer 
    let romanToInt = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100, 
        D: 500, 
        M: 1000
    }
    // we need a way to keep track of the total
    let total = 0
    // we need to loop over every character in your roman numeral
    for (let i = 0; i < s.length; i++) {
        // we need to keep track of the current integer and next integer
        // we need to look at the current integer we are on and give us the integer
        let currentInt = romanToInt[s.charAt(i)]
        // we need to get the next integer after that
        let nextInt = romanToInt[s.charAt(i +1)]
        // if there is a next integer, we do the steps below
        if (nextInt) {
        // if our current integer is greater than equal to our next integer, if it is, we can add the current integer to total
            if (currentInt >= nextInt) {
                total += currentInt
            // otherwise we minus the next integer from current integer
            // then we increase the index by one, since both have been taken into account
            // when the for loop starts, it will increase by one, since both have current and nextint have been taken into account
            } else {
                total += (nextInt - currentInt)
                i++
            }
        // if there is no next integer, we add current to the total
        } else {
            total += currentInt
        }
    }
    return total
}