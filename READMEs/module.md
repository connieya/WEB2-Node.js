## Node.js 모듈의 형식

`muse.js`
```javascript
// var M = {
//     v:'v',
//     f:function(){
//         console.log(this.v);
//     }
// }
// 위에 코드는 모듈화를 위해 mpart.js로 옮기고 지웠다고 가정

var part = require('./mpart.js');
part.f();

// 만약에 객체가 엄청 많아지면??
// 복잡해지니깐 모듈화 하자


```

`mpart.js`
```javascript
var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}


module.exports = M;

// mpart.js에 있는 객체 M을 export 해서 바깥에서도 사용할수 있게 하자 는 뜻
```

## 모듈의 활용

`lib/template.js`
```javasript
module.exports ={
HTML:function(title,list ,body ,control){
    return `
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/">WEB1</a></h1>
     ${list}
     ${control}
     ${body}
    <p>
    </body>
    </html>
    
    
    `;
},list: function(fileList){
    var list = '<ul>';
    for(var i=0 ; i< fileList.length; i++){

        list = list + `<a href="/?id=${fileList[i]}"><li>${fileList[i]}</li></a>`
    }
    list = list + '</ul>'

    return list;
}

}

```

main.js 에서 모듈화한 template.js를 불러와 사용

![image](https://user-images.githubusercontent.com/66653324/104688623-693e1100-5744-11eb-8451-c884d95eec5e.png)
