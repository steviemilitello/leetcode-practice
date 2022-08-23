/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    // first we want to define tje prefix variable
    let prefix = ""
    // if there is no common prefix, return the prefix, aka an empty string
    if (strs.length === 0) return prefix
    // after that we need to iterate through the characters which will give us the character and the index
    for (let i = 0; i < strs[0].length; i++) {
        const character = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            // if they are not equal, return prefix
            if (strs[j][i] !== character) return prefix
        }
        // our prefix will equal to our prefix plus your character, then will return our prefix once they do not match anymore
        prefix = prefix + character
    }
    return prefix
    
}