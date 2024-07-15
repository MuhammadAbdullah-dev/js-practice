//Functions aisa multiple line of code hota h jisko ham jb chahy call krskty h


function sumOfNumbers(numberOne,numberTwo){
    if(!numberOne || !numberTwo){
        console.log('Not a numbers');
        return
    }
    var add = numberOne + numberTwo
    return `${add}`
}
let sum = sumOfNumbers(5,"a")
console.log(sum);

// ------------------------------------ARROW FUNCTION ------------------------------------
const myfunction = ()=>{
    let a =5 
    console.log(this.a);
}
myfunction()
//another way is by removing the curly braces so we don't need to use return keyword

let sumofNum = ()=> 5+10
console.log(sumofNum());

// final way if when returning objects than using ()
let objReturn = ()=>({name:'abc'})
console.log(objReturn());
