/*
    Name exercise: acceleration
    Description: acceleration  
    Author: SamuelMB
    Date: 19/03/2025
*/
let counter = 0;
let totallyForce = 0;
let mass =prompt("Enter the mass:");
let acceleration =prompt("Enter the acceleration:")
while (mass > 0 || aceleration > 0) {
    let force = mass * acceleration;
    console.log('The force is ' + force);
    totallyForce += force;
    counter++;
    mass = prompt("ask the user to enter the mass");
    acceleration = prompt("ask the user to enter the acceleration")
}
console.log("The counter is"+ counter);
console.log("The total force is " + force);