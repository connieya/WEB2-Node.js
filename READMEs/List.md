## 글목록 출력하기


### Home 화면일때(undifined) 와 아닐 때 값 구분하기

`main.js`
```javascript
var http = require('http');
var fs = require('fs');
var url = require('url');  // url == 모듈  , url이라는 모듈을 사용할 것이고 변수 명은 url이다.
var app = http.createServer(function(request,response){
    var urls = request.url;
    var queryData = url.parse(urls, true).query;
   
    console.log("url : " , url);
    console.log("queryData : " ,queryData);
    console.log("queryData.id : " ,queryData.id);
   
    console.log("url.parse(urls, true) : " , url.parse(urls, true))

    var pathname = url.parse(urls, true).pathname;

    if(pathname === '/'){
        if(queryData.id === undefined){

            fs.readdir('./data' ,function(error , fileList){
                console.log("fileList ssssss : " , fileList.length);
                var title= "Welcome";
                var description = "Hello, Node.js";
                var list = '<ul>';

                for(var i=0 ; i< fileList.length; i++){
                    list = list + `<a href="/?id=${fileList[i]}"><li>${fileList[i]}</li></a>`
                }
                list = list + '</ul>'

                var template = `
                    <!doctype html>
                    <html>
                    <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                    </head>
                    <body>
                    <h1><a href="/">WEB</a></h1>
                   ${list}
                    <h2>${title}</h2>
                    <p>
                    ${description}
                    <p>
                    </body>
                    </html>
                    
                    
                    `;
                    response.writeHead(200);
                    response.end(template);
             
            } )
         
        }else{
            fs.readdir('./data' ,function(error , fileList){
                console.log("fileList ssssss : " , fileList.length);
                var title= "Welcome";
                var description = "Hello, Node.js";
                var list = '<ul>';

                for(var i=0 ; i< fileList.length; i++){
                    list = list + `<a href="/?id=${fileList[i]}"><li>${fileList[i]}</li></a>`
                }
                list = list + '</ul>'
            
            var title = queryData.id;
            fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
                var template = `
                <!doctype html>
                <html>
                <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
                </head>
                <body>
                <h1><a href="/">WEB</a></h1>
                 ${list}
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
        })
        }        
       
    }else {
        response.writeHead(404);
        response.end('Not found');
    }
        
    });
    app.listen(3000);
    

```

#### 파일 목록 알아내기를 통해서 실행
```javascript
   fs.readdir('./data' ,function(error , fileList){
   
     console.log("fileList ssssss : " , fileList.length);
   }
```   
   
```javascript
    var list = '<ul>';

                for(var i=0 ; i< fileList.length; i++){
                    list = list + `<a href="/?id=${fileList[i]}"><li>${fileList[i]}</li></a>`
                }
                list = list + '</ul>'

```
