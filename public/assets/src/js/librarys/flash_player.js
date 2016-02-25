(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("inherit"), require("library/player"));
	else if(typeof define === 'function' && define.amd)
		define(["inherit", "library/player"], factory);
	else if(typeof exports === 'object')
		exports["flash_player"] = factory(require("inherit"), require("library/player"));
	else
		root["flash_player"] = factory(root["inherit"], root["player"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wmj on 2016/2/24.
	 */

	var inherit=__webpack_require__(1);
	var Player=__webpack_require__(2);
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

/***/ }
/******/ ])
});
;