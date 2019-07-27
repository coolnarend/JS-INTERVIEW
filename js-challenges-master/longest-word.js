// Have the function LongestWord(sen) take the sen parameter being passed 
// and return the largest word in the string.
// If there are two or more words that are the same length,
// return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty.

// Sample Test Cases:
var input1 = "fun&!! time"
// Output:"time"
var input2 = "I love dogs"
// Output:"love"


function LongestWord(sen) { 
    // Regex to match on all words in string and turn into array - removes all punctuation
    var arr = sen.match(/[\w]+/gi)
    // Sort array in order of longest words to shortest
    // Note: Sorting a whole array is a very inefficient method 
    // if you only want to find the highest (or lowest) value.
    // See: https://www.w3schools.com/js/js_array_sort.asp
    var sorted = arr.sort(function(a,b){ return b.length - a.length });
    // Return first value of array
    return sorted[0];
}

var test1 = LongestWord(input1);
var test2 = LongestWord(input2);
console.log(test1)
console.log(test2)

// Another approach
function LongestWord2(sen){
    // Regex to match on all words in string and turn into array - removes all punctuation
    var arr = sen.match(/[\w]+/gi)
    // Variable to hold current greatest length
    var currentGreatestLength = 0;
    // Variable to hold longest word
    var longestWord;
    // Loop through array and test each word's length against value in currentGreatestLength
    arr.forEach(function(word){
        if(word.length > currentGreatestLength){
            currentGreatestLength = word.length;
            longestWord = word;
        }
    })  
    return longestWord;
}

var test1 = LongestWord2(input1);
var test2 = LongestWord2(input2);
console.log(test1)
console.log(test2)


