alert("Hello");
var userAge = prompt("What is your age");
if (typeof userAge != 'number')
	{
		alert("Please enter a number")
	}
else
	{
		alert("You have been alive for about " + userAge *365)
	}
