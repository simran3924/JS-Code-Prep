const numbers = [1,2,2,3,1,4,2];
let counts = {};

for(let element of numbers) {
    counts[element] = (counts[element] || 0) + 1;
}

console.log(counts);
