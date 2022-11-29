// 5.Create a user defined local module greet.js containing a function greet() that greets user based on time
// of the day. If its morning, greet user as "Good morning", if its afternoon, greet user as "Good
// Afternoon" else as "Good Evening"
// Create a main module that will bring in the greet.js module and invoke the greet function

var x = require("./greet")
var dt = new Date()
console.log(dt)
var h=dt.getHours();
var m=dt.getMinutes();
console.log(h+":"+m)
x.greet(dt)

