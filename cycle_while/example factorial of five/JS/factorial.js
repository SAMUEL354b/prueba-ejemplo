/*
	Name exercise: Factorial of five
	Description:  the factorial of five
	Autor: Samuel MB
	Date: March 23th 2025
*/

let number=5;
let counter=0;
let factorial=1;

while(counter<number){
	counter=counter+1;
	factorial=factorial*counter;
}
console.log("The factorial is:"+factorial);