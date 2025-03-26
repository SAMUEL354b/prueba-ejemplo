/*
	Name exercise: Reaction Force
	Description: Ask for the applied force and show the reaction force
	Autor: Samuel MB
	Date: March 24th 2025
*/

let counter=0;
let addition=0;
let appliedForce= parseFloat(prompt("Enter the applied force:"));
let reactionForce;

while(appliedForce!==0){
	reactionForce=appliedForce;
	counter++;
	addition=addition+reactionForce;
	console.log("The reaction force is:"+reactionForce, "N");
	appliedForce= parseFloat(prompt("Enter the applied force:"));
}

console.log("The total addition of the reaction Forces is:"+addition);
console.log("The total calculations made were:"+counter);


	