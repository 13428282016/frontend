/**
 * Created by wmj on 2016/1/30.
 */


var gulp = require('gulp');
var program=require('commander');
var connect=require('gulp-connect');
require('es6-shim');
gulp.task('server:assets', function () {


    var webpackDevServer = require('webpack-dev-server');
    var webpackDevConfig = require('./webpack.config.dev.js');
    var webpack = require('webpack');
    new webpackDevServer(webpack(webpackDevConfig), {
        publicPath: webpackDevConfig.output.publicPath,//把wenpack的bundle文件都放在这个路径下，服务器绑定的硬盘目录是隐式绑定的，不需要自己自定，webpackAdminConfig.output.publicPath和服务器监听的域名要一致
        hot: true,
        quiet: false,
        historyApiFallback: true,
        noInfo: false,
        stats: {color: true}
    }).listen(80, 't.assets.test.com', function (err, result) {
            if (err) {
                console.log(err);
            }
            console.log('Listening at t.assets.test.com:80');
        })


});


gulp.task('server:assets:production',function(){


    connect.server({
        port:80,
        root:'public/assets/dist',
        host:'assets.test.com',



    });

})


gulp.task('build:js', ['build:js:library'],function () {
    program.version('0.0.1')
    .option('-e,--entry <items>','entry files',function(val){
            return val.split(',');
        })
    .parse(process.argv);


    var webpackProductionConfig = require('./webpack.config.production.js');
    if(process.argv.indexOf('build:js:library')!=-1&&program.entry)
    {
            for(var key in webpackProductionConfig.entry){
                if(program.entry.indexOf(key)==-1)
                {

                    delete webpackProductionConfig.entry[key];
                }
            }

    }
    var webpack = require('webpack');
    var uglify = require('gulp-uglify'),
        sourceMaps = require('gulp-sourcemaps'),
        rename=require('gulp-rename');
    webpack(webpackProductionConfig, function (err, stat) {

        if (err) {
            console.log(err);
            return;
        }
        gulp.src(['public/assets/build/js/bundles/**/*.bundle.js'])
            .pipe(sourceMaps.init())
            .pipe(uglify())
            .pipe(rename({extname: '.min.js'}))
            .pipe(sourceMaps.write('source_maps'))
            .pipe(gulp.dest('public/assets/dist/js/bundles'));
    });

});

gulp.task('build:js:library', function () {

    program.version('0.0.1')
        .option('-e,--entry <items>','entry files',function(val){
            return val.split(',');
        })
        .parse(process.argv);

    var webpackProductionConfig = require('./webpack.config.library.production.js');
    if(process.argv.indexOf('build:js:library')!=-1&&program.entry)
    {

        for(var key in webpackProductionConfig.entry){
            if(program.entry.indexOf(key)==-1)
            {

                delete webpackProductionConfig.entry[key];
            }
        }

    }

    var webpack = require('webpack');
    var uglify = require('gulp-uglify'),
        sourceMaps = require('gulp-sourcemaps'),
        rename=require('gulp-rename');
    webpack(webpackProductionConfig, function (err, stat) {

        if (err) {
            console.log(err);
            return;
        }
        gulp.src(['public/assets/src/js/librarys/**/*.js','!public/assets/src/js/librarys/src/*.js'])
            .pipe(sourceMaps.init())
            .pipe(uglify())
            .pipe(rename({extname: '.min.js'}))
            .pipe(sourceMaps.write('source_maps'))
            .pipe(gulp.dest('public/assets/dist/js/librarys'));
    });

});


gulp.task('server:web',function(){


    //webpack-dev-server和这个server端口一样时liverreload无效
    connect.server({
        port:8080,
        root:'public',
        host:'dev.com',
        livereload:true,



    });



});


gulp.task('watch:html',function(){

    gulp.watch(['public/*.html'],function(event){
          if(event.type==='changed'){

              gulp.src(event.path)
              .pipe(   connect.reload());

          }

    })

});
gulp.task('server:web-reload',['server:web','watch:html']);


//gulp.task('server:assets',function(){
//    var express=require('express');
//    var app=express();
//    var webpack = require('webpack');
//    var webpackBaseConfig = require('./webpack.config.base');
//    var compiler = webpack(webpackBaseConfig);
//
//    app.use(require("webpack-dev-middleware")(compiler, {
//        noInfo: true, publicPath: webpackBaseConfig.output.publicPath
//    }));
//
//    app.use(require("webpack-hot-middleware")(compiler));
//
//});