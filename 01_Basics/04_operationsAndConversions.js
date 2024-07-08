/*
Hamary pas javascript ma different operation hoty h like +,-,*,/,**,%
wesy agr ham normally use kro to inka result as expected hi ayega
*/

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/3);
console.log(2**3);
console.log(2%3);
*/

// but what if we try to perform these operations with a string

let strOne = "abc"
let strTwo = "def"
let result = strOne + strTwo
console.log(result); //result will be abcdef

/* agr string aur number ko add kry to agr string first pr ajaye to puri statement string
bn jati h but agr string kahi center ma ya bad ma h to jb tk string sath add ni hga to normal
operation hoga
*/

console.log("1" + 1 + 1); //answer will be 111
console.log(1 + 1 + "1"); //answer will be 21
console.log(1+"1"); //answer will be 11
console.log(1 + "1" + 2) //answer will be 112
console.log("1" + 1 * 5); //answer will be 15 due to DMAS rule

// Agr ham kisi boolean sa pehly add lga de to wo usko convert krdyga number ma
console.log(+true);
console.log(+false);

/*
 prefix and postfix ma ye hota h agr ham postincrement krdy kisi number ko to wo jb us statement
 ko read krky next line pr jayega to increment hoga aur preincrement ma usi time hojayega
 */

 let i =5
 console.log(++i); //answer will be 6
 console.log(i++); //answer will be 6
 console.log(i); //answer will be 7 due to postincrement


