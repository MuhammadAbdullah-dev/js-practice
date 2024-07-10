/*
There are two catagories of datatypes
1. Primitive
2. Non primitive
*/

/*
Primitive ki 7 types hoti h
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt
Null ki return type bhi object hoti h
*/

let name = "Abdullah"
let number = 5
let isUserLoggedIn = true
let bigNumber = 102030405060n
let symbolExample = Symbol('123')
let nullExample = null
let undefinedExample = undefined

console.log(typeof(name),typeof(number),typeof(isUserLoggedIn),typeof(bigNumber),typeof(symbolExample));

/*
Non Primitive datatypes
Non primitve ma Arrays, Objects, Functions hoty h
Non primitive ma tamam types ki return type object hoti h jo khud basically aik function hi h
aur function ki return type object function hoti h
*/


const userDetails = {
    firstName : "Muhammad",
    lastName: "Abdullah",
    age : 24,
    education: "BSCS"

}

let demoFunction = ()=>{
    console.log("Full name is " +userDetails.firstName+" "+userDetails.lastName)
}
console.log(typeof demoFunction)
