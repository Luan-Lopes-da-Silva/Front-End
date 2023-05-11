const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports ={
  entry:{
    main:'./src/index.js',
  },
 mode:'production',
 module:{
  rules:[{
    test:/\.css$/,
    use:[miniCssExtractPlugin.loader,'css-loader']
  },{
    test:/\.js$/,
    use:['babel-loader']
  }]
 },
 output:{
 path:path.resolve(__dirname,'dist'),
 filename: '[name].bundle.min.js'
 },
 plugins:[
  new miniCssExtractPlugin()
 ]
}