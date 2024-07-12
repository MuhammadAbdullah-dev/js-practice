let myArray = [20,10,30,50,100,200,15,60]

//foreach can be used to iterate over the elements of array
let allowed = ""
let notAllowed = ""
myArray.forEach(myFunction)

/*
 foreach aur bakio ma diff ye h ka forEach ma hamary pas kuch bhi return ni hota h ham apna
 action perform krty h ismy aur value kahi save krlety h
 */
function myFunction(value,index,array){
    if (value>18){
        allowed += value + ","
    }
    else
    notAllowed += value + ","

}
console.log(`${allowed} These peoples are allowed in the bar`)
console.log(`${notAllowed} Sorry you are less than 18 years of age`);

// Array map aik new array return krta h by performing action on each element of array
let number = [10,20,30,40,50]
let newNumber = number.map((x)=> x*2)
console.log(newNumber);

/*
 filter returns a new array of values that satisfies a certain conditon ye koi operation ni 
 perform krta but comparision krta h
 */
const price = [30,50,40,24,60]
const newPrices = price.filter(myFunction)
function myFunction(value){
    return value >= 30
}
console.log(newPrices);

/* reduce hamari array pr kuch operations perform krky aik single value return krta h
*/
const itemPrices = [30,80,70,50,10]
const initialPrice = 0
let total = itemPrices.reduce(
 (accomulator,current)=> accomulator+current,initialPrice,)
 console.log(total);

 // every method checks if all the values in a array satisfies specific condition

let marks = [50,55,80,90,20]
let isPassed = marks.every((value)=>value>= 50)
if (isPassed == true)
    console.log(`Congrats your son is passed in all subjects`);
else
console.log(`soory`);