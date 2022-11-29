//For filehandling use nodejs builtin modules
var fs = require("fs")

//Read the file
var data = fs.readFileSync("demo.txt")
//readFileSync returns the buffer type
console.log(data.toString())
var y = data.toString()

var str = "THis is new data"
fs.writeFileSync("demo.txt",str)
//OverWrite data in the file if file exists if not creates new file

var str = "I am appending data"
fs.appendFileSync("demo.txt",str)
//Append the data to the file and if file not exists it creates the file