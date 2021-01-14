## Not Found 구현

`main.js`
```javascript
var http = require('http');
var fs = require('fs');
var url = require('url');  // url == 모듈  , url이라는 모듈을 사용할 것이고 변수 명은 url이다.
var app = http.createServer(function(request,response){
    var urls = request.url;
    var queryData = url.parse(urls, true).query;
    var title = queryData.id;
    console.log("url : " , url);
    console.log("queryData : " ,queryData);
    console.log("queryData.id : " ,queryData.id);
   
    console.log("url.parse(urls, true) : " , url.parse(urls, true))

    var pathname = url.parse(urls, true).pathname;

    if(pathname === '/'){

        
        fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
            // 왜 console에 값이 두 번씩 찍히냐고...
            // li 태그안에 a 태그 url 부분에  1.html, 2.html ,3.html 대신에
            // id 값을 넣어 undefined 대신에 해당 값을 출력하게 할 수 있었다.
            
            var template = `
            <!doctype html>
            <html>
            <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
            </head>
            <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
            <li><a href="/?id=HTML">HTML</a></li>   
            <li><a href="/?id=CSS">CSS</a></li> 
            <li><a href="/?id=JavaScript">JavaScript</a></li> 
            </ol>
            <h2>${title}</h2>
            <p>
            ${description}
            <p>
            </body>
            </html>
            
            
            `;
            response.writeHead(200);
            response.end(template);
        })
        // 1.html 을 전부 카피해서 넣을거다
        
        
        // response.end(queryData.id);
        // console.log("dddd : " ,__dirname + _url);
        //  response.end(fs.readFileSync(__dirname + _url));
    }else {
        response.writeHead(404);
        response.end('Not found');
    }
        
    });
    app.listen(3000);
    
    // 웹서버로 동작하고 있는 파일이다
    
    // 강의 'URL의 이해' , 'URL 을 통해서 입력된 값 사용하기'
    // '동적인 웹페이지 만들기'
    
// 정적인 파일 3개 1.html , 2.html , 3.html 을 동적인 웹 브라우저로 바꿀 수 있는 node.js의 힘

```

## 구현
var pathname = url.parse(urls, true).pathname;  <br/>

 if(pathname === '/'){
  화면 구현
 }
 
 else 일때는 ??
 
 ```javascript
 else {
        response.writeHead(404);
        response.end('Not found');
    }
 ```
