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