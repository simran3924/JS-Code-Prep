const validateEmail = (email) => {
   return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email);
}


console.log(validateEmail("john.doe@example.com"));
console.log(validateEmail("jguifc..43@dvd.com"));
