/* eslint-disable import/no-commonjs */
/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-09-19 16:51:57
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-19 16:52:06
 * @FilePath: /mbti-match/plugin/version-webpack-plugin.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const fs = require('fs')

class VersionPlugin {
  apply(compiler) {
    // 添加一个钩子函数在 webpack 的 emit 事件。这个事件在生成资源到 output 目录之前触发。
    compiler.hooks.emit.tap('Version Plugin', compilation => {
      const outputPath = compiler.path || compilation.options.output.path // 构建输出的目录
      const versionFile = `${outputPath}/version.json` // 定义版本信息文件的路径
      const timestamp = Date.now() // 时间戳作为版本号
      const content = `{"version": "${timestamp}"}` // 写入版本文件的内容

      // 检查输出路径是否存在。
      if (!fs.existsSync(outputPath)) {
        // 如果输出路径不存在，则创建输出路径。这是一个递归操作，它会创建所有缺失的父目录。
        fs.mkdirSync(outputPath, { recursive: true })
      }

      // 生成json文件
      fs.writeFileSync(versionFile, content, {
        encoding: 'utf8',
        flag: 'w'
      })
    })
  }
}

module.exports = { VersionPlugin }
