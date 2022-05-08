
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
     //split=>filter not empty=>revese-> join
   return s.split(" ").filter(word=> word!="").reverse().join(" ");
};
s = "  hello world  ";

console.log(reverseWords(s));