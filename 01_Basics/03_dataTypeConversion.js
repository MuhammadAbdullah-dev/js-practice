/* 
        Datatype conversion ye hti h jb hum kisi datatype ko kisi aur datatype ma convert kry
        like hum number ko string ma convert kry ya phr ham string ko number ma
        jab bhi ham kisi datatype ma convert krna chahty h to ham usko Capital ma likh dengy
*/

let age = true
let StringAge = String(age)
console.log(typeof StringAge);
console.log(StringAge);

/* 
Agr ham kisi number ma jb value ko convert krty h to waha complexities ati h
*/

/*
Agr string+number ko number ma convert krny ki koshish kryngy to NaN ayega
Agr null ko convert kryngy number ma to 0 answer ayega
Agr undefined ko convert kryngy to NaN ayega type number hi hgi
Agr NaN ko number ma kry to NaN hi ayega aur number type hogi
*/

let value = NaN
let numberValue = Number(value)
console.log(numberValue);
console.log(typeof numberValue);

/* 
Agr variable ma 0 ka ilawa koi bhi value hogi to true ayega
Agr empty string ka ilawa koi bhi string hogi to true ayega
Agr NaN ko kryngy to false ayesga
Agr null ko kryngy tb bhi false ayega
Agr undefined ko kryngy tb bhi false ayega

*/

let isOkay = undefined
let booleanIsOkay= Boolean(isOkay)
console.log(booleanIsOkay);

