/*
 JavaScript ma multiple versions h and new versions kafi standards ko follow krty h
 but ham ab bhi javaScript oldway me likh skty h if we want to use javaScript according
 to latest standards then "use strict" istamal kryngy
 */
"use strict";

// alert(3+3) //we are working on nodeJs not on browser so alert error dega

/*
Code readability should be high mtlb ka hamain code istrha likhna h ka wo har kisi ka liye
readable ho
e.g  console.log("Hi"); console.log("World") this is a bad practice
*/

/* 
Pehly tamam browsers apny standards thy jis ka mutabiq javascript ko handle krty thy which 
was not a good way then sb ni ikathy hokr aik orgnaization bnai jo javasscript ka standards
likhygi ka ye input ata h to kya krna h like that 
*/

/*
 Now let's talk about dataTypes
 Primitive Datatypes
 */

// string = "" koi bhi agr value double qoutes ya single ma hogi to string type hogi
let name = "Abdullah"

// number = 2 to power 53 means maximum ham itni value likh skty h
let number = 5

//bigInt if the number is very big but it is rarely used

//Boolean data type has two values true or false
let bolTest = true

// null = standalone value agr ham chahty h undefined na aye but null rhy
let user = null

//undefined = agr koi bhi varaible ki value define ni ki
let undefineTest;

// symbol = ye zyada tar react ma ya figma ma use hota h jo uniqueness ko represent krta h


//Non premitive
//object

// null ka type object ata h aur kafi log isko javaScript ka error kehty h
console.log(typeof null);

// undefined ka type undefined hi ata h
console.log(typeof undefined);