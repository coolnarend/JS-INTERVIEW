// Given an array of integers, calculate which fraction of its elements are positive,
// which fraction of its elements are negative, and which fraction of its elements are zeros, respectively.
// Print the decimal value of each fraction on a new line.

// Sample Input
var input1 = [-4, 3, -9, 0, 4, 1];
// Sample Output
// 0.500000
// 0.333333
// 0.166667

function plusMinus(arr) {
	var posArr = [];
	var negArr = [];
	var zeros = [];
	for (var i=0; i<arr.length; i++){
		if (arr[i]===0){
			zeros.push(arr[i]);
		} else if (arr[i]>0){
			posArr.push(arr[i]);
		} else {
			negArr.push(arr[i]);
		}
	}
	console.log(posArr.length/arr.length);
	console.log(negArr.length/arr.length);
	console.log(zeros.length/arr.length);
}

console.log(plusMinus(input1));