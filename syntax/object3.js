var v1 = 'v1';
// 10000000000개 code가 잇다고 상상

v1 = 'egoing';
var v2 = 'v2';

//console.log(v1);

// 폴더라는 기능
var o = {

    v1 : 'v1',
    v2 : 'v2',
    f1 :function(){       // 변수이름을 o에서 p로 바꿀수 있기 때문에 밑에 처럼 
        console.log(o.v1);// 객체 자신을 가리키는 this를 사용하자
    },
    f2 :function(){
        console.log(this.v2);
    }
}


// function f1(){
//     console.log(o.v1);
// }

// function f2(){
//     console.log(o.v2);
// }

// 신입 개발자가 다시 한번 function f1을 사용할수도 있다.
// 그렇기 때문에 객체 안에 넣어버리면 된다.
o.f1();
o.f2();