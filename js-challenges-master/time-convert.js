// Have the function TimeConvert(num) take the num parameter
// being passed and return the number of hours and minutes
// the parameter converts to 
// (ie. if num = 63 then the output should be 1:3).
// Separate the number of hours and minutes with a colon.

// Sample Test Cases

var input1 = 126
// Output:"2:6"

var input2 = 45
// Output:"0:45"

function TimeConvert(num) {
	var hours = num/60;
	hours = Math.trunc(hours)
	var minutes = num%60;
	return hours+":"+minutes;         
}

console.log(TimeConvert(input1));
console.log(TimeConvert(input2));
