/* 
Arrays hamary pas aisa object hota h jis ma ham multiple data ko single variable ma store
krwa skty h. Array copy operation ma hamain shell copy milti h jiska mtlb ye h ka hamain
refrence milta h original value ka na ka value milti h like heap
*/

const myArr = [10,20,30,40,50]

console.log(myArr[0]);

/* 
Hamary pas array ma different methods hoty h
.length sa ham length find krskty h array ki
.push method ko use krky array ma koi values push krskty h
*/
let arrayLength = myArr.length
console.log(`Length of myArr is: `,arrayLength);

// is sa original array ka content ma bhi change ajayega
let newArr = myArr
newArr.push(100)
console.log(myArr);

//To remove the last value from array
myArr.pop()
console.log(myArr);

//If we want to add an element at top of array we can use unshift
myArr.unshift(0)
console.log(`After unshift my array is now ${myArr}`);

//Shift can be used to remove element from front of Array
myArr.shift()
console.log(`After shift my array is now ${myArr}`);

//includes return if an element is a part of the array and return false if none
console.log(myArr.includes(300));

//indexof return the index of a certain value and -1 if there is none
console.log(myArr.indexOf(400));

//.join() convert krdeta h array ko string ma 
const arrToString = myArr.join()
console.log(`Array to string is ${arrToString}`);

/*
slice cut out a part of string from string upto the end but end is not included
but original array remains same
*/
let slicedArray = myArr.slice(1,4)
console.log(`Sliced Array is ${slicedArray} and orignal array is ${myArr}`);

/*
splice cut out a part of string from starting to end and end is included and also
splice the portion from original array
*/
let splicedArray = myArr.splice(1,4)
console.log(`Spliced Array is ${splicedArray} and original array is now ${myArr}`);