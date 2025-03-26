/*
	Name exercise: Table of five
	Description: Make the five times table to five
	Autor: Samuel MB
*/

let number=5;
let counter;
let table;

for(counter=1; counter<=5; counter++) {
	table=number*counter;
	console.log(+number +" * " +counter +" = " +table);
}