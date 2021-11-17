function getElementRandom(n_min, n_max){
    return Math.floor(Math.random()*(n_max - n_min + 1)) + n_min 
}
let items = [8, 10]
console.log(items, getElementRandom(items[0],items[1]))