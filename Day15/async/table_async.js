var fs = require("fs")
var num = 3
var i = 0

function calc(){
    let result = num *i
    fs.appendFile("table_async.txt", result.toString()+"\n", function(err){
        console.log("Data Appended")
        i++;
        if(i < 11){
            calc()
        }
    })
}

calc()