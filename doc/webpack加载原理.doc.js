/**
 * Created by wmj on 2016/2/25.
 */
/*




 webpack打包时，会把在服务端的require（’file'）语句 转换成模块文件的内容打包到文件中，如果被require的模块是作为公共模块使用，那么require（file）语句转回被转换成浏览器端的require例如__webpack_require__(2)
  webpack 打包后的文件都是chunk，chunk加载时使用jsonp协议，文件加载到客户端后会自动调用，webpackJsonpCallback返回就行chunk和模块的安装，安装模块是会用一个索引为0的引导模块，每次都是从这个引导模块开始安装
    webpack 打包有两种情况，一种是把用于加载模块的代码打包到一个公共的文件，其他bundle只保留模块代码，它们共用公共文件的模块加载器，第二种是每个bundle到内置模块加载器，在模块内部完成自己的依赖模块加载。
    第一种方式，每次打包时，webpack都会为每个bundle分配好chunkid 和这些chunkid 对应的模块（在同一次打包所涉及的文件中，chunkid和模块id都是唯一的）如果每个chunkid对应的模块都不一样那么将会是一个chunkid 对应一个或多个模块 例如 [chunkid]=>(m1,m2,m3)  ,如果多个
    chunkid对应的模块存在公共的模块，那么这些chunk会被webpack优化，使多个具有公共模块的chunkid 指向公共模块，例如【chunkid1，chunkid2】=》（m1，m2，m3），剩下的没有交集的模块，webpack将会重新分配chunkid，
    例如 [newChunkid]=>(m5,m6,m7)。在这种模式下，每次修改一个文件，如果单单打包这个文件，因为这次打包不知道上一次打包的已经分配的chunkid和模块id，那么重新分配的chunkid和模块id可能与上一次打包的文件中的某些文件的chunkid和模块id重复，可能出现chunkid重复导致依赖错误
    所以每次修改文件 ，都需要重新重新打包同一个页面下的所有文件，也就是说被修改的文件所涉及的页面都需要重新打包该页面下的所有文件， 以确保分配的chunkid是唯一的。
    第二种方式，也就是类库的模式，由于类库模式作为一个独立的文件打包，所以其使用有两种方式，一种是在后端被其他模块引用，并经过webpack打包，这种模式可以使用commonjs的模式加载，你会发现
 if(typeof exports === 'object' && typeof module === 'object')
 module.exports = factory(require("inherit"), require("library/player"));
 被打包成
 if(true)
 module.exports = factory(__webpack_require__(2), __webpack_require__(5));
   第二种是在客户端通过script直接导，那么所有外部的require将会被解析为window['module']，所有内部的require将会直接被改模块文件内容替换掉，内部的require会导致即使上面的使用commjs的代码已经加载了模块m1，内部再次引用m1是不知道
   上面已经加载的，将会再次重复加载m1，如果将m1指定外外部的require，可以解决这个重复的问题，但是，如果指定为外部的require，上面代码用的commomjs，那么其依赖的模块将不能在window【’module‘】中获取，但commjs模块和非模块的共用时，需要把
   commomjs模块的对象暴露出来。
 */
