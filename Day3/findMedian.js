const findMedian = (arr) => {

arr.sort((a,b) => a-b);
let  length = arr.length;
let mid = Math.floor(length/2);

if(length % 2 === 0){
    return (arr[mid] + arr[mid-1])/ 2;
} else {
    return arr[mid];
}
}


console.log(findMedian([2,4,5,6]));
console.log(findMedian([2,4,5,6,8]));
console.log(findMedian([]));


