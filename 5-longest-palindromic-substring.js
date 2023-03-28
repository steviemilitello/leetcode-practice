/**
 * @param {string} s
 * @return {string}
 */

// palindromes mirror around the center, 2 cases 
// 1. even amount of chars like abba = center is bb, double char
// 2. odd amount of chars like aba = center is b, single char

const longestPalindrome = (s) => {
    // first we need to go over edge cases
    // if s is less than 1 or null, return an empty string
    if(s.length < 1 || s === null) return ''

     let longest = ''

     // we need to iterate through the string 
     for(let i = 0; i <s.length; i++){
         // the center is the same character, i and i
         let oddPalindrome = expandFromCenter(s, i, i)
         // the center is two characters, i-1 and i are next to each other
         let evenPalindrome = expandFromCenter(s,i-1, i)
         // we need to compare palindromes to see which is longer
         if(oddPalindrome.length > longest.length) {
             longest = oddPalindrome
         }
         if(evenPalindrome.length > longest.length) {
             longest = evenPalindrome
         }

     }
     return longest
}

// we need a function to expand from the center until it no longer recognizes a palindrome
// we keep expanding until null or until 2 chars are not the same
const expandFromCenter = (s, left, right) => {
    let i = 0
    // as long as we don't hit null, and left and right side are the same, keep expanding 
    while(s[left - i] && s[left - i] === s[right + i]){
        i++;
    }
    i--;

    return s.slice(left - i, right + i + 1)
}