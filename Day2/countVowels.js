const countVowels = (str) => {
 let vowels = ['a', 'e', 'i', 'o', 'u'];

 let arr = str.split('');

 let count = 0;
 for(let char of arr){
    if(vowels.includes(char.toLowerCase())){
        count++;
    }
 }
 return count;
}




console.log(countVowels("Hello World"));
console.log(countVowels("Simran Singh"));
console.log(countVowels("My name is Simran Singh"));
console.log(countVowels("Unique"));

