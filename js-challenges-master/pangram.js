// Sample Test Cases:
var input1 = "We promptly judged antique ivory buckles for the next prize"
// Output:"pangram"
var input2 = "We promptly judged antique ivory buckles for the prize"
// Output:"not pangram"
var input3 = "How quickly daft jumping zebras vex."
//Output:"pangram"


// Approach 1
// Create alphabet array
function createAlphabetArray(){
    var alphaStr = "abcdefghijklmnopqrstuvwxyz"
    var arr = alphaStr.split('');
    return arr;
}

function isPangram(input){
    var alphaArr = createAlphabetArray();
    input = input.toLowerCase();
    var pangram = false;
    // For each letter in the alphabet
    // Find this letter in the input
    // If a letter is not found in the input, it's not a pangram!
    // Note: you cannot use a forEach to loop through the array here
    // because there is no way to break out of the loop:
    // https://stackoverflow.com/questions/2641347/how-to-short-circuit-array-foreach-like-calling-break
    for (i=0; i<=alphaArr.length-1; i++){
        if (input.indexOf(alphaArr[i]) === -1){
            // console.log(alphaArr[i] + " not found")
            pangram = false;
            break;
        } else {
            pangram = true;
            continue;
        }
    }
    if (pangram === true){
        console.log("pangram")
    } else {
        console.log("not pangram")
    }
}

// Approach 2
function isPangram2(input) {
    // Regex explanation:
    // 1st Capturing Group ([a-z])
    // Match a single character present in the list below [a-z]
    // a-z a single character in the range between a (index 97) and z (index 122) (case sensitive)
    // Negative Lookahead (?!.*\1)
    // Assert that the Regex below does not match
    // The ?!n quantifier matches any string that is not followed by a specific string n.
    // .* matches any character (except for line terminators)
    // * Quantifier — Matches between zero and unlimited times, as many times as possible, giving back as needed (greedy)
    // \1 matches the same text as most recently matched by the 1st capturing group
    var regex = /([a-z])(?!.*\1)/gi;
    if (input.match(regex).length === 26){
        console.log("pangram")
    } else {
        console.log("not pangram")
    }
}

isPangram(input1)
isPangram(input2)
isPangram(input3)

isPangram2(input1)
isPangram2(input2)
isPangram2(input3)