// const generateBarChart = (arr) => {
//     const newArr = arr.map((curElem, index) => {
//         let star = "";
//         let number = 0;
//         while(number < curElem) {
//             star = star + '*';
//             number++;
//         }
//      return ` ${index + 1}: ${star}`;;
//     })
//     return newArr.join("\n");
// }

// 2nd way of sol.
const generateBarChart = (arr) => {
    return arr.map((currElem, index) => {
        return `${index + 1}: ${"*".repeat(currElem)}`;
    })
    .join("\n");
}




console.log(generateBarChart([5,7,3,6,7,4]));
