let deleteExample = ["A","B","C"]
delete deleteExample[1]
console.log(`So we can see that deleted elements cause the empty space`, deleteExample);

//concat can be used to join 2 or more arrays or adding a string
let concatOne = [1,2,3]
let concatTwo = [4,5,6]
let concatThree = [7,8,9]
let concatedArray = concatOne.concat(concatTwo,concatThree,"10")
console.log(`After concatination the array has become ${concatedArray}`);

//copyWithIn hamary pas array ka elements ko replace krny ka liye use hota 

let copyArray = [1,2,3,4,5,6]
copyArray.copyWithin(3,0)
console.log(`After replacing elements our array is now ${copyArray}`);

//splice can also be used to add an element to the array 
let spliceAdd = [1,2,3,4,6]
spliceAdd.splice(4,0,5)
console.log(`After adding via splice the array has become ${spliceAdd}`);

//toSpliced is same as splice but it returns a new array instead of modifying original array

let newSpliceArray = spliceAdd.toSpliced(0,2,"Hello")
console.log(newSpliceArray)

//indexOf kisi bhi element ka index btata h
let searchArray = ["Abdullah","Hammad","Ali","Zaib","Hammad"]
let position =  searchArray.indexOf("Ali")
console.log(`Ali is at position ${position}`);

//lastIndexOf same indexOf ki trha hi h but ye last occurance btata h
console.log(searchArray.lastIndexOf("Hammad",4));

/* find ma ham aik function pass krty h aur jo bhi value pehly usko pass krly wo return
hojati h simple find ma value return hoti h findIndex ma index return hota h*/
let firstOccurance = searchArray.find(myFunction)
function myFunction(value,index,array){
    return value == "Hammad"
}
console.log(`The name in the function required was ${firstOccurance}`);
//istrha sa bhi find ko use kia jaskta h
console.log(searchArray.findIndex(x=>x=="Abdullah"));
