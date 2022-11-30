// 2.Write code to perform addition, substraction, multiplication, division.Take input from user
var readline = require("readline")
var inp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inp.question("Enter number 1 : ", function (num1) {
    inp.question("Enter number 2 : ", function (num2) {
        inp.question("Enter operation : ", function (opr) {
            inp.close()
            switch (opr) {
                case "add": var result = parseInt(num1) + parseInt(num2)
                    console.log(result)
                    break;
                case "sub": var result = parseInt(num1) - parseInt(num2)
                    console.log(result)
                    break;
                case "mult": var result = parseInt(num1) * parseInt(num2)
                    console.log(result)
                    break;
                case "div": var result = parseInt(num1) / parseInt(num2)
                    console.log(result)
                    break;
                case "mod": var result = parseInt(num1) % parseInt(num2)
                    console.log(result)
                    break;
                default: console.log("Enter valid Operatiion")
                    break;


            }
        }
        )
    })
})