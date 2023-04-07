/**
 * @param {string} s
 * @return {number}
 */

// begin = 0
// end = 0
// substring = ab

const lengthOfLongestSubstring = (s) => {
    // define the beginning of the index to start at 0
        let max = 0
        let begin = 0
        // define an hashmap (object)
        let map = {}
        
        // first we need to iteration through the string
        for(let end = 0; end < s.length; end++) {
            // we can check whether a character has shown up in the string before or not
            // if end is not undefined, we have seen it before
            // located in a location that is great than or equal to the previous index
            if(map[s[end]] !== undefined && map [s[end]] >= begin) {
                // we can update the start to exclude the repeating character if true
                begin = map[s[end]] + 1
            }
            // we can keep track of what characters we have seen 
            map[s[end]] = end
            // updates the maxinum length of the string to remove the character
            max = Math.max(max, end - begin + 1)
        }
        
        return max
    }