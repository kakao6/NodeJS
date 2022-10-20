const fs = require('fs')
fs.readFile('./source/成绩.txt','utf-8',function(error,dataStr){
    console.log(error)
    console.log('-----')
    console.log(dataStr)
    if (error == null){
        console.log("读取数据成功")
    }
     const arr = dataStr.split(' ')
     const arrNew = []
     arr.forEach(item => {
         arrNew.push(item.replace('=',' '))
     });
    const newStr = arrNew.join('\r\n') // 拼接字符传
     console.log(newStr)

     fs.writeFile('./source/成绩-ok.txt',newStr,function(error){
         if(error){
             return console.log('文件写入失败'+error.message)
         }
     })

})
