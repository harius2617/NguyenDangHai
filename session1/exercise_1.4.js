function GetFileName (fileName){
    return fileName.split('.').pop();
}
console.log('dantri.com', GetFileName('dantri.com'));