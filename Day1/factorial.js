const factorial  = (num) => {

    let fact = 1;
  for(let i = 1; i <= num; i++){
    //console.log(i);
    fact = fact * i;
  }
  return fact;
}



console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(6));