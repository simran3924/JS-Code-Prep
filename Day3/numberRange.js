const numberRange = (a,b,arr = []) => {
  while(a <= b){
    //console.log(a);
    arr.push(a);
    a++;
    
  }
  return arr;
}

console.log(numberRange(0,6));
console.log(numberRange(0,8));

console.log(numberRange(0,3));

