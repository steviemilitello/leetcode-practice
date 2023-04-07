/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 const addBinary = (a, b) => {
    // we need to declare a sum
    let sum = 0
    if(a.length < 53 && b.length < 53) {
        // we need to use parseInt at base 2 to return a binary
         sum = parseInt(a, 2) + parseInt(b, 2)
        // we need to use toString with a base 2 to show the sum of the binary numbers
        return sum.toString(2)
        // we need to account for the max integer
    } else {
        sum = BigInt("0b" + a) + BigInt("0b" + b)
        // we need to use toString with base 2 here as well
        return sum.toString(2)
    }
   
}