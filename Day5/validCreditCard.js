const validCreditCard = (str) => {
     str = str.replace(/\D/g, "");

    // reverse
    let revNum = "";
    for(let i = str.length - 1; i>=0; i--){
     revNum = revNum + str[i];
    }

    //console.log(revNum);

    let doubleNum = revNum.split("").map((curDigit, index) => {
        if(index%2 !== 0){
            curDigit = curDigit * 2;

            if(curDigit > 9){
                curDigit = curDigit - 9;
            } else {
                curDigit = curDigit;
            }
        }
        return curDigit;
        
    }).reduce((accum, curElem) => accum + Number(curElem), 0);

    console.log(doubleNum);

    return doubleNum % 10 === 0;
    
    
}


console.log(validCreditCard("4574 6456 8685 6547"));
