console.log("hello nodejs")
const fs = require('fs')
// 1.文件路径
fs.writeFile('source/name.txt','李易峰 林俊杰 都是海王！！！',function(error,dataStr){
    console.log(error)
    console.log('-----')
    console.log(dataStr)
})
