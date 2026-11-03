const findMin = (arr) => {
// arr = arr.sort((a,b) =>{
//     if(b > a) return -1;
// })

// return arr[0];

return Math.min(...arr);
}

console.log(findMin([5,10,4,3]));
console.log(findMin([-4,-7,-9,-3]));
