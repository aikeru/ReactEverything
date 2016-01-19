(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PeopleList"] = factory();
	else
		root["PeopleList"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
/***/ function(module, exports) {

	//This is the React component that all the pages will share
	
	"use strict";
	
	var PeopleList = React.createClass({
	  displayName: "PeopleList",
	
	  propTypes: {
	    people: React.PropTypes.array.isRequired,
	    onremoveperson: React.PropTypes.func, //Compatibility with Angular 1.x
	    onRemovePerson: React.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      people: []
	    };
	  },
	  removePerson: function removePerson(person, personIndex) {
	    var removeFunc = this.props.onremoveperson || this.props.onRemovePerson;
	    if (removeFunc) {
	      removeFunc(person, personIndex);
	    }
	  },
	  render: function render() {
	    var _this = this;
	
	    var personItems = this.props.people.map(function (person, i) {
	      return React.DOM.li({ key: i }, person.Name);
	    });
	
	    return React.createElement(
	      "ul",
	      null,
	      this.props.people.map(function (person, i) {
	        return React.createElement(
	          "li",
	          { key: i },
	          person.Name,
	          React.createElement(
	            "button",
	            { onClick: _this.removePerson.bind(_this, person, i) },
	            "X"
	          )
	        );
	      })
	    );
	  }
	});
	
	module.exports = PeopleList;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=PeopleList.js.map