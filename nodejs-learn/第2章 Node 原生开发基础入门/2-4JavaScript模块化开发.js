// ECMAScript Module 标准模块化规范

// 导入 import xxx from xxx.js
// 导出 export {xxx}，export default xxx

// 比如说前端开发经常使用的 import、export 语法其实就是 ES module 的规范

// Node.js 默认是不支持 ES module 规范的，解决方案有两种，第一种方案是修改文件后缀名，改成 .mjs ，
// 第二种方案在 package.json 设置 "type": "module"


// CommonJS 规范
// CommonJS 规范提供了一个 module 对象，导出模块时候需要使用 module.exports

// 导入
// 导出 module.exports = {xxx}