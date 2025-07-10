"use strict";

// hoisting
var age;
console.log(age); // undefined
age = 26;

// var message = "hello world";
// var message = "hello again";

// browser - window
// server - global

// console.log(message);

// var console = 'hi'
// console.log("hi");

// 1) sloppy "normal" mode - default in scripts
// 2) strict mode - throws more errors, prevents pitfalls of the language