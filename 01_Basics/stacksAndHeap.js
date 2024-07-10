/*
Basically there are two types of memories
1. Stack
2. Heap

All primitive types are stored in stack aur jb ham stack sa koi variable get krty h to hamain
uski copy return hoti h original value ka refrence ni means agr koi change kiya bhi jaye to wo
copy ma change hoga orignal value same rhygi

Non primitive datatypes Heap ma store hoti h aur jb bhi heap sa koi cheez get ki jati h to hamain
refrence milta h orignal value ka jiska matlb agr koi bhi change kiya jata h to wo orignal value
ko bhi change krdyga
*/

let varOne = 10
let varTwo = varOne
console.log(varTwo);
varTwo = 15
// varOne ab bhi same rhyga
console.log(varOne);

let userDetails = {
    name: "Abdullah",
    age: 24,
}
let userCopy = userDetails
userDetails.age = 26 // is ki wja sa orignal value ma bhi change ho jayega
console.log(userDetails.age);



