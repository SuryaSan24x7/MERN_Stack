// 1.Write a code to print fibonacci number till 100
var fs =require("fs")
var num =0 ;
var num1 =1 ;
for(var i=1;i<20;i++){
   if(num>=100){
    break;
   }
    fs.appendFileSync("fibonacci.txt",num+"\n")
    console.log(num);
    let next=num + num1;
    num = num1;
    num1 =next;
}