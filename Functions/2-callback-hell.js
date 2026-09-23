//* ================================
//*  Callback hell
//* ================================

// Callback Hell, also called the Pyramid of Doom, is a situation in asynchronous JavaScript 
// where many callbacks are placed inside other callbacks to perform different tasks. This makes the 
// code very difficult to read, understand, and maintain because it becomes deeply nested.

// const output = () => {
//     setTimeout(() => {
//         console.log('She doesn’t follow the crowd; she creates her own path.');
//         setTimeout(() => {
//             console.log('Wild mind, fearless heart, unstoppable soul.');
//             setTimeout(() => {
//                 console.log('She was never made to fit in');
//                 setTimeout(() => {
//                     console.log('Rules are suggestions when you’re born to be different.');
//                     setTimeout(() => {
//                         console.log('She’s not difficult—she’s just impossible to control');
//                         setTimeout(() => {
//                             console.log('A little rebel, a lot of ambition');
//                             setTimeout(() => {
//                                 console.log('She walks alone because her vision is her own.');
//                                 setTimeout(() => {
//                                     console.log('Not everyone will understand her, and she’s perfectly fine with that.');
//                                     setTimeout(() => {
//                                         console.log('She doesn’t chase approval; she chases her dreams.');
//                                         setTimeout(() => {
//                                             console.log('Different by nature, fearless by choice.');
//                                             setTimeout(() => {
//                                                 console.log('She doesn’t follow the crowd; she creates her own path.');

//                                             }, 1000)
//                                         }, 1000)
//                                     }, 1000)
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }

// output();
// to avoid this problem we use promises
