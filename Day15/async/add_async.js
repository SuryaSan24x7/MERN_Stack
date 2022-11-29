// 4.Write a code to read list of numbers from file and perform addition and write into another file
// (Create two file ,First file have comma seperated numbers )

var fs = require("fs")

fs.readFile("numbers.txt",function(err,data){
    var str = data.toString()
    var list = str.split(",")
    var i = 0
    var fsum = 0
    function add(){
        fsum += parseInt(list[i])
        i++
        if(i<list.length){
            add()
        }
    }
    add()
    fs.writeFile("result_add.txt",fsum.toString(),function(err){
        console.log("data written")
    })
})
