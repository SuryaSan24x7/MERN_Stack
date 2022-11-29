var a = 100
var arr = [100,200,300]
//	var x = arr
var x = [...arr] // [100,200,300]
arr.push(400)
console.log(arr)
x.push(500)
console.log(arr)

var obj = {
	name : "Siddhant"
}
//var y = obj
var y = {
	...obj
}
y.email = "sid@gmail.com"
console.log(obj)