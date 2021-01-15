var http = require('http');
var fs = require('fs');
var url = require('url');  // url == 모듈  , url이라는 모듈을 사용할 것이고 변수 명은 url이다.
var qs = require('querystring')

function templateHTML(title,list ,body){
    return `
    <!doctype html>
    <html>
    <head>
    <title>WEB2 - ${title}</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/">WEB22</a></h1>
     ${list}
     <a href="/create">create</a>
     ${body}
    <p>
    </body>
    </html>
    
    
    `;
}

function templateList(fileList){
    var list = '<ul>';
    for(var i=0 ; i< fileList.length; i++){

        list = list + `<a href="/?id=${fileList[i]}"><li>${fileList[i]}</li></a>`
    }
    list = list + '</ul>'

    return list;
}



var app = http.createServer(function(request,response){
    var urls = request.url;
    var queryData = url.parse(urls, true).query;
   
   // console.log("url : " , url);
   // console.log("queryData : " ,queryData);
   // console.log("queryData.id : " ,queryData.id);
   
  //  console.log("url.parse(urls, true) : " , url.parse(urls, true))

    var pathname = url.parse(urls, true).pathname;
        
    if(pathname === '/'){
        if(queryData.id === undefined){

            fs.readdir('./data' ,function(error , fileList){
                console.log("fileList ssssss : " , fileList.length);
                var title= "Welcome";
                var description = "Hello, Node.js";
                var list = templateList(fileList);
                var template = templateHTML(title,list ,`<h2>${title}</h2><p>${description}</p>`);

                    response.writeHead(200);
                    response.end(template);
             
            } )
         
        }else{
            fs.readdir('./data' ,function(error , fileList){
                console.log("fileList ssssss : " , fileList.length);
            var title = queryData.id;
            fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
                // 왜 console에 값이 두 번씩 찍히냐고...
                // li 태그안에 a 태그 url 부분에  1.html, 2.html ,3.html 대신에
                // id 값을 넣어 undefined 대신에 해당 값을 출력하게 할 수 있었다.     
                var list = templateList(fileList);
                var template = templateHTML(title, list ,`<h2>${title}</h2><p>${description}</p>`);
                response.writeHead(200);
                response.end(template);
            })
        })
        }        
        // 1.html 을 전부 카피해서 넣을거다  
        // response.end(queryData.id);
        // console.log("dddd : " ,__dirname + _url);
        //  response.end(fs.readFileSync(__dirname + _url));
    }else if(pathname == '/create'){
        fs.readdir('./data' ,function(error , fileList){
            console.log("fileList ssssss : " , fileList.length);
            var title= "WEB- create";
            var list = templateList(fileList);
            var template = templateHTML(title,list ,`
            <form action="/create_process" method="POST">
            <div>
                <input type="text" name="title" placeholder="제목을 입력하세요">
            </div>
            
            <div>
            
                <textarea  name="description" placeholder="내용을 입력하세요"></textarea>
            </div>
             <input type="submit" value="등록" class="btn btn-primary">
            </form>
            
            `);

                response.writeHead(200);
                response.end(template);
         
        } )

    }else if(pathname == '/create_process'){
        var body = '';
        request.on('data' , function(data){
            body += data; // callback 될 때마다 데이터를 추가??
        });

        request.on('end', function(){
                var post = qs.parse(body);
                var title = post.title;
                var description = post.description;
                console.log("post" , post);      // 'end'에 해당하는 callback함수
                fs.writeFile(`data/${title}` ,description, 'utf8', function(err){
                    response.writeHead(200);
                    response.end('success');
                    
                })
        });
    }else {
        response.writeHead(404);
        response.end('Not found');
    }
        
    });
    app.listen(3000);
    
    // 웹서버로 동작하고 있는 파일이다
    
    // 강의 'URL의 이해' , 'URL 을 통해서 입력된 값 사용하기'
    // '동적인 웹페이지 만들기'
    
// 정적인 파일 3개 1.html , 2.html , 3.html 을 동적인 웹 브라우저로 바꿀 수 있는 node.js으 힘
