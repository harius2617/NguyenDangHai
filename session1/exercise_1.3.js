function countWords(string) {
    let len = string.length
    let count_w = 1
    for(let i = 0; i < len; i++){
        if(string[i]=== string[i].toUpperCase()){
            count_w += 1;
        }
    }
    return count_w;
}


console.log('oneTwoThree', countWords('oneTwoThree'))