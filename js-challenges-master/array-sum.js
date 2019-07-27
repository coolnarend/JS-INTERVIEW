// Given an array of N integers, can you find the sum of its elements?

// Input Format

// The first line contains an integer, N, denoting the size of the array.
// The second line contains N space-separated integers representing the array's elements.

// Output Format

// Print the sum of the array's elements as a single integer.

// Sample Input

// 6
// 1 2 3 4 10 11

// Sample Output
// 31

input1 = 6
input2 = "1 2 3 4 10 11"

function simpleArraySum(n, ar) {
	var stringArr = ar.split(" ");
	var arr = stringArr.map(Number);
	console.log(arr);
    var sum = 0;
    var i = 0;
    while (i <= arr.length-1){
        sum = sum + arr[i];
        i++;
    }
    console.log(sum);
}

simpleArraySum(input1, input2)