// Given a square matrix, calculate the absolute difference between
// the sums of its diagonals.

// The first line contains a single integer, n denoting the number of rows
// and columns in the matrix a.
// The next n lines denote the matrix a's rows, with each line containing
// n space-separated integers describing the columns.

// Sample Input

var input1 = [[ 11, 2, 4, 1 ], [ 4, 5, 6, 2 ], [ 10, 8, -12, 3 ], [1, 1, 1, 1]];

// Output
// 11

// 11 + 5 - 12 + 1 = 5
// 1 + 6 + 8 + 1 = 16
// 11

function diagonalDifference(a) {
	var rows = a.length;
	var leftDiagonalSum = 0;
	var rightDiagonalSum = 0;
	for (var i=0; i<rows; i++){
		leftDiagonalSum = leftDiagonalSum + a[i][i];
		rightDiagonalSum = rightDiagonalSum +  a[i][rows-(i+1)];
	}
	return Math.abs(leftDiagonalSum - rightDiagonalSum);
}

console.log(diagonalDifference(input1));