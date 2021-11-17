function findElement(arr, brr){
    let result= []
    for(let i of brr){
        if(arr.indexOf(i)==-1){
            result.push(i)
        }
    }
    return result
}

let arr = [7,2,5,3,5,3]
let brr = [7,2,5,4,6,3,5,3] 
console.log(findElement(arr,brr))
