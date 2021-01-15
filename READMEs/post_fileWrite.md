## POST , 파일생성과 리다이렉션


-------------------------------------

- POST 와 파일 생성
url이 /create 로 갔을 때, form 형식이 보이는 페이지를 만들었다.

#### /create

```javascript
else if(pathname == '/create'){
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

```

form에서 post로 데이터를 보내는데, 보내는 url은 /create_proecess 이다

#### /create_process

```javascript
else if(pathname == '/create_process'){
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

```

fs.writeFile을 이용해
form에서 제목으로 보낸 것을 파일 이름으로 생성할 수 있었다.

![image](https://user-images.githubusercontent.com/66653324/104668696-f0c35a00-571b-11eb-91ca-f93b4fa7104e.png)



![image](https://user-images.githubusercontent.com/66653324/104668780-1486a000-571c-11eb-9506-fddfe28b4cf6.png)

-------------------------------------------

- 리다이렉트

```javascript

 fs.writeFile(`data/${title}` ,description, 'utf8', function(err){
                    response.writeHead(302,{Location: `/?id=${title}`});
                    response.end();
                    
                })

```

302 포트?? 로 보낸 뒤 template literal 으로 해당 url을 지정하면

리다이렉트 끝!!
