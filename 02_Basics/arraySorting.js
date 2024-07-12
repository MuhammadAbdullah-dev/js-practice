let myArray = ["A","C","B","D","E","Z"]

//the easiest method to sort an array is using sort
myArray.sort()
console.log(`After sorting the array is now ${myArray}`);

//reverse can be used to reverse a string
myArray.reverse()
console.log(myArray);

//Abhi hamny sort aur reverse ko use krky is array ko descending ma sort krdia h

//toSorted is a safer method because ye new array return krta h
let toSortedArray = ["M","P","X","J"]
let newSortedArray = toSortedArray.toSorted()
console.log(`Ab new array hogyi h ${newSortedArray} and old array was ${toSortedArray}`);

/*
Numerical Sort ma .sort kam ni krta because ismy as a string sorting hoti h so we use
comparision for numerical sort and then use .sort()
*/

let number = [50,20,40,10,60]
let sortedViaComparision = number.toSorted(function(a,b){return a-b})

console.log(`Now sorted numbers are ${sortedViaComparision}`);
