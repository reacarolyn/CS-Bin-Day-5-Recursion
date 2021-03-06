
// Recursion
// In programming, a function is considered recursive if it calls itself during execution.

// What does recursion need?
// A base case to be met; something that will end the execution. The calling of itself.

////////////////////////////
//     Challenge 1
////////////////////////////
// Repeater

// Modify the function so that it returns a string containing the input character repeated 5 times Use recursion!
 function repeater (char, n=5) {
  //base case, n=1, should return char last time
  if(n===1) {return char}
  //recurse add char to each char until n=1
  return char + repeater(char, n-1)
 }

 console.log(repeater('g')); // -> 'ggggg'
 console.log(repeater('j'));// -> 'jjjjj'


////////////////////////////
//     Challenge 2
////////////////////////////
// Is Even

// Modify the function so that it returns true if a number is even (and false if it's not) assume input will be a positive integer Use recursion!

function isEven (n) {
  //base case, 0 is even
  if (n===0) {return true;}
  //1 is odd
  else if (n===1) {return false;}
  //recurse, subtract n-2 until it hits 0 = even
  else if (n>0) {return isEven (n-2)}
  //if negative
  else {return isEven(-n)}
}


// To check if you've completed the challenge, uncomment these console.logs!
 console.log(isEven(0)); // -> true
 console.log(isEven(5)); // -> false
 console.log(isEven(10)); // -> true
  console.log(isEven(-10)) //true

////////////////////////////
//     Challenge 3
////////////////////////////
// Factorial

// Modify the function so that it returns the factorial of an input number Use recursion!

// The factorial of n is the product of all numbers between 1 and n

// Ex: 5! = 5 * 4 * 3 * 2 * 1
function factorial (num) {
// 0,1 is 1 in factorial
if (num===0 || num===1) {return 1;}
//recurse
return num* factorial (num-1)
}

// To check if you've completed the challenge, uncomment these console.logs!
 console.log(factorial(4)); // -> 24
 console.log(factorial(6)); // -> 720
 console.log(factorial(0)); // -> 1

////////////////////////////
//     Challenge 4
////////////////////////////
// Challenge 4
// Get Length

// Modify the function so that it returns the length of an array recursively, without using the .length property. Use recursion!

// Hint: When you attempt to access an index that is greater than array.length - 1, it returns undefined

function getLength(array, i = 0) {
 if (array[i] === undefined) {
	return i;
 } else {
  return getLength(array, i + 1)
 }
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5


////////////////////////////
//     Challenge 5
////////////////////////////
// POW

// Modify the function so that it returns base to the power of exponent. Use recursion!

// Ex: pow(5, 3) = 5 * 5 * 5

function pow(base, exponent) {
	if (exponent === 0) {
    return 1;
  } else {
    return base * pow(base, exponent - 1);
  }
}

// To check if you've completed the challenge, uncomment these console.logs!
 console.log(pow(2, 4)); // -> 16
 console.log(pow(3, 5)); // -> 243

////////////////////////////
//     Challenge 6
////////////////////////////
// Flow

// Modify the function so that it returns the result of running the input number through each function in funcArray, in order. Use recursion!

// First do it recursively, if you have time at the end try using a reduce function

function flow(input, funcArray, i = 0) {
if (i === funcArray.length - 1) {
  return funcArray[i](input); 
} else {
  return flow(funcArray[i](input), funcArray, i+1)
 }
}

// To check if you've completed the challenge, uncomment this code!
 function multiplyBy2(num) { return num * 2; }
 function add7(num) { return num + 7; }
 function modulo4(num) { return num % 4; }
 function subtract10(num) { return num - 10; }
 const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
 console.log(flow(2, arrayOfFunctions)); // -> -7



////////////////////////////
//     Challenge 7
////////////////////////////
// Fibonacci

// Modify the function so that it returns the nth Fibonacci number. Try not to look back at the slides!

// Fibonacci reference: 1, 1, 2, 3, 5, 8, 13, ...

function fib(n) {
if (n === 0) {
  return 0;
} else if (n === 1) {
  return 1;
} 
return fib(n - 1) + fib(n - 2) 
}

// To check if you've completed the challenge, uncomment this code!
 console.log(fib(1)); // -> 1
 console.log(fib(2)); // -> 1
 console.log(fib(7)); // -> 13

////////////////////////////
//     Challenge 8
////////////////////////////
// Heads or Tails

// Modify the function so that it returns all possible outcomes of n games of heads or tails as an array of arrays

function headsOrTails(n) {
const results =[];
  
  function recurse (num, arr = []) {
    if (arr.length === num) {
      results.push(arr);
      return;
    }
    recurse(num, [...arr, 'heads']);
    recurse(num, [...arr, 'tails']);
  }
  recurse(n);
  return results;
}

// To check if you've completed the challenge, uncomment this code!
console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
console.log(headsOrTails(3));
// -> [
//   ['heads', 'heads', 'heads'],
//   ['heads', 'heads', 'tails'],
//   ['heads', 'tails', 'heads'],
//   ['heads', 'tails', 'tails'],
//   ['tails', 'heads', 'heads'],
//   ['tails', 'heads', 'tails'],
//   ['tails', 'tails', 'heads'],
//   ['tails', 'tails', 'tails'],
// ]

////////////////////////////
//     Challenge 9
////////////////////////////
// Combos of Any length

// Modify this function so that it returns all combinations of the elements of arr as an array of arrays. Use Recursion!


function getAllCombos(arr) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
// console.log(getAllCombos(['a', 'b', 'c']));
// -> [
//   ['a', 'b', 'c'],
//   ['a', 'b'],
//   ['a', 'c'],
//   ['a'],
//   ['b', 'c'],
//   ['b'],
//   ['c'],
//   [],
// ]
