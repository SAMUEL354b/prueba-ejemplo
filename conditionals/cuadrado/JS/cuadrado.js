/*
	name exercise: square area
	description: find the area of 3 squares
	autor: SamuelMB
	date: march 15th 2025
*/
let squareOne=3;
let squareTwo=4;
let squareThree=4;

let areaOne=squareOne*squareOne;
let areaTwo=squareTwo*squareTwo;
let areaThree=squareThree*squareThree;

if(areaOne==areaTwo && areaOne==areaThree){
	console.log('All square have equal area');
}else if(areaOne==areaTwo && areaOne>areaThree)
	console.log('square 2 and square 3 are the largest');
 else if(areaTwo==areaThree && areaTwo>areaOne){
	console.log('areaTwo is larger');
}else if(areaThree==areaOne && areaTwo>areaOne){
 	console.log('square 3 and square 1 are the largest');
}else if(areaOne>areaTwo && areaOne>areaThree){
	console.log('Square 1 is the largest');
}else if(areaTwo>areaOne && areaTwo>areaThree){
	console.log('Square 2 is the largest');
}else{
	console.log('Square 3 is the largest');
};