//  Using the JavaScript language, have the function LetterCapitalize(str)
// take the str parameter being passed and capitalize the first letter of each word.
// Words will be separated by only one space.

// Sample Test Cases

input1 = "hello world";

// Output:"Hello World"

input2 = "i ran there";

// Output:"I Ran There"



function LetterCapitalize(str) {
	var newString = str.replace(/[\w]+/g, function(word){
		var firstLetter = word.charAt(0).toUpperCase();
		var restOfWord = word.slice(1);
		return firstLetter + restOfWord;
	});
	console.log(newString);
	return newString;
}

LetterCapitalize(input1);
LetterCapitalize(input2);