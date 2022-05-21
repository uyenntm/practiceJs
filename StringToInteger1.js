import * as myAtoi from "./StringToInteger1";

s = "42"; //42
s1 = "   -42" //-42
s2 = "words and 987"; //0
s3= "-91283472332";//-2147483648
s4 ="+1";//1
s5 = "+-12";//0
s6 = "00000-42a1234"; //0
s7 =" ++1" //0
s8 = "  12    4";//12

//-------------Implementation-----------------
/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(input) {
    let sign =1, result  = 0,index = 0, n = input.length;
    let INT_MAX = Math.pow(2,31) - 1;
    let INT_MIN = -Math.pow(2, 31);

    
};



///Testing-----------------
console.log(myAtoi(s));
// console.log(myAtoi(s1));
//  console.log(myAtoi(s2));
// console.log(myAtoi(s3));
// console.log(myAtoi(s4));
//  console.log(myAtoi(s5));
//  console.log(myAtoi(s6));
//  console.log(myAtoi(s7));
//  console.log(myAtoi(s8));