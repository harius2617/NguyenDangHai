function GetFileName (fileName){
    return fileName.split('.').pop();
}
console.log('anh.img', GetFileName('anh.img'));
