// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their 
// scope before code execution. This means that no matter where functions and variables are declared, they are 
// moved to the top of their scope regardless of whether their scope is global or local.

// todo When a function declaration is hoisted, its entire definition (including the body) is moved to the top 
// of its containing scope during the creation phase. This means that you can call the function before it's 
// actually declared in the code, and it will still work as expected.

// Hoisting means JavaScript makes declarations available before the code is executed.


// before execution
// var myVar;
// console.log(myVar);
// function greet() {
//     console.log("Welcome, If you are reading this, Don't forget you are awesome");
// };

// this is hoisting
// console.log(myVar);
// greet();
// var myVar = 10;
// function greet() {
//     console.log("Welcome, If you are reading this, Don't forget you are awesome");
// };


// let and const are hoisted, but they cannot be accessed before initialization because they are in the 
// Temporal Dead Zone (TDZ).

// let myVar = 10;
// const greet = () => {
//   console.log("Welcome, If you are reading this, Don't forget you are awesome");
// };

// console.log(myVar);
// greet();


// / TDZ START 
// Temporal Dead Zone is the time between entering a scope and initializing 
// a let or const variable. During this time, we cannot access the variable.

// console.log(name); // ❌ Cannot access 'name' before initialization

// // TDZ ke andar
// // name ko access nahi kar sakte

// let name = "Rida"; // ✅ TDZ END
//                    // name ab initialize ho gaya

// console.log(name); // ✅ Rida