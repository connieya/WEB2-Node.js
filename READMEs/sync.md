## Node.js에서 동기와 비동기

![image](https://user-images.githubusercontent.com/66653324/104564627-80222c00-568e-11eb-9264-ef629a9ea576.png)


__synchronous & asynchronous__

- 동기 : 어떠한 일을 순차적으로 하기 때문에 하나의 일처리가 끝나기전에 계속 기다려야함
- 비동기: 동시에 병렬적으로 일 처리가 가능하다.

비동기는 진짜 좋지만 그만큼 까다롭다. Node.js로 비동기 하는 방법을 알아보자



#### readFileSync & readFile

###### - readFileSync (동기)

`sync.js`
```javascript
var fs = require('fs');

 readFileSync
console.log('A')
var result = fs.readFileSync('sample.txt' , 'utf8');
console.log(result);
console.log('C')

```
`sample.txt`
```
B
```

**실행**

![image](https://user-images.githubusercontent.com/66653324/104566085-86b1a300-5690-11eb-9889-4c901beecb69.png)


 ###### - readFile (비동기)

```javascript
console.log('A')
fs.readFile('sample.txt' , 'utf8' ,function(err, result){
    console.log(result);
});

console.log('C')

```
readFile은 문서에 보면 세 번째 인자로 callback 와야한다고 한다. <br/>

callback은 위와같이 함수로 구현하였다. 

왜???  <br/>

readFileSync는 리턴값을 주는데, 
readFile은 리턴 값이 안주고, 대신 세번째인자로 함수를 줘야한다.


**실행**

```javascript
console.log('A')
fs.readFile('sample.txt' , 'utf8' ,function(err, result){
    console.log(result);
});

console.log('C')

```
![image](https://user-images.githubusercontent.com/66653324/104566732-53bbdf00-5691-11eb-9b30-a90f2009bc66.png)

A다음에 result를 실행하기도 전에 C가 먼저 콘솔에 찍히고 그다음 함수가 호출되면서 실행 되었다.


