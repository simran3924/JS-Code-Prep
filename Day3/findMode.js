const findMode = (arr) => {

let count = {};
let maxNum = 0;
let mode;

for(let element of arr){
    count[element] = (count[element] || 0 ) + 1;
    if(count[element] > maxNum){
        maxNum = count[element];
        mode = element;
    }
  }
   return mode;
}


console.log(findMode([1,2,3,4,4,4,4,2,4,4,]));
