// Have the function LetterChanges(str) take the str parameter
// being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it
// in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u)
// and finally return this modified string.

// Sample Test Cases

input1 = "hello*3";

// Output:"Ifmmp*3"

input2 = "fun times!";

// Output:"gvO Ujnft!"

// Found a test case which doesn't work:
input3 = "zzzztop";

// Output:"AAAAUpq"

function LetterChanges(str) { 
	var newString = "";
	for (i=0; i<str.length; i++){
		// If charCode is between 65-90
		// Capital letter - get next 
		if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
			var theCharCode = str.charCodeAt(i);
			var nextCharCode = theCharCode + 1;
			var nextLetter = String.fromCharCode(nextCharCode);
			newString += nextLetter;
		// or between 97-122
		// Lowercase letter - get next
		} else if (str.charCodeAt(i) >=97 && str.charCodeAt(i) <= 122) {
			var theCharCode = str.charCodeAt(i);
			var nextCharCode = theCharCode + 1;
			var nextLetter = String.fromCharCode(nextCharCode);
			newString += nextLetter;
		// If not a letter, simply add the character to new string
		} else {
			newString += str.charAt(i);
		}
	}
	// Uppercase vowels
	var newString = newString.replace(/[aeiou]/g, function(vowels){
		return vowels.toUpperCase();
	});
	console.log(newString);
	return newString;
}

LetterChanges(input1);
LetterChanges(input2);
LetterChanges(input3);