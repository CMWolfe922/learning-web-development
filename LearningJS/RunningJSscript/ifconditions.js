// let rating = 4;

//  This is an if statement but it can be combined with if-else 
// just like in python. 
// if(rating === 4) {
//     console.log("YOU'RE A SUPERSTAR!")
// }

// if (3*6 === 18) {
//     console.log("MATH WORKS")
// }

// let random = Math.random();
// if (random < 0.5 ) {
//        console.log("Your number is less than 0.5")
//        console.log(random)
// }

// if (random >= 0.5) {
//     console.log('Your number is greater than or equal to 0.5')
//     console.log(random)
// }

// NOW WE WILL WORK WITH ELSE IF
let rating = 2;

if (rating === 3) {
    console.log("YOU'RE A SUPERSTAR!");
} // REMEMBER THAT IN JAVASCRIPT THE ELSE IF STATEMENT IS NOT INDENTED LIKE PYTHON
// IT IS RUN OUTSIDE OF THE IF STATEMENT'S CURLY BRACES!
else if (rating === 2) {
    console.log("MEETS EXPECTATION")
}
// BUT THE ELSE IF STATEMENT CAN GO ON THE IF STATEMENTS ENDING CURLY BRACE LINE
// if (){
//     console.log()
// } else if (){
//     console.log()
// }


// Lets say I want to check the age of people at a theme park to see how 
// much they pay. I can use the if + if else conditional logic to decide the 
// ticket price. 

// 0-5 FREE 
// 6-10 CHILD $10
// 11 - 64 ADULT $20
// 65+ SENIOR $10 

// let guestAge = 5;

// if (guestAge <= 5) {
//     console.log("Admission is FREE!")
// } else if (guestAge <= 10) {
//     console.log("Admission for CHILD is $10")
// } else if (guestAge <= 64) {
//     console.log("Admission for ADULT is $20")
// } else if (guestAge > 64) {
//     console.log("SENIORS get a $10 discount, admission is $10")
// }

const password = prompt("Please enter a new password: ")


//  This block of code is not correct! This is two seperate pieces of logic
//  I need to make it 1 piece of logic by nesting it
// password must be 6 characters 
// if (password.length >= 6) {
//     console.log("New Password Created")
// } else {
//     console.log("Password too short, must be 6 characters!")
// }
// // password can not include a space!
// if (password.indexOf(" ") === -1 ) {
//     console.log("Password Created!")
// } else {
//     console.log("Spaces not allowed!")
// }


if (password.length >= 6) {
    // instead of printing something right away, check if there is a space or not
    // console.log("New Password Created")
    // make sure password doesnt contain spaces
    if (password.indexOf(" ") === -1) {
        console.log("Password Created!")
    } else {
        console.log("Password can not contain a space!")}
} else {
    console.log("Password too short, must be 6 characters!")
}
