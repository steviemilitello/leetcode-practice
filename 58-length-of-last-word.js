/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLastWord = (s) => {
    // we need to count the number characters in the word
    let lastWordLength = 0
    // we need to keep track if we are before the first non empty character, to account for the seperation in the word 
    let beforeEmptyChar = true 
    // if the string is empty, we will return the length of the last word, which is 0
    if(s.length ===0) {
        return lastWordLength            
    }
    // we need to loop over the string, starting from the left, starting at the last character, even if empty
    for (let i = s.length - 1; i >= 0; i--) {
    // if the character we are on doesn't equal an empty string, 
    if (s.charAt(i) !== ' ') {
    // we increment our last word length count 
      lastWordLength++
    // and change the before empty character variable to false, since we are no longer before it
      beforeEmptyChar = false
    // if we are on an empty string, we need to check if we are not before the first empty character, we end the loop
    } else if (!beforeEmptyChar) {
      break
    }
  }

  return lastWordLength
}