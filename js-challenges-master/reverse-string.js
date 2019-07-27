// Using the JavaScript language, have the function FirstReverse(str)
// take the str parameter being passed and return the string in reversed order.
// For example: if the input string is "Hello World and Coders"
// then your program should return the string sredoC dna dlroW olleH. 

// Sample Test Cases
var input1 = "coderbyte"
// Output: "etybredoc"
var input2 = "I Love Code"
// Output: "edoC evoL I"

// Approach 1: Manually reversing string character by character
function FirstReverse(str){
	var i = str.length;
	var pos = 1;
	var newStr = "";
	while (i > 0){
		var lastLetter = str.substr(-pos,1);
		//console.log(lastLetter);
		newStr = newStr+lastLetter;
		i--;
		pos++;
	}
	return newStr;
}

// Approach 1.5: Using for loop
function FirstReverse1(str) { 

  var newString = "";

  // add each character to newString
  for (var i = str.length - 1; i >= 0; i--) {   
    newString = newString + str.charAt(i);
  }

  return newString;
         
}

// Approach 2: Use built-in string/array functions
function FirstReverse2(str) { 

  // first we split the string which creates an array of characters
  // e.g. ['c','a','t']
  // then we call the reverse function on this array 
  // and finally we turn the reversed array back into a string
  // using the join function
  return str.split('').reverse().join('');
         
}

console.log("Approach 1: " + FirstReverse(input1));
console.log("Approach 1: " + FirstReverse(input2));

console.log("Approach 1.5: " + FirstReverse1(input1));
console.log("Approach 1.5: " + FirstReverse1(input2));

console.log("Approach 2: " + FirstReverse2(input1));
console.log("Approach 2: " + FirstReverse2(input2));