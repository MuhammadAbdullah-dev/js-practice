/* 
    Dono tariko sa number ko declare kia jaskta h 
    but in second one it make sure that the value is a number
*/
let myNum = 5003.65
let anotherNum = new Number(5)
console.log(myNum);
console.log(anotherNum);

/*
There are some different methods for a number like stringd
We can convert a number to string using toString
We can also use toFixed(Value) to fix precision value for a number
we can use toPrecision(Value) to precise a value based on given value
we can also use toLocaleString to convert a number in more readable format with local standards
We can use Math.round method to roundoff a given number
Agr ham chahty h value hamesha round down ho to Math.floor use krskty h
Aur agr ham chahty h value hamesha roundUp ho to Math.ceil method use krskty h
*/
console.log(myNum.toFixed(3));
console.log(myNum.toPrecision(4));
console.log(myNum.toLocaleString('EN-US'));
console.log(Math.round(myNum));
console.log("Floor value of myNum will be:", Math.floor(myNum));
console.log("Ceil value of myNum will be:",Math.ceil(myNum));

/*
We have many more methods in Math library like 
Math.Sqrt(value)
Math.Abs(value) change a negative value into positive
Math.pow(value) can be used to find the power of a numebr
*/

console.log("Square root of 4 is", Math.sqrt(4));