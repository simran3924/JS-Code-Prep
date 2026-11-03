const truncateString = (str, count) => {
//     if(count <= 0){
//         return str;
//     }else if (str.length > count) {
//     return str.slice(0, count).concat("...");
//  }

return count <= 0 ? str: str.slice(0, count).concat("...");

}



console.log(truncateString("My name is Simran Singh" ,8));
