//Alice and Bob each created one problem for HackerRank.
// A reviewer rates the two challenges, awarding points on a scale
// from to for three categories: problem clarity, originality, and
// difficulty.

// We define the rating for Alice's challenge to be the triplet A = (a0, a1, a2),
// and the rating for Bob's challenge to be the triplet B = (b0, b1, b2).

// Your task is to find their comparison points by comparing a0 with b0,
// a1 with b1, and a2 with b2. 


// If ai > bi, then Alice is awarded point.
// If ai < bi, then Bob is awarded point.
// If ai = bi, then neither person receives a point.

// Comparison points is the total points a person earned.

// Given A and B, can you compare the two challenges and print their
// respective comparison points?


// Sample Input
var input1 = [5, 6, 7];
var input2 = [3, 6, 10];
// Expected Output
// 1 1

function solve(input1, input2){
	var aPoints = 0;
	var bPoints = 0;
	for (var i=0; i<3; i++){
		if (input1[i]>input2[i]){
			aPoints = aPoints+1;
		} else if (input1[i]<input2[i]){
			bPoints = bPoints+1;
		}
	}
	return aPoints.toString() + " " + bPoints.toString();
}

function solve1(a0, a1, a2, b0, b1, b2){
	var aArr = [a0, a1, a2];
	var bArr = [b0, b1, b2];
	solve(aArr, bArr);
}

console.log(solve(input1, input2))

console.log(solve1(
	input1[0], input1[1], input1[2],
	input2[0], input2[1], input2[2]));