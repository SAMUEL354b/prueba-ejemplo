/*
	Name exercise: Mechanical work
	Description: Calculation of mechanical work done on a object
	Autor: Samuel MB
	Date: March 24th 2025
*/

let force= prompt("Enter the force:");
let distance= prompt("Enter the distance:");
let work;
let addition=0;
let counter=0;

while(force>0 && distance>0){
	work= force*distance;
	counter++;
	addition=addition+work;
	console.log("The work is:"+work, "J");
	console.log("");
	force= prompt("Enter the force:");
	distance= prompt("Enter the distance:");
}

console.log("The total accumulated amount of the calculated works is:"+addition);
console.log("The total calculations made were:"+counter);

