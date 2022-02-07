/*
Learning about Truthyness and Falseyness 
========================================

Every JS value have an inherent truthyness or falseyness about them. 
--> the following are "falsey" values:
- false
- 0
- " " (empty string)
- null 
- undefined 
NaN

since this is true, everything else in javascript is believed to be 
"true". So I could write a conditional statement like this: 
const userInput = "1"

if (userinput) {
    console.log("True")
} else {console.log("false")}

*/ 