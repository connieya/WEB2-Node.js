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
