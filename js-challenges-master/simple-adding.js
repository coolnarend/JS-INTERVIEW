// Using the JavaScript language, have the function SimpleAdding(num)
// add up all the numbers from 1 to num. 
// For example: if the input is 4 then your program should return 10
// because 1 + 2 + 3 + 4 = 10. 
// For the test cases, the parameter num will be any number from 1 to 1000.

// Sample Test Cases

input1 = 12;

// Output:78

input2 = 140;

// Output:9870


function SimpleAdding(num) { 
    var sum = 0;
    for (i=1; i<=num; i++){
        sum += i;
    }
	console.log(sum);
	return sum;
}

SimpleAdding(12);