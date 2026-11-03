const removeDuplicates = (arr) => {
  let newArr = [...new Set(arr)]
  return newArr;
}




console.log(removeDuplicates([1,2,4,5,3,2,4]));
console.log(removeDuplicates([4,5,2,5,2,5,2]));
console.log(removeDuplicates([6,4,6,3,6,2,4]));
console.log(removeDuplicates([]));



