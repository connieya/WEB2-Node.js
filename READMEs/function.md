## 함수를 이용해서 정리

`main.js`

```javascript
var template =  `
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/">WEB</a></h1>
     ${list}
     ${body}
    <p>
    </body>
    </html>
    
    
    `;
    
    ```
    #### 중복되는 부분이 있기 때문에 함수로 정리
    
    ```javascript
    function templateHTML(title,list ,body){
    return `
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/">WEB</a></h1>
     ${list}
     ${body}
    <p>
    </body>
    </html>
    
    
    `;
    
    ```
    
    ```javascript
    var template = templateHTML(title,list ,`<h2>${title}</h2><p>${description}</p>`);
    
    ```
    
    
    --------------------------
    반복문이 중복 됨
    
    ```javascript
     for(var i=0 ; i< fileList.length; i++){
                    list = list + `<a href="/?id=${fileList[i]}"><li>${fileList[i]}</li></a>`
                }
                list = list + '</ul>'
    
    ```
    
    ```javascript
    function templateList(fileList){
    var list = '<ul>';
    for(var i=0 ; i< fileList.length; i++){

        list = list + `<a href="/?id=${fileList[i]}"><li>${fileList[i]}</li></a>`
    }
    list = list + '</ul>'

    return list;
}
    //밑에서 사용
    
        var list = templateList(fileList);
    ```
    
    
