const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

var members = ['egoing', 'k8805','hoya']

//console.log(members[1]); // k8805

for(var i= 0; i<members.length; i++){
   // console.log(i,members[i]);
}

var roles = {
    'programmer':'egoing',
    'designer':'k8805',
    'manager':'hoya'
    
}

//console.log(roles.designer); // k8805
console.log("roles :", roles);

for(var name in roles){
 //   console.log("name :" ,name);

  //  console.log("roles[name] : " , roles[name]);
  //console.log("roles :", roles);
  console.log("roles.name : " , name )

}
