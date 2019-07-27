// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
// Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Sample Input
// A single string s containing a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).
var input1 = "07:05:45PM"

// Expected Output
// 19:05:45

function timeConversion(s) {
    // Get AM or PM
    var amPM = s.substr(-2,1);
    // Get hours
    var hours = parseInt(s.substr(0,2));
    var milTime;
    if (amPM == "A"){
    	if (hours < 12){
    		milTime = s.substr(0,8);
    	} else {
    		hours = "00";
    		milTime = hours + s.substr(2,6);
    	}
    	
    } else if (amPM == "P") {
    	if (hours < 12){
    		hours = hours + 12;
    		milTime = hours.toString() + s.substr(2,6);
    	} else {
    		milTime = s.substr(0,8);
    	}
    }
    return milTime;
}

console.log(timeConversion(input1));
