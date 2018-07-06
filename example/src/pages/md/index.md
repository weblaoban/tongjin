---
path: "/hello-world"
date: "2017-07-12T17:12:33.962Z"
title: "My First Gatsby Post"
---

# 第一篇博文！

## output 
1. output.path 所有目标文件的输出路径 必须是绝对路径
2. output.filename 输出文件名  
```html
   1.[name].bundle.js //使用入口文件名
   2.[id].bundle.js //使用内部chunk id
   3.[name].[hash].js //使用每次构建过程中，唯一的 hash 生成
   4.[chunkhash].bundle.js //基于每个chunk内容的hash生成
```
3. output.hashDigestLength hash的长度  默认为20
4. output.pathinfo  告诉webpack在bundle中引入所包含模块信息的相关注释，默认是false，不应该用于生产环境
5. output.publicPath 指定在浏览器中所引用的「此输出目录对应的公开 URL」
6. output.library导出库的名称  output.library 的值的作用，取决于output.libraryTarget导出库的类型 选项的值
```javascript
  output: {
    library: "MyLibrary"
  }
```
7. output.libraryExport 将通过libraryTarget公开哪些模块或模块。默认的入口返回值是入口文件返回的名称空间或默认模块。
```js
{
  libraryExport:'default',
   //var MyDefaultModule = _entry_return_.default;
  libraryExport: "MyModule",
  //var MyModule = _entry_return_.MyModule;
  libraryExport: ["MyModule", "MySubModule"],
  //var MySubModule = _entry_return_.MyModule.MySubModule;
}
```

## loader
{ test: Condition }：匹配特定条件。一般是提供一个正则表达式或正则表达式的数组，但这不是强制的。

{ include: Condition }：匹配特定条件。一般是提供一个字符串或者字符串数组，但这不是强制的。

{ exclude: Condition }：排除特定条件。一般是提供一个字符串或字符串数组，但这不是强制的。

{ and: [Condition] }：必须匹配数组中的所有条件

{ or: [Condition] }：匹配数组中任何一个条件

{ not: [Condition] }：必须排除这个条件
```js
module:{
  rules:[
    {
      test: /\.jsx?$/,//匹配条件
      include: [
        path.resolve(__dirname, "app")
      ],//test 和 include 具有相同的作用，都是必须匹配选项
      exclude: [
        path.resolve(__dirname, "app/demo-files")
      ], //不匹配选项
      use:[{
        loader:'babel-loader',//应该应用的 loader，解析匹配文件
        options: {
                  presets: ["es2015"]
                },
      }],
      resource: { and: [ /* 条件 */ ] }, //所有条件都匹配时才匹配
      resource: [/* 条件 */],
      resource: {or:[/* 条件 */]},//任意条件匹配时匹配，默认是一个数组
      resource: {not:[/* 条件 */]},//条件不匹配时
    }
   ],
  noParse:[
   /special-library\.js$/
  ],
  // 不解析这里的模块
}
// 只在 test 和 文件名匹配 中使用正则表达式
// 在 include 和 exclude 中使用绝对路径数组
// 尽量避免 exclude，更倾向于使用 include
```

## resolve
> 解析模块请求的选项 （不适用于对 loader 解析）
1. alias 别名，创建import或者require的别名 便于使用

## plugins
> plugins 选项用于以各种方式自定义 webpack 构建过程

## devServer