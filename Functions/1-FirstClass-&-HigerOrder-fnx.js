//* ---------------------------------------------------
//*  First-Class Function - it's just a concept
//* ---------------------------------------------------
// A language feature where functions are treated as first-class citizens.
// Functions can be assigned to variables, passed as arguments to other functions, and returned 
// from other functions.

// A "first-class function" means that functions can be treated as values, assigned to variables, 
// and passed around as arguments.

// // Function declaration
// function sayHello(name) {
//   return "Hello, " + name + "!";
// }

// // // Assigning the function to a variable
// var greetFunction = sayHello;

// // // Using the variable as a function
// console.log(greetFunction("rida"));

// Example 1
// function sum(a, b) {
//     return a + b;
// }
// // returned from other functions.
// const result = () => {
//     return sum;
// }
// const calculate = result();
// console.log(calculate(1, 3));


// Example 2
// function sum(a, b) {
//     return a + b;
// }
// const calculate = sum;
// const result = (run) => {
//     return run(1,2);
// }
// // passed as arguments to other functions,
// console.log(result(calculate));

//* -------------------------------
//*  Higher-Order Functions:
//* -------------------------------
//? Definition: A higher-order function is a function that takes one or more functions as arguments or 
// returns a function as a result.

//* -------------------------------
//*  Callback Functions:
//* -------------------------------
//? Definition: A callback function is a function passed as an argument to another function 
// and is executed after the completion of a task.

// const output = (name, callback) => {
//     console.log('output', name);
//     callback(name);
// }
// // Function to be used as a callback
// const greet = (name) => {
//     console.log(`hello ${name}`);
// }
// // function passed as an argument to another function so its Higher-Order Functions
// output('rida', greet);


// output is a higher-order function because it takes another function (callback) as an argument.
// greet is a callback function because it's passed as an argument to output and gets executed 
// after the completion of the main task

//* -------------------------------
//*  Closure:
//* -------------------------------

//? A closure is created when an inner function has access to the variables of its outer function, 
// even after the outer function has finished executing.

// function multiplier(factor) {
//   return function (number) {
//     console.log(number, factor);
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// console.log(double(5));

// * also one more example
// function outerFunction() {
//   var outerVariable = "I'm from outer";

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// var closureFunction = outerFunction();
// closureFunction(); // Outputs: "I'm from outer"

// Here when we are calling the closureFunction() it is actually going to call the innerFunction() 
// but in our executionContext the outerFunction is already popped  out. Still we can access the 
// outerVaribale value and how we are able to access it, is what closure all about ?

// We just need to know that an inner function has always access to the variables of the 
// outer (parent) function. That's it.

// Why is it like that? It's because the variable object of the parent function stays in memory 
// even after the function returns, and our inner function has access to this variable object 
// through the scope chain.

// It might be beneficial to clarify that the call stack is simply the execution order and it is not 
// the same thing as the computer's memory, which is where the variables are held.  So even though 
// the function was removed from the call stack, its variables are still maintained in memory until 
// they are no longer needed and garbage collection comes and removes them.

//* ===================================
//* Interview Question:
//* ===================================
//! Write a program to perform mathematical operations using callback functions and two variables in JavaScript.

//? Instructions:
//? Define a higher-order function called mathOperation that takes three arguments: x, y, and operation.
//? Implement two callback functions:
//? add: Takes two numbers x and y and returns their sum.
//? sub: Takes two numbers x and y and returns the result of subtracting x from y.
//? Use the mathOperation function to perform addition and subtraction operations on two variables a and b.
//? Display the results of the operations.

// const operation = (x, y, callback) => {
//     return callback(x, y);
// }
// const add = (a, b) => {
//     return a + b
// }
// const sub = (a, b) => {
//     return a - b
// }
// console.log(operation(2,4,add));
// console.log(operation(7,4,sub));