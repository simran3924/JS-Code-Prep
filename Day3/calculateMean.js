const calculateMean = (arr) => {
 if(arr.length === 0){
   return 0;
  }
 let mean  = 0;
 let sum = arr.reduce((accum, curElem) => accum + curElem,  0);
    mean = sum / arr.length;
   return mean;
}


console.log(calculateMean([1,3,5,7,8]));
console.log(calculateMean([2,4,6,4,3]));

console.log(calculateMean([-6,6,6,5,4]));

console.log(calculateMean([]));

