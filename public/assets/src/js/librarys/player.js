(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("inherit"));
	else if(typeof define === 'function' && define.amd)
		define(["inherit"], factory);
	else if(typeof exports === 'object')
		exports["player"] = factory(require("inherit"));
	else
		root["player"] = factory(root["inherit"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wmj on 2016/2/24.
	 */

	var inherit=__webpack_require__(1);

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