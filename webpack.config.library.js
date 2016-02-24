/**
 * Created by wmj on 2016/2/24.
 */
/**
 * Created by wmj on 2016/1/30.
 */

/**
 * Created by wmj on 2016/1/30.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    context:path.join(__dirname,'public/assets/src/js/librarys/src'),
    //devtool:'cheap-module-eval-source-map',//可以在浏览器查看未合并的源代码

    entry: {

        player:['./player'],
        statistics:['./statistics'],
        h5_player:['./h5_player'],
        flash_player:['./flash_player'],
    },
    output: {
        path: path.join(__dirname, 'public/assets/src/js/librarys'),

    },
    resolve: {
        extensions: ['','.js'],
        alias:{

            library:path.join(__dirname, 'public/assets/src/js/librarys'),
        }

    },
    plugins: [

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),//所有模块都会引入jquery 即 访问$,jQuery,window.jQuery,会被编译成require('jquery');

    ],
    externals:[
        //指定那些依赖是不需要打包进js的，而是通过外部导入
        {
            jquery:true,
            inherit:true,



        },
        'library/player'

    ],
    module: {

    }
}



