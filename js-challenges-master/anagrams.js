// Given two strings, a and b,
// that may or may not be of the same length,
// determine the minimum number of character deletions required
// to make and anagrams.
// Any characters can be deleted from either of the strings.

// Print a single integer denoting the number of characters 
// you must delete to make the two strings anagrams of each other.

var input1 = "angel";
var input2 = "gleands";

// Find all characters that match between two strings
// Remove every matching character from each string
// Count the number of characters remaining in each string

function makeAnagrams (a, b){
	arrA = a.split('');
	arrB = b.split('');

	function checkMatches (arrA, arrB){
		for (var i=0; i<arrA.length; i++){
			for (var x=0; x<arrB.length; x++){
				if (arrA[i] == arrB[x]){
					arrA.splice(i,1);
					arrB.splice(x,1);
					checkMatches(arrA, arrB);
				}
			}
		}
		return arrA.concat(arrB);
	}

	return checkMatches(arrA, arrB);
}

console.log(makeAnagrams(input1, input2));

