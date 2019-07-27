// A left rotation operation on an array of size n 
// shifts each of the array's elements 1 unit to the left.
// For example, if 2 left rotations are performed on array [1,2,3,4,5] 
// then the array would become [3,4,5,1,2].

// Given an array of integers n and a number, d,
// perform d left rotations on the array. 
// Then print the updated array as a single line 
// of space-separated integers.


input = [1,2,3,4,5]    

function rotateLeft(arr, numOfRotations){
    for (i=0; i<numOfRotations; i++){
        rotate(arr);
    }
    console.log(arr.join(" "));
}

function rotate(arr){
    var first = arr.shift();
    arr = arr.push(first);
    // Right rotation!
    // var last = arr.pop();
    // arr = arr.unshift(last);
}

rotateLeft(input, 2);