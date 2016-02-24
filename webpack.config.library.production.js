/**
 * Created by wmj on 2016/2/24.
 */
/**
 * Created by wmj on 2016/1/30.
 */

var es6Shim=require('es6-shim');
var webpackBaseConfig=require('./webpack.config.library.js');
var webpackProductConfig=Object.create(webpackBaseConfig);
webpackProductConfig.output= Object.assign({},webpackBaseConfig.output,{
    filename: '[name].js',
    chunkFilename: '[hash].chunk.js',//异步加载的文件都会被放到chunk,“chunks” which are loaded on demand.
    publicPath: 'http://assets.test.com/js/librarys',//指定发布路径，也就是说异步加载的文件都会以这个路径为基础请求,可使用webpack-dev-server --content-base dist/js 指定到发布目录
    library:'[name]',
    libraryTarget:'umd'
});




module.exports=webpackProductConfig;

