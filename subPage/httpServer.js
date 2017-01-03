/**
 * Created by Administrator on 2016/12/30.
 */
var http = require("http");
var path = require("path");
var express = require("express");

var app = express();

var publicPath = path.resolve(__dirname, "public");//通过path.resolve方法解决文件路径跨平台问题
//express.static("路径")这个中间件，可以实现访问静态页面
app.use(express.static(publicPath));

// 处理用户的提交的页面
app.get("/subPoster", function (request, response) {

});

http.createServer(app).listen("8080", function () {
    console.log("web服务器正运行在8080端口");
});