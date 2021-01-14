 ## callback

`callback.js`

```javascript
// function a(){
//     console.log('A');
// }

// a라는 변수에 함수라는 값을 정의
// 자바스크립트 에서는 함수가 값이다!!
var a = function(){
    console.log('A');
}

var b = function(){
    console.log('B');
}

var cd = function(){
    console.log('hello');
}

//오랜 시간이 걸리는 함수
// 이 기능에 대한 실행이 끝난 다음에 
// 함수가 실행이 끝났으니깐 다음 일을 하세요!!
// 매개변수로 callback를 설정
function slowfunc(ccccc){
    ccccc();
}

slowfunc(a);  //  A
slowfunc(b); //   B
slowfunc(cd); // hello

```

 ### 실행

![image](https://user-images.githubusercontent.com/66653324/104591412-fedb9100-56af-11eb-98f7-58e842fc881c.png)
