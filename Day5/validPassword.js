function validPassword(password){
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/
    return regex.test(password);
}


console.log(validPassword("Pass46@"));
console.log(validPassword("Pass46!"));
console.log(validPassword("Pass_46@"));
