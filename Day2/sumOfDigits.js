const sumOfDigits = (num) => {
  let arr = Array.from(String(num), Number)
  console.log(arr);
  return arr.reduce((accum , curElem) => accum += curElem, 0)
  
}


console.log(sumOfDigits(1234));
console.log(sumOfDigits(5678));
console.log(sumOfDigits(7849));


