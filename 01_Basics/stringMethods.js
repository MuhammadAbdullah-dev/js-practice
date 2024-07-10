const str = `I am a String`
console.log(`charAt operator return the chract at give index ${str.charAt(5)}`);

//length returns the length of string
const length = str.length
console.log(`Length of String is ${length}`)

//CharCodeAt() return the chracter code at given index

const charCode = str.charCodeAt(5)
console.log(`Char code of ${str.charAt(5)} is ${charCode}`);

// toUpperCase sa kisi string ko capital krskty h
let upperCase = str.toLocaleUpperCase()
console.log(`Upper case string is ${upperCase}`);

//substring hamain aik new string return krta h
let substring = str.substring(0,5)
console.log(`new substring is ${substring}`);

//substr same work krta h but ismy ham start aur length dety h
let substr = str.substr(0,10)
console.log(`now new string is ${substr}`);

//slice also works same as substring but negative value bhi accept krta h
let slice = str.slice(-13,3)
console.log(slice)

//split returns an array based on separator
let split = str.split("a",2)
console.log(split);

//replace will replace the value with new value
let replacedString = str.replace('String',"Abdullah")
console.log(replacedString);