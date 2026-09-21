//* ==========================================
//*    ECMAScript Features (2017) / ES8
//* =========================================

//? List of new useful features added in ES8  👇
// String padding
// Object.values()
// Object.entries()
// Trailing commas in function parameter lists and calls
// Async functions

//* =====================
//*  String padding
//* =====================

//? String padding in JavaScript is a way to add extra characters (like spaces) to a string to make it a 
// specific length.

//todo  Use Case: Makes formatting text easier and more predictable, especially for tables, alignments, 
// and UI elements. No more messy, uneven lines disrupting your visual spells!

//? Using padStart() to pad from the beginning:
// const companyName = "rida";
// Don't give the same length as the string; it won't add anything.
// const paddedName = companyName.padStart(4);

// "rida" ki length 4 hai, aur humne 15 diya.Isliye beginning mein 11 spaces add hongi:
// const paddedName1 = companyName.padStart(15, '*');
// console.log(paddedName1);
// console.log(paddedName.length);

//? Using padEnd() to pad from the end:
// const paddedName = companyName.padEnd(15);
// const paddedName2 = companyName.padEnd(15, "$");
// console.log(paddedName2);
// console.log(paddedName1,paddedName2);


//todo Key points:
// padStart() and padEnd() create a new string without changing the original string.
// They take two arguments:
// targetLength: The total length of the new string.
// padString: The character or string used for padding. It defaults to spaces.
// If the original string is already the same length or longer, nothing is added.

//* =====================
//*  trailing commas
//* ====================
//? This feature allows to have trailing commas in function declarations, functions calls, 
// array literal & object literal:
// mean
// 3. Trailing Commas  =>  Last item ke baad comma , lagana Trailing Comma kehlata hai. 
// Ye error nahi deta aur future me new items add karna easy ho jata hai.


// // Function parameter list
function greet(name, age, boolean,) {
    console.log(`Hello ${name}, you are ${age} years old.`);
}

// // Function call
greet("John", 30, true,);
// Last comma allowed hai.

// // Array literal
const colors = ["red", "green", "blue",];
 // Last comma allowed hai.

// // Object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
 // Last comma allowed hai.

// blue,   // ← trailing comma
// age: 30, // ← trailing comma
// true,   // ← trailing comma

// Use Case  => Jab baad me new value add karni ho to code edit karna easy 
// ho jata hai aur Git me unnecessary changes bhi kam hote hain.

// Use Case: Trailing commas make it easier to add new values later because we only 
// need to add a new line without changing the previous line. 
// This also helps reduce unnecessary changes in Git.

//* ======================================
//*  Object.entries() & Object.values()
//* ======================================
//? We have already covered in our Objects Section. Please watch the section for same

//* ======================================
//*  Async Await - Async Functions
//* ======================================
//? We will cover later in the video and you gonna love that part & our final project is based on async await .