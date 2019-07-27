// This challenge requires you to return the factorial of a given number.
// A factorial of some number N is N multiplied by (N-1) multiplied by (N-2) 
// and so forth until you reach the number 1.
// For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24. */

// Sample Test Cases:
var num1 = 8
// Output: 40320
var num2 = 6
// Output: 720

// Approach 1: Iterative
function FirstFactorial(num) {  
    // If the number is less than 0, reject it.  
    if (num < 0) {  
        return -1;  
    }  
    // If the number is 0, its factorial is 1.  
    else if (num == 0) {  
        return 1;  
    }
    // Temporary variable to store multiplied value.
    // Start with number
    var tmp = num; 
    // While number decrementing is greater than 2
    // Multiply current value times number
    while (num-- > 2) {  
    	// console.log("tmp: "+tmp);
    	// console.log("num: "+num);
    	// console.log(tmp+" * "+num);
        tmp *= num; 
    }  
    return tmp;  
}  

// Approach 2: Recursive
function FirstFactorial2(num) { 
	// If the number is less than 0, reject it.
	if (num < 0){
		return -1;
	}
	// If the number is 0, its factorial is 1.
	if (num == 0) {
		return 1;
	}
	// Otherwise, call this recursive procedure again.
	else {
		return num * FirstFactorial2(num - 1);
	}
}

var test1 = FirstFactorial(num1);                            
var test2 = FirstFactorial(num2);
console.log("Approach 1 (Iterative): "+num1+"!="+test1);
console.log("Approach 1 (Iterative): "+num2+"!="+test2);

var test3 = FirstFactorial2(num1);                            
var test4 = FirstFactorial2(num2);
console.log("Approach 2 (Recursive): "+num2+"!="+test1);
console.log("Approach 2: (Recursive) "+num2+"!="+test2);
