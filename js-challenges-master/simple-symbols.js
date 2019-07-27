// Have the function SimpleSymbols(str)
// take the str parameter being passed 
// and determine if it is an acceptable sequence
// by either returning the string true or false.
// The str parameter will be composed of + and = symbols
// with several letters between them (ie. ++d+===+c++==a)
// and for the string to be true each letter must be
// surrounded by a + symbol.
// So the string to the left would be false. 
//The string will not be empty and will have at least one letter.

// Sample Test Cases

var input1 = "+d+=3=+s+"
//Output:"true"

var input2= "f++d+"
//Output:"false"


function SimpleSymbols(str) {
	// Pad the string 
	str = " " + str + " "
	// Loop over each character in string
	for (var i = 0; i < str.length; i++){
		if (str[i].match(/[a-z]/i) !== null){
			if (str[i-1] !== '+' || str[i+1] !== '+'){
				return false;
			}
		}
	}
	return true;

	// Matches any letter followed by a plus
	letters = str.match(/[a-z](?=\+)+/gi);
	// No lookbehind in JavaScript (yet)
	//letters2 = str.match(/[a-z](?<=\+)+/gi);

	//return letters;
}

console.log(SimpleSymbols(input1));
console.log(SimpleSymbols(input2)); 