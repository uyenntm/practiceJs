s = "abcabcbb";
//s = "bbbbb"
//s = "pwwkew"
//s="aab";
//s ="dvdf";
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max=0, counter = 0,l=0;
    let set= new Set();

    while(counter<s.length){
        if(!set.has(s[counter])){
            set.add(s[counter]);
            counter ++;
            max = Math.max(max, set.size);
        }
        else{
            set.delete(s[l++]);// remove list until no more duplicate
        }
      }
    return max;
};

console.log(lengthOfLongestSubstring(s));