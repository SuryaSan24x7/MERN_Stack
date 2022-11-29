// 4.Write a code to read list of numbers from file and perform addition and write into another file
// (Create two file ,First file have comma seperated numbers )

var fs = require("fs")
var data = fs.readFileSync("numbers.txt")
console.log(data.toString())
var fsum = 0 ;
var n = data.toString();
            for(var o=0;o<n.length;o++)
            {
                if(o%2 == 0){
                    fsum = fsum + parseInt(n[o]);
                }
            }
            console.log(n);
            console.log("Sum : "+fsum);
fs.writeFileSync("result_add.txt","Sum : "+fsum)