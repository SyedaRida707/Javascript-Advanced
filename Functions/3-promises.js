//* ==========================================
//*  Promise in JavaScript
//* ==========================================

// Promise ek object hai jo batata hai ke future me koi kaam complete hoga ya fail hoga.

// 3 States of promise
// Pending  =>  Kaam chal raha hai
// Fulfilled (Resolved)  =>  Kaam successful ho gaya
// Rejected  =>  Kaam fail ho gaya

// ---------------------------------------
// Real-Life Example: ATM 💳

// Socho tum ATM se paise nikal rahe ho.

// ⏳ Pending → ATM abhi paise count kar raha hai.
// 💵 Resolved → Paise mil gaye.
// ❌ Rejected → Transaction fail ho gayi.
// -----------------------------------------


//              Create Promise
//                     │
//                     ▼
//                  Pending
//                     │
//               ┌─────┴─────┐
//               ▼           ▼
//            resolve()   reject()
//               ▼           ▼
//            .then()     .catch()

//? Promises have built-in methods like then and catch to handle the results of 
// asynchronous operations when they complete or failed, making it easier 
// to write asynchronous code that is more readable and maintainable compared to 
// traditional callback-based approaches.


// Promise = Future me milne wala result.
// resolve() = Success.
// reject() = Error.
// .then() = Success ka result receive karta hai.
// .catch() = Error handle karta hai.
// .finally() = no matter what this must be run
// setTimeout() = Asynchronous kaam ko simulate karne ke liye use hota hai.

//* ==========================================
//* Using the Promise Constructor (Class):
//* ==========================================

//  JavaScript mein Promise banane ke liye `new Promise()` use karte hain.
//  `Promise` ek class hai.
//  `new Promise()` se us class ka naya object (instance) banta hai.
//  Iske andar ek function dete hain, jise executor function kehte hain.
//  Executor function ko do parameters milte hain:

//   * `resolve` → jab kaam successfully complete ho ✅
//   * `reject` → jab koi error/problem ho ❌

// *  Promise → Executor Function → resolve / reject**
// * `resolve()` = Success ✅
// * `reject()` = Error/Failure ❌
// * `instance` = class se banaya gaya actual object

// Example 1 (Success) ===================================

// const myPromise = new Promise(function (resolve, reject) {
//     setTimeout(()=>{
//         resolve('i am successful');
//     },2000);
// });
// console.log(myPromise);

// Example 2 (Failure) ===================================

// const myPromise = new Promise(function (resolve, reject) {
//     resolve('i am successful');
// });
// console.log(myPromise);


// Example 3 (Pending) ===================================

// const myPromise = new Promise(function (resolve, reject) {
//     reject('i am reject');
// });
// console.log(myPromise);

// output
// myPromise → Promise object
// rejected → Promise ki state
// "I am rejected" → result/reason

//* ==========================================
//* 2: Using a Function (Promise Wrapper):
//* ==========================================
// Hum ek function bana sakte hain jo Promise return karta hai.
// Ye function usually asynchronous kaam karta hai.
// Function ke andar manually new Promise() banate hain.
// Kaam successful ho → resolve() ✅
// Kaam mein error ho → reject() ❌


// syntax
// function myPromise() {
//     return new Promise((resolve, reject) => {
//         // resolve('successful ☺');
//         // reject('rejected 💔');
//     });
// }
// // console.log(myPromise());
// myPromise().then((respose) => console.log(respose)).catch((error) => console.log(error));


// Example
// const order = new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//     // resolve('your order is here 🍕');
//     resolve('your order is reject');
//  },2000);
// })
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))
// .finally(()=> console.log(`Thank you for ordering! 🍕`));

// 1: By default promise has the pending state
// 2: the moment we use setTimeout, we need to handle promises, we can do using then and catch
// 3: finally() always runs, whether the Promise is resolved (fulfilled) or rejected.

//* ==========================================
//* Promise Methods
//* ==========================================

//? Promise.all is used when you want to wait for all promises to complete successfully.
// Reject state will throw an error.

//? Promise.allSettled is used when you want to wait for all promises to complete,
// regardless of success or failure, and get information about their outcomes.

//? Promise.race is used when you are interested in the result of the first promise that completes,
// regardless of success or failure.

// Example usage:

// The enrollStudent function returns a promise that resolves or rejects based on the success or failure of the enrollment process.
// The then method is used to handle the success case, printing a success message.
// The catch method is used to handle the failure case, printing an error message.
// The finally method is used to print a message indicating the completion of the enrollment process, whether successful or not.

// Example usage:
// const studentName = "Vinod";

// const enrollStudent = (studentName) => {
//   return new Promise((resolve, reject) => {
//     // Simulating asynchronous enrollment process
//     setTimeout(() => {
//       const isSuccessful = Math.random() > 0.4;

//       if (isSuccessful) {
//         resolve(`Enrollment successful for ${studentName}`);
//       } else {
//         reject(`Enrollment failed for ${studentName}. Please try again.`);
//       }
//     }, 2000);
//   });
// };

// enrollStudent(studentName)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Enrollment process completed.");
//   });

// const promise1 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("First"), 2000)
// );

// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Second"), 5000)
// );

// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Failed"), 100)
// );

// const promise3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Third"), 1000)
// );

// Promise.all([promise1, promise3, promise2])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.race([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });