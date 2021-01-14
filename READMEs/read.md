## Node.js의 파일 읽기 기능


`main.js`
```javascript
   fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
   
   }

```

![image](https://user-images.githubusercontent.com/66653324/104555425-30893380-5681-11eb-91dd-a69ec5544859.png)

main.js 기준으로
<br/>
data 폴더안에 있는 파일들을 불러와야한다.
=> `data/${queryData.id}`

그리고 불러온 값을 변수 description에 담았다.


```javascript
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

```

<p>태그 안에 해당 description 파일을 넣었다.
