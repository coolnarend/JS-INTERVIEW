// Have the function AlphabetSoup(str)
// take the str string parameter being passed
// and return the string with the letters in alphabetical order
// (ie. hello becomes ehllo).
// Assume numbers and punctuation symbols will not be included 
// in the string.

// Sample Test Cases

var input1 = "coderbyte";
// Output:"bcdeeorty"

var input2 = "hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	var arr = str.split('');
	arr.sort();
	return arr.join('');
}

console.log(AlphabetSoup(input1));
console.log(AlphabetSoup(input2));
