(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("inherit"));
	else if(typeof define === 'function' && define.amd)
		define(["inherit"], factory);
	else if(typeof exports === 'object')
		exports["statistics"] = factory(require("inherit"));
	else
		root["statistics"] = factory(root["inherit"]);
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

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wmj on 2016/2/24.
	 */

	var inherit=__webpack_require__(2);

	var Statistics=inherit({
	    __constructor:function(){

	        console.log('a Statistics Object has been created!');
	        this.__self.objNums++;
	    },
	    pv:function(){
	        console.log('trigger a pv  statistics!');

	    },
	    vv:function(){
	        console.log('trigger a vv statistics!');
	    },

	},{
	    objNums:0,
	    getObjNums:function(){
	        return this.objNums;
	    }
	});

	module.exports=Statistics;



/***/ }
/******/ ])
});
;