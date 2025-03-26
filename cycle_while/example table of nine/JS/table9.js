/*
	Name exercise: Table of nine
	Description: the table of nine and determine if the results are even or odd
	Autor: Samuel MB
	Date: March 23th 2025
*/

let number=9;
let counter=0;
let table;

while(counter<5){
	counter++;
	table=number*counter;
	console.log(+number +" * " +counter +" = " +table);
	if(table%2==0){
		console.log("The", +table, "is even");
	}
	else{
		console.log("The", +table, "is odd");
	}
}
