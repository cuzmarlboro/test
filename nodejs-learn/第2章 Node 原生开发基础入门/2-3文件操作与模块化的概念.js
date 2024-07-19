// 1.文件操作
// Node 属于操作系统级别的运行环境，而操作系统最基础的能力就是文件的管理

// 1.1 读取文件
var fs = require('fs')

// 三个参数，文件路径、读取文件使用的字符编码、回调函数
fs.readFile('./a.txt', 'utf8', function (err, data) { console.log("🚀 ~ err, data:", err, data) })


// 2.2 写入文件 （写入的内容会重置原有的内容）
// 三个参数，文件路径、写入的内容、回调函数
fs.watchFile('./a.txt', '888', function (err) { console.log("🚀 ~ err:", err) })

// 2.3 追加内容
// 追加内容的方法就是先读取里面的内容然后再将新内容拼接后写入，从而达到追加效果
fs.readFile('./a.txt', 'utf8', function (err, data) {
    fs.writeFile('./a.txt', data + '888', function (err) {
        if (!err) {
            console.log('追加成功')
        }
    })
})

// 2. 模块化编程的概念
// 2.1 require('fs') 到底是什么意思？
// fs 属于 Node.js 的内置模块，严谨点说 require('fs') 引入的是 fs 模块，而不是 fs api

// 2.2 什么是模块化？
// 一个文件就是一个模块，模块内声明的变量、方法也只能在模块内部使用，提供给其他模块使用必须得导入导出
