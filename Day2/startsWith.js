const startsWith = (str, substr) => {
  //return str.toLowerCase().startsWith(substr.toLowerCase());

  return str.toLowerCase().slice(0, substr.length) === substr.toLowerCase();
}



console.log(startsWith("Hello world", "hello"));
console.log(startsWith("Hello world", "World"));
