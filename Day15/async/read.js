// 3.Read data from file(create a dummy file and write some data in it)
var fs = require("fs")
fs.readFile("read.txt",function(err,data){
    console.log(data.toString())
})
