// 4.Write code to print table of 2 every second into the file
var readline = require("readline");
var fs = require("fs");
var inp =readline.createInterface({
    input :process.stdin,
    output :process.stdout

});
inp.question("Enter number: ",function(num){
	
    
    var i = 1
    var int = setInterval(function(){
        console.log(num*i)
        var result=num*i;
        fs.appendFile("Q4.txt",result.toString()+" ",function(err){
            console.log("data written")})
        i++
        if(i > 10){
            clearInterval(int)
        }
    },2000)
    inp.close()
   
})
