// 5.Create a user defined local module greet.js containing a function greet() that greets user based on time
// of the day. If its morning, greet user as "Good morning", if its afternoon, greet user as "Good
// Afternoon" else as "Good Evening"
// Create a main module that will bring in the greet.js module and invoke the greet function
exports.greet = function (dt) {
    if (dt.getHours() >= 05 && dt.getHours() < 12) {
        console.log("Good Morning")
    }

    else if (dt.getHours() >= 12 && dt.getHours() < 16) {
        console.log("Good Afternoon!")
    }
    else if (dt.getHours()>=16 && dt.getHours()<20){
        console.log("Good Evening!")
    }
    else if (dt.getHours()>=20 && dt.getHours()<05){
        console.log("Good Night!")
    }
}

