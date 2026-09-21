//* ==========================================
//*    ECMAScript Features (2018) / ES9
//* =========================================

//? List of new useful features added in ES8  👇
// Rest/Spread Properties
// Promise.prototype.finally()

//* ============================
//*  Rest/Spread Properties
//* =============================

//? ES6 introduced the concept of a rest element when working with array destructuring:
// Rest (...) collects the remaining values, while Spread (...) unpacks the values.

// const numbers = [1, 2, 3, 4, 5];

// Spread (...) → Array ki values ko unpack/bahar nikal kar alag-alag karta hai.
// console.log(...numbers);

// Rest (...) → Remaining/bachi hui values ko collect karta hai.
// [first, second, ...others] = numbers;

// and spread elements:
// const numbers = [1, 2, 3, 4, 5]
// const sum = (a, b, c, d, e) => a + b + c + d + e;
// const sumOfNumbers = sum(...numbers)
// console.log(sumOfNumbers);


//* ES2018 introduces the same but for objects.

//? Object and Rest Operator
// const student = {
//   age: 10,
//   name: "rida",
//   isStudent: true,
// };

// const { age, ...others } = student;
// console.log(others);

//? Object and Spread operator
// const obj1 = { a: 10, b: 20, c: 50 };
// const obj2 = { c: 30, d: 40 };

// const newObj = { ...obj1, ...obj2 };
// console.log(newObj);
// override
// const newObj = { ...obj2, ...obj1 };
// console.log(newObj);

//* ============================
//*  Promise.finally()
//* =============================
//? We will cover later in our Promises section part of the video and you gonna love that part.