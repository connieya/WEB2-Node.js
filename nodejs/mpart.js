var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}


module.exports = M;

// mpart.js에 있는 객체 M을 export 해서 바깥에서도 사용할수 있게 하자 는 뜻