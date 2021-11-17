
function formatShorted (number) {
    if (number / 1000000000 >= 1){
        if(number%1000000000 == 0) {
            newNum = String(number/1000000000) + 'B';
        }else{
            newNum = String((number/1000000000).toFixed(2)) + 'B';
        }
    }else if ( number / 1000000 >=1 ) 
    {
        if(number%1000000 == 0){
            newNum = String(number/1000000) + 'M';
        }else {
            newNum = String((number/1000000).toFixed(2)) + 'M';   
        }
    } else if (number / 1000 >= 1) 
    {
        if(number%1000 == 0){
            newNum = String(number/1000) + 'K';
        }else{
            newNum = String((number/1000).toFixed(2)) + 'K';
        }
    }
    return newNum;
}



console.log(1234000000, formatShorted(1230000000))
console.log(1000000, formatShorted(1000000))
console.log(2000, formatShorted(2000))

