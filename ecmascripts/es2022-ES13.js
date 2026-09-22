//* ==========================================
//*    ECMAScript Features (2022) / ES13
//* =========================================

//? List of new useful features added in ES8  👇
// .at() function for indexing
// Object.hasOwn(obj, propKey)

//* ===============
//*  .at()
//* =============
// Before ES2022, we used square brackets [] to access an element in an array.This was easy when 
// accessing elements from the start of the array.JavaScript did not directly support negative indexing.
// To access an element from the end, we used:arr[arr.length - N]arr.length gives the total number of elements.
// N represents the position from the end.

//? The .at() method introduced in ES2022 has simplified this process. In a case of positive indexing, 
// .at() will work the same as the square brackets. But for negative indexing, the .at() method allows 
// starting the iteration from the end.

// const array = [1, 2, 4, 5, 6, 7];
// // console.log(array[array.length - 1]);
// console.log(array.at(-1));
// console.log(array.at(2));

// const str = 'rida';
// console.log(str.at(-1));
// console.log(str.at(3));

// Uint8Array JavaScript ka ek special type of array hai, jise Typed Array kehte hain.
// const specialarray = new Uint8Array([10,20,30]);
// console.log(specialarray.at(0));
// console.log(specialarray.at(-3));

//todo Note Datatypes supporting this function. 👇
// String
// Array
// All Typed Array classes: Uint8Array etc.

//* =====================================
//*  Object.hasOwn(obj, propKey)
//* =====================================
//? Object.hasOwn()Object.hasOwn() is used to check if a property exists in an object.
// It returns true if the property belongs directly to the object.
// It returns false if the property does not exist or is inherited from another object.
// It takes two arguments:
// 1 The object
// 2 The property name you want to check
// Object.hasOwn(object, "property") → checks if the property directly belongs to the object.

//Object.hasOwn() is the recommended alternative to Object.prototype.hasOwnProperty().
// Object.prototype.hasOwnProperty() has been part of JavaScript for a long time, but it has some disadvantages.


// const book = {
//   name: "World Best JS Course",
//   author: "Syeda",
// };

// // Using Object.prototype.hasOwnProperty() method
// console.log(book.hasOwnProperty("name")); //Output: true
// console.log(book.hasOwnProperty("price")); //Output: false

// // Using Object.hasOwn method
// console.log(Object.hasOwn(book, "name"));

// const student = Object.create(book);
// student.age = 21;
// console.log(Object.hasOwn(student,'age'));
// console.log(Object.hasOwn(student,'author'));

// age belongs directly to student.
// author does not belong directly to student; it comes from book.
// So author is an inherited property.


//! Issues with hasOwnProperty
//? Issue 01: Doesn't work for objects created using Object.create(null)

// const student = Object.create(null);
// console.log(typeof student);
// student.name = "rida";
// console.log(student);
// console.log(student.hasOwnProperty("name"));
// console.log(Object.hasOwn(student, "name"));