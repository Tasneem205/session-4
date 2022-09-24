const fs = require("fs");
/*
fs.readFile("myFile.text", (err, data)=>{
    if(err){
        return console.log(err);
    }
    console.log(data.toString())
});

fs.writeFile("name.txt","Good Evening",(err)=>{
    if(err){
        return console.log(err);
    }
});

fs.stat("name.text", (err, stats)=>{
    if(err){
        return console.log(err);
    }
    console.log("status", stats);
    console.log("status", stats.isFile());
    console.log("status", stats.isDirectory());
});

fs.unlink("input.text", (err)=>{
    if(err){
        return console.log(err);
    }
    console.log("File deleted successfully");
});
fs.mkdir("test", (err)=>{
    console.log("Directory created successfully");
});

fs.readdir("test", (err, files)=>{
    if(err){
        return console.log(err);
    }
    files.forEach((file)=>{
        console.log(file);
    });
});

const os = require("os");
console.log(os.type());
console.log(os.platform());
console.log(os.version());
console.log(os.release());
console.log(os.uptime()/3600);
console.log(os.totalmem());

const path = require("path");
*/
const http = require("http");
const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url === "/"){
        res.write("<html>");
        res.write("<head> <title> html stuff </title></head>");
        res.write("<body>Hi there </body>");
        res.write("</html>");
        return res.end();
    }else if(url === "/users"){
        res.write("<html>");
        res.write("<head> <title>Users</title></head>");
        res.write("<body>this is users page</body>");
        res.write("</html>");
        return res.end();
    }else{
        res.write("<html>");
        res.write("<head> <title>home page</title></head>");
        res.write("<body>home page</body>");
        res.write("</html>");
        return res.end();
    }
});
server.listen(5000, ()=>{
    console.log("server is running...");
});

/*
1- GET => no data is sent i mean it is not secure
2- POST => secure
3- DELETE => deletes info
4- PUT => append info 
*/