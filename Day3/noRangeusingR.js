const numberRange = (a,b, arr = []) => {
  if(a <= b){
    arr.push(a);
    return numberRange(a+1, b, arr);
  }
  return arr;
}



console.log(numberRange(4,9));
