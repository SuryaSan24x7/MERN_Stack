// 3.Write code to take name from user and write into the file
var readline = require("readline");
var fs = require("fs");
var inp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inp.question("Enter Name : ",function(data){
fs.writeFile("Q3.txt",data,function(err){
    console.log("data written")})
    inp.close();
})