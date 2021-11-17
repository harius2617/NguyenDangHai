function NumtToString(number) {
    let arrNumber = String(number).split("");
    let len = arrNumber.length;
    if (Number.isInteger(number)){
        for (let i = len - 3; i > 0; i -= 3) {
            arrNumber.splice(i, 0, ',');
        }
    }else {
        let i = arrNumber.lastIndexOf('.');
        console.log(i);
        for(let a = i - len - 3 ; a > -len -1; a -= 4){
            arrNumber.splice(a, 0, ',');
        }
    }
    return arrNumber.join('');
}
let number = Number(prompt("Moi nhap so"));
console.log(number, '->' ,NumtToString(number));
