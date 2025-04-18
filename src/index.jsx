import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />); 

//const newNumbers = numbers.map( x => x * x);

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
const newNumbers = numbers.map(x => x*2);
console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
const newNumbers2 = numbers.filter(num => num <10);
console.log(newNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
const newNumbers3 = numbers.reduce((accumulator,currentNumber) => accumulator + currentNumber);
console.log(newNumbers3);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
const newNumbers4 = numbers.find(num => num >10);
console.log(newNumbers4);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
const newNumbers5 = numbers.findIndex(num => num >10);
console.log(newNumbers5);
