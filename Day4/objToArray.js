const obj = {
name : "Simran Singh",
age: 30,
city:"Pune",
}


let entries = Object.entries(obj);
console.log(entries);
console.log(entries.flat());


let newObj = Object.fromEntries(entries);
console.log(newObj);
