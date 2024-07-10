
/*
To create a date in javascript we can call the Date object that we give us the current date
hamary pas ismy diff methods h like toDateString(),toLocaleString(),toTimeString(),getDay(),
getTime()
*/
let createdTime = new Date()
let orignalTime = Date.now()
console.log(createdTime);
console.log(createdTime.toDateString());
console.log(createdTime.toTimeString());
console.log(createdTime.getDate());
console.log(createdTime.getDay());

/* 
ham chahy to locale string ma jo date ya term use krrhy h usy customize bhi krskty h
*/
let customizedDate = createdTime.toLocaleDateString("default",{
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit",
    day:"2-digit",
})
console.log(customizedDate);