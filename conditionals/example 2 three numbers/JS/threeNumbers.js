/* 
	Name exercise: three numbers 
	Description: Read three numbers and print if they are equals or which is greater
	Autor: Samuel MB
	Date: March 19th 2025
*/

let numberOne= prompt("enter number one:");
let numberTwo= prompt("enter number two");
let numberThree= prompt("enter number three:");



/* tres numeros iguales */
if(numberOne==numberTwo && numberOne==numberThree && numberTwo==numberThree){
	console.log("All numbers are equals");
}
/* numero uno y dos iguales y mayores que numero tres */
else if(numberOne==numberTwo && numberOne>numberThree && numberTwo>numberThree){
	console.log("number one is equal to number two and in turn are greater than number three");
}
/*numero uno y dos iguales y menores que tres */
else if(numberOne==numberTwo && numberOne<numberThree && numberTwo<numberThree){
	console.log("number one is equal to number two and in turn are less than number three");
}
/* numero uno y tres iguales y mayores que numero dos */
else if(numberOne>numberTwo && numberOne==numberThree && numberTwo<numberThree){
	console.log("number one is equal to number three and in turn are greater than number two");
}
/*numero uno y tres iguales y menores que dos */
else if(numberOne<numberTwo && numberOne==numberThree && numberTwo>numberThree){
	console.log("number one is equal to number three and in turn are less than number two");
}
/*numero dos y tres iguales y mayores que numero uno */
else if(numberOne<numberTwo && numberOne<numberThree && numberTwo==numberThree){
	console.log("number two is equal to number three and in turn are greater than number one");
}
/*numero dos y tres iguales y menores que uno*/
else if(numberOne>numberTwo && numberOne>numberThree && numberTwo==numberThree){
	console.log("number two is equal to number three and in turn are less than number one");
}
/* todos los numeros diferentes. Numero dos mayor que uno y numero tres mayor que los otros */
else if(numberOne<numberTwo && numberOne<numberThree && numberTwo<numberThree){
	console.log("number three is greater than number one and number two, and number two is greater than number one");
}
/* todos los numeros diferentes. Numero tres mayor que numero dos y numero uno, y numero uno mayor que dos */
else if(numberOne>numberTwo && numberOne<numberThree && numberTwo<numberThree){
	console.log("number three is greater than number one and number two, and number one is greater than number two");
}
/* todos los numeros diferentes. Numero dos mayor que numero uno y numero tres, y numero uno mayor que tres */
else if(numberOne<numberTwo && numberOne>numberThree && numberTwo>numberThree){
	console.log("number two is greater than number one and number three, y number one is greater than number three");
}
/* todos los numeros diferentes. Numero dos mayor que numero uno y tres, y numero tres mayor que uno */
else if(numberOne<numberTwo && numberOne<numberThree && numberTwo>numberThree){	
	console.log("number two is greater than number one and number three, y number three is greater than number one");
}						
/* todos los numeros diferentes. Numero uno mayor que numero dos y tres, y numero dos mayor que tres */
else if(numberOne>numberTwo && numberOne>numberThree && numberTwo>numberThree){
	console.log("number one is greater than number one and number three, y number two is greater than number three");
}
/* todos los numeros diferebres. Numero uno mayor que numero dos y tres, y numero tres mayor que dos */
else if(numberOne>numberTwo && numberOne>numberThree && numberTwo<numberThree){
	console.log("number one is greater than number one and number three, y number three is greater than number two");
}
																
				
