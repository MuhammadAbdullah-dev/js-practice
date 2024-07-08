/* There are different types of variables in javaScript
Constant values sirf const keyword ka sath declare ki jaskti h
Normal values ko ham let and var ka through declare krwa skty h
*/

/*
 Const ka sath declare kia hua variable ki value change ni ki jaskti h
 const variable ko initilize aur declare same time pr krna must h
 */

const userId = 10

// userId = 20 // ye error dega because const can not be changes

/* 
let aur var normal values ka liye use krty h jinko ham bad ma change krna chahy but var
keyword ab use ni kia jata because of block scope and functional scope issues 
*/

let userName = "Muhammad Abdullah"

let userPassword = "abd1234"

var userAge = 24

var userCity = "Sargodha"

// Agr koi variable without let,var keyword ka declare krty h wo phr bhi var type ka hoga
userCountry = "Pakistan"

/*
Agr ham koi aisi state ya value lena chahty h jo abi hamy pta ni h to ham variable ko sirf 
initialize krwayengy and uski output undefined ayegi
*/
let userBalance;

console.table([userId,userName,userPassword,userAge,userCity,userCountry,userBalance])