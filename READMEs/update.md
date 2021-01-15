## 파일 수정

`꿀팁`

구글에 node.js rename 검색

stackoverflow에 자료 진짜 많음


1. update를 눌렀을 때

```javascript
else if(pathname == `/update`){
        fs.readdir('./data' ,function(error , fileList){
    
             var title = queryData.id;
        fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
            var list = templateList(fileList);
            var template = templateHTML(title, list ,
                ` <form action="/update_process" method="POST">
                <div>
                <input type="hidden" name="id" value="${title}" placeholder="제목을 입력하세요">
                </div>
                <div>
                    <input type="text" name="title" value="${title}" placeholder="제목을 입력하세요">
                </div>
                
                <div>
                
                    <textarea  name="description" placeholder="내용을 입력하세요">${description}</textarea>
                </div>
                 <input type="submit" value="등록" class="btn btn-primary">
                </form>
                `,
                `  <a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
            response.writeHead(200);
            response.end(template);
        })
    })

```
파일을 그대로 읽어온다
body 부분에는 수정하기 위한 form 을 만든다
여기서 중요한 것은 hidden 값으로 title을 폼을 하나 더 만들어야한다.

왜냐하면 제목을 바꾸는 것을 그대로 데이터 값으로 제공하면
node.js는 변경된 제목을 찾는데, 실제로 변경된 제목은 없기 때문이다.

form action으로 /update_process 설정

---------------------------------------------


2. 값을 수정하고 버튼을 눌렀을 때

```javascript
else if(pathname === '/update_process'){

        var body = '';
        request.on('data' , function(data){
            body += data; // callback 될 때마다 데이터를 추가??
        });

        request.on('end', function(){
                var post = qs.parse(body);
                var id = post.id;
                var title = post.title;
                var description = post.description;
                

                fs.rename(`data/${id}` , `data/${title}`,function(err){

                    fs.writeFile(`data/${title}` ,description, 'utf8', function(err){
                    response.writeHead(302,{Location: `/?id=${title}`});
                    response.end("success");
                    
                 }) // java ,jsp 에서 insert 
                })
                
        });

    }
```

히든값을 들고온 id값이 기존 제목이고 title 값이 변경된 제목이기 때문에

fs.rename으로 해당 데이터를 각 각 넣어준다.
