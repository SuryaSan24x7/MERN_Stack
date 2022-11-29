var fs = require("fs")

var num = 2

for(var i = 1; i < 11 ; i++){
    let result = num * i
    fs.appendFileSync("demo.txt", result.toString()+"\n")
}
