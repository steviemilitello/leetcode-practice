/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = (s) => {
    // first we need to create an object to reference the brackets
    let bracket = {
        '(':')',
        '[':']',
        '{':'}',
    }

    // we need to make sure the closing bracket is present 
    // we need to a baseline for the brackets
    let bracketArray = [];
    // we need to iterate through the bracket object
    for(let char of s){
        // if one of the bracket is one of the keys in the bracket object
        if(bracket[char]){
            // if true we push the bracket into the bracketArray
            bracketArray.push(bracket[char])
        } else {
            // if the bracket does not equal the bracket in the array, return false
            if(bracketArray.pop() !== char) return false
        }
    
    }
    return(!bracketArray.length)
}