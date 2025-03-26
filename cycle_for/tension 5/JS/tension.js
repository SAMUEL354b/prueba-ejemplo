/*
	Name exercise: Tension of a rope
	Description: Calculate of the tension of a rope
	Autor: Samuel MB
	Date: March 22th 2025
*/

let mass;
let gravity= 9.8;
let number= prompt("Enter the number of objects:");
let tension;
let iteration;


for(iteration=1; iteration<=number; iteration++){
	mass= prompt("Enter the mass of the object " +iteration +" : "));
	if(mass>0){
	tension=mass*gravity;
	console.log("The tension of the rope with the object " +iteration + " is: ",	+tension, "N");
	}
	else{
	console.log("ERROR: You entered a mass less than 0, please enter a valid value");
	} 
}