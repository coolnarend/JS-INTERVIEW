// You are in-charge of the cake for your niece's birthday and have decided
// the cake will have one candle for each year of her total age. 
// When she blows out the candles, she’ll only be able to blow out the tallest ones.
// Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning 4 years old,
// and the cake will have candles of height 3, 2, 1, 3, 
// she will be able to blow out 2 candles successfully,
// since the tallest candle is of height 3 and there are 2 such candles.

// Complete the function birthdayCakeCandles 
// that takes your niece's age and an integer array containing height of each candle as input,
// and return the number of candles she can successfully blow out. 

// Sample Input

var input1 = 4
var input2 = [3, 2, 1, 3]

// Expected Output

// 2

function birthdayCakeCandles(n, ar){
	var sortedArray = ar.sort(function(a,b){return b - a});
	var tallest = sortedArray[0];
	var count = 0;
	for (var i=0; i<n; i++){
		if (ar[i]==tallest){
			count = count + 1;
		}
	}
	return count;
}

console.log(birthdayCakeCandles(input1, input2))