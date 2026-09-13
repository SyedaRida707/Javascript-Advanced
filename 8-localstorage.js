//============================== LocalStorage ====================================
// The localStorage object allows you to save key/value pairs in the browser.
// The localStorage object stores data with no expiration date.
// The data is not deleted when the browser is closed and is available for future sessions.
// What we will cover
// ✱ How to add / store data in localStorage.
// ✱ How to get / retrieve data from localStorage.
// ✱ How to remove data from localStorage.



// How to add the data from localStorage
// localStorage.setItem("user", "rida");

// localStorage.clear();

// How to get the data from localStorage
// localStorage.getItem("user");
// console.log(localStorage.getItem('user'));

// How to remove the data from localStorage
// localStorage.removeItem("user");

// Before storing an object/array in LocalStorage → JSON.stringify()
// After getting an object/array from LocalStorage → JSON.parse()

// Method	Converts
// JSON.stringify()	JavaScript Object → JSON String
// JSON.parse()	JSON String → JavaScript Object

// STRINGIFY → Make it a string
// PARSE → Convert the string back

// todo Local Storage can only store strings, so when you want to store a complex data structure 
// like an array or an object, you need to convert it to a string using JSON.stringify:

// const data = { name: "rida", age: 21, city: "karachi" };
// const jsonString = JSON.stringify(data)
// console.log(jsonString);
// Output: '{"name":"Vinod","age":30,"city":"pune"}'

// const jsonString = localStorage.setItem('userinfo', JSON.stringify(data));
// console.log(JSON.parse(localStorage.getItem('userinfo')));

// JSON.parse: Converts a JSON string into a JavaScript object.
// Useful when you receive JSON data from a server or read it from a file,
// and you want to work with it as a JavaScript object.

// const jsonString = '{"name":"rida","age":21,"city":"karahi"}';
// const parsedData = JSON.parse(jsonString);
// console.log(parsedData);
// Output: { name: 'Vinod', age: 30, city: 'pune' }

// const getobject = JSON.parse(localStorage.getItem('userinfo'));
// console.log(getobject);

// Example
const students = {
    name: 'rida',
    age: 21,
    courses: {
        course1: 'backend',
        course2: 'frontend'
    },
    city: 'karachi'
}
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
    localStorage.setItem('UserObject', JSON.stringify(students));
});
btn2.addEventListener('click', () => {
   let get = JSON.parse(localStorage.getItem('UserObject'));
   console.log('get data ',get);  
});
btn3.addEventListener('click', () => {
  let remove =  localStorage.removeItem('UserObject');
  console.log('remove data', remove); 
});
