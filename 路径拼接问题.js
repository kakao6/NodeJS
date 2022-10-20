const fs = require('fs')
const path = require('path')
//__dirname 当前文件所处目录
const pathText = path.join(__dirname,'/source/成绩.txt')
const pathText2 = path.join(__dirname,'/source/成绩-ok.txt')
fs.readFile(pathText,'utf-8',function(error,dataStr){
    console.log(__dirname)
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

     fs.writeFile(pathText2,newStr,function(error){
         if(error){
             return console.log('文件写入失败'+error.message)
         }
     })

})
