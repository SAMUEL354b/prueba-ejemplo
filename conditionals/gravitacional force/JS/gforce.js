/*
    Name exercise: force
    Description: calculate the final grade   
    Author: SamuelMB
    Date: 19/03/2025
*/
let mass1= 6;
let mass2= 7;
let aceleration= 9.81;

let force1=(mass1*aceleration);

let force2=(mass2*aceleration);

if(force1==force2) {
	console.log('the force are equals')
} else if(force1>force2){
	console.log('force1 is greater')
} else {
	console.log('force2 is greater')
}