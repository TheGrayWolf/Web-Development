alert ("Hello");
var userAge = prompt("What is your age");
// if (userAge = "") {
// 	alert("Please enter a number");
// 	var userAge = prompt("What is your age");
//}
if (userAge < 18) {
	alert("Sorry you are to young");
	console.log("Sorry you are to young");
}else if (userAge < 21){
	alert("You can enter but not drink");
	console.log("You can enter but cannot drink");
}else {
	alert("Welcome");
	console.log("You can enter and drink")
}
if (userAge < 0) {
	alert("Error");
}
if (userAge === "21") {
	alert("Happy Birth Day");
}
if (userAge % 2 > 0) {
	alert("Your Age is odd")
}
if (userAge == 2*2 || userAge == 3*3 || userAge == 4*4 || userAge == 5*5 || userAge == 6*6 ||
 userAge == 7*7 || userAge == 8*8 || userAge == 9*9 || userAge == 10*10) {
alert("Your age is a perfect square");
}