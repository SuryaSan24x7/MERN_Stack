// 1.Print table of given number(Take input from user)
// 2.Write code to perform addition, substraction, multiplication, division.Take input from user
// 3.Write code to take name from user and write into the file
// 4.Write code to print table of 2 every second into the file
var readline = require("readline")
var inp = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

inp.question("Enter number: ",function(data){
	
    for(var i=0;i<11;i++){
    console.log(data*i)
    }
    inp.close()
   
})
