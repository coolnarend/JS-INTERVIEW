// Sam's house has an apple tree and an orange tree that yield an abundance of fruit.
// In the diagram below, the red region denotes his house, where s is the start point,
// and is t the endpoint. The apple tree is to the left of his house, and the orange
// tree is to its right. You can assume the trees are located on a single point, where 
//the apple tree is at point a, and the orange tree is at point b.

// When a fruit falls from its tree, it lands d units of distance from its tree 
// of origin along the x-axis. A negative value of d means the fruit fell d units
// to the tree's left, and a positive value of d means it falls d units to the tree's
// right.

// Complete the function countApplesAndOranges,
// where,

// s = Starting point of Sam's house location.
// t = Ending location of Sam's house location.
// a = Location of the Apple tree.
// b = Location of the Orange tree.
// m = Number of apples that fell from the tree.
// apples = Distance at which each apple falls from the tree.
// n = Number of oranges that fell from the tree.
// oranges = Distance at which each orange falls from the tree.

// Given the value of d for m apples and n oranges, can you determine how many 
// apples and oranges will fall on Sam's house (i.e., in the inclusive range [s,t])?
// Print the number of apples that fall on Sam's house as your first line of output,
// then print the number of oranges that fall on Sam's house as your second line
// of output.

var s = 7;
var t = 11;
var a = 5;
var b = 15;
var apples = [-2, 2, 1];
var oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
	var appleHits = 0;
	for (var i=0; i<apples.length; i++){
		var appleFallLocation = a+apples[i];
		if (appleFallLocation >= s && appleFallLocation <= t){
			appleHits = appleHits+1;
		}
	}

	var orangeHits = 0;
	for (var i=0; i<oranges.length; i++){
		var orangeFallLocation = b+oranges[i];
		if (orangeFallLocation >= s && orangeFallLocation <= t){
			orangeHits = orangeHits+1;
		}
	}
	console.log(appleHits);
	console.log(orangeHits);
}

console.log(countApplesAndOranges(s,t,a,b, apples, oranges));