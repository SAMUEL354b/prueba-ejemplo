/*
	Name exercise: Force
	Description: Calculation of the resultant force with Newton's second law
	Autor: Samuel MB
*/

let mass;
let acceleration;
let force;
let number= parseFloat(prompt("Enter the number of calculations to perform:"));
let iteration;

for(iteration=1; iteration<=number; iteration++){
	mass=parseFloat(prompt("Enter the mass:"));
	acceleration=parseFloat(prompt("Enter the acceleration:"));
	force= mass*acceleration;
	console.log("The force is:"+force, "N");
	console.log("");
}