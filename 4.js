var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '姓名<input name="name"><br>' +
  '成绩<input name="score"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
  if(body.name && body.score) { //判断成绩并输出
    if(body.score < 60) 
        res.write(body.name+"不及格");
    else if(body.score>=60&&body.score<85)
		res.write(body.name+"及格");
	else if(body.score>=85&&body.score<90)
		res.write(body.name+"-良好");
	else res.write(body.name+"-优秀"); 
  }
   else {  // 输出表单
   res.write(postHTML);};
    res.end();
  });
}).listen(3000);


console.log('Server running at http://127.0.0.1:3000/');