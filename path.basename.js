const path = require('path')
console.log(module)
// 定义文件的存放路径
const fpath = 'a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext) //文件后缀名

const fullName = path.basename(fpath)
console.log(fullName)

console.log(path.basename(fullName,'.html'))

