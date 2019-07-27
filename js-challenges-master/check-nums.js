// Have the function CheckNums(num1,num2) 
// take both parameters being passed and return 
// the string true if num2 is greater than num1,
// otherwise return the string false.
// If the parameter values are equal to each other
// then return the string -1.

// Sample Test Cases
var input1 = 3
var input2 = 122
// Output:"true"
var input3 = 67
var input4 = 67
// Output:"-1"



function CheckNums(num1,num2) {  
	if (num1 < num2){
		return "true";      
	} else if (num1 === num2){
		return "-1";    
	} else {
		return "false"; 
	}        
}

function CheckNums2(num1,num2){
	return (num2 === num1) ? '-1' : (num1 < num2) ? "true" : "false"
}
   
console.log(CheckNums(input1,input2));
console.log(CheckNums(input3,input4));

console.log(CheckNums2(input1,input2));
console.log(CheckNums2(input3,input4));