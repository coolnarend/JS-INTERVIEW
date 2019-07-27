// Given five positive integers, find the minimum and maximum values
// that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line 
// of two space-separated long integers.

// Sample Input
var input1 = [1, 2, 3, 4, 5];
// Output 
// 10 14

function miniMaxSum(arr) {
	var sortArr = arr.sort();
	var minSum = 0;
	var maxSum = 0;
	for (var i=0; i<4; i++){
		minSum = minSum + arr[i];
		maxSum = maxSum + arr[(arr.length-1)-i];
	}
	return minSum + " " + maxSum
}

console.log(miniMaxSum(input1));

