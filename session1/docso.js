//123455
//muoi hai van ba ngan bon tram nam muoi lam
//123405
//12 van ba ngan 4 tram linh 5
let dv = ['','mot','hai','ba','bon','nam','sau','bay','tam','chin']
let chuc = ['khong','muoi','hai muoi','ba muoi','bon muoi','nam muoi','sau muoi','bay muoi','tam muoi','chin muoi']
let tram = ['khong tram','mot tram','hai tram','ba tram','bon tram','nam tram','sau tram','bay tram','tam tram','chin tram']
let ngan = ['khong ngan','ngan','hai ngan','ba ngan','bon ngan','nam ngan','sau ngan','bay ngan','tam ngan','chin ngan']
let read = []
function readNumber(number) {
    let arrNumber = String(number).split('');
    let len = arrNumber.length;
    if (len >4){
        new_arrNum = arrNumber.slice(0,len-4);
        let len_new = new_arrNum.length;
        if(len_new == 2){
            read.push(chuc[new_arrNum[0]],dv[new_arrNum[1]],'van');
        }else if(len_new == 1){
            read.push(dv[new_arrNum[0]],'van');
        }
    }
    read.push(ngan[arrNumber[len-4]], tram[arrNumber[len-3]], chuc[arrNumber[len-2]], dv[arrNumber[len-1]]);
    if(read[read.length-1]== 'nam'){
        read[read.length-1] = 'lam';
    }
    if(read[read.length-2]== 'khong'){
        read[read.length-2] = 'linh';
    }
    return read.join(' ');
}
let number = Number(prompt());
console.log(number, readNumber(number));