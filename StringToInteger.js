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
 var myAtoi = function(s) {
    if(s.length===0 || s.length>200) return 0;
    let  sign ='', minus = 1, counter = 0, number =[], tmp ='';
    s = s.trim("");
    
    while(counter < s.length){
        tmp = s.charAt(counter);
       //have sign and not  number  ignore
        if(sign!==''&&sign!=tmp&& !isNumber(tmp)) break;
        //no sign and not number ignore
        else if(!isSign(tmp)&&!isNumber(tmp)) break;
        //have number and  then  sign
        else if(number.length >0 && isSign(tmp)) break;
        //have  sign and then sign
        else if(sign!==""&&isSign(tmp)) break;
        if(tmp =='-'||tmp =='+') sign = tmp;
        if(tmp=='-') minus = -1;
        if(tmp!=" " && isNumber(tmp)){
            number.push(tmp);
        }
        counter++;
    }
   
    let result = minus *Number(number.join(""));
    const INT_MAX = Math.pow(2,31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    if(result >INT_MAX) result = INT_MAX;
    if(result < INT_MIN) result = INT_MIN;
    return result;
};


const isNumber = n => /\d+/.test(n);
const isSign =  n=>/[-+]/.test(n);


///Testing-----------------
console.log(myAtoi(s));
console.log(myAtoi(s1));
 console.log(myAtoi(s2));
console.log(myAtoi(s3));
console.log(myAtoi(s4));
 console.log(myAtoi(s5));
 console.log(myAtoi(s6));
 console.log(myAtoi(s7));
 console.log(myAtoi(s8));