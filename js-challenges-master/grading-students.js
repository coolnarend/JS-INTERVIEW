// HackerLand University has the following grading policy:

//     Every student receives a grade in the inclusive range from 0 to 100.
//     Any grade less than 40 is a failing grade.

// Sam is a professor at the university and likes to round each student's grade according to these rules:

//     If the difference between the grade and the next multiple of 5 is less than 3,
//     round grade up to the next multiple of 5.
//     If the value grade of is less than 38, no rounding occurs as the result
//     will still be a failing grade.

// For example, grade = 84 will be rounded to 85 but grade = 29 will not be rounded 
// because the rounding would result in a number that is less than 40. 

// Given the initial value of grade for each of Sam's n students, write code to automate 
// the rounding process. Complete the function solve that takes an integer array of
// all grades, and return an integer array consisting of the rounded grades.
// For each grade, round it according to the rules above and print the result on a new line.

// Sample Input:
// 4
// 73
// 67
// 38
// 33
var input1 = [73, 67, 62, 38, 33]

function solve(arr){
	for (var i=0; i<arr.length; i++){
		var grade = arr[i];
		var diff = 5 - (arr[i]%5)
		if(diff < 3 && grade >= 38){
			grade = grade + diff;
		}
		console.log(grade);
	}
}

console.log(solve(input1));