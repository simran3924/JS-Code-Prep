const validateMobileNo = (number) => {
    return/^[6~9][\d]{9}$/.test(number);
}


console.log(validateMobileNo("9847362711"));
