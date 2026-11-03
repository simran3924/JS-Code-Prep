const isValidateDate = (dateFormat) => {
    return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})$/.test(dateFormat);
}


console.log(isValidateDate("12/13/2023"));
console.log(isValidateDate("12/38/1893"));
console.log(isValidateDate("67/13/2023"));
console.log(isValidateDate("12/10/2023"));
