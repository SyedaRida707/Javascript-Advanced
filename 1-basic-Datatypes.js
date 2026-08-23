// ========================================
// What is javascript?
// javascript improves the user experience of the web page by converting it from a
// static page into an interactive one.

// OR

// javascript is used to update and change both HTML and CSS.
// it adds behaviour to web pages.
// on console change by $0 any tag data

// =========================================
// History of javascript
// in 1995 created by brendan Eich at netscape in just 10 days.


// It shows a popup box in the browser.
// 'hi js' is the message displayed inside the popup.
// alert('hi js');

// console.log() is used to print/display something in the browser console.
// 'hi i am print on console' is the message you want to print.
// You can see it in Browser → Inspect → Console.
// console.log('hi i am print on console');

// three ways to use js
// Inline,Internal,External

// ====================================
// Values and Variable in JavaScript
// ====================================

// In JavaScript, values and variables are fundamental
// concepts that form the basis of programming.

// Variables: A variable is a container that holds a value. It has a name
// and can be used to store and manipulate data in a program.
// Values:  A value is a piece of information that a program can work with.
//  It can be a number, text, true/false, or more complex data.


// valid variable name
// var my_data = 'rida'
// var $myage = 21;
// var myEmail = 'rida@gmail.com'

// Not valid variable name
// var 123mydata = 'rida'
// var my@age = 21;



// ============================
// Data Types Section
// ============================

// Data types define the type of values that a variable can hold.

// Types of Primitive Data types
// hold only single value

// Number: Represents numeric values, including integers and floating-point numbers.
// Example:
// var myFavNum = -5;
// console.log(myFavNum);

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
// var myName = 'vinod';
// console.log(myName);

//? Boolean: Represents a logical entity with two values: true or false.
// Example:
// var isRaining = false;
// var areYouAwesome = true;
// console.log(isRaining);

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:
// var vinod;
// console.log(vinod);

//? Null: Represents the absence of a value. It is often used to
//  explicitly indicate that a variable or object property has no assigned value.
// Example:
// var badMemories = null;
// console.log(badMemories);

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
// const bigNumber = 1234567890123456789012345678901234567890n;

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");


// non primitive store multiple values

// typeof operator
// var myName = 1;
// console.log(myName);
// console.log(typeof myName);

// var badMemories = null;
// console.log(badMemories);
// console.log(typeof null);


// We just need to add the '+' sign before the string
// Example:
// var myFavNum = "10";
// console.log(typeof +myFavNum);
// console.log(typeof Number(myFavNum));

// We just need to add an empty string after the number
// Example:
// var str = 5;
// console.log(typeof (str + 's'));


// Truthy values are treated as true when used in conditions. Examples include:
// 👉 true
// 👉 Any non-empty string ("hello")
// 👉 Any non-zero number (42)
// 👉 Arrays and objects, even if they're not empty

// Falsy values are treated as false in boolean contexts. Examples include:
// 👉 false
// 👉 0 (zero)
// 👉 '' (an empty string)
// 👉 null
// 👉 undefined
// 👉 NaN (Not a Number)

// To check if a non-empty string is truthy or falsy in JavaScript,
//  we can directly use if statement.

// var myName = -5;
// if (true) {
//   console.log("this is truthy value");
// } else {
//   console.log("its a falsy value");
// }

// console.log(isNaN('hi'));
// console.log(isNaN(1));

// NaN === NaN, Why is it false ❓
// if (NaN == NaN) {
//   console.log("both are equal ");
// } else {
//   console.log("not equal");
// }

// console.log(parseInt('@34'));
// console.log(parseInt('!134'));


//* ==========  Data Types End Section ==========

//* ========== parseInt & parseFloat Section ==========
// parseInt and parseFloat are both functions in JavaScript used
// for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it
// to an integer (whole number).
// const myString = "42";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it
// to a floating-point number (decimal number).
// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5

//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid
//  character is encountered.

//! Here are more examples
// console.log(parseInt("123"));
// // 123 (default base-10)
// console.log(parseInt("123", 10));
// // 123 (explicitly specify base-10)
// console.log(parseInt("   123 "));
// // 123 (whitespace is ignored)
// console.log(parseInt("077"));
// console.log(parseFloat("077"));
// // 77 (leading zeros are ignored)
// console.log(parseInt("1.9"));
// +console.log(parseFloat("1.9"));
// 1 (decimal part is truncated)

// When we will not get an Output
// console.log(parseInt("&123"));
// console.log(parseInt("-123"));
// console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

// What is the purpose of the NaN value in JavaScript❓
// NaN stands for "Not a Number" and is returned when a mathematical operation
// doesn't yield a valid number.
// Also, to check whether a value is number or not we can use isNaN() function.

// console.log(isNaN("Rida"));
// console.log(parseInt("xyz"));
// console.log(parseInt("@#$"));


// ========== parseInt & parseFloat End Section =========


// ============================
// Data Types Section - part 2
// ============================

// Concatenation in JavaScript
// In JavaScript, the + sign is not only used for arithmetic addition but also
// for string concatenation. When the + operator is used with strings,
// it concatenates the strings together.
// It's important to note that if any operand of the + operator is a string,
// JavaScript will treat the other operands as strings as well,
// resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.

// const str = "Hello " + "World";
// console.log(str);

// Type coercion is the automatic conversion of "values" from one data type to another.
// It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
// There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
// It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

// let sum = "5" + 10;
// console.log(sum);

//* ============================
//* Tricky Interview Questions
//* ============================
// console.log(10 + "20");
// console.log(9 - "5");
// console.log("Java" + "Script");
// console.log(" " + " ");
// let sum = " " + 0;
// console.log(typeof sum);
// console.log("vinod" - "thapa");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);