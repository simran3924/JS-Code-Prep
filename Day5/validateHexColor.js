const validateHexColor = (hexColor) => {
    return /^#[A-Fa-f\d]{3}|[A-Fa-f\d]{6}$/.test(hexColor);
}


console.log(validateHexColor("#a6c643"));
console.log(validateHexColor("#5b3643"));
console.log(validateHexColor("#k43"));
