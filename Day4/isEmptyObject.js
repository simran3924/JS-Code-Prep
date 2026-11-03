const isEmptyObject = (obj) => {
//   for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//         return `it's not empty`;
//     }
//   }
//   return `it's empty`;

return Object.keys(obj).length === 0;
}


console.log(isEmptyObject({name : "vinod"}));
console.log(isEmptyObject({}));
console.log(isEmptyObject({keyWithNull : null }));

