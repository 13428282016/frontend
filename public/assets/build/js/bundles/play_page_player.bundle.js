webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wmj on 2016/2/24.
	 */

	var $=__webpack_require__(1);

	var Player=__webpack_require__(5);

	window['G_CORE']="G_CORE";
	var H5Player=__webpack_require__(6);
	var FlashPlayer=__webpack_require__(7);
	var player= new Player();
	player.play();
	console.log(Player.getObjNums());

	var h5Player= new H5Player();
	h5Player.play();
	console.log(H5Player.getObjNums());


	var flashPlayer= new FlashPlayer();
	flashPlayer.play();
	console.log(FlashPlayer.getObjNums());

	var G_CORE=__webpack_require__(8);
	console.log(G_CORE);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(2));
		else if(typeof define === 'function' && define.amd)
			define(["inherit"], factory);
		else if(typeof exports === 'object')
			exports["player"] = factory(require("inherit"));
		else
			root["player"] = factory(root["inherit"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "http://assets.test.com/js/librarys";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(5);


	/***/ },
	/* 1 */,
	/* 2 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ },
	/* 3 */,
	/* 4 */,
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Created by wmj on 2016/2/24.
		 */

		var inherit=__webpack_require__(2);

		var Player=inherit({
		   __constructor:function(){

		       console.log('a Player Object has been created!');
		       this.__self.objNums++;
		   },
		    play:function(){
		        console.log('start play!');

		    },
		    pause:function(){
		       console.log('pause play!');
		    },
		    stop:function(){
		        console.log('stop play!');
		    },
		    resume:function(){
		        console.log('resume play!');
		    }
		},{
		   objNums:0,
		    getObjNums:function(){
		        return this.objNums;
		    }
		});

		module.exports=Player;





	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(2), __webpack_require__(5));
		else if(typeof define === 'function' && define.amd)
			define(["inherit", "library/player"], factory);
		else if(typeof exports === 'object')
			exports["h5_player"] = factory(require("inherit"), require("library/player"));
		else
			root["h5_player"] = factory(root["inherit"], root["library/player"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "http://assets.test.com/js/librarys";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(4);


	/***/ },
	/* 1 */,
	/* 2 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Created by wmj on 2016/2/24.
		 */
		/**
		 * Created by wmj on 2016/2/24.
		 */

		var inherit=__webpack_require__(2);
		var Player=__webpack_require__(3);
		var H5Player=inherit(Player,{

		    __constructor:function(){

		        this.__base();
		        console.log('a H5Player Object has been created!');
		    },
		    play:function(){
		        this.__base();
		        console.log('a H5Player start play!');

		    },
		    pause:function(){
		        this.__base();
		        console.log('a H5Player pause play!');
		    },
		    stop:function(){
		        this.__base();
		        console.log('a H5Player stop play!');
		    },
		    resume:function(){
		        this.__base();
		        console.log('a H5Player resume play!');
		    }


		},{

		    getObjNums:function(){
		        return this.__base();
		    }
		});

		module.exports=H5Player;

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(2), __webpack_require__(5));
		else if(typeof define === 'function' && define.amd)
			define(["inherit", "library/player"], factory);
		else if(typeof exports === 'object')
			exports["flash_player"] = factory(require("inherit"), require("library/player"));
		else
			root["flash_player"] = factory(root["inherit"], root["library/player"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "http://assets.test.com/js/librarys";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(1);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Created by wmj on 2016/2/24.
		 */

		var inherit=__webpack_require__(2);
		var Player=__webpack_require__(3);
		var FlashPlayer=inherit(Player,{

		    __constructor:function(){

		        this.__base();
		        console.log('a FlashPlayer Object has been created!');
		    },
		    play:function(){
		        this.__base();
		        console.log('a FlashPlayer start play!');

		    },
		    pause:function(){
		        this.__base();
		        console.log('a FlashPlayer pause play!');
		    },
		    stop:function(){
		        this.__base();
		        console.log('a FlashPlayer stop play!');
		    },
		    resume:function(){
		        this.__base();
		        console.log('a FlashPlayer resume play!');
		    }


		},{

		    getObjNums:function(){


		        return this.__base();
		    }
		});

		module.exports=FlashPlayer;

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = G_CORE;

/***/ }
]);