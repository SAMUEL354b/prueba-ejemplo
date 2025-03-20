/*
    Name exercise: frictionForce
    Description: frictionForce   
    Author: SamuelMB
    Date: 19/03/2025
*/

let mass = 6;
let acceleration = 9.81; 
let frictionCoefficient = 0.5; 

let normalForce = mass * acceleration; 
let frictionForce = frictionCoefficient * normalForce; 

if (frictionForce > 50) {
    console.log('The friction is high');
} else { 
    console.log('The friction is low');
}


