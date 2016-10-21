var fs=require("fs");

/*var list=fs.readdirSync("../nodejs");
list.forEach(function(item){
	process.stdout.write(item);
	if(fs.statSync("../nodejs/"+item).isDirectory()){
		process.stdout.write(" 文件夹");
	}
	process.stdout.write(" \n");
})*/
var path=require("path");
function readDir(pathDir){
var arr=[];
function listDir(pathDir){	
	var list=fs.readdirSync(pathDir);
	list.forEach(function(item){
		//process.stdout.write(item);
		var itemPath=path.join(pathDir,item)
		if(fs.statSync(itemPath).isDirectory()){
			process.stdout.write(" 文件夹");
			listDir(itemPath);
	}else{
		arr.push(item);
		//arr.push(item+);
	}
	});
}
	listDir(pathDir);
	return arr;
}

console.log(readDir("../nodejs"));