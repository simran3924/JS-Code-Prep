const generateHash = (str) => {
    if(str.length > 280 || str.trim().length === 0) {
        return false;
    }

    str = str.split(" ");
   // console.log(str);
   str = str.map((curElem) => 
    curElem.replace(curElem[0], curElem[0].toUpperCase())
);
str = `#${str.join("")}`;
//console.log(str);
return str;
}



console.log(generateHash("my name is simran singh"));