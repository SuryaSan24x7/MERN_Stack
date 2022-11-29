// 3.Read data from file(create a dummy file and write some data in it)
var fs = require("fs")
var data = fs.readFileSync("read.txt")
console.log(data.toString())