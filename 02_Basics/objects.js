/* Objects in javaScript are one of the most important topic. Objects can contain multiple
value but with key value pair which makes it different than array because in array there is no
key value pair
*/

let userDetails = {
    name: "Abdullah",
    age: 24,
    department: "CS",
    "gender":"male"
}
// Theere are two methods to access objects by using .notation or []notation
//Bracket notation is used in specific times sonetimes during special requirements
console.log(userDetails.name);
console.log(userDetails.age);
console.log(userDetails.gender);
console.log(userDetails["gender"])

// To use a symbol in a array we have to first declare the symbol and then use variable name
// in brackets in object and we have to use bracket notation to access it

let mySym = Symbol("userID")
let newObject = {
    [mySym] : "8x321",
    name: 'Abc',
}
console.log(newObject[mySym]);

// Objects ma aik aur object ya function ya array bhi define ki jaskti h
let anotherObj = {
    myArr: [60,85,90,24,32],
    myFun: function(){
        let result = this.myArr.every((value)=>value>50)
        console.log(result);
    },
    semesterCgpa:{
        firstSemester:3.5,
        secondSemester:3.9
    }
}
console.log(anotherObj.semesterCgpa.firstSemester);

//ham multiple objects ko combine bhi krskty h jisky liye hamary pas spreadOperator h aur 
// assign method h

let obj1 = {1:'a',2:'b'}
let obj2 = {3:'c',4:'d'}
let obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

let spObj = {...obj1,...obj2}
console.log(spObj);

//Ham object ki keys aur values ko Object.keys aur Object.values use krky access krskty h
let objKeys = Object.keys(obj1)
let objValues = Object.values(obj2)
console.log(objKeys);
console.log(objValues);
//Objects ko array ma bhi convert kia jaskta h enteries ko use krty huwy
let arrayObj = Object.entries(obj1)
console.log(arrayObj instanceof Array);

//destructing means object ya array sa jo cheezain chaiye wo lelena

let deObj = {
    name:'Abdullah',
    age: 24,
    officeName:'TechnDev'
}
let {name} = deObj
console.log(name);