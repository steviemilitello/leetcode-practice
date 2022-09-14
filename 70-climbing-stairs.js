/**
 * @param {number} n
 * @return {number}
 */
 const climbStairs = (n) => {
    // we need to set our base cases
    if (n == 1 || n == 0) return 1
    // after that, we need to declare the number of steps
    let one = 1
    let two = 2 
    // we start at the third iteration because the first and second are already defined
    for (let i = 3; i <= n; i++) {
        // after that, we use the for loop to calculate the number of combinations possible, using 1 or 2 steps
        let total = one + two
        one = two
        two = total
    }
    return two
}