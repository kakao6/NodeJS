console.log("hello nodejs")
const fs = require('fs')
// 1.文件路径
fs.readFile('source/name.txt','utf8',function(error,dataStr){
    console.log(error)
    console.log('-----')
    console.log(dataStr)
})
