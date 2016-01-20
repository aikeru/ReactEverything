webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(257);


/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(262), __esModule: true };

/***/ },

/***/ 182:
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineDecoratedPropertyDescriptor = __webpack_require__(260)['default'];
	
	var _createDecoratedClass = __webpack_require__(259)['default'];
	
	var _classCallCheck = __webpack_require__(182)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _angular2Core = __webpack_require__(9);
	
	var ReactComponent = (function () {
	    var _instanceInitializers = {};
	    var _instanceInitializers = {};
	
	    _createDecoratedClass(ReactComponent, [{
	        key: 'children',
	        decorators: [(0, _angular2Core.Input)()],
	        initializer: function initializer() {
	            return [];
	        },
	        enumerable: true
	    }, {
	        key: 'component',
	        decorators: [(0, _angular2Core.Input)()],
	        initializer: function initializer() {
	            return null;
	        },
	        enumerable: true
	    }, {
	        key: 'props',
	        decorators: [(0, _angular2Core.Input)()],
	        initializer: function initializer() {
	            return null;
	        },
	        enumerable: true
	    }], [{
	        key: 'parameters',
	        value: [_angular2Core.ElementRef],
	        enumerable: true
	    }], _instanceInitializers);
	
	    function ReactComponent(elementRef) {
	        _classCallCheck(this, _ReactComponent);
	
	        _defineDecoratedPropertyDescriptor(this, 'children', _instanceInitializers);
	
	        _defineDecoratedPropertyDescriptor(this, 'component', _instanceInitializers);
	
	        _defineDecoratedPropertyDescriptor(this, 'props', _instanceInitializers);
	
	        console.log('ReactComponent ctor');
	        this._element = elementRef.nativeElement;
	    }
	
	    _createDecoratedClass(ReactComponent, [{
	        key: 'render',
	        value: function render(props) {
	            console.log('ReactComponent render');
	            ReactDOM.render(React.createElement(this.component, this.props || {}, this.children || []), this._element);
	        }
	    }, {
	        key: 'ngOnChange',
	        value: function ngOnChange(changes) {
	            console.log('ngOnChange');
	        }
	    }, {
	        key: 'ngOnChanges',
	        value: function ngOnChanges(changes) {
	            console.log('ReactComponent ngOnChanges');
	            if (changes.component) {
	                this.component = changes.component.currentValue;
	            }
	            if (changes.props) {
	                //Did props change? If so, rerender.
	                this.props = changes.props.currentValue;
	                if (this.component) {
	                    this.render(this.props);
	                }
	            }
	        }
	    }, {
	        key: 'ngOnDestroy',
	        value: function ngOnDestroy() {
	            console.log('ReactComponent ngOnDestroy');
	            React.unmountComponentAtNode(this._element);
	        }
	    }], null, _instanceInitializers);
	
	    var _ReactComponent = ReactComponent;
	    ReactComponent = (0, _angular2Core.View)({
	        template: ''
	    })(ReactComponent) || ReactComponent;
	    ReactComponent = (0, _angular2Core.Component)({
	        selector: 'react-component'
	    })(ReactComponent) || ReactComponent;
	    return ReactComponent;
	})();
	
	exports['default'] = ReactComponent;
	module.exports = exports['default'];

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(258)['default'];
	
	var _classCallCheck = __webpack_require__(182)['default'];
	
	var _interopRequireDefault = __webpack_require__(261)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _angular2Core = __webpack_require__(9);
	
	var _angular2PlatformBrowser = __webpack_require__(125);
	
	var _ReactComponentJs = __webpack_require__(256);
	
	var _ReactComponentJs2 = _interopRequireDefault(_ReactComponentJs);
	
	var App = (function () {
	    function App() {
	        _classCallCheck(this, _App);
	
	        this.people = [{ Name: "Alice" }, { Name: "Bob" }, { Name: "Carl" }];
	        this.personName = '';
	        this.PeopleList = window.PeopleList;
	        this.removePerson = this.removePerson.bind(this);
	    }
	
	    _createClass(App, [{
	        key: 'addPerson',
	        value: function addPerson() {
	            console.log('addPerson', this.personName);
	            var peopleArr = this.people.slice();
	            peopleArr.push({
	                Name: this.personName
	            });
	            this.people = peopleArr;
	        }
	    }, {
	        key: 'removePerson',
	        value: function removePerson(person, index) {
	            console.log('onRemovePerson', person, index);
	            if (confirm('Are you sure you want to remove ' + person.Name + ' they might be gone forever!?')) {
	                var peopleArr = this.people.slice();
	                peopleArr.splice(index, 1);
	                this.people = peopleArr;
	            }
	        }
	    }]);
	
	    var _App = App;
	    App = (0, _angular2Core.View)({
	        template: '\n      <h1>Angular 2 with React</h1>\n      <p>This is a react component showing a list of people driven by angular 2:</p>\n      <react-component [props]="{\n        onRemovePerson: removePerson,\n        people: people\n      }" [component]="PeopleList"></react-component>\n      <p>This is an angular 2 form for adding more people:</p>\n      <div>\n        <input type="text" [(ngModel)]="personName" />\n        <button (click)="addPerson()">Add Person</button>\n      </div>\n    ',
	        directives: [_ReactComponentJs2['default']]
	    })(App) || App;
	    App = (0, _angular2Core.Component)({ selector: 'app-demo' })(App) || App;
	    return App;
	})();
	
	exports['default'] = App;
	
	(0, _angular2PlatformBrowser.bootstrap)(App).then(function (success) {
	    return console.log('Angular 2 Demo Running ...');
	}, function (error) {
	    return console.log(error);
	});
	module.exports = exports['default'];

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(114)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(114)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, descriptors, initializers) {
	    for (var i = 0; i < descriptors.length; i++) {
	      var descriptor = descriptors[i];
	      var decorators = descriptor.decorators;
	      var key = descriptor.key;
	      delete descriptor.key;
	      delete descriptor.decorators;
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor || descriptor.initializer) descriptor.writable = true;
	
	      if (decorators) {
	        for (var f = 0; f < decorators.length; f++) {
	          var decorator = decorators[f];
	
	          if (typeof decorator === "function") {
	            descriptor = decorator(target, key, descriptor) || descriptor;
	          } else {
	            throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator);
	          }
	        }
	
	        if (descriptor.initializer !== undefined) {
	          initializers[key] = descriptor;
	          continue;
	        }
	      }
	
	      _Object$defineProperty(target, key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers);
	    if (staticProps) defineProperties(Constructor, staticProps, staticInitializers);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(114)["default"];
	
	exports["default"] = function (target, key, descriptors) {
	  var _descriptor = descriptors[key];
	  if (!_descriptor) return;
	  var descriptor = {};
	
	  for (var _key in _descriptor) descriptor[_key] = _descriptor[_key];
	
	  descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined;
	
	  _Object$defineProperty(target, key, descriptor);
	};
	
	exports.__esModule = true;

/***/ },

/***/ 261:
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(263);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },

/***/ 263:
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }

});
//# sourceMappingURL=app-demo-bundle.js.map