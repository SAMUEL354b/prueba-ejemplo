 /*
	Name exercise: Table of nine
	Description: the table of nine and determine if the results are even or odd
	Autor: Samuel MB
	Date: March 23th 2025
*/

let number=9;
let counter;
let product;

for(counter=1; counter<=5; counter++){
	product= number*counter;
	console.log(number +" * " +counter +" = " +product);
	if(product%2==0){
		console.log("The",+product,"is even");
	}
	else{
		console.log("The",+product,"is odd");
	}
}