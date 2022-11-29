var fs =require("fs")
var data = fs.readFileSync("demo.txt")
console.log(data.toString())

var str = "this is new data"
fs.writeFileSync("demo.txt",str)
 var str ="append "
 fs.appendFileSync("demo.txt",str)