### 콘솔에서의 입력값
`conditionl.js`

```javascript
var args = process.argv;

console.log(args);
console.log('A');
console.log('B');
console.log('C1');
console.log('C2');
console.log('D');
console.log('E');

```

![image](https://user-images.githubusercontent.com/66653324/104536102-c1004d80-565a-11eb-8c26-8418f6be7c89.png)

#### 실행
cd syntax 한 뒤

node conditonal.js 실행

![image](https://user-images.githubusercontent.com/66653324/104536183-f311af80-565a-11eb-8480-073f8d8d6367.png)

args 값은 저러하다~~


![image](https://user-images.githubusercontent.com/66653324/104536278-28b69880-565b-11eb-8873-222cccaf2ce4.png)

node conditionl.js 뒤에 추가로 입력하면

다음과 같이 같이 출력된다.

![image](https://user-images.githubusercontent.com/66653324/104536353-4b48b180-565b-11eb-8260-9670d1ad4d9a.png)

이것과 조건문을 활용하여 콘솔에 입력해보자


`conditional.js`
```javascript
var args = process.argv;

console.log(args[3]);
console.log('A');
console.log('B');
if(args[3]=== 'hee'){

    console.log('C1');
}else{

    console.log('C2');
}
console.log('D');
console.log('E');

```

다음과 같이 수정후 실행하면~

![image](https://user-images.githubusercontent.com/66653324/104536498-8945d580-565b-11eb-82f8-3557ceb9f043.png)

