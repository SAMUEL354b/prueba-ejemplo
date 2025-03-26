/*
    Name exercise: acceleration
    Description: acceleration  
    Author: SamuelMB
    Date: 19/03/2025
*/
let counter = 0;
let mass = 0;
let totallyWeight = 0;
let option = 0;
let weight = 0;
let gravity = 0;

mass = prompt("Enter the mass:");

while (mass > 0) {
    console.log("1 - earth (9.81)");
    console.log("2 - mars (3.71)");
    console.log("3 - jupiter (24.79)");
    
    option = prompt("Choose a planet (1-3)");

    if (option == 1) {
        console.log("gravity = 9.81");
        gravity = 9.81;
    } else if (option == 2) {
        console.log("gravity = 3.71");
        gravity = 3.71;
    } else if (option == 3) {
        console.log("gravity = 24.79");
        gravity = 24.79;
    } 
       

    counter = counter + 1;
    weight = mass * gravity;
    totallyWeight = weight + totallyWeight;

    console.log("The counter is " + counter);
    console.log("The weight is " + totallyWeight);

    mass = prompt("Enter a new mass (or enter 0 to exit):");
}