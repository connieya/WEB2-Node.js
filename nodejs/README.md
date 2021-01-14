## Node.js에서 파일 목록 알아내기

`readdir.js`


```javascript
var testFolder = '../data';
var fs = require('fs');

fs.readdir(testFolder, function(error , fileList){
    console.log(fileList);
})

```
![image](https://user-images.githubusercontent.com/66653324/104544659-a4b8dc80-566b-11eb-95f4-289f616831a2.png)

readdir.js 에서 data 안에 있는 CSS, HTML, JavaScript의 경로는
<br/>
var testFolder = '../data';이다.


## 실행

![image](https://user-images.githubusercontent.com/66653324/104544570-6b806c80-566b-11eb-9d71-75a4256a55a7.png)
