/*
	Name exercise: Net Force
	Description: Verification of Newton's first law
	Autor: Samuel MB
	Date: March 24th 2025
*/

let number= prompt("Enter the number of calculations to perform:");
let netForce;
let iteration;

for(iteration=1; iteration<=number; iteration++){
	netForce= prompt("Enter the net force:");
	console.log("The net force input was:"+netForce, "N");
	if(netForce==0){
		console.log("The object is rest");
		console.log("");
	}
	else{
		console.log("The object is motion");
		console.log("");
	}
}
		