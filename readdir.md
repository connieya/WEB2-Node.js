## Node.js에서 파일목록 알아내기

`readdir.js`

```javascript
var testFolder = '../data';
var fs = require('fs');

fs.readdir(testFolder, function(error , fileList){
    console.log(fileList);
})

```


![image](https://user-images.githubusercontent.com/66653324/104544490-38d67400-566b-11eb-9386-26d91d7357e1.png)

data 폴더에 있는 CSS , HTML , Javascript 파일은

var testFolder = '../data'; 이 경로에 있다

### 실행


![image](https://user-images.githubusercontent.com/66653324/104544570-6b806c80-566b-11eb-9d71-75a4256a55a7.png)
