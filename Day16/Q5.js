// 5.Write a server code to serve a welcome.html file on /welcome path and user.html file on /user(Write some HTML code inside html file)
var http = require("http")
var fs = require("fs")

var server = http.createServer(function(req,res){
	var path = req.url
	console.log(path)
	if(path === "/welcome"){
		fs.readFile("welcome.html", function(err, data){
			res.write(data.toString())
			res.end()
		});
	}else if(path === "/user"){
		fs.readFile("user.html", function(err, data){
			res.write(data.toString())
			res.end()
		});
	}else{
		res.write("Wrong path")
		res.end()	
	}
});

server.listen(7000, function(){
	console.log("server running at 7000")
})