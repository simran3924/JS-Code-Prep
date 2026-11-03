const checkTraingleType = (a,b,c) => {
     if(a === b && b === c) return "equilateral"
     if(a === b || b === c || a === c) return "isosceles"
     return "scalene"

    
}



console.log(checkTraingleType(3,6,3));
console.log(checkTraingleType(3,4,3));
console.log(checkTraingleType(3,2,6));
