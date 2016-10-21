var http=require("http");
var fs=require("fs");
var url=require("url");
var server=http.createServer(function(req,res){
	var para=url.parse(req.url,true).query;   //讲一个URL字符串转换成对象并返回
	console.log(para);
	if(req.url=="/"){
		filename="./index3.html";
	}else{
		filename="."+req.url;
	}
	//console.log("有人来了");
	console.log(req.url);
	fs.readFile("."+req.url,function(err,data){
		res.writeHead(200,{"content-type":"text/html;charset='utf8'"});
		res.write(data+"");
		res.write(para.userid+","+para.fav);
	});
});
server.listen(9000);
console.log("listen 9000……");