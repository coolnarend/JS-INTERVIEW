// Calculate and print the sum of the elements in an array, 
// keeping in mind that some of those integers may be quite large.

var input1 = 5
var input2 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(n, ar) {
	var sum = 0;
	for (var i=0; i<n; i++){
		sum += ar[i];
	}
	return sum;
}

console.log(aVeryBigSum(input1, input2))