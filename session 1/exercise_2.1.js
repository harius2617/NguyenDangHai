function factorial(number){
    var result = 1;
	for(let i=2; i <= number ;i++){
		result*=i;
	}
	return result;
}
		
console.log(factorial(10))