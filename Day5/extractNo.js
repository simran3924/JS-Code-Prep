const extractNo = (str) => {
    let regex  = /\d+/g;
    return str.match(regex);
}


console.log(extractNo("fheufhei123"));
console.log(extractNo("fhe65hei123"));
console.log(extractNo("fheu, 44, fhei123"));
