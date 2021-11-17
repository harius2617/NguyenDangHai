function GetFileName (fileName){
    return fileName.split('.').pop();
}

let fileName = prompt('Moi nhap ten file');
console.log(GetFileName(fileName));