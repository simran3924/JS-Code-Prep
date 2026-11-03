const findlongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }

    words = str.split(" ");
    // words = words.sort((a,b) => b.length - a.length );
    // console.log(words);
    // return words[0];

    return words.reduce(
        (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
    )
};

console.log(
    findlongestWord("Watch Thapa Technical javascriptakukmys course on youtube")
);

