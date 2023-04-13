/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// we need something to can display the direction in zigzag format
// in this case, we are reading it up and down, so true for down and up for false 

// we need to separate the array into 3 different areas
// the different areas can be rows as string in the same array

// we need to join the array to form a string
const convert = (s, numRows) => {
    // if number of rows is equal to 1, there will only be 1 string
    // if the length of the string is less than number of rows, than we can't create the rows
    if(numRows === 1 || s.length < numRows) return s
    // we need something to can display the direction in zigzag format
    // in this case, we are reading it up and down, so true for down and up for false 
    let direction = false
    // we need a count variable = 0
    // this is going to determine the direction when it needs to be changed
    let count = 0
    // we need an array store the values 
    // we populate it will numRows and fill each of those with an empty string
    let arr = new Array(numRows).fill("")
    // iterate through the string
    for(let i = 0; i<s.length; i++){
    // get the current value
        let curr = s[i]
        // add current to the string at count
        arr[count] += curr
    // change direction if meets either condition
        if(count === 0 || count >= numRows -1) direction = !direction
    // check if direction is true or false
    // if true increment, if false, decrement
    direction ? count++ : count--
    }

    return arr.join("")
}