function getElementFromArr(array){
    let len = array.length
    let index = Math.floor(Math.random()*len)
    return array[index]
}

console.log(getElementFromArr([2,3,5,6]))