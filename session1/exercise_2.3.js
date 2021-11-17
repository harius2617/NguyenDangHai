function getElementFromArr(array){
    let len = array.length;
    let index = Math.floor(Math.random()*len);
    return array[index];
}
let arr = [2,3,5,6];
console.log(arr, getElementFromArr(arr));