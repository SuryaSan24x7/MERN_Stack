// 2.Write a code to write table of 3 to file
var fs = require("fs")

var num = 3

for(var i = 1; i < 11 ; i++){
    let result = num * i
    fs.appendFileSync("table.txt", result.toString()+"\n")
}
