// Math Object in JavaScript
// Math is a built-in JavaScript object that provides ready-made mathematical values and functions.
// Math works with the Number type. It doesn't work with BigInt.

// 1: Constants:
// Math.PI: Represents the mathematical constant Pi (π).
// const piValue = Math.PI;
// console.log(piValue);

// =========================================
// 2. Basic Operations:
// =========================================

// Math.abs() tells you how far a number is from 0, so the result is never negative.
// console.log(Math.abs(5));
// console.log(Math.abs(-3));
// console.log(Math.abs(-115));

// Math.round(x): Rounds a number to the nearest integer.
// const roundedValue = Math.round(3.7);
// const roundedValue = Math.round(3.2);
// const roundedValue = Math.round(-3.2);
// console.log(roundedValue);

// Math.ceil(x): Returns the value of x rounded up to its nearest integer:
// const ceilValue = Math.ceil(3.7);
// const ceilValue = Math.ceil(-3.7);
// console.log(ceilValue);

// Math.floor(x): Returns the value of x rounded down to its nearest integer.
// const floorValue = Math.floor(3.7);
// const floorValue = Math.floor(-3.7);
// console.log(floorValue);

// Math.trunc(): 
// Math.trunc() just removes the decimal part and keeps the integer part.
// const truncValue = Math.trunc(3.7);
// const truncValue = Math.trunc(-3.7);
// console.log(truncValue);

// const truncValue = Math.trunc(-3.7);
// const floorValue = Math.floor(-3.1);
// console.log(truncValue);
// console.log(floorValue);

//todo Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.
// Math.sign() tells whether a number is positive, negative, or zero.
// console.log(Math.sign(5));
// console.log(Math.sign(-5));
// console.log(Math.sign(0));

// =========================================
// 3. Exponential and Logarithmic Functions:
// =========================================

// Math.pow(x, y): Returns the value of x to the power of y.
// console.log(Math.pow(2, 5));
// ECMA script introduce this
// console.log(2 ** 5);

// Math.sqrt(): Math.sqrt(x) returns the square root of x:
// let squareRoot = Math.sqrt(25);
// console.log(squareRoot);

// Math.log(x) returns the natural logarithm of x.
// let logResult = Math.log(1);
// let logResult = Math.log(2);
// console.log(logResult);

// Math.log2(x) returns the base 2 logarithm of x.
// let logResult = Math.log2(1);
// let logResult = Math.log2(2);
// let logResult = Math.log2(8);
// console.log(logResult);

// Math.log() → natural log (base e) e⁰ = 1
// Math.log2() → log with base 2

// =========================================
// Interview Question
// =========================================

// Generate Random number
// Math.random(): Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
// console.log(Math.floor(Math.random() * 100));