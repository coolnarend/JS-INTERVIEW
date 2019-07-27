// Consider a staircase of size n = 4:
//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to n, and the image is drawn using #
// symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.


// Sample Input

var input1 = 6

// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

function staircase(n){
	var spaces = (" ").repeat(n-1);
	var stairs = "";
	var str = "";
	for (var i=0; i<n; i++){
		spaces = spaces.slice(0,n-(i+1));
		stairs = stairs + ("#")
	 	str = spaces + stairs;
		console.log(str);
	}
}

console.log(staircase(input1));
