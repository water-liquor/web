var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
	/*if(req.url=="/"){
		filename="./index.html";
	}else{
		filename="."+req.url;
	}*/
	//console.log("有人来了");
	console.log(req.url);
	fs.readFile("."+req.url,function(err,data){
		res.writeHead(200,{"content-type":"text/html;charset='utf8'"});
		res.write(data+"");
	})
})
server.listen(9000);
console.log("listen 9000……");