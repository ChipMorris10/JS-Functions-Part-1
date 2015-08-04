// There are multiple problems on this page. They all test out individually, but
// don't work together


// Define a function called `sum` that takes two numbers as arguments and returns their sum.
// function sum(num1, num2) {
//   var sum = num1 + num2;
//   alert("The sum is " + sum);
// }
// sum(1, 2);
// ------------------------


// Define a function called `isEqual` that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.

// function isEqual(arg1, arg2) {
//   if (arg1 === arg2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEqual(2,2));
// console.log(isEqual(2, "2"));


// ------------------------
// Define a function called `discountPercentage` that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.
// function discountPercentage(amount, discount) {
//   if(discount >=100 || discount < 0) {
//     return("The discount percent must be between 0 and 100");
//   }
//   return "$" + (amount * (discount/100)).toFixed(2);
// }
// console.log(discountPercentage(100, 50));


// ------------------------
// Define a function called `evenNumbers` that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.

// function evenNumbers(num) {

//   // If the numbers aren't between 0 & 100, return an error msg
//   if (num > 100 || num < 0) {
//     return "Error: Number must be between 0 and 100";
//   }

//   // Create an empty array to hold all the even numbers
//   var even = [];

//   for (var i = 0; i <= num; i++) {

// // This tests to make sure the number in question doesn't have a remainder
//     if (i%2 === 0) {

// // If there is no remainder, push it to the array above
//       even.push(i);
//     }
//   }

// // return all the even numbers
//   return even;
// }

// // Tell the computer how high I want to go. In this case it can't be higher than 100 because of my if statement above
// console.log(evenNumbers(100));


// ------------------------
// Define a function called `isDivisible` that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.

function isDivisible(a,b) {
  if (a / b) {
    return true;
    } else {
    return false;
  }
}
console.log(isDivisible(7,0));
console.log(isDivisible(0,7));