(function(modules) { // webpackBootstrap
    /******/ 	// install a JSONP callback for chunk loading
    /******/ 	var parentJsonpFunction = window["webpackJsonp"];
                //chunk加载时使用jsonp协议，文件加载到客户端后会自动调用webpackJsonpCallback进行模块安装
    /******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
        /******/ 		// add "moreModules" to the modules object,
        /******/ 		// then flag all "chunkIds" as loaded and fire callback
        /******/ 		var moduleId, chunkId, i = 0, callbacks = [];
                        //此时chunk已经加载到客户端
        /******/ 		for(;i < chunkIds.length; i++) {
            /******/ 			chunkId = chunkIds[i];
                                //把之前该chunk加载时积累的回调函数保存到callbacks，这样做是考虑到chunkIDs可能不止一个元素，但这些chunk包含的模块是一样的
            /******/ 			if(installedChunks[chunkId])
            /******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
            /******/ 			//标记chunk加载完成
                                    installedChunks[chunkId] = 0;

            /******/ 		}

        /******/ 		for(moduleId in moreModules) {
            /******/ 			modules[moduleId] = moreModules[moduleId];
            /******/ 		}
        /******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
        /******/ 		//执行chunk的回调函数，只应用于ensure函数生成的chunk
                        while(callbacks.length)
            /******/ 			callbacks.shift().call(null, __webpack_require__);

                        //执行该chunk对应的模块
        /******/ 		if(moreModules[0]) {
            /******/ 			installedModules[0] = 0;

            /******/ 			return __webpack_require__(0);
            /******/ 		}
        /******/ 	};

    /******/ 	// The module cache

               // installedModules，installedChunks这两个变量本函数__webpack_require_内部引用，所以这个两个变量是持久的，达到在chunk和模块加载时共享当前的模块和chunk信息。
    /******/ 	var installedModules = {};

    /******/ 	// object to store loaded and loading chunks
    /******/ 	// "0" means "already loaded"
    /******/ 	// Array means "loading", array contains callbacks

    /******/ 	var installedChunks = {
        /******/ 		4:0
        /******/ 	};

    /******/ 	// The require function
    //          加载模块
    /******/ 	function __webpack_require__(moduleId) {

        /******/ 		// Check if module is in cache
                        //
                        //
                        //如果模块已经加载好，直接返回改模块的导出变量
        /******/ 		if(installedModules[moduleId])
        /******/ 			return installedModules[moduleId].exports;

        /******/ 		// Create a new module (and put it into the cache)
                        //模块还没加载，创建一个新模块
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			exports: {},
            /******/ 			id: moduleId,
            /******/ 			loaded: false
            /******/ 		};


                        //执行该模块，因为模块内部也可以能需要加载其他模块，所以需要传入模块加载函数到模块里，实现递归加载依赖模块。
        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ 		// Flag the module as loaded
                        //当其所有的依赖模块加载完成后，模块加载完成。（此时对于ensure方法对应的chunk已经被加载下来了，因为__webpack_require__.e函数创建script的时候没有使用 async也就是说是同步加载的）
        /******/ 		module.loaded = true;

        /******/ 		// Return the exports of the module
                        //返回导出对象
        /******/ 		return module.exports;
        /******/ 	}

    /******/ 	// This file contains only the entry chunk.
    /******/ 	// The chunk loading function for additional chunks
                //加载chunk
    /******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
        /******/ 		// "0" is the signal for "already loaded"
                        //如果该chunk已经加载，直接调用回调函数，这里把模块加载的函数传递给回调函数，使回调函数内部可以手动按需加载模块，即需要模块已经加载到客户端，但在函数体内一些需要事件才会触发的require，可以等到事件触发时才执行该模块，从而提高性能
        /******/ 		if(installedChunks[chunkId] === 0)
        /******/ 			return callback.call(null, __webpack_require__);

        /******/ 		// an array means "currently loading".
                        //模块加载中，直接把回调函数放到一个队列里面，等待合适的时候调用
        /******/ 		if(installedChunks[chunkId] !== undefined) {
            /******/ 			installedChunks[chunkId].push(callback);
            /******/ 		}
        //                  模块还没加载，开始加在模块,这里可见，chunk加载完成后并没有立即调用回调函数
                            else {
            /******/ 			// start chunk loading
            /******/ 			installedChunks[chunkId] = [callback];
            /******/ 			var head = document.getElementsByTagName('head')[0];
            /******/ 			var script = document.createElement('script');
            /******/ 			script.type = 'text/javascript';
            /******/ 			script.charset = 'utf-8';
            /******/ 			script.async = true;

            /******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + "a200ab19c5d51867ae8a" + ".chunk.js";
            /******/ 			head.appendChild(script)

            /******/ 		}
        /******/ 	};

    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;

    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "http://assets.test.com/js/bundles";
    /******/ })([m1,m2,m3])