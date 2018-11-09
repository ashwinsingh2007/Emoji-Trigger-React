(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-component-starter"] = factory();
	else
		root["react-component-starter"] = factory();
})(this, function() {
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _EmojiInput = __webpack_require__(1);

	var _EmojiInput2 = _interopRequireDefault(_EmojiInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _EmojiInput2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.initialState = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _textareaCaret = __webpack_require__(33);

	var _textareaCaret2 = _interopRequireDefault(_textareaCaret);

	var _Suggestions = __webpack_require__(34);

	var _Suggestions2 = _interopRequireDefault(_Suggestions);

	var _emojis = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Keycodes
	var TAB = 9;
	var ENTER = 13;
	var ESCAPE = 27;
	var UP = 38;
	var DOWN = 40;

	var SUGGESTIONS_TOP_OFFSET = 20;
	var DEFAULT_ROWS = 10;
	var DEFAULT_SUGGESTIONS_LIMIT = 5;

	var initialState = exports.initialState = {
	  leftIndex: -1,
	  caretPosition: -1,
	  showSuggestions: false,
	  query: null,
	  suggestionsPosition: {
	    top: 0,
	    left: 0
	  }
	};

	var EmojiInput = function (_Component) {
	  _inherits(EmojiInput, _Component);

	  function EmojiInput(props) {
	    _classCallCheck(this, EmojiInput);

	    var _this = _possibleConstructorReturn(this, (EmojiInput.__proto__ || Object.getPrototypeOf(EmojiInput)).call(this, props));

	    _this.state = initialState;
	    _this.resetState = _this.resetState.bind(_this);
	    return _this;
	  }

	  _createClass(EmojiInput, [{
	    key: 'onChange',
	    value: function onChange(value) {
	      if (this.props.onChange) {
	        this.props.onChange(value);
	      }
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.textComponent.value;
	    }
	  }, {
	    key: 'resetState',
	    value: function resetState() {
	      this.setState(initialState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var suggestions = [];
	      if (this.state.showSuggestions && this.state.query) {
	        suggestions = (0, _emojis.getEmojiMatches)(this.state.query).slice(0, this.props.suggestionsLimit).map(function (emoji) {
	          return {
	            value: emoji.character,
	            keyword: emoji.keyword,
	            label: _react2.default.createElement(
	              'span',
	              null,
	              emoji.character,
	              ' \xA0 ',
	              emoji.keyword
	            )
	          };
	        });
	      }

	      var valueProps = {};
	      if (this.props.value) {
	        valueProps.value = this.props.value;
	      }
	      if (this.props.defaultValue) {
	        valueProps.defaultValue = this.props.defaultValue;
	      }

	      var TextComponent = this.props.input ? 'input' : 'textarea';

	      return _react2.default.createElement(
	        'div',
	        { className: 'ei-container ' + (this.props.className || '') },
	        _react2.default.createElement(TextComponent, _extends({
	          className: 'ei-text-component',
	          rows: this.props.rows,
	          ref: function ref(textComponent) {
	            _this2.textComponent = textComponent;
	          }
	        }, valueProps, {
	          onChange: function onChange(event) {
	            _this2.onChange(event.target.value);
	          },
	          onClick: this.resetState,
	          onKeyDown: function onKeyDown(event) {
	            switch (event.keyCode) {
	              case UP:
	              case DOWN:
	                if (_this2.suggestions) {
	                  _this2.suggestions.traverseSuggestions(event.keyCode === DOWN);
	                  event.preventDefault(); // Prevent caret movement.
	                }
	                return;
	              case TAB:
	              case ENTER:
	                if (_this2.suggestions) {
	                  _this2.suggestions.selectSuggestion();
	                  event.preventDefault(); // Prevent caret movement.
	                }
	                return;
	              case ESCAPE:
	                _this2.resetState();
	                break;
	              default:
	                break;
	            }
	          },
	          onInput: function onInput() {
	            var textComponent = _this2.textComponent;

	            var caretPosition = textComponent.selectionStart;
	            var leftIndex = caretPosition;
	            // Find left word boundary containing the caret.
	            var value = textComponent.value;
	            while (leftIndex > 0) {
	              leftIndex -= 1;
	              if (/\s/.test(value[leftIndex])) {
	                leftIndex += 1;
	                break;
	              }
	            }
	            // Extract word to match with emoji shortnames.
	            var query = value.substring(leftIndex, caretPosition);

	            var newState = {
	              leftIndex: leftIndex,
	              caretPosition: caretPosition,
	              showSuggestions: false
	            };

	            if (query.length > 1 && query[0] === ':' && query[1] !== ':' /* Prevent `::` from matching */) {
	                newState.showSuggestions = true;
	                newState.query = query.substring(1);
	              }

	            if (!_this2.state.showSuggestions && newState.showSuggestions) {
	              var _getCaretCoordinates = (0, _textareaCaret2.default)(textComponent, textComponent.selectionEnd),
	                  top = _getCaretCoordinates.top,
	                  left = _getCaretCoordinates.left;

	              newState.suggestionsPosition = {
	                top: top + SUGGESTIONS_TOP_OFFSET,
	                left: left
	              };
	            }
	            _this2.setState(newState);
	          }
	        })),
	        this.state.showSuggestions && suggestions.length > 0 && _react2.default.createElement(_Suggestions2.default, {
	          style: this.state.suggestionsPosition,
	          ref: function ref(sug) {
	            _this2.suggestions = sug;
	          },
	          options: suggestions,
	          onSelect: function onSelect(option) {
	            var text = _this2.textComponent.value;
	            var value = option.value;
	            if (_this2.props.shortname) {
	              value = option.keyword;
	            }

	            var beforeQuery = text.substring(0, _this2.state.leftIndex);
	            var afterQuery = text.substring(_this2.state.caretPosition, text.length);
	            var newText = '' + beforeQuery + value + ' ' + afterQuery;
	            _this2.textComponent.value = newText;
	            _this2.onChange(newText);

	            // In case the focus was lost due to clicking of the suggestions.
	            _this2.textComponent.focus();

	            // Set caret to after the replaced query.
	            var newCaretPosition = _this2.state.leftIndex + value.length + 1;
	            _this2.textComponent.setSelectionRange(newCaretPosition, newCaretPosition);
	            _this2.resetState();
	          }
	        })
	      );
	    }
	  }]);

	  return EmojiInput;
	}(_react.Component);

	EmojiInput.propTypes = {
	  className: _react.PropTypes.string,
	  defaultValue: _react.PropTypes.string,
	  value: _react.PropTypes.string,
	  onChange: _react.PropTypes.func,
	  input: _react.PropTypes.bool,
	  shortname: _react.PropTypes.bool,
	  rows: _react.PropTypes.number,
	  suggestionsLimit: _react.PropTypes.number
	};

	EmojiInput.defaultProps = {
	  className: '',
	  defaultValue: '',
	  value: '',
	  onChange: function onChange() {},
	  input: false,
	  shortname: false,
	  rows: DEFAULT_ROWS,
	  suggestionsLimit: DEFAULT_SUGGESTIONS_LIMIT
	};

	exports.default = EmojiInput;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(4);

	var ReactChildren = __webpack_require__(5);
	var ReactComponent = __webpack_require__(18);
	var ReactPureComponent = __webpack_require__(21);
	var ReactClass = __webpack_require__(22);
	var ReactDOMFactories = __webpack_require__(24);
	var ReactElement = __webpack_require__(9);
	var ReactPropTypes = __webpack_require__(30);
	var ReactVersion = __webpack_require__(31);

	var onlyChild = __webpack_require__(32);
	var warning = __webpack_require__(11);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (true) {
	  var ReactElementValidator = __webpack_require__(25);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (true) {
	  var warned = false;
	  __spread = function () {
	     true ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var PooledClass = __webpack_require__(6);
	var ReactElement = __webpack_require__(9);

	var emptyFunction = __webpack_require__(12);
	var traverseAllChildren = __webpack_require__(15);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var invariant = __webpack_require__(8);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ?  true ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};

	module.exports = PooledClass;

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(4);

	var ReactCurrentOwner = __webpack_require__(10);

	var warning = __webpack_require__(11);
	var canDefineProperty = __webpack_require__(13);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var REACT_ELEMENT_TYPE = __webpack_require__(14);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (true) {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (true) {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	       true ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	       true ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (true) {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (true) {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (true) {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(12);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (true) {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var canDefineProperty = false;
	if (true) {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	module.exports = REACT_ELEMENT_TYPE;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactCurrentOwner = __webpack_require__(10);
	var REACT_ELEMENT_TYPE = __webpack_require__(14);

	var getIteratorFn = __webpack_require__(16);
	var invariant = __webpack_require__(8);
	var KeyEscapeUtils = __webpack_require__(17);
	var warning = __webpack_require__(11);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (true) {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	           true ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (true) {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ?  true ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactNoopUpdateQueue = __webpack_require__(19);

	var canDefineProperty = __webpack_require__(13);
	var emptyObject = __webpack_require__(20);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ?  true ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (true) {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	           true ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var warning = __webpack_require__(11);

	function warnNoop(publicInstance, callerName) {
	  if (true) {
	    var constructor = publicInstance.constructor;
	     true ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (true) {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(4);

	var ReactComponent = __webpack_require__(18);
	var ReactNoopUpdateQueue = __webpack_require__(19);

	var emptyObject = __webpack_require__(20);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7),
	    _assign = __webpack_require__(4);

	var ReactComponent = __webpack_require__(18);
	var ReactElement = __webpack_require__(9);
	var ReactPropTypeLocationNames = __webpack_require__(23);
	var ReactNoopUpdateQueue = __webpack_require__(19);

	var emptyObject = __webpack_require__(20);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */


	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: 'DEFINE_MANY',

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: 'DEFINE_MANY',

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: 'DEFINE_MANY',

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: 'DEFINE_MANY_MERGED',

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: 'DEFINE_MANY_MERGED',

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: 'DEFINE_MANY_MERGED',

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: 'DEFINE_ONCE',

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: 'DEFINE_MANY',

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: 'DEFINE_MANY',

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: 'DEFINE_MANY',

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: 'DEFINE_ONCE',

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: 'DEFINE_MANY',

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: 'OVERRIDE_BASE'

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (true) {
	      validateTypeDef(Constructor, childContextTypes, 'childContext');
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (true) {
	      validateTypeDef(Constructor, contextTypes, 'context');
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (true) {
	      validateTypeDef(Constructor, propTypes, 'prop');
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	       true ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === 'OVERRIDE_BASE') ?  true ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ?  true ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (true) {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	       true ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ?  true ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ?  true ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ?  true ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === 'DEFINE_MANY_MERGED') {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === 'DEFINE_MANY') {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (true) {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ?  true ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ?  true ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ?  true ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ?  true ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (true) {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	         true ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	         true ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (true) {
	         true ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (true) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ?  true ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (true) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ?  true ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (true) {
	       true ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	       true ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (true) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(9);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (true) {
	  var ReactElementValidator = __webpack_require__(25);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(10);
	var ReactComponentTreeHook = __webpack_require__(26);
	var ReactElement = __webpack_require__(9);

	var checkReactTypeSpec = __webpack_require__(27);

	var canDefineProperty = __webpack_require__(13);
	var getIteratorFn = __webpack_require__(16);
	var warning = __webpack_require__(11);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	   true ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	     true ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      if (typeof type !== 'function' && typeof type !== 'string') {
	        var info = '';
	        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
	        }
	        info += getDeclarationErrorAddendum();
	         true ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
	      }
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (true) {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	             true ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactCurrentOwner = __webpack_require__(10);

	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();

	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };

	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	   true ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ?  true ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ?  true ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ?  true ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ?  true ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ?  true ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ?  true ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },


	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs
	};

	module.exports = ReactComponentTreeHook;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactPropTypeLocationNames = __webpack_require__(23);
	var ReactPropTypesSecret = __webpack_require__(29);

	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && ("development") === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(26);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ?  true ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	       true ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (true) {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(26);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	         true ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ },
/* 28 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(9);
	var ReactPropTypeLocationNames = __webpack_require__(23);
	var ReactPropTypesSecret = __webpack_require__(29);

	var emptyFunction = __webpack_require__(12);
	var getIteratorFn = __webpack_require__(16);
	var warning = __webpack_require__(11);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;

	function createChainableTypeChecker(validate) {
	  if (true) {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (true) {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	           true ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        if (props[propName] === null) {
	          return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	        }
	        return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	     true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	     true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }

	  return false;
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	module.exports = '15.4.2';

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactElement = __webpack_require__(9);

	var invariant = __webpack_require__(8);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ?  true ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;

/***/ },
/* 33 */
/***/ function(module, exports) {

	/* jshint browser: true */

	(function () {

	// The properties that we copy into a mirrored div.
	// Note that some browsers, such as Firefox,
	// do not concatenate properties, i.e. padding-top, bottom etc. -> padding,
	// so we have to do every single property specifically.
	var properties = [
	  'direction',  // RTL support
	  'boxSizing',
	  'width',  // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
	  'height',
	  'overflowX',
	  'overflowY',  // copy the scrollbar for IE

	  'borderTopWidth',
	  'borderRightWidth',
	  'borderBottomWidth',
	  'borderLeftWidth',
	  'borderStyle',

	  'paddingTop',
	  'paddingRight',
	  'paddingBottom',
	  'paddingLeft',

	  // https://developer.mozilla.org/en-US/docs/Web/CSS/font
	  'fontStyle',
	  'fontVariant',
	  'fontWeight',
	  'fontStretch',
	  'fontSize',
	  'fontSizeAdjust',
	  'lineHeight',
	  'fontFamily',

	  'textAlign',
	  'textTransform',
	  'textIndent',
	  'textDecoration',  // might not make a difference, but better be safe

	  'letterSpacing',
	  'wordSpacing',

	  'tabSize',
	  'MozTabSize'

	];

	var isBrowser = (typeof window !== 'undefined');
	var isFirefox = (isBrowser && window.mozInnerScreenX != null);

	function getCaretCoordinates(element, position, options) {
	  if(!isBrowser) {
	    throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
	  }

	  var debug = options && options.debug || false;
	  if (debug) {
	    var el = document.querySelector('#input-textarea-caret-position-mirror-div');
	    if ( el ) { el.parentNode.removeChild(el); }
	  }

	  // mirrored div
	  var div = document.createElement('div');
	  div.id = 'input-textarea-caret-position-mirror-div';
	  document.body.appendChild(div);

	  var style = div.style;
	  var computed = window.getComputedStyle? getComputedStyle(element) : element.currentStyle;  // currentStyle for IE < 9

	  // default textarea styles
	  style.whiteSpace = 'pre-wrap';
	  if (element.nodeName !== 'INPUT')
	    style.wordWrap = 'break-word';  // only for textarea-s

	  // position off-screen
	  style.position = 'absolute';  // required to return coordinates properly
	  if (!debug)
	    style.visibility = 'hidden';  // not 'display: none' because we want rendering

	  // transfer the element's properties to the div
	  properties.forEach(function (prop) {
	    style[prop] = computed[prop];
	  });

	  if (isFirefox) {
	    // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
	    if (element.scrollHeight > parseInt(computed.height))
	      style.overflowY = 'scroll';
	  } else {
	    style.overflow = 'hidden';  // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
	  }

	  div.textContent = element.value.substring(0, position);
	  // the second special handling for input type="text" vs textarea: spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
	  if (element.nodeName === 'INPUT')
	    div.textContent = div.textContent.replace(/\s/g, '\u00a0');

	  var span = document.createElement('span');
	  // Wrapping must be replicated *exactly*, including when a long word gets
	  // onto the next line, with whitespace at the end of the line before (#7).
	  // The  *only* reliable way to do that is to copy the *entire* rest of the
	  // textarea's content into the <span> created at the caret position.
	  // for inputs, just '.' would be enough, but why bother?
	  span.textContent = element.value.substring(position) || '.';  // || because a completely empty faux span doesn't render at all
	  div.appendChild(span);

	  var coordinates = {
	    top: span.offsetTop + parseInt(computed['borderTopWidth']),
	    left: span.offsetLeft + parseInt(computed['borderLeftWidth'])
	  };

	  if (debug) {
	    span.style.backgroundColor = '#aaa';
	  } else {
	    document.body.removeChild(div);
	  }

	  return coordinates;
	}

	if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
	  module.exports = getCaretCoordinates;
	} else if(isBrowser){
	  window.getCaretCoordinates = getCaretCoordinates;
	}

	}());


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Suggestions = function (_Component) {
	  _inherits(Suggestions, _Component);

	  function Suggestions(props) {
	    _classCallCheck(this, Suggestions);

	    var _this = _possibleConstructorReturn(this, (Suggestions.__proto__ || Object.getPrototypeOf(Suggestions)).call(this, props));

	    _this.state = {
	      selectedIndex: 0
	    };
	    return _this;
	  }

	  _createClass(Suggestions, [{
	    key: "traverseSuggestions",
	    value: function traverseSuggestions(increment) {
	      var index = this.state.selectedIndex + (increment ? 1 : -1);
	      this.setState({
	        selectedIndex: (index + this.props.options.length) % this.props.options.length
	      });
	    }
	  }, {
	    key: "selectSuggestion",
	    value: function selectSuggestion() {
	      this.props.onSelect(this.props.options[this.state.selectedIndex]);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        "div",
	        { className: "ei-suggestions-container", style: this.props.style },
	        _react2.default.createElement(
	          "ul",
	          { className: "ei-suggestions" },
	          this.props.options.map(function (option, index) {
	            return _react2.default.createElement(
	              "li",
	              {
	                key: option.value,
	                className: index === _this2.state.selectedIndex ? 'selected' : '',
	                onClick: function onClick() {
	                  _this2.props.onSelect(option);
	                },
	                onMouseOver: function onMouseOver() {
	                  _this2.setState({
	                    selectedIndex: index
	                  });
	                }
	              },
	              option.label
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return Suggestions;
	}(_react.Component);

	Suggestions.propTypes = {
	  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    value: _react.PropTypes.string,
	    label: _react.PropTypes.any
	  })).isRequired,
	  style: _react.PropTypes.shape({
	    top: _react.PropTypes.number,
	    left: _react.PropTypes.number
	  }).isRequired,
	  onSelect: _react.PropTypes.func.isRequired
	};

	exports.default = Suggestions;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.emojis = undefined;
	exports.getEmojiMatches = getEmojiMatches;

	var _emojisKeywords = __webpack_require__(36);

	var _emojisKeywords2 = _interopRequireDefault(_emojisKeywords);

	var _emojisList = __webpack_require__(37);

	var _emojisList2 = _interopRequireDefault(_emojisList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var emojis = exports.emojis = _emojisKeywords2.default.map(function (keyword, index) {
	  return {
	    keyword: _emojisKeywords2.default[index],
	    character: _emojisList2.default[index]
	  };
	});

	// Returns a list of { keyword, character } objects with keyword that matches
	// the query sorted by matching index.
	function getEmojiMatches(query) {
	  var matches = [];
	  emojis.forEach(function (emoji) {
	    var matchingIndex = emoji.keyword.indexOf(query);
	    if (matchingIndex !== -1) {
	      matches.push(Object.assign({}, emoji, {
	        index: matchingIndex
	      }));
	    }
	  });

	  return matches.sort(function (a, b) {
	    return a.index - b.index;
	  });
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = [
	  ":mahjong:",
	  ":black_joker:",
	  ":a:",
	  ":b:",
	  ":o2:",
	  ":parking:",
	  ":ab:",
	  ":cl:",
	  ":cool:",
	  ":free:",
	  ":id:",
	  ":new:",
	  ":ng:",
	  ":ok:",
	  ":sos:",
	  ":up:",
	  ":vs:",
	  ":flag_ac:",
	  ":flag_ad:",
	  ":flag_ae:",
	  ":flag_af:",
	  ":flag_ag:",
	  ":flag_ai:",
	  ":flag_al:",
	  ":flag_am:",
	  ":flag_ao:",
	  ":flag_aq:",
	  ":flag_ar:",
	  ":flag_as:",
	  ":flag_at:",
	  ":flag_au:",
	  ":flag_aw:",
	  ":flag_ax:",
	  ":flag_az:",
	  ":regional_indicator_a:",
	  ":flag_ba:",
	  ":flag_bb:",
	  ":flag_bd:",
	  ":flag_be:",
	  ":flag_bf:",
	  ":flag_bg:",
	  ":flag_bh:",
	  ":flag_bi:",
	  ":flag_bj:",
	  ":flag_bl:",
	  ":flag_bm:",
	  ":flag_bn:",
	  ":flag_bo:",
	  ":flag_bq:",
	  ":flag_br:",
	  ":flag_bs:",
	  ":flag_bt:",
	  ":flag_bv:",
	  ":flag_bw:",
	  ":flag_by:",
	  ":flag_bz:",
	  ":regional_indicator_b:",
	  ":flag_ca:",
	  ":flag_cc:",
	  ":flag_cd:",
	  ":flag_cf:",
	  ":flag_cg:",
	  ":flag_ch:",
	  ":flag_ci:",
	  ":flag_ck:",
	  ":flag_cl:",
	  ":flag_cm:",
	  ":flag_cn:",
	  ":flag_co:",
	  ":flag_cp:",
	  ":flag_cr:",
	  ":flag_cu:",
	  ":flag_cv:",
	  ":flag_cw:",
	  ":flag_cx:",
	  ":flag_cy:",
	  ":flag_cz:",
	  ":regional_indicator_c:",
	  ":flag_de:",
	  ":flag_dg:",
	  ":flag_dj:",
	  ":flag_dk:",
	  ":flag_dm:",
	  ":flag_do:",
	  ":flag_dz:",
	  ":regional_indicator_d:",
	  ":flag_ea:",
	  ":flag_ec:",
	  ":flag_ee:",
	  ":flag_eg:",
	  ":flag_eh:",
	  ":flag_er:",
	  ":flag_es:",
	  ":flag_et:",
	  ":flag_eu:",
	  ":regional_indicator_e:",
	  ":flag_fi:",
	  ":flag_fj:",
	  ":flag_fk:",
	  ":flag_fm:",
	  ":flag_fo:",
	  ":flag_fr:",
	  ":regional_indicator_f:",
	  ":flag_ga:",
	  ":flag_gb:",
	  ":flag_gd:",
	  ":flag_ge:",
	  ":flag_gf:",
	  ":flag_gg:",
	  ":flag_gh:",
	  ":flag_gi:",
	  ":flag_gl:",
	  ":flag_gm:",
	  ":flag_gn:",
	  ":flag_gp:",
	  ":flag_gq:",
	  ":flag_gr:",
	  ":flag_gs:",
	  ":flag_gt:",
	  ":flag_gu:",
	  ":flag_gw:",
	  ":flag_gy:",
	  ":regional_indicator_g:",
	  ":flag_hk:",
	  ":flag_hm:",
	  ":flag_hn:",
	  ":flag_hr:",
	  ":flag_ht:",
	  ":flag_hu:",
	  ":regional_indicator_h:",
	  ":flag_ic:",
	  ":flag_id:",
	  ":flag_ie:",
	  ":flag_il:",
	  ":flag_im:",
	  ":flag_in:",
	  ":flag_io:",
	  ":flag_iq:",
	  ":flag_ir:",
	  ":flag_is:",
	  ":flag_it:",
	  ":regional_indicator_i:",
	  ":flag_je:",
	  ":flag_jm:",
	  ":flag_jo:",
	  ":flag_jp:",
	  ":regional_indicator_j:",
	  ":flag_ke:",
	  ":flag_kg:",
	  ":flag_kh:",
	  ":flag_ki:",
	  ":flag_km:",
	  ":flag_kn:",
	  ":flag_kp:",
	  ":flag_kr:",
	  ":flag_kw:",
	  ":flag_ky:",
	  ":flag_kz:",
	  ":regional_indicator_k:",
	  ":flag_la:",
	  ":flag_lb:",
	  ":flag_lc:",
	  ":flag_li:",
	  ":flag_lk:",
	  ":flag_lr:",
	  ":flag_ls:",
	  ":flag_lt:",
	  ":flag_lu:",
	  ":flag_lv:",
	  ":flag_ly:",
	  ":regional_indicator_l:",
	  ":flag_ma:",
	  ":flag_mc:",
	  ":flag_md:",
	  ":flag_me:",
	  ":flag_mf:",
	  ":flag_mg:",
	  ":flag_mh:",
	  ":flag_mk:",
	  ":flag_ml:",
	  ":flag_mm:",
	  ":flag_mn:",
	  ":flag_mo:",
	  ":flag_mp:",
	  ":flag_mq:",
	  ":flag_mr:",
	  ":flag_ms:",
	  ":flag_mt:",
	  ":flag_mu:",
	  ":flag_mv:",
	  ":flag_mw:",
	  ":flag_mx:",
	  ":flag_my:",
	  ":flag_mz:",
	  ":regional_indicator_m:",
	  ":flag_na:",
	  ":flag_nc:",
	  ":flag_ne:",
	  ":flag_nf:",
	  ":flag_ng:",
	  ":flag_ni:",
	  ":flag_nl:",
	  ":flag_no:",
	  ":flag_np:",
	  ":flag_nr:",
	  ":flag_nu:",
	  ":flag_nz:",
	  ":regional_indicator_n:",
	  ":flag_om:",
	  ":regional_indicator_o:",
	  ":flag_pa:",
	  ":flag_pe:",
	  ":flag_pf:",
	  ":flag_pg:",
	  ":flag_ph:",
	  ":flag_pk:",
	  ":flag_pl:",
	  ":flag_pm:",
	  ":flag_pn:",
	  ":flag_pr:",
	  ":flag_ps:",
	  ":flag_pt:",
	  ":flag_pw:",
	  ":flag_py:",
	  ":regional_indicator_p:",
	  ":flag_qa:",
	  ":regional_indicator_q:",
	  ":flag_re:",
	  ":flag_ro:",
	  ":flag_rs:",
	  ":flag_ru:",
	  ":flag_rw:",
	  ":regional_indicator_r:",
	  ":flag_sa:",
	  ":flag_sb:",
	  ":flag_sc:",
	  ":flag_sd:",
	  ":flag_se:",
	  ":flag_sg:",
	  ":flag_sh:",
	  ":flag_si:",
	  ":flag_sj:",
	  ":flag_sk:",
	  ":flag_sl:",
	  ":flag_sm:",
	  ":flag_sn:",
	  ":flag_so:",
	  ":flag_sr:",
	  ":flag_ss:",
	  ":flag_st:",
	  ":flag_sv:",
	  ":flag_sx:",
	  ":flag_sy:",
	  ":flag_sz:",
	  ":regional_indicator_s:",
	  ":flag_ta:",
	  ":flag_tc:",
	  ":flag_td:",
	  ":flag_tf:",
	  ":flag_tg:",
	  ":flag_th:",
	  ":flag_tj:",
	  ":flag_tk:",
	  ":flag_tl:",
	  ":flag_tm:",
	  ":flag_tn:",
	  ":flag_to:",
	  ":flag_tr:",
	  ":flag_tt:",
	  ":flag_tv:",
	  ":flag_tw:",
	  ":flag_tz:",
	  ":regional_indicator_t:",
	  ":flag_ua:",
	  ":flag_ug:",
	  ":flag_um:",
	  ":regional_indicator_u::regional_indicator_n:",
	  ":flag_us:",
	  ":flag_uy:",
	  ":flag_uz:",
	  ":regional_indicator_u:",
	  ":flag_va:",
	  ":flag_vc:",
	  ":flag_ve:",
	  ":flag_vg:",
	  ":flag_vi:",
	  ":flag_vn:",
	  ":flag_vu:",
	  ":regional_indicator_v:",
	  ":flag_wf:",
	  ":flag_ws:",
	  ":regional_indicator_w:",
	  ":flag_xk:",
	  ":regional_indicator_x:",
	  ":flag_ye:",
	  ":flag_yt:",
	  ":regional_indicator_y:",
	  ":flag_za:",
	  ":flag_zm:",
	  ":flag_zw:",
	  ":regional_indicator_z:",
	  ":koko:",
	  ":sa:",
	  ":u7121:",
	  ":u6307:",
	  ":u7981:",
	  ":u7a7a:",
	  ":u5408:",
	  ":u6e80:",
	  ":u6709:",
	  ":u6708:",
	  ":u7533:",
	  ":u5272:",
	  ":u55b6:",
	  ":ideograph_advantage:",
	  ":accept:",
	  ":cyclone:",
	  ":foggy:",
	  ":closed_umbrella:",
	  ":night_with_stars:",
	  ":sunrise_over_mountains:",
	  ":sunrise:",
	  ":city_dusk:",
	  ":city_sunset:",
	  ":rainbow:",
	  ":bridge_at_night:",
	  ":ocean:",
	  ":volcano:",
	  ":milky_way:",
	  ":earth_africa:",
	  ":earth_americas:",
	  ":earth_asia:",
	  ":globe_with_meridians:",
	  ":new_moon:",
	  ":waxing_crescent_moon:",
	  ":first_quarter_moon:",
	  ":waxing_gibbous_moon:",
	  ":full_moon:",
	  ":waning_gibbous_moon:",
	  ":last_quarter_moon:",
	  ":waning_crescent_moon:",
	  ":crescent_moon:",
	  ":new_moon_with_face:",
	  ":first_quarter_moon_with_face:",
	  ":last_quarter_moon_with_face:",
	  ":full_moon_with_face:",
	  ":sun_with_face:",
	  ":star2:",
	  ":stars:",
	  ":thermometer:",
	  ":white_sun_small_cloud:",
	  ":white_sun_cloud:",
	  ":white_sun_rain_cloud:",
	  ":cloud_rain:",
	  ":cloud_snow:",
	  ":cloud_lightning:",
	  ":cloud_tornado:",
	  ":fog:",
	  ":wind_blowing_face:",
	  ":hotdog:",
	  ":taco:",
	  ":burrito:",
	  ":chestnut:",
	  ":seedling:",
	  ":evergreen_tree:",
	  ":deciduous_tree:",
	  ":palm_tree:",
	  ":cactus:",
	  ":hot_pepper:",
	  ":tulip:",
	  ":cherry_blossom:",
	  ":rose:",
	  ":hibiscus:",
	  ":sunflower:",
	  ":blossom:",
	  ":corn:",
	  ":ear_of_rice:",
	  ":herb:",
	  ":four_leaf_clover:",
	  ":maple_leaf:",
	  ":fallen_leaf:",
	  ":leaves:",
	  ":mushroom:",
	  ":tomato:",
	  ":eggplant:",
	  ":grapes:",
	  ":melon:",
	  ":watermelon:",
	  ":tangerine:",
	  ":lemon:",
	  ":banana:",
	  ":pineapple:",
	  ":apple:",
	  ":green_apple:",
	  ":pear:",
	  ":peach:",
	  ":cherries:",
	  ":strawberry:",
	  ":hamburger:",
	  ":pizza:",
	  ":meat_on_bone:",
	  ":poultry_leg:",
	  ":rice_cracker:",
	  ":rice_ball:",
	  ":rice:",
	  ":curry:",
	  ":ramen:",
	  ":spaghetti:",
	  ":bread:",
	  ":fries:",
	  ":sweet_potato:",
	  ":dango:",
	  ":oden:",
	  ":sushi:",
	  ":fried_shrimp:",
	  ":fish_cake:",
	  ":icecream:",
	  ":shaved_ice:",
	  ":ice_cream:",
	  ":doughnut:",
	  ":cookie:",
	  ":chocolate_bar:",
	  ":candy:",
	  ":lollipop:",
	  ":custard:",
	  ":honey_pot:",
	  ":cake:",
	  ":bento:",
	  ":stew:",
	  ":cooking:",
	  ":fork_and_knife:",
	  ":tea:",
	  ":sake:",
	  ":wine_glass:",
	  ":cocktail:",
	  ":tropical_drink:",
	  ":beer:",
	  ":beers:",
	  ":baby_bottle:",
	  ":fork_knife_plate:",
	  ":champagne:",
	  ":popcorn:",
	  ":ribbon:",
	  ":gift:",
	  ":birthday:",
	  ":jack_o_lantern:",
	  ":christmas_tree:",
	  ":santa_tone1:",
	  ":santa_tone2:",
	  ":santa_tone3:",
	  ":santa_tone4:",
	  ":santa_tone5:",
	  ":santa:",
	  ":fireworks:",
	  ":sparkler:",
	  ":balloon:",
	  ":tada:",
	  ":confetti_ball:",
	  ":tanabata_tree:",
	  ":crossed_flags:",
	  ":bamboo:",
	  ":dolls:",
	  ":flags:",
	  ":wind_chime:",
	  ":rice_scene:",
	  ":school_satchel:",
	  ":mortar_board:",
	  ":military_medal:",
	  ":reminder_ribbon:",
	  ":microphone2:",
	  ":level_slider:",
	  ":control_knobs:",
	  ":film_frames:",
	  ":tickets:",
	  ":carousel_horse:",
	  ":ferris_wheel:",
	  ":roller_coaster:",
	  ":fishing_pole_and_fish:",
	  ":microphone:",
	  ":movie_camera:",
	  ":cinema:",
	  ":headphones:",
	  ":art:",
	  ":tophat:",
	  ":circus_tent:",
	  ":ticket:",
	  ":clapper:",
	  ":performing_arts:",
	  ":video_game:",
	  ":dart:",
	  ":slot_machine:",
	  ":8ball:",
	  ":game_die:",
	  ":bowling:",
	  ":flower_playing_cards:",
	  ":musical_note:",
	  ":notes:",
	  ":saxophone:",
	  ":guitar:",
	  ":musical_keyboard:",
	  ":trumpet:",
	  ":violin:",
	  ":musical_score:",
	  ":running_shirt_with_sash:",
	  ":tennis:",
	  ":ski:",
	  ":basketball:",
	  ":checkered_flag:",
	  ":snowboarder::tone1:",
	  ":snowboarder::tone2:",
	  ":snowboarder::tone3:",
	  ":snowboarder::tone4:",
	  ":snowboarder::tone5:",
	  ":snowboarder:",
	  ":runner_tone1:‍♀️",
	  ":runner_tone1:‍♂️",
	  ":runner_tone1:",
	  ":runner_tone2:‍♀️",
	  ":runner_tone2:‍♂️",
	  ":runner_tone2:",
	  ":runner_tone3:‍♀️",
	  ":runner_tone3:‍♂️",
	  ":runner_tone3:",
	  ":runner_tone4:‍♀️",
	  ":runner_tone4:‍♂️",
	  ":runner_tone4:",
	  ":runner_tone5:‍♀️",
	  ":runner_tone5:‍♂️",
	  ":runner_tone5:",
	  ":runner:‍♀️",
	  ":runner:‍♂️",
	  ":runner:",
	  ":surfer_tone1:‍♀️",
	  ":surfer_tone1:‍♂️",
	  ":surfer_tone1:",
	  ":surfer_tone2:‍♀️",
	  ":surfer_tone2:‍♂️",
	  ":surfer_tone2:",
	  ":surfer_tone3:‍♀️",
	  ":surfer_tone3:‍♂️",
	  ":surfer_tone3:",
	  ":surfer_tone4:‍♀️",
	  ":surfer_tone4:‍♂️",
	  ":surfer_tone4:",
	  ":surfer_tone5:‍♀️",
	  ":surfer_tone5:‍♂️",
	  ":surfer_tone5:",
	  ":surfer:‍♀️",
	  ":surfer:‍♂️",
	  ":surfer:",
	  ":medal:",
	  ":trophy:",
	  ":horse_racing_tone1:",
	  ":horse_racing_tone2:",
	  ":horse_racing_tone3:",
	  ":horse_racing_tone4:",
	  ":horse_racing_tone5:",
	  ":horse_racing:",
	  ":football:",
	  ":rugby_football:",
	  ":swimmer_tone1:‍♀️",
	  ":swimmer_tone1:‍♂️",
	  ":swimmer_tone1:",
	  ":swimmer_tone2:‍♀️",
	  ":swimmer_tone2:‍♂️",
	  ":swimmer_tone2:",
	  ":swimmer_tone3:‍♀️",
	  ":swimmer_tone3:‍♂️",
	  ":swimmer_tone3:",
	  ":swimmer_tone4:‍♀️",
	  ":swimmer_tone4:‍♂️",
	  ":swimmer_tone4:",
	  ":swimmer_tone5:‍♀️",
	  ":swimmer_tone5:‍♂️",
	  ":swimmer_tone5:",
	  ":swimmer:‍♀️",
	  ":swimmer:‍♂️",
	  ":swimmer:",
	  ":lifter_tone1:‍♀️",
	  ":lifter_tone1:‍♂️",
	  ":lifter_tone1:",
	  ":lifter_tone2:‍♀️",
	  ":lifter_tone2:‍♂️",
	  ":lifter_tone2:",
	  ":lifter_tone3:‍♀️",
	  ":lifter_tone3:‍♂️",
	  ":lifter_tone3:",
	  ":lifter_tone4:‍♀️",
	  ":lifter_tone4:‍♂️",
	  ":lifter_tone4:",
	  ":lifter_tone5:‍♀️",
	  ":lifter_tone5:‍♂️",
	  ":lifter_tone5:",
	  ":lifter:‍♀️",
	  ":lifter:‍♂️",
	  ":lifter:",
	  ":golfer::tone1:‍♀️",
	  ":golfer::tone1:‍♂️",
	  ":golfer::tone1:",
	  ":golfer::tone2:‍♀️",
	  ":golfer::tone2:‍♂️",
	  ":golfer::tone2:",
	  ":golfer::tone3:‍♀️",
	  ":golfer::tone3:‍♂️",
	  ":golfer::tone3:",
	  ":golfer::tone4:‍♀️",
	  ":golfer::tone4:‍♂️",
	  ":golfer::tone4:",
	  ":golfer::tone5:‍♀️",
	  ":golfer::tone5:‍♂️",
	  ":golfer::tone5:",
	  ":golfer:‍♀️",
	  ":golfer:‍♂️",
	  ":golfer:",
	  ":motorcycle:",
	  ":race_car:",
	  ":cricket:",
	  ":volleyball:",
	  ":field_hockey:",
	  ":hockey:",
	  ":ping_pong:",
	  ":mountain_snow:",
	  ":camping:",
	  ":beach:",
	  ":construction_site:",
	  ":homes:",
	  ":cityscape:",
	  ":house_abandoned:",
	  ":classical_building:",
	  ":desert:",
	  ":island:",
	  ":park:",
	  ":stadium:",
	  ":house:",
	  ":house_with_garden:",
	  ":office:",
	  ":post_office:",
	  ":european_post_office:",
	  ":hospital:",
	  ":bank:",
	  ":atm:",
	  ":hotel:",
	  ":love_hotel:",
	  ":convenience_store:",
	  ":school:",
	  ":department_store:",
	  ":factory:",
	  ":izakaya_lantern:",
	  ":japanese_castle:",
	  ":european_castle:",
	  ":flag_white:‍:rainbow:",
	  ":flag_white:",
	  ":flag_black:‍:skull_crossbones:",
	  ":flag_black:",
	  ":rosette:",
	  ":label:",
	  ":badminton:",
	  ":bow_and_arrow:",
	  ":amphora:",
	  ":tone1:",
	  ":tone2:",
	  ":tone3:",
	  ":tone4:",
	  ":tone5:",
	  ":rat:",
	  ":mouse2:",
	  ":ox:",
	  ":water_buffalo:",
	  ":cow2:",
	  ":tiger2:",
	  ":leopard:",
	  ":rabbit2:",
	  ":cat2:",
	  ":dragon:",
	  ":crocodile:",
	  ":whale2:",
	  ":snail:",
	  ":snake:",
	  ":racehorse:",
	  ":ram:",
	  ":goat:",
	  ":sheep:",
	  ":monkey:",
	  ":rooster:",
	  ":chicken:",
	  ":dog2:",
	  ":pig2:",
	  ":boar:",
	  ":elephant:",
	  ":octopus:",
	  ":shell:",
	  ":bug:",
	  ":ant:",
	  ":bee:",
	  ":beetle:",
	  ":fish:",
	  ":tropical_fish:",
	  ":blowfish:",
	  ":turtle:",
	  ":hatching_chick:",
	  ":baby_chick:",
	  ":hatched_chick:",
	  ":bird:",
	  ":penguin:",
	  ":koala:",
	  ":poodle:",
	  ":dromedary_camel:",
	  ":camel:",
	  ":dolphin:",
	  ":mouse:",
	  ":cow:",
	  ":tiger:",
	  ":rabbit:",
	  ":cat:",
	  ":dragon_face:",
	  ":whale:",
	  ":horse:",
	  ":monkey_face:",
	  ":dog:",
	  ":pig:",
	  ":frog:",
	  ":hamster:",
	  ":wolf:",
	  ":bear:",
	  ":panda_face:",
	  ":pig_nose:",
	  ":feet:",
	  ":chipmunk:",
	  ":eyes:",
	  ":eye_in_speech_bubble:",
	  ":eye:",
	  ":ear_tone1:",
	  ":ear_tone2:",
	  ":ear_tone3:",
	  ":ear_tone4:",
	  ":ear_tone5:",
	  ":ear:",
	  ":nose_tone1:",
	  ":nose_tone2:",
	  ":nose_tone3:",
	  ":nose_tone4:",
	  ":nose_tone5:",
	  ":nose:",
	  ":lips:",
	  ":tongue:",
	  ":point_up_2_tone1:",
	  ":point_up_2_tone2:",
	  ":point_up_2_tone3:",
	  ":point_up_2_tone4:",
	  ":point_up_2_tone5:",
	  ":point_up_2:",
	  ":point_down_tone1:",
	  ":point_down_tone2:",
	  ":point_down_tone3:",
	  ":point_down_tone4:",
	  ":point_down_tone5:",
	  ":point_down:",
	  ":point_left_tone1:",
	  ":point_left_tone2:",
	  ":point_left_tone3:",
	  ":point_left_tone4:",
	  ":point_left_tone5:",
	  ":point_left:",
	  ":point_right_tone1:",
	  ":point_right_tone2:",
	  ":point_right_tone3:",
	  ":point_right_tone4:",
	  ":point_right_tone5:",
	  ":point_right:",
	  ":punch_tone1:",
	  ":punch_tone2:",
	  ":punch_tone3:",
	  ":punch_tone4:",
	  ":punch_tone5:",
	  ":punch:",
	  ":wave_tone1:",
	  ":wave_tone2:",
	  ":wave_tone3:",
	  ":wave_tone4:",
	  ":wave_tone5:",
	  ":wave:",
	  ":ok_hand_tone1:",
	  ":ok_hand_tone2:",
	  ":ok_hand_tone3:",
	  ":ok_hand_tone4:",
	  ":ok_hand_tone5:",
	  ":ok_hand:",
	  ":thumbsup_tone1:",
	  ":thumbsup_tone2:",
	  ":thumbsup_tone3:",
	  ":thumbsup_tone4:",
	  ":thumbsup_tone5:",
	  ":thumbsup:",
	  ":thumbsdown_tone1:",
	  ":thumbsdown_tone2:",
	  ":thumbsdown_tone3:",
	  ":thumbsdown_tone4:",
	  ":thumbsdown_tone5:",
	  ":thumbsdown:",
	  ":clap_tone1:",
	  ":clap_tone2:",
	  ":clap_tone3:",
	  ":clap_tone4:",
	  ":clap_tone5:",
	  ":clap:",
	  ":open_hands_tone1:",
	  ":open_hands_tone2:",
	  ":open_hands_tone3:",
	  ":open_hands_tone4:",
	  ":open_hands_tone5:",
	  ":open_hands:",
	  ":crown:",
	  ":womans_hat:",
	  ":eyeglasses:",
	  ":necktie:",
	  ":shirt:",
	  ":jeans:",
	  ":dress:",
	  ":kimono:",
	  ":bikini:",
	  ":womans_clothes:",
	  ":purse:",
	  ":handbag:",
	  ":pouch:",
	  ":mans_shoe:",
	  ":athletic_shoe:",
	  ":high_heel:",
	  ":sandal:",
	  ":boot:",
	  ":footprints:",
	  ":bust_in_silhouette:",
	  ":busts_in_silhouette:",
	  ":boy_tone1:",
	  ":boy_tone2:",
	  ":boy_tone3:",
	  ":boy_tone4:",
	  ":boy_tone5:",
	  ":boy:",
	  ":girl_tone1:",
	  ":girl_tone2:",
	  ":girl_tone3:",
	  ":girl_tone4:",
	  ":girl_tone5:",
	  ":girl:",
	  ":man_tone1:‍:ear_of_rice:",
	  ":man_tone1:‍:cooking:",
	  ":man_tone1:‍:mortar_board:",
	  ":man_tone1:‍:microphone:",
	  ":man_tone1:‍:art:",
	  ":man_tone1:‍:school:",
	  ":man_tone1:‍:factory:",
	  ":man_tone1:‍:computer:",
	  ":man_tone1:‍:briefcase:",
	  ":man_tone1:‍:wrench:",
	  ":man_tone1:‍:microscope:",
	  ":man_tone1:‍:rocket:",
	  ":man_tone1:‍:fire_engine:",
	  ":man_tone1:‍⚕️",
	  ":man_tone1:‍:scales:",
	  ":man_tone1:‍:airplane:",
	  ":man_tone1:",
	  ":man_tone2:‍:ear_of_rice:",
	  ":man_tone2:‍:cooking:",
	  ":man_tone2:‍:mortar_board:",
	  ":man_tone2:‍:microphone:",
	  ":man_tone2:‍:art:",
	  ":man_tone2:‍:school:",
	  ":man_tone2:‍:factory:",
	  ":man_tone2:‍:computer:",
	  ":man_tone2:‍:briefcase:",
	  ":man_tone2:‍:wrench:",
	  ":man_tone2:‍:microscope:",
	  ":man_tone2:‍:rocket:",
	  ":man_tone2:‍:fire_engine:",
	  ":man_tone2:‍⚕️",
	  ":man_tone2:‍:scales:",
	  ":man_tone2:‍:airplane:",
	  ":man_tone2:",
	  ":man_tone3:‍:ear_of_rice:",
	  ":man_tone3:‍:cooking:",
	  ":man_tone3:‍:mortar_board:",
	  ":man_tone3:‍:microphone:",
	  ":man_tone3:‍:art:",
	  ":man_tone3:‍:school:",
	  ":man_tone3:‍:factory:",
	  ":man_tone3:‍:computer:",
	  ":man_tone3:‍:briefcase:",
	  ":man_tone3:‍:wrench:",
	  ":man_tone3:‍:microscope:",
	  ":man_tone3:‍:rocket:",
	  ":man_tone3:‍:fire_engine:",
	  ":man_tone3:‍⚕️",
	  ":man_tone3:‍:scales:",
	  ":man_tone3:‍:airplane:",
	  ":man_tone3:",
	  ":man_tone4:‍:ear_of_rice:",
	  ":man_tone4:‍:cooking:",
	  ":man_tone4:‍:mortar_board:",
	  ":man_tone4:‍:microphone:",
	  ":man_tone4:‍:art:",
	  ":man_tone4:‍:school:",
	  ":man_tone4:‍:factory:",
	  ":man_tone4:‍:computer:",
	  ":man_tone4:‍:briefcase:",
	  ":man_tone4:‍:wrench:",
	  ":man_tone4:‍:microscope:",
	  ":man_tone4:‍:rocket:",
	  ":man_tone4:‍:fire_engine:",
	  ":man_tone4:‍⚕️",
	  ":man_tone4:‍:scales:",
	  ":man_tone4:‍:airplane:",
	  ":man_tone4:",
	  ":man_tone5:‍:ear_of_rice:",
	  ":man_tone5:‍:cooking:",
	  ":man_tone5:‍:mortar_board:",
	  ":man_tone5:‍:microphone:",
	  ":man_tone5:‍:art:",
	  ":man_tone5:‍:school:",
	  ":man_tone5:‍:factory:",
	  ":man_tone5:‍:computer:",
	  ":man_tone5:‍:briefcase:",
	  ":man_tone5:‍:wrench:",
	  ":man_tone5:‍:microscope:",
	  ":man_tone5:‍:rocket:",
	  ":man_tone5:‍:fire_engine:",
	  ":man_tone5:‍⚕️",
	  ":man_tone5:‍:scales:",
	  ":man_tone5:‍:airplane:",
	  ":man_tone5:",
	  ":man:‍:ear_of_rice:",
	  ":man:‍:cooking:",
	  ":man:‍:mortar_board:",
	  ":man:‍:microphone:",
	  ":man:‍:art:",
	  ":man:‍:school:",
	  ":man:‍:factory:",
	  ":man:‍:boy:‍:boy:",
	  ":man:‍:boy:",
	  ":man:‍:girl:‍:boy:",
	  ":man:‍:girl:‍:girl:",
	  ":man:‍:girl:",
	  ":family_mmbb:",
	  ":family_mmb:",
	  ":family_mmgb:",
	  ":family_mmgg:",
	  ":family_mmg:",
	  ":family_mwbb:",
	  ":man:‍:woman:‍:boy:",
	  ":family_mwgb:",
	  ":family_mwgg:",
	  ":family_mwg:",
	  ":man:‍:computer:",
	  ":man:‍:briefcase:",
	  ":man:‍:wrench:",
	  ":man:‍:microscope:",
	  ":man:‍:rocket:",
	  ":man:‍:fire_engine:",
	  ":man:‍⚕️",
	  ":man:‍:scales:",
	  ":man:‍:airplane:",
	  ":couple_mm:",
	  ":kiss_mm:",
	  ":man:",
	  ":woman_tone1:‍:ear_of_rice:",
	  ":woman_tone1:‍:cooking:",
	  ":woman_tone1:‍:mortar_board:",
	  ":woman_tone1:‍:microphone:",
	  ":woman_tone1:‍:art:",
	  ":woman_tone1:‍:school:",
	  ":woman_tone1:‍:factory:",
	  ":woman_tone1:‍:computer:",
	  ":woman_tone1:‍:briefcase:",
	  ":woman_tone1:‍:wrench:",
	  ":woman_tone1:‍:microscope:",
	  ":woman_tone1:‍:rocket:",
	  ":woman_tone1:‍:fire_engine:",
	  ":woman_tone1:‍⚕️",
	  ":woman_tone1:‍:scales:",
	  ":woman_tone1:‍:airplane:",
	  ":woman_tone1:",
	  ":woman_tone2:‍:ear_of_rice:",
	  ":woman_tone2:‍:cooking:",
	  ":woman_tone2:‍:mortar_board:",
	  ":woman_tone2:‍:microphone:",
	  ":woman_tone2:‍:art:",
	  ":woman_tone2:‍:school:",
	  ":woman_tone2:‍:factory:",
	  ":woman_tone2:‍:computer:",
	  ":woman_tone2:‍:briefcase:",
	  ":woman_tone2:‍:wrench:",
	  ":woman_tone2:‍:microscope:",
	  ":woman_tone2:‍:rocket:",
	  ":woman_tone2:‍:fire_engine:",
	  ":woman_tone2:‍⚕️",
	  ":woman_tone2:‍:scales:",
	  ":woman_tone2:‍:airplane:",
	  ":woman_tone2:",
	  ":woman_tone3:‍:ear_of_rice:",
	  ":woman_tone3:‍:cooking:",
	  ":woman_tone3:‍:mortar_board:",
	  ":woman_tone3:‍:microphone:",
	  ":woman_tone3:‍:art:",
	  ":woman_tone3:‍:school:",
	  ":woman_tone3:‍:factory:",
	  ":woman_tone3:‍:computer:",
	  ":woman_tone3:‍:briefcase:",
	  ":woman_tone3:‍:wrench:",
	  ":woman_tone3:‍:microscope:",
	  ":woman_tone3:‍:rocket:",
	  ":woman_tone3:‍:fire_engine:",
	  ":woman_tone3:‍⚕️",
	  ":woman_tone3:‍:scales:",
	  ":woman_tone3:‍:airplane:",
	  ":woman_tone3:",
	  ":woman_tone4:‍:ear_of_rice:",
	  ":woman_tone4:‍:cooking:",
	  ":woman_tone4:‍:mortar_board:",
	  ":woman_tone4:‍:microphone:",
	  ":woman_tone4:‍:art:",
	  ":woman_tone4:‍:school:",
	  ":woman_tone4:‍:factory:",
	  ":woman_tone4:‍:computer:",
	  ":woman_tone4:‍:briefcase:",
	  ":woman_tone4:‍:wrench:",
	  ":woman_tone4:‍:microscope:",
	  ":woman_tone4:‍:rocket:",
	  ":woman_tone4:‍:fire_engine:",
	  ":woman_tone4:‍⚕️",
	  ":woman_tone4:‍:scales:",
	  ":woman_tone4:‍:airplane:",
	  ":woman_tone4:",
	  ":woman_tone5:‍:ear_of_rice:",
	  ":woman_tone5:‍:cooking:",
	  ":woman_tone5:‍:mortar_board:",
	  ":woman_tone5:‍:microphone:",
	  ":woman_tone5:‍:art:",
	  ":woman_tone5:‍:school:",
	  ":woman_tone5:‍:factory:",
	  ":woman_tone5:‍:computer:",
	  ":woman_tone5:‍:briefcase:",
	  ":woman_tone5:‍:wrench:",
	  ":woman_tone5:‍:microscope:",
	  ":woman_tone5:‍:rocket:",
	  ":woman_tone5:‍:fire_engine:",
	  ":woman_tone5:‍⚕️",
	  ":woman_tone5:‍:scales:",
	  ":woman_tone5:‍:airplane:",
	  ":woman_tone5:",
	  ":woman:‍:ear_of_rice:",
	  ":woman:‍:cooking:",
	  ":woman:‍:mortar_board:",
	  ":woman:‍:microphone:",
	  ":woman:‍:art:",
	  ":woman:‍:school:",
	  ":woman:‍:factory:",
	  ":woman:‍:boy:‍:boy:",
	  ":woman:‍:boy:",
	  ":woman:‍:girl:‍:boy:",
	  ":woman:‍:girl:‍:girl:",
	  ":woman:‍:girl:",
	  ":family_wwbb:",
	  ":family_wwb:",
	  ":family_wwgb:",
	  ":family_wwgg:",
	  ":family_wwg:",
	  ":woman:‍:computer:",
	  ":woman:‍:briefcase:",
	  ":woman:‍:wrench:",
	  ":woman:‍:microscope:",
	  ":woman:‍:rocket:",
	  ":woman:‍:fire_engine:",
	  ":woman:‍⚕️",
	  ":woman:‍:scales:",
	  ":woman:‍:airplane:",
	  ":woman:‍:heart:‍:man:",
	  ":couple_ww:",
	  ":woman:‍:heart:‍:kiss:‍:man:",
	  ":kiss_ww:",
	  ":woman:",
	  ":family::tone1:",
	  ":family::tone2:",
	  ":family::tone3:",
	  ":family::tone4:",
	  ":family::tone5:",
	  ":family:",
	  ":couple::tone1:",
	  ":couple::tone2:",
	  ":couple::tone3:",
	  ":couple::tone4:",
	  ":couple::tone5:",
	  ":couple:",
	  ":two_men_holding_hands::tone1:",
	  ":two_men_holding_hands::tone2:",
	  ":two_men_holding_hands::tone3:",
	  ":two_men_holding_hands::tone4:",
	  ":two_men_holding_hands::tone5:",
	  ":two_men_holding_hands:",
	  ":two_women_holding_hands::tone1:",
	  ":two_women_holding_hands::tone2:",
	  ":two_women_holding_hands::tone3:",
	  ":two_women_holding_hands::tone4:",
	  ":two_women_holding_hands::tone5:",
	  ":two_women_holding_hands:",
	  ":cop_tone1:‍♀️",
	  ":cop_tone1:‍♂️",
	  ":cop_tone1:",
	  ":cop_tone2:‍♀️",
	  ":cop_tone2:‍♂️",
	  ":cop_tone2:",
	  ":cop_tone3:‍♀️",
	  ":cop_tone3:‍♂️",
	  ":cop_tone3:",
	  ":cop_tone4:‍♀️",
	  ":cop_tone4:‍♂️",
	  ":cop_tone4:",
	  ":cop_tone5:‍♀️",
	  ":cop_tone5:‍♂️",
	  ":cop_tone5:",
	  ":cop:‍♀️",
	  ":cop:‍♂️",
	  ":cop:",
	  ":dancers::tone1:‍♀️",
	  ":dancers::tone1:‍♂️",
	  ":dancers::tone1:",
	  ":dancers::tone2:‍♀️",
	  ":dancers::tone2:‍♂️",
	  ":dancers::tone2:",
	  ":dancers::tone3:‍♀️",
	  ":dancers::tone3:‍♂️",
	  ":dancers::tone3:",
	  ":dancers::tone4:‍♀️",
	  ":dancers::tone4:‍♂️",
	  ":dancers::tone4:",
	  ":dancers::tone5:‍♀️",
	  ":dancers::tone5:‍♂️",
	  ":dancers::tone5:",
	  ":dancers:‍♀️",
	  ":dancers:‍♂️",
	  ":dancers:",
	  ":bride_with_veil_tone1:",
	  ":bride_with_veil_tone2:",
	  ":bride_with_veil_tone3:",
	  ":bride_with_veil_tone4:",
	  ":bride_with_veil_tone5:",
	  ":bride_with_veil:",
	  ":person_with_blond_hair_tone1:‍♀️",
	  ":person_with_blond_hair_tone1:‍♂️",
	  ":person_with_blond_hair_tone1:",
	  ":person_with_blond_hair_tone2:‍♀️",
	  ":person_with_blond_hair_tone2:‍♂️",
	  ":person_with_blond_hair_tone2:",
	  ":person_with_blond_hair_tone3:‍♀️",
	  ":person_with_blond_hair_tone3:‍♂️",
	  ":person_with_blond_hair_tone3:",
	  ":person_with_blond_hair_tone4:‍♀️",
	  ":person_with_blond_hair_tone4:‍♂️",
	  ":person_with_blond_hair_tone4:",
	  ":person_with_blond_hair_tone5:‍♀️",
	  ":person_with_blond_hair_tone5:‍♂️",
	  ":person_with_blond_hair_tone5:",
	  ":person_with_blond_hair:‍♀️",
	  ":person_with_blond_hair:‍♂️",
	  ":person_with_blond_hair:",
	  ":man_with_gua_pi_mao_tone1:",
	  ":man_with_gua_pi_mao_tone2:",
	  ":man_with_gua_pi_mao_tone3:",
	  ":man_with_gua_pi_mao_tone4:",
	  ":man_with_gua_pi_mao_tone5:",
	  ":man_with_gua_pi_mao:",
	  ":man_with_turban_tone1:‍♀️",
	  ":man_with_turban_tone1:‍♂️",
	  ":man_with_turban_tone1:",
	  ":man_with_turban_tone2:‍♀️",
	  ":man_with_turban_tone2:‍♂️",
	  ":man_with_turban_tone2:",
	  ":man_with_turban_tone3:‍♀️",
	  ":man_with_turban_tone3:‍♂️",
	  ":man_with_turban_tone3:",
	  ":man_with_turban_tone4:‍♀️",
	  ":man_with_turban_tone4:‍♂️",
	  ":man_with_turban_tone4:",
	  ":man_with_turban_tone5:‍♀️",
	  ":man_with_turban_tone5:‍♂️",
	  ":man_with_turban_tone5:",
	  ":man_with_turban:‍♀️",
	  ":man_with_turban:‍♂️",
	  ":man_with_turban:",
	  ":older_man_tone1:",
	  ":older_man_tone2:",
	  ":older_man_tone3:",
	  ":older_man_tone4:",
	  ":older_man_tone5:",
	  ":older_man:",
	  ":older_woman_tone1:",
	  ":older_woman_tone2:",
	  ":older_woman_tone3:",
	  ":older_woman_tone4:",
	  ":older_woman_tone5:",
	  ":older_woman:",
	  ":baby_tone1:",
	  ":baby_tone2:",
	  ":baby_tone3:",
	  ":baby_tone4:",
	  ":baby_tone5:",
	  ":baby:",
	  ":construction_worker_tone1:‍♀️",
	  ":construction_worker_tone1:‍♂️",
	  ":construction_worker_tone1:",
	  ":construction_worker_tone2:‍♀️",
	  ":construction_worker_tone2:‍♂️",
	  ":construction_worker_tone2:",
	  ":construction_worker_tone3:‍♀️",
	  ":construction_worker_tone3:‍♂️",
	  ":construction_worker_tone3:",
	  ":construction_worker_tone4:‍♀️",
	  ":construction_worker_tone4:‍♂️",
	  ":construction_worker_tone4:",
	  ":construction_worker_tone5:‍♀️",
	  ":construction_worker_tone5:‍♂️",
	  ":construction_worker_tone5:",
	  ":construction_worker:‍♀️",
	  ":construction_worker:‍♂️",
	  ":construction_worker:",
	  ":princess_tone1:",
	  ":princess_tone2:",
	  ":princess_tone3:",
	  ":princess_tone4:",
	  ":princess_tone5:",
	  ":princess:",
	  ":japanese_ogre:",
	  ":japanese_goblin:",
	  ":ghost:",
	  ":angel_tone1:",
	  ":angel_tone2:",
	  ":angel_tone3:",
	  ":angel_tone4:",
	  ":angel_tone5:",
	  ":angel:",
	  ":alien:",
	  ":space_invader:",
	  ":imp:",
	  ":skull:",
	  ":information_desk_person_tone1:‍♀️",
	  ":information_desk_person_tone1:‍♂️",
	  ":information_desk_person_tone1:",
	  ":information_desk_person_tone2:‍♀️",
	  ":information_desk_person_tone2:‍♂️",
	  ":information_desk_person_tone2:",
	  ":information_desk_person_tone3:‍♀️",
	  ":information_desk_person_tone3:‍♂️",
	  ":information_desk_person_tone3:",
	  ":information_desk_person_tone4:‍♀️",
	  ":information_desk_person_tone4:‍♂️",
	  ":information_desk_person_tone4:",
	  ":information_desk_person_tone5:‍♀️",
	  ":information_desk_person_tone5:‍♂️",
	  ":information_desk_person_tone5:",
	  ":information_desk_person:‍♀️",
	  ":information_desk_person:‍♂️",
	  ":information_desk_person:",
	  ":guardsman_tone1:‍♀️",
	  ":guardsman_tone1:‍♂️",
	  ":guardsman_tone1:",
	  ":guardsman_tone2:‍♀️",
	  ":guardsman_tone2:‍♂️",
	  ":guardsman_tone2:",
	  ":guardsman_tone3:‍♀️",
	  ":guardsman_tone3:‍♂️",
	  ":guardsman_tone3:",
	  ":guardsman_tone4:‍♀️",
	  ":guardsman_tone4:‍♂️",
	  ":guardsman_tone4:",
	  ":guardsman_tone5:‍♀️",
	  ":guardsman_tone5:‍♂️",
	  ":guardsman_tone5:",
	  ":guardsman:‍♀️",
	  ":guardsman:‍♂️",
	  ":guardsman:",
	  ":dancer_tone1:",
	  ":dancer_tone2:",
	  ":dancer_tone3:",
	  ":dancer_tone4:",
	  ":dancer_tone5:",
	  ":dancer:",
	  ":lipstick:",
	  ":nail_care_tone1:",
	  ":nail_care_tone2:",
	  ":nail_care_tone3:",
	  ":nail_care_tone4:",
	  ":nail_care_tone5:",
	  ":nail_care:",
	  ":massage_tone1:‍♀️",
	  ":massage_tone1:‍♂️",
	  ":massage_tone1:",
	  ":massage_tone2:‍♀️",
	  ":massage_tone2:‍♂️",
	  ":massage_tone2:",
	  ":massage_tone3:‍♀️",
	  ":massage_tone3:‍♂️",
	  ":massage_tone3:",
	  ":massage_tone4:‍♀️",
	  ":massage_tone4:‍♂️",
	  ":massage_tone4:",
	  ":massage_tone5:‍♀️",
	  ":massage_tone5:‍♂️",
	  ":massage_tone5:",
	  ":massage:‍♀️",
	  ":massage:‍♂️",
	  ":massage:",
	  ":haircut_tone1:‍♀️",
	  ":haircut_tone1:‍♂️",
	  ":haircut_tone1:",
	  ":haircut_tone2:‍♀️",
	  ":haircut_tone2:‍♂️",
	  ":haircut_tone2:",
	  ":haircut_tone3:‍♀️",
	  ":haircut_tone3:‍♂️",
	  ":haircut_tone3:",
	  ":haircut_tone4:‍♀️",
	  ":haircut_tone4:‍♂️",
	  ":haircut_tone4:",
	  ":haircut_tone5:‍♀️",
	  ":haircut_tone5:‍♂️",
	  ":haircut_tone5:",
	  ":haircut:‍♀️",
	  ":haircut:‍♂️",
	  ":haircut:",
	  ":barber:",
	  ":syringe:",
	  ":pill:",
	  ":kiss:",
	  ":love_letter:",
	  ":ring:",
	  ":gem:",
	  ":couplekiss:",
	  ":bouquet:",
	  ":couple_with_heart:",
	  ":wedding:",
	  ":heartbeat:",
	  ":broken_heart:",
	  ":two_hearts:",
	  ":sparkling_heart:",
	  ":heartpulse:",
	  ":cupid:",
	  ":blue_heart:",
	  ":green_heart:",
	  ":yellow_heart:",
	  ":purple_heart:",
	  ":gift_heart:",
	  ":revolving_hearts:",
	  ":heart_decoration:",
	  ":diamond_shape_with_a_dot_inside:",
	  ":bulb:",
	  ":anger:",
	  ":bomb:",
	  ":zzz:",
	  ":boom:",
	  ":sweat_drops:",
	  ":droplet:",
	  ":dash:",
	  ":poop:",
	  ":muscle_tone1:",
	  ":muscle_tone2:",
	  ":muscle_tone3:",
	  ":muscle_tone4:",
	  ":muscle_tone5:",
	  ":muscle:",
	  ":dizzy:",
	  ":speech_balloon:",
	  ":thought_balloon:",
	  ":white_flower:",
	  ":100:",
	  ":moneybag:",
	  ":currency_exchange:",
	  ":heavy_dollar_sign:",
	  ":credit_card:",
	  ":yen:",
	  ":dollar:",
	  ":euro:",
	  ":pound:",
	  ":money_with_wings:",
	  ":chart:",
	  ":seat:",
	  ":computer:",
	  ":briefcase:",
	  ":minidisc:",
	  ":floppy_disk:",
	  ":cd:",
	  ":dvd:",
	  ":file_folder:",
	  ":open_file_folder:",
	  ":page_with_curl:",
	  ":page_facing_up:",
	  ":date:",
	  ":calendar:",
	  ":card_index:",
	  ":chart_with_upwards_trend:",
	  ":chart_with_downwards_trend:",
	  ":bar_chart:",
	  ":clipboard:",
	  ":pushpin:",
	  ":round_pushpin:",
	  ":paperclip:",
	  ":straight_ruler:",
	  ":triangular_ruler:",
	  ":bookmark_tabs:",
	  ":ledger:",
	  ":notebook:",
	  ":notebook_with_decorative_cover:",
	  ":closed_book:",
	  ":book:",
	  ":green_book:",
	  ":blue_book:",
	  ":orange_book:",
	  ":books:",
	  ":name_badge:",
	  ":scroll:",
	  ":pencil:",
	  ":telephone_receiver:",
	  ":pager:",
	  ":fax:",
	  ":satellite:",
	  ":loudspeaker:",
	  ":mega:",
	  ":outbox_tray:",
	  ":inbox_tray:",
	  ":package:",
	  ":e-mail:",
	  ":incoming_envelope:",
	  ":envelope_with_arrow:",
	  ":mailbox_closed:",
	  ":mailbox:",
	  ":mailbox_with_mail:",
	  ":mailbox_with_no_mail:",
	  ":postbox:",
	  ":postal_horn:",
	  ":newspaper:",
	  ":iphone:",
	  ":calling:",
	  ":vibration_mode:",
	  ":mobile_phone_off:",
	  ":no_mobile_phones:",
	  ":signal_strength:",
	  ":camera:",
	  ":camera_with_flash:",
	  ":video_camera:",
	  ":tv:",
	  ":radio:",
	  ":vhs:",
	  ":projector:",
	  ":prayer_beads:",
	  ":twisted_rightwards_arrows:",
	  ":repeat:",
	  ":repeat_one:",
	  ":arrows_clockwise:",
	  ":arrows_counterclockwise:",
	  ":low_brightness:",
	  ":high_brightness:",
	  ":mute:",
	  ":speaker:",
	  ":sound:",
	  ":loud_sound:",
	  ":battery:",
	  ":electric_plug:",
	  ":mag:",
	  ":mag_right:",
	  ":lock_with_ink_pen:",
	  ":closed_lock_with_key:",
	  ":key:",
	  ":lock:",
	  ":unlock:",
	  ":bell:",
	  ":no_bell:",
	  ":bookmark:",
	  ":link:",
	  ":radio_button:",
	  ":back:",
	  ":end:",
	  ":on:",
	  ":soon:",
	  ":top:",
	  ":underage:",
	  ":keycap_ten:",
	  ":capital_abcd:",
	  ":abcd:",
	  ":1234:",
	  ":symbols:",
	  ":abc:",
	  ":fire:",
	  ":flashlight:",
	  ":wrench:",
	  ":hammer:",
	  ":nut_and_bolt:",
	  ":knife:",
	  ":gun:",
	  ":microscope:",
	  ":telescope:",
	  ":crystal_ball:",
	  ":six_pointed_star:",
	  ":beginner:",
	  ":trident:",
	  ":black_square_button:",
	  ":white_square_button:",
	  ":red_circle:",
	  ":large_blue_circle:",
	  ":large_orange_diamond:",
	  ":large_blue_diamond:",
	  ":small_orange_diamond:",
	  ":small_blue_diamond:",
	  ":small_red_triangle:",
	  ":small_red_triangle_down:",
	  ":arrow_up_small:",
	  ":arrow_down_small:",
	  ":om_symbol:",
	  ":dove:",
	  ":kaaba:",
	  ":mosque:",
	  ":synagogue:",
	  ":menorah:",
	  ":clock1:",
	  ":clock2:",
	  ":clock3:",
	  ":clock4:",
	  ":clock5:",
	  ":clock6:",
	  ":clock7:",
	  ":clock8:",
	  ":clock9:",
	  ":clock10:",
	  ":clock11:",
	  ":clock12:",
	  ":clock130:",
	  ":clock230:",
	  ":clock330:",
	  ":clock430:",
	  ":clock530:",
	  ":clock630:",
	  ":clock730:",
	  ":clock830:",
	  ":clock930:",
	  ":clock1030:",
	  ":clock1130:",
	  ":clock1230:",
	  ":candle:",
	  ":clock:",
	  ":hole:",
	  ":levitate::tone1:",
	  ":levitate::tone2:",
	  ":levitate::tone3:",
	  ":levitate::tone4:",
	  ":levitate::tone5:",
	  ":levitate:",
	  ":spy_tone1:‍♀️",
	  ":spy_tone1:‍♂️",
	  ":spy_tone1:",
	  ":spy_tone2:‍♀️",
	  ":spy_tone2:‍♂️",
	  ":spy_tone2:",
	  ":spy_tone3:‍♀️",
	  ":spy_tone3:‍♂️",
	  ":spy_tone3:",
	  ":spy_tone4:‍♀️",
	  ":spy_tone4:‍♂️",
	  ":spy_tone4:",
	  ":spy_tone5:‍♀️",
	  ":spy_tone5:‍♂️",
	  ":spy_tone5:",
	  ":spy:‍♀️",
	  ":spy:‍♂️",
	  ":spy:",
	  ":dark_sunglasses:",
	  ":spider:",
	  ":spider_web:",
	  ":joystick:",
	  ":man_dancing_tone1:",
	  ":man_dancing_tone2:",
	  ":man_dancing_tone3:",
	  ":man_dancing_tone4:",
	  ":man_dancing_tone5:",
	  ":man_dancing:",
	  ":paperclips:",
	  ":pen_ballpoint:",
	  ":pen_fountain:",
	  ":paintbrush:",
	  ":crayon:",
	  ":hand_splayed_tone1:",
	  ":hand_splayed_tone2:",
	  ":hand_splayed_tone3:",
	  ":hand_splayed_tone4:",
	  ":hand_splayed_tone5:",
	  ":hand_splayed:",
	  ":middle_finger_tone1:",
	  ":middle_finger_tone2:",
	  ":middle_finger_tone3:",
	  ":middle_finger_tone4:",
	  ":middle_finger_tone5:",
	  ":middle_finger:",
	  ":vulcan_tone1:",
	  ":vulcan_tone2:",
	  ":vulcan_tone3:",
	  ":vulcan_tone4:",
	  ":vulcan_tone5:",
	  ":vulcan:",
	  ":black_heart:",
	  ":desktop:",
	  ":printer:",
	  ":mouse_three_button:",
	  ":trackball:",
	  ":frame_photo:",
	  ":dividers:",
	  ":card_box:",
	  ":file_cabinet:",
	  ":wastebasket:",
	  ":notepad_spiral:",
	  ":calendar_spiral:",
	  ":compression:",
	  ":key2:",
	  ":newspaper2:",
	  ":dagger:",
	  ":speaking_head:",
	  ":speech_left:",
	  ":anger_right:",
	  ":ballot_box:",
	  ":map:",
	  ":mount_fuji:",
	  ":tokyo_tower:",
	  ":statue_of_liberty:",
	  ":japan:",
	  ":moyai:",
	  ":grinning:",
	  ":grin:",
	  ":joy:",
	  ":smiley:",
	  ":smile:",
	  ":sweat_smile:",
	  ":laughing:",
	  ":innocent:",
	  ":smiling_imp:",
	  ":wink:",
	  ":blush:",
	  ":yum:",
	  ":relieved:",
	  ":heart_eyes:",
	  ":sunglasses:",
	  ":smirk:",
	  ":neutral_face:",
	  ":expressionless:",
	  ":unamused:",
	  ":sweat:",
	  ":pensive:",
	  ":confused:",
	  ":confounded:",
	  ":kissing:",
	  ":kissing_heart:",
	  ":kissing_smiling_eyes:",
	  ":kissing_closed_eyes:",
	  ":stuck_out_tongue:",
	  ":stuck_out_tongue_winking_eye:",
	  ":stuck_out_tongue_closed_eyes:",
	  ":disappointed:",
	  ":worried:",
	  ":angry:",
	  ":rage:",
	  ":cry:",
	  ":persevere:",
	  ":triumph:",
	  ":disappointed_relieved:",
	  ":frowning:",
	  ":anguished:",
	  ":fearful:",
	  ":weary:",
	  ":sleepy:",
	  ":tired_face:",
	  ":grimacing:",
	  ":sob:",
	  ":open_mouth:",
	  ":hushed:",
	  ":cold_sweat:",
	  ":scream:",
	  ":astonished:",
	  ":flushed:",
	  ":sleeping:",
	  ":dizzy_face:",
	  ":no_mouth:",
	  ":mask:",
	  ":smile_cat:",
	  ":joy_cat:",
	  ":smiley_cat:",
	  ":heart_eyes_cat:",
	  ":smirk_cat:",
	  ":kissing_cat:",
	  ":pouting_cat:",
	  ":crying_cat_face:",
	  ":scream_cat:",
	  ":slight_frown:",
	  ":slight_smile:",
	  ":upside_down:",
	  ":rolling_eyes:",
	  ":no_good_tone1:‍♀️",
	  ":no_good_tone1:‍♂️",
	  ":no_good_tone1:",
	  ":no_good_tone2:‍♀️",
	  ":no_good_tone2:‍♂️",
	  ":no_good_tone2:",
	  ":no_good_tone3:‍♀️",
	  ":no_good_tone3:‍♂️",
	  ":no_good_tone3:",
	  ":no_good_tone4:‍♀️",
	  ":no_good_tone4:‍♂️",
	  ":no_good_tone4:",
	  ":no_good_tone5:‍♀️",
	  ":no_good_tone5:‍♂️",
	  ":no_good_tone5:",
	  ":no_good:‍♀️",
	  ":no_good:‍♂️",
	  ":no_good:",
	  ":ok_woman_tone1:‍♀️",
	  ":ok_woman_tone1:‍♂️",
	  ":ok_woman_tone1:",
	  ":ok_woman_tone2:‍♀️",
	  ":ok_woman_tone2:‍♂️",
	  ":ok_woman_tone2:",
	  ":ok_woman_tone3:‍♀️",
	  ":ok_woman_tone3:‍♂️",
	  ":ok_woman_tone3:",
	  ":ok_woman_tone4:‍♀️",
	  ":ok_woman_tone4:‍♂️",
	  ":ok_woman_tone4:",
	  ":ok_woman_tone5:‍♀️",
	  ":ok_woman_tone5:‍♂️",
	  ":ok_woman_tone5:",
	  ":ok_woman:‍♀️",
	  ":ok_woman:‍♂️",
	  ":ok_woman:",
	  ":bow_tone1:‍♀️",
	  ":bow_tone1:‍♂️",
	  ":bow_tone1:",
	  ":bow_tone2:‍♀️",
	  ":bow_tone2:‍♂️",
	  ":bow_tone2:",
	  ":bow_tone3:‍♀️",
	  ":bow_tone3:‍♂️",
	  ":bow_tone3:",
	  ":bow_tone4:‍♀️",
	  ":bow_tone4:‍♂️",
	  ":bow_tone4:",
	  ":bow_tone5:‍♀️",
	  ":bow_tone5:‍♂️",
	  ":bow_tone5:",
	  ":bow:‍♀️",
	  ":bow:‍♂️",
	  ":bow:",
	  ":see_no_evil:",
	  ":hear_no_evil:",
	  ":speak_no_evil:",
	  ":raising_hand_tone1:‍♀️",
	  ":raising_hand_tone1:‍♂️",
	  ":raising_hand_tone1:",
	  ":raising_hand_tone2:‍♀️",
	  ":raising_hand_tone2:‍♂️",
	  ":raising_hand_tone2:",
	  ":raising_hand_tone3:‍♀️",
	  ":raising_hand_tone3:‍♂️",
	  ":raising_hand_tone3:",
	  ":raising_hand_tone4:‍♀️",
	  ":raising_hand_tone4:‍♂️",
	  ":raising_hand_tone4:",
	  ":raising_hand_tone5:‍♀️",
	  ":raising_hand_tone5:‍♂️",
	  ":raising_hand_tone5:",
	  ":raising_hand:‍♀️",
	  ":raising_hand:‍♂️",
	  ":raising_hand:",
	  ":raised_hands_tone1:",
	  ":raised_hands_tone2:",
	  ":raised_hands_tone3:",
	  ":raised_hands_tone4:",
	  ":raised_hands_tone5:",
	  ":raised_hands:",
	  ":person_frowning_tone1:‍♀️",
	  ":person_frowning_tone1:‍♂️",
	  ":person_frowning_tone1:",
	  ":person_frowning_tone2:‍♀️",
	  ":person_frowning_tone2:‍♂️",
	  ":person_frowning_tone2:",
	  ":person_frowning_tone3:‍♀️",
	  ":person_frowning_tone3:‍♂️",
	  ":person_frowning_tone3:",
	  ":person_frowning_tone4:‍♀️",
	  ":person_frowning_tone4:‍♂️",
	  ":person_frowning_tone4:",
	  ":person_frowning_tone5:‍♀️",
	  ":person_frowning_tone5:‍♂️",
	  ":person_frowning_tone5:",
	  ":person_frowning:‍♀️",
	  ":person_frowning:‍♂️",
	  ":person_frowning:",
	  ":person_with_pouting_face_tone1:‍♀️",
	  ":person_with_pouting_face_tone1:‍♂️",
	  ":person_with_pouting_face_tone1:",
	  ":person_with_pouting_face_tone2:‍♀️",
	  ":person_with_pouting_face_tone2:‍♂️",
	  ":person_with_pouting_face_tone2:",
	  ":person_with_pouting_face_tone3:‍♀️",
	  ":person_with_pouting_face_tone3:‍♂️",
	  ":person_with_pouting_face_tone3:",
	  ":person_with_pouting_face_tone4:‍♀️",
	  ":person_with_pouting_face_tone4:‍♂️",
	  ":person_with_pouting_face_tone4:",
	  ":person_with_pouting_face_tone5:‍♀️",
	  ":person_with_pouting_face_tone5:‍♂️",
	  ":person_with_pouting_face_tone5:",
	  ":person_with_pouting_face:‍♀️",
	  ":person_with_pouting_face:‍♂️",
	  ":person_with_pouting_face:",
	  ":pray_tone1:",
	  ":pray_tone2:",
	  ":pray_tone3:",
	  ":pray_tone4:",
	  ":pray_tone5:",
	  ":pray:",
	  ":rocket:",
	  ":helicopter:",
	  ":steam_locomotive:",
	  ":railway_car:",
	  ":bullettrain_side:",
	  ":bullettrain_front:",
	  ":train2:",
	  ":metro:",
	  ":light_rail:",
	  ":station:",
	  ":tram:",
	  ":train:",
	  ":bus:",
	  ":oncoming_bus:",
	  ":trolleybus:",
	  ":busstop:",
	  ":minibus:",
	  ":ambulance:",
	  ":fire_engine:",
	  ":police_car:",
	  ":oncoming_police_car:",
	  ":taxi:",
	  ":oncoming_taxi:",
	  ":red_car:",
	  ":oncoming_automobile:",
	  ":blue_car:",
	  ":truck:",
	  ":articulated_lorry:",
	  ":tractor:",
	  ":monorail:",
	  ":mountain_railway:",
	  ":suspension_railway:",
	  ":mountain_cableway:",
	  ":aerial_tramway:",
	  ":ship:",
	  ":rowboat_tone1:‍♀️",
	  ":rowboat_tone1:‍♂️",
	  ":rowboat_tone1:",
	  ":rowboat_tone2:‍♀️",
	  ":rowboat_tone2:‍♂️",
	  ":rowboat_tone2:",
	  ":rowboat_tone3:‍♀️",
	  ":rowboat_tone3:‍♂️",
	  ":rowboat_tone3:",
	  ":rowboat_tone4:‍♀️",
	  ":rowboat_tone4:‍♂️",
	  ":rowboat_tone4:",
	  ":rowboat_tone5:‍♀️",
	  ":rowboat_tone5:‍♂️",
	  ":rowboat_tone5:",
	  ":rowboat:‍♀️",
	  ":rowboat:‍♂️",
	  ":rowboat:",
	  ":speedboat:",
	  ":traffic_light:",
	  ":vertical_traffic_light:",
	  ":construction:",
	  ":rotating_light:",
	  ":triangular_flag_on_post:",
	  ":door:",
	  ":no_entry_sign:",
	  ":smoking:",
	  ":no_smoking:",
	  ":put_litter_in_its_place:",
	  ":do_not_litter:",
	  ":potable_water:",
	  ":non-potable_water:",
	  ":bike:",
	  ":no_bicycles:",
	  ":bicyclist_tone1:‍♀️",
	  ":bicyclist_tone1:‍♂️",
	  ":bicyclist_tone1:",
	  ":bicyclist_tone2:‍♀️",
	  ":bicyclist_tone2:‍♂️",
	  ":bicyclist_tone2:",
	  ":bicyclist_tone3:‍♀️",
	  ":bicyclist_tone3:‍♂️",
	  ":bicyclist_tone3:",
	  ":bicyclist_tone4:‍♀️",
	  ":bicyclist_tone4:‍♂️",
	  ":bicyclist_tone4:",
	  ":bicyclist_tone5:‍♀️",
	  ":bicyclist_tone5:‍♂️",
	  ":bicyclist_tone5:",
	  ":bicyclist:‍♀️",
	  ":bicyclist:‍♂️",
	  ":bicyclist:",
	  ":mountain_bicyclist_tone1:‍♀️",
	  ":mountain_bicyclist_tone1:‍♂️",
	  ":mountain_bicyclist_tone1:",
	  ":mountain_bicyclist_tone2:‍♀️",
	  ":mountain_bicyclist_tone2:‍♂️",
	  ":mountain_bicyclist_tone2:",
	  ":mountain_bicyclist_tone3:‍♀️",
	  ":mountain_bicyclist_tone3:‍♂️",
	  ":mountain_bicyclist_tone3:",
	  ":mountain_bicyclist_tone4:‍♀️",
	  ":mountain_bicyclist_tone4:‍♂️",
	  ":mountain_bicyclist_tone4:",
	  ":mountain_bicyclist_tone5:‍♀️",
	  ":mountain_bicyclist_tone5:‍♂️",
	  ":mountain_bicyclist_tone5:",
	  ":mountain_bicyclist:‍♀️",
	  ":mountain_bicyclist:‍♂️",
	  ":mountain_bicyclist:",
	  ":walking_tone1:‍♀️",
	  ":walking_tone1:‍♂️",
	  ":walking_tone1:",
	  ":walking_tone2:‍♀️",
	  ":walking_tone2:‍♂️",
	  ":walking_tone2:",
	  ":walking_tone3:‍♀️",
	  ":walking_tone3:‍♂️",
	  ":walking_tone3:",
	  ":walking_tone4:‍♀️",
	  ":walking_tone4:‍♂️",
	  ":walking_tone4:",
	  ":walking_tone5:‍♀️",
	  ":walking_tone5:‍♂️",
	  ":walking_tone5:",
	  ":walking:‍♀️",
	  ":walking:‍♂️",
	  ":walking:",
	  ":no_pedestrians:",
	  ":children_crossing:",
	  ":mens:",
	  ":womens:",
	  ":restroom:",
	  ":baby_symbol:",
	  ":toilet:",
	  ":wc:",
	  ":shower:",
	  ":bath_tone1:",
	  ":bath_tone2:",
	  ":bath_tone3:",
	  ":bath_tone4:",
	  ":bath_tone5:",
	  ":bath:",
	  ":bathtub:",
	  ":passport_control:",
	  ":customs:",
	  ":baggage_claim:",
	  ":left_luggage:",
	  ":couch:",
	  ":sleeping_accommodation::tone1:",
	  ":sleeping_accommodation::tone2:",
	  ":sleeping_accommodation::tone3:",
	  ":sleeping_accommodation::tone4:",
	  ":sleeping_accommodation::tone5:",
	  ":sleeping_accommodation:",
	  ":shopping_bags:",
	  ":bellhop:",
	  ":bed:",
	  ":place_of_worship:",
	  ":octagonal_sign:",
	  ":shopping_cart:",
	  ":tools:",
	  ":shield:",
	  ":oil:",
	  ":motorway:",
	  ":railway_track:",
	  ":motorboat:",
	  ":airplane_small:",
	  ":airplane_departure:",
	  ":airplane_arriving:",
	  ":satellite_orbital:",
	  ":cruise_ship:",
	  ":scooter:",
	  ":motor_scooter:",
	  ":canoe:",
	  ":zipper_mouth:",
	  ":money_mouth:",
	  ":thermometer_face:",
	  ":nerd:",
	  ":thinking:",
	  ":head_bandage:",
	  ":robot:",
	  ":hugging:",
	  ":metal_tone1:",
	  ":metal_tone2:",
	  ":metal_tone3:",
	  ":metal_tone4:",
	  ":metal_tone5:",
	  ":metal:",
	  ":call_me_tone1:",
	  ":call_me_tone2:",
	  ":call_me_tone3:",
	  ":call_me_tone4:",
	  ":call_me_tone5:",
	  ":call_me:",
	  ":raised_back_of_hand_tone1:",
	  ":raised_back_of_hand_tone2:",
	  ":raised_back_of_hand_tone3:",
	  ":raised_back_of_hand_tone4:",
	  ":raised_back_of_hand_tone5:",
	  ":raised_back_of_hand:",
	  ":left_facing_fist_tone1:",
	  ":left_facing_fist_tone2:",
	  ":left_facing_fist_tone3:",
	  ":left_facing_fist_tone4:",
	  ":left_facing_fist_tone5:",
	  ":left_facing_fist:",
	  ":right_facing_fist_tone1:",
	  ":right_facing_fist_tone2:",
	  ":right_facing_fist_tone3:",
	  ":right_facing_fist_tone4:",
	  ":right_facing_fist_tone5:",
	  ":right_facing_fist:",
	  ":handshake_tone1:",
	  ":handshake_tone2:",
	  ":handshake_tone3:",
	  ":handshake_tone4:",
	  ":handshake_tone5:",
	  ":handshake:",
	  ":fingers_crossed_tone1:",
	  ":fingers_crossed_tone2:",
	  ":fingers_crossed_tone3:",
	  ":fingers_crossed_tone4:",
	  ":fingers_crossed_tone5:",
	  ":fingers_crossed:",
	  ":cowboy:",
	  ":clown:",
	  ":nauseated_face:",
	  ":rofl:",
	  ":drooling_face:",
	  ":lying_face:",
	  ":face_palm_tone1:‍♀️",
	  ":face_palm_tone1:‍♂️",
	  ":face_palm_tone1:",
	  ":face_palm_tone2:‍♀️",
	  ":face_palm_tone2:‍♂️",
	  ":face_palm_tone2:",
	  ":face_palm_tone3:‍♀️",
	  ":face_palm_tone3:‍♂️",
	  ":face_palm_tone3:",
	  ":face_palm_tone4:‍♀️",
	  ":face_palm_tone4:‍♂️",
	  ":face_palm_tone4:",
	  ":face_palm_tone5:‍♀️",
	  ":face_palm_tone5:‍♂️",
	  ":face_palm_tone5:",
	  ":face_palm:‍♀️",
	  ":face_palm:‍♂️",
	  ":face_palm:",
	  ":sneezing_face:",
	  ":pregnant_woman_tone1:",
	  ":pregnant_woman_tone2:",
	  ":pregnant_woman_tone3:",
	  ":pregnant_woman_tone4:",
	  ":pregnant_woman_tone5:",
	  ":pregnant_woman:",
	  ":selfie_tone1:",
	  ":selfie_tone2:",
	  ":selfie_tone3:",
	  ":selfie_tone4:",
	  ":selfie_tone5:",
	  ":selfie:",
	  ":prince_tone1:",
	  ":prince_tone2:",
	  ":prince_tone3:",
	  ":prince_tone4:",
	  ":prince_tone5:",
	  ":prince:",
	  ":man_in_tuxedo_tone1:",
	  ":man_in_tuxedo_tone2:",
	  ":man_in_tuxedo_tone3:",
	  ":man_in_tuxedo_tone4:",
	  ":man_in_tuxedo_tone5:",
	  ":man_in_tuxedo:",
	  ":mrs_claus_tone1:",
	  ":mrs_claus_tone2:",
	  ":mrs_claus_tone3:",
	  ":mrs_claus_tone4:",
	  ":mrs_claus_tone5:",
	  ":mrs_claus:",
	  ":shrug_tone1:‍♀️",
	  ":shrug_tone1:‍♂️",
	  ":shrug_tone1:",
	  ":shrug_tone2:‍♀️",
	  ":shrug_tone2:‍♂️",
	  ":shrug_tone2:",
	  ":shrug_tone3:‍♀️",
	  ":shrug_tone3:‍♂️",
	  ":shrug_tone3:",
	  ":shrug_tone4:‍♀️",
	  ":shrug_tone4:‍♂️",
	  ":shrug_tone4:",
	  ":shrug_tone5:‍♀️",
	  ":shrug_tone5:‍♂️",
	  ":shrug_tone5:",
	  ":shrug:‍♀️",
	  ":shrug:‍♂️",
	  ":shrug:",
	  ":cartwheel_tone1:‍♀️",
	  ":cartwheel_tone1:‍♂️",
	  ":cartwheel_tone1:",
	  ":cartwheel_tone2:‍♀️",
	  ":cartwheel_tone2:‍♂️",
	  ":cartwheel_tone2:",
	  ":cartwheel_tone3:‍♀️",
	  ":cartwheel_tone3:‍♂️",
	  ":cartwheel_tone3:",
	  ":cartwheel_tone4:‍♀️",
	  ":cartwheel_tone4:‍♂️",
	  ":cartwheel_tone4:",
	  ":cartwheel_tone5:‍♀️",
	  ":cartwheel_tone5:‍♂️",
	  ":cartwheel_tone5:",
	  ":cartwheel:‍♀️",
	  ":cartwheel:‍♂️",
	  ":cartwheel:",
	  ":juggling_tone1:‍♀️",
	  ":juggling_tone1:‍♂️",
	  ":juggling_tone1:",
	  ":juggling_tone2:‍♀️",
	  ":juggling_tone2:‍♂️",
	  ":juggling_tone2:",
	  ":juggling_tone3:‍♀️",
	  ":juggling_tone3:‍♂️",
	  ":juggling_tone3:",
	  ":juggling_tone4:‍♀️",
	  ":juggling_tone4:‍♂️",
	  ":juggling_tone4:",
	  ":juggling_tone5:‍♀️",
	  ":juggling_tone5:‍♂️",
	  ":juggling_tone5:",
	  ":juggling:‍♀️",
	  ":juggling:‍♂️",
	  ":juggling:",
	  ":fencer:",
	  ":wrestlers_tone1:‍♀️",
	  ":wrestlers_tone1:‍♂️",
	  ":wrestlers_tone1:",
	  ":wrestlers_tone2:‍♀️",
	  ":wrestlers_tone2:‍♂️",
	  ":wrestlers_tone2:",
	  ":wrestlers_tone3:‍♀️",
	  ":wrestlers_tone3:‍♂️",
	  ":wrestlers_tone3:",
	  ":wrestlers_tone4:‍♀️",
	  ":wrestlers_tone4:‍♂️",
	  ":wrestlers_tone4:",
	  ":wrestlers_tone5:‍♀️",
	  ":wrestlers_tone5:‍♂️",
	  ":wrestlers_tone5:",
	  ":wrestlers:‍♀️",
	  ":wrestlers:‍♂️",
	  ":wrestlers:",
	  ":water_polo_tone1:‍♀️",
	  ":water_polo_tone1:‍♂️",
	  ":water_polo_tone1:",
	  ":water_polo_tone2:‍♀️",
	  ":water_polo_tone2:‍♂️",
	  ":water_polo_tone2:",
	  ":water_polo_tone3:‍♀️",
	  ":water_polo_tone3:‍♂️",
	  ":water_polo_tone3:",
	  ":water_polo_tone4:‍♀️",
	  ":water_polo_tone4:‍♂️",
	  ":water_polo_tone4:",
	  ":water_polo_tone5:‍♀️",
	  ":water_polo_tone5:‍♂️",
	  ":water_polo_tone5:",
	  ":water_polo:‍♀️",
	  ":water_polo:‍♂️",
	  ":water_polo:",
	  ":handball_tone1:‍♀️",
	  ":handball_tone1:‍♂️",
	  ":handball_tone1:",
	  ":handball_tone2:‍♀️",
	  ":handball_tone2:‍♂️",
	  ":handball_tone2:",
	  ":handball_tone3:‍♀️",
	  ":handball_tone3:‍♂️",
	  ":handball_tone3:",
	  ":handball_tone4:‍♀️",
	  ":handball_tone4:‍♂️",
	  ":handball_tone4:",
	  ":handball_tone5:‍♀️",
	  ":handball_tone5:‍♂️",
	  ":handball_tone5:",
	  ":handball:‍♀️",
	  ":handball:‍♂️",
	  ":handball:",
	  ":wilted_rose:",
	  ":drum:",
	  ":champagne_glass:",
	  ":tumbler_glass:",
	  ":spoon:",
	  ":goal:",
	  ":first_place:",
	  ":second_place:",
	  ":third_place:",
	  ":boxing_glove:",
	  ":martial_arts_uniform:",
	  ":croissant:",
	  ":avocado:",
	  ":cucumber:",
	  ":bacon:",
	  ":potato:",
	  ":carrot:",
	  ":french_bread:",
	  ":salad:",
	  ":shallow_pan_of_food:",
	  ":stuffed_flatbread:",
	  ":egg:",
	  ":milk:",
	  ":peanuts:",
	  ":kiwi:",
	  ":pancakes:",
	  ":crab:",
	  ":lion_face:",
	  ":scorpion:",
	  ":turkey:",
	  ":unicorn:",
	  ":eagle:",
	  ":duck:",
	  ":bat:",
	  ":shark:",
	  ":owl:",
	  ":fox:",
	  ":butterfly:",
	  ":deer:",
	  ":gorilla:",
	  ":lizard:",
	  ":rhino:",
	  ":shrimp:",
	  ":squid:",
	  ":cheese:",
	  ":bangbang:",
	  ":interrobang:",
	  ":tm:",
	  ":information_source:",
	  ":left_right_arrow:",
	  ":arrow_up_down:",
	  ":arrow_upper_left:",
	  ":arrow_upper_right:",
	  ":arrow_lower_right:",
	  ":arrow_lower_left:",
	  ":leftwards_arrow_with_hook:",
	  ":arrow_right_hook:",
	  ":hash:",
	  ":watch:",
	  ":hourglass:",
	  ":keyboard:",
	  ":eject:",
	  ":fast_forward:",
	  ":rewind:",
	  ":arrow_double_up:",
	  ":arrow_double_down:",
	  ":track_next:",
	  ":track_previous:",
	  ":play_pause:",
	  ":alarm_clock:",
	  ":stopwatch:",
	  ":timer:",
	  ":hourglass_flowing_sand:",
	  ":pause_button:",
	  ":stop_button:",
	  ":record_button:",
	  ":m:",
	  ":black_small_square:",
	  ":white_small_square:",
	  ":arrow_forward:",
	  ":arrow_backward:",
	  ":white_medium_square:",
	  ":black_medium_square:",
	  ":white_medium_small_square:",
	  ":black_medium_small_square:",
	  ":sunny:",
	  ":cloud:",
	  ":umbrella2:",
	  ":snowman2:",
	  ":comet:",
	  ":telephone:",
	  ":ballot_box_with_check:",
	  ":umbrella:",
	  ":coffee:",
	  ":shamrock:",
	  ":point_up_tone1:",
	  ":point_up_tone2:",
	  ":point_up_tone3:",
	  ":point_up_tone4:",
	  ":point_up_tone5:",
	  ":point_up:",
	  ":skull_crossbones:",
	  ":radioactive:",
	  ":biohazard:",
	  ":orthodox_cross:",
	  ":star_and_crescent:",
	  ":peace:",
	  ":yin_yang:",
	  ":wheel_of_dharma:",
	  ":frowning2:",
	  ":relaxed:",
	  "♀",
	  "♂",
	  ":aries:",
	  ":taurus:",
	  ":gemini:",
	  ":cancer:",
	  ":leo:",
	  ":virgo:",
	  ":libra:",
	  ":scorpius:",
	  ":sagittarius:",
	  ":capricorn:",
	  ":aquarius:",
	  ":pisces:",
	  ":spades:",
	  ":clubs:",
	  ":hearts:",
	  ":diamonds:",
	  ":hotsprings:",
	  ":recycle:",
	  ":wheelchair:",
	  ":hammer_pick:",
	  ":anchor:",
	  ":crossed_swords:",
	  "⚕",
	  ":scales:",
	  ":alembic:",
	  ":gear:",
	  ":atom:",
	  ":fleur-de-lis:",
	  ":warning:",
	  ":zap:",
	  ":white_circle:",
	  ":black_circle:",
	  ":coffin:",
	  ":urn:",
	  ":soccer:",
	  ":baseball:",
	  ":snowman:",
	  ":partly_sunny:",
	  ":thunder_cloud_rain:",
	  ":ophiuchus:",
	  ":pick:",
	  ":helmet_with_cross:",
	  ":chains:",
	  ":no_entry:",
	  ":shinto_shrine:",
	  ":church:",
	  ":mountain:",
	  ":beach_umbrella:",
	  ":fountain:",
	  ":golf:",
	  ":ferry:",
	  ":sailboat:",
	  ":skier::tone1:",
	  ":skier::tone2:",
	  ":skier::tone3:",
	  ":skier::tone4:",
	  ":skier::tone5:",
	  ":skier:",
	  ":ice_skate:",
	  ":basketball_player_tone1:‍♀️",
	  ":basketball_player_tone1:‍♂️",
	  ":basketball_player_tone1:",
	  ":basketball_player_tone2:‍♀️",
	  ":basketball_player_tone2:‍♂️",
	  ":basketball_player_tone2:",
	  ":basketball_player_tone3:‍♀️",
	  ":basketball_player_tone3:‍♂️",
	  ":basketball_player_tone3:",
	  ":basketball_player_tone4:‍♀️",
	  ":basketball_player_tone4:‍♂️",
	  ":basketball_player_tone4:",
	  ":basketball_player_tone5:‍♀️",
	  ":basketball_player_tone5:‍♂️",
	  ":basketball_player_tone5:",
	  ":basketball_player:‍♀️",
	  ":basketball_player:‍♂️",
	  ":basketball_player:",
	  ":tent:",
	  ":fuelpump:",
	  ":scissors:",
	  ":white_check_mark:",
	  ":airplane:",
	  ":envelope:",
	  ":fist_tone1:",
	  ":fist_tone2:",
	  ":fist_tone3:",
	  ":fist_tone4:",
	  ":fist_tone5:",
	  ":fist:",
	  ":raised_hand_tone1:",
	  ":raised_hand_tone2:",
	  ":raised_hand_tone3:",
	  ":raised_hand_tone4:",
	  ":raised_hand_tone5:",
	  ":raised_hand:",
	  ":v_tone1:",
	  ":v_tone2:",
	  ":v_tone3:",
	  ":v_tone4:",
	  ":v_tone5:",
	  ":v:",
	  ":writing_hand_tone1:",
	  ":writing_hand_tone2:",
	  ":writing_hand_tone3:",
	  ":writing_hand_tone4:",
	  ":writing_hand_tone5:",
	  ":writing_hand:",
	  ":pencil2:",
	  ":black_nib:",
	  ":heavy_check_mark:",
	  ":heavy_multiplication_x:",
	  ":cross:",
	  ":star_of_david:",
	  ":sparkles:",
	  ":eight_spoked_asterisk:",
	  ":eight_pointed_black_star:",
	  ":snowflake:",
	  ":sparkle:",
	  ":x:",
	  ":negative_squared_cross_mark:",
	  ":question:",
	  ":grey_question:",
	  ":grey_exclamation:",
	  ":exclamation:",
	  ":heart_exclamation:",
	  ":heart:",
	  ":heavy_plus_sign:",
	  ":heavy_minus_sign:",
	  ":heavy_division_sign:",
	  ":arrow_right:",
	  ":curly_loop:",
	  ":loop:",
	  ":arrow_heading_up:",
	  ":arrow_heading_down:",
	  ":asterisk:",
	  ":arrow_left:",
	  ":arrow_up:",
	  ":arrow_down:",
	  ":black_large_square:",
	  ":white_large_square:",
	  ":star:",
	  ":o:",
	  ":zero:",
	  ":wavy_dash:",
	  ":part_alternation_mark:",
	  ":one:",
	  ":two:",
	  ":congratulations:",
	  ":secret:",
	  ":three:",
	  ":four:",
	  ":five:",
	  ":six:",
	  ":seven:",
	  ":eight:",
	  ":nine:",
	  ":copyright:",
	  ":registered:",
	  ""
	]

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = [
	  "🀄",
	  "🃏",
	  "🅰",
	  "🅱",
	  "🅾",
	  "🅿",
	  "🆎",
	  "🆑",
	  "🆒",
	  "🆓",
	  "🆔",
	  "🆕",
	  "🆖",
	  "🆗",
	  "🆘",
	  "🆙",
	  "🆚",
	  "🇦🇨",
	  "🇦🇩",
	  "🇦🇪",
	  "🇦🇫",
	  "🇦🇬",
	  "🇦🇮",
	  "🇦🇱",
	  "🇦🇲",
	  "🇦🇴",
	  "🇦🇶",
	  "🇦🇷",
	  "🇦🇸",
	  "🇦🇹",
	  "🇦🇺",
	  "🇦🇼",
	  "🇦🇽",
	  "🇦🇿",
	  "🇦",
	  "🇧🇦",
	  "🇧🇧",
	  "🇧🇩",
	  "🇧🇪",
	  "🇧🇫",
	  "🇧🇬",
	  "🇧🇭",
	  "🇧🇮",
	  "🇧🇯",
	  "🇧🇱",
	  "🇧🇲",
	  "🇧🇳",
	  "🇧🇴",
	  "🇧🇶",
	  "🇧🇷",
	  "🇧🇸",
	  "🇧🇹",
	  "🇧🇻",
	  "🇧🇼",
	  "🇧🇾",
	  "🇧🇿",
	  "🇧",
	  "🇨🇦",
	  "🇨🇨",
	  "🇨🇩",
	  "🇨🇫",
	  "🇨🇬",
	  "🇨🇭",
	  "🇨🇮",
	  "🇨🇰",
	  "🇨🇱",
	  "🇨🇲",
	  "🇨🇳",
	  "🇨🇴",
	  "🇨🇵",
	  "🇨🇷",
	  "🇨🇺",
	  "🇨🇻",
	  "🇨🇼",
	  "🇨🇽",
	  "🇨🇾",
	  "🇨🇿",
	  "🇨",
	  "🇩🇪",
	  "🇩🇬",
	  "🇩🇯",
	  "🇩🇰",
	  "🇩🇲",
	  "🇩🇴",
	  "🇩🇿",
	  "🇩",
	  "🇪🇦",
	  "🇪🇨",
	  "🇪🇪",
	  "🇪🇬",
	  "🇪🇭",
	  "🇪🇷",
	  "🇪🇸",
	  "🇪🇹",
	  "🇪🇺",
	  "🇪",
	  "🇫🇮",
	  "🇫🇯",
	  "🇫🇰",
	  "🇫🇲",
	  "🇫🇴",
	  "🇫🇷",
	  "🇫",
	  "🇬🇦",
	  "🇬🇧",
	  "🇬🇩",
	  "🇬🇪",
	  "🇬🇫",
	  "🇬🇬",
	  "🇬🇭",
	  "🇬🇮",
	  "🇬🇱",
	  "🇬🇲",
	  "🇬🇳",
	  "🇬🇵",
	  "🇬🇶",
	  "🇬🇷",
	  "🇬🇸",
	  "🇬🇹",
	  "🇬🇺",
	  "🇬🇼",
	  "🇬🇾",
	  "🇬",
	  "🇭🇰",
	  "🇭🇲",
	  "🇭🇳",
	  "🇭🇷",
	  "🇭🇹",
	  "🇭🇺",
	  "🇭",
	  "🇮🇨",
	  "🇮🇩",
	  "🇮🇪",
	  "🇮🇱",
	  "🇮🇲",
	  "🇮🇳",
	  "🇮🇴",
	  "🇮🇶",
	  "🇮🇷",
	  "🇮🇸",
	  "🇮🇹",
	  "🇮",
	  "🇯🇪",
	  "🇯🇲",
	  "🇯🇴",
	  "🇯🇵",
	  "🇯",
	  "🇰🇪",
	  "🇰🇬",
	  "🇰🇭",
	  "🇰🇮",
	  "🇰🇲",
	  "🇰🇳",
	  "🇰🇵",
	  "🇰🇷",
	  "🇰🇼",
	  "🇰🇾",
	  "🇰🇿",
	  "🇰",
	  "🇱🇦",
	  "🇱🇧",
	  "🇱🇨",
	  "🇱🇮",
	  "🇱🇰",
	  "🇱🇷",
	  "🇱🇸",
	  "🇱🇹",
	  "🇱🇺",
	  "🇱🇻",
	  "🇱🇾",
	  "🇱",
	  "🇲🇦",
	  "🇲🇨",
	  "🇲🇩",
	  "🇲🇪",
	  "🇲🇫",
	  "🇲🇬",
	  "🇲🇭",
	  "🇲🇰",
	  "🇲🇱",
	  "🇲🇲",
	  "🇲🇳",
	  "🇲🇴",
	  "🇲🇵",
	  "🇲🇶",
	  "🇲🇷",
	  "🇲🇸",
	  "🇲🇹",
	  "🇲🇺",
	  "🇲🇻",
	  "🇲🇼",
	  "🇲🇽",
	  "🇲🇾",
	  "🇲🇿",
	  "🇲",
	  "🇳🇦",
	  "🇳🇨",
	  "🇳🇪",
	  "🇳🇫",
	  "🇳🇬",
	  "🇳🇮",
	  "🇳🇱",
	  "🇳🇴",
	  "🇳🇵",
	  "🇳🇷",
	  "🇳🇺",
	  "🇳🇿",
	  "🇳",
	  "🇴🇲",
	  "🇴",
	  "🇵🇦",
	  "🇵🇪",
	  "🇵🇫",
	  "🇵🇬",
	  "🇵🇭",
	  "🇵🇰",
	  "🇵🇱",
	  "🇵🇲",
	  "🇵🇳",
	  "🇵🇷",
	  "🇵🇸",
	  "🇵🇹",
	  "🇵🇼",
	  "🇵🇾",
	  "🇵",
	  "🇶🇦",
	  "🇶",
	  "🇷🇪",
	  "🇷🇴",
	  "🇷🇸",
	  "🇷🇺",
	  "🇷🇼",
	  "🇷",
	  "🇸🇦",
	  "🇸🇧",
	  "🇸🇨",
	  "🇸🇩",
	  "🇸🇪",
	  "🇸🇬",
	  "🇸🇭",
	  "🇸🇮",
	  "🇸🇯",
	  "🇸🇰",
	  "🇸🇱",
	  "🇸🇲",
	  "🇸🇳",
	  "🇸🇴",
	  "🇸🇷",
	  "🇸🇸",
	  "🇸🇹",
	  "🇸🇻",
	  "🇸🇽",
	  "🇸🇾",
	  "🇸🇿",
	  "🇸",
	  "🇹🇦",
	  "🇹🇨",
	  "🇹🇩",
	  "🇹🇫",
	  "🇹🇬",
	  "🇹🇭",
	  "🇹🇯",
	  "🇹🇰",
	  "🇹🇱",
	  "🇹🇲",
	  "🇹🇳",
	  "🇹🇴",
	  "🇹🇷",
	  "🇹🇹",
	  "🇹🇻",
	  "🇹🇼",
	  "🇹🇿",
	  "🇹",
	  "🇺🇦",
	  "🇺🇬",
	  "🇺🇲",
	  "🇺🇳",
	  "🇺🇸",
	  "🇺🇾",
	  "🇺🇿",
	  "🇺",
	  "🇻🇦",
	  "🇻🇨",
	  "🇻🇪",
	  "🇻🇬",
	  "🇻🇮",
	  "🇻🇳",
	  "🇻🇺",
	  "🇻",
	  "🇼🇫",
	  "🇼🇸",
	  "🇼",
	  "🇽🇰",
	  "🇽",
	  "🇾🇪",
	  "🇾🇹",
	  "🇾",
	  "🇿🇦",
	  "🇿🇲",
	  "🇿🇼",
	  "🇿",
	  "🈁",
	  "🈂",
	  "🈚",
	  "🈯",
	  "🈲",
	  "🈳",
	  "🈴",
	  "🈵",
	  "🈶",
	  "🈷",
	  "🈸",
	  "🈹",
	  "🈺",
	  "🉐",
	  "🉑",
	  "🌀",
	  "🌁",
	  "🌂",
	  "🌃",
	  "🌄",
	  "🌅",
	  "🌆",
	  "🌇",
	  "🌈",
	  "🌉",
	  "🌊",
	  "🌋",
	  "🌌",
	  "🌍",
	  "🌎",
	  "🌏",
	  "🌐",
	  "🌑",
	  "🌒",
	  "🌓",
	  "🌔",
	  "🌕",
	  "🌖",
	  "🌗",
	  "🌘",
	  "🌙",
	  "🌚",
	  "🌛",
	  "🌜",
	  "🌝",
	  "🌞",
	  "🌟",
	  "🌠",
	  "🌡",
	  "🌤",
	  "🌥",
	  "🌦",
	  "🌧",
	  "🌨",
	  "🌩",
	  "🌪",
	  "🌫",
	  "🌬",
	  "🌭",
	  "🌮",
	  "🌯",
	  "🌰",
	  "🌱",
	  "🌲",
	  "🌳",
	  "🌴",
	  "🌵",
	  "🌶",
	  "🌷",
	  "🌸",
	  "🌹",
	  "🌺",
	  "🌻",
	  "🌼",
	  "🌽",
	  "🌾",
	  "🌿",
	  "🍀",
	  "🍁",
	  "🍂",
	  "🍃",
	  "🍄",
	  "🍅",
	  "🍆",
	  "🍇",
	  "🍈",
	  "🍉",
	  "🍊",
	  "🍋",
	  "🍌",
	  "🍍",
	  "🍎",
	  "🍏",
	  "🍐",
	  "🍑",
	  "🍒",
	  "🍓",
	  "🍔",
	  "🍕",
	  "🍖",
	  "🍗",
	  "🍘",
	  "🍙",
	  "🍚",
	  "🍛",
	  "🍜",
	  "🍝",
	  "🍞",
	  "🍟",
	  "🍠",
	  "🍡",
	  "🍢",
	  "🍣",
	  "🍤",
	  "🍥",
	  "🍦",
	  "🍧",
	  "🍨",
	  "🍩",
	  "🍪",
	  "🍫",
	  "🍬",
	  "🍭",
	  "🍮",
	  "🍯",
	  "🍰",
	  "🍱",
	  "🍲",
	  "🍳",
	  "🍴",
	  "🍵",
	  "🍶",
	  "🍷",
	  "🍸",
	  "🍹",
	  "🍺",
	  "🍻",
	  "🍼",
	  "🍽",
	  "🍾",
	  "🍿",
	  "🎀",
	  "🎁",
	  "🎂",
	  "🎃",
	  "🎄",
	  "🎅🏻",
	  "🎅🏼",
	  "🎅🏽",
	  "🎅🏾",
	  "🎅🏿",
	  "🎅",
	  "🎆",
	  "🎇",
	  "🎈",
	  "🎉",
	  "🎊",
	  "🎋",
	  "🎌",
	  "🎍",
	  "🎎",
	  "🎏",
	  "🎐",
	  "🎑",
	  "🎒",
	  "🎓",
	  "🎖",
	  "🎗",
	  "🎙",
	  "🎚",
	  "🎛",
	  "🎞",
	  "🎟",
	  "🎠",
	  "🎡",
	  "🎢",
	  "🎣",
	  "🎤",
	  "🎥",
	  "🎦",
	  "🎧",
	  "🎨",
	  "🎩",
	  "🎪",
	  "🎫",
	  "🎬",
	  "🎭",
	  "🎮",
	  "🎯",
	  "🎰",
	  "🎱",
	  "🎲",
	  "🎳",
	  "🎴",
	  "🎵",
	  "🎶",
	  "🎷",
	  "🎸",
	  "🎹",
	  "🎺",
	  "🎻",
	  "🎼",
	  "🎽",
	  "🎾",
	  "🎿",
	  "🏀",
	  "🏁",
	  "🏂🏻",
	  "🏂🏼",
	  "🏂🏽",
	  "🏂🏾",
	  "🏂🏿",
	  "🏂",
	  "🏃🏻‍♀️",
	  "🏃🏻‍♂️",
	  "🏃🏻",
	  "🏃🏼‍♀️",
	  "🏃🏼‍♂️",
	  "🏃🏼",
	  "🏃🏽‍♀️",
	  "🏃🏽‍♂️",
	  "🏃🏽",
	  "🏃🏾‍♀️",
	  "🏃🏾‍♂️",
	  "🏃🏾",
	  "🏃🏿‍♀️",
	  "🏃🏿‍♂️",
	  "🏃🏿",
	  "🏃‍♀️",
	  "🏃‍♂️",
	  "🏃",
	  "🏄🏻‍♀️",
	  "🏄🏻‍♂️",
	  "🏄🏻",
	  "🏄🏼‍♀️",
	  "🏄🏼‍♂️",
	  "🏄🏼",
	  "🏄🏽‍♀️",
	  "🏄🏽‍♂️",
	  "🏄🏽",
	  "🏄🏾‍♀️",
	  "🏄🏾‍♂️",
	  "🏄🏾",
	  "🏄🏿‍♀️",
	  "🏄🏿‍♂️",
	  "🏄🏿",
	  "🏄‍♀️",
	  "🏄‍♂️",
	  "🏄",
	  "🏅",
	  "🏆",
	  "🏇🏻",
	  "🏇🏼",
	  "🏇🏽",
	  "🏇🏾",
	  "🏇🏿",
	  "🏇",
	  "🏈",
	  "🏉",
	  "🏊🏻‍♀️",
	  "🏊🏻‍♂️",
	  "🏊🏻",
	  "🏊🏼‍♀️",
	  "🏊🏼‍♂️",
	  "🏊🏼",
	  "🏊🏽‍♀️",
	  "🏊🏽‍♂️",
	  "🏊🏽",
	  "🏊🏾‍♀️",
	  "🏊🏾‍♂️",
	  "🏊🏾",
	  "🏊🏿‍♀️",
	  "🏊🏿‍♂️",
	  "🏊🏿",
	  "🏊‍♀️",
	  "🏊‍♂️",
	  "🏊",
	  "🏋🏻‍♀️",
	  "🏋🏻‍♂️",
	  "🏋🏻",
	  "🏋🏼‍♀️",
	  "🏋🏼‍♂️",
	  "🏋🏼",
	  "🏋🏽‍♀️",
	  "🏋🏽‍♂️",
	  "🏋🏽",
	  "🏋🏾‍♀️",
	  "🏋🏾‍♂️",
	  "🏋🏾",
	  "🏋🏿‍♀️",
	  "🏋🏿‍♂️",
	  "🏋🏿",
	  "🏋️‍♀️",
	  "🏋️‍♂️",
	  "🏋",
	  "🏌🏻‍♀️",
	  "🏌🏻‍♂️",
	  "🏌🏻",
	  "🏌🏼‍♀️",
	  "🏌🏼‍♂️",
	  "🏌🏼",
	  "🏌🏽‍♀️",
	  "🏌🏽‍♂️",
	  "🏌🏽",
	  "🏌🏾‍♀️",
	  "🏌🏾‍♂️",
	  "🏌🏾",
	  "🏌🏿‍♀️",
	  "🏌🏿‍♂️",
	  "🏌🏿",
	  "🏌️‍♀️",
	  "🏌️‍♂️",
	  "🏌",
	  "🏍",
	  "🏎",
	  "🏏",
	  "🏐",
	  "🏑",
	  "🏒",
	  "🏓",
	  "🏔",
	  "🏕",
	  "🏖",
	  "🏗",
	  "🏘",
	  "🏙",
	  "🏚",
	  "🏛",
	  "🏜",
	  "🏝",
	  "🏞",
	  "🏟",
	  "🏠",
	  "🏡",
	  "🏢",
	  "🏣",
	  "🏤",
	  "🏥",
	  "🏦",
	  "🏧",
	  "🏨",
	  "🏩",
	  "🏪",
	  "🏫",
	  "🏬",
	  "🏭",
	  "🏮",
	  "🏯",
	  "🏰",
	  "🏳️‍🌈",
	  "🏳",
	  "🏴‍☠️",
	  "🏴",
	  "🏵",
	  "🏷",
	  "🏸",
	  "🏹",
	  "🏺",
	  "🏻",
	  "🏼",
	  "🏽",
	  "🏾",
	  "🏿",
	  "🐀",
	  "🐁",
	  "🐂",
	  "🐃",
	  "🐄",
	  "🐅",
	  "🐆",
	  "🐇",
	  "🐈",
	  "🐉",
	  "🐊",
	  "🐋",
	  "🐌",
	  "🐍",
	  "🐎",
	  "🐏",
	  "🐐",
	  "🐑",
	  "🐒",
	  "🐓",
	  "🐔",
	  "🐕",
	  "🐖",
	  "🐗",
	  "🐘",
	  "🐙",
	  "🐚",
	  "🐛",
	  "🐜",
	  "🐝",
	  "🐞",
	  "🐟",
	  "🐠",
	  "🐡",
	  "🐢",
	  "🐣",
	  "🐤",
	  "🐥",
	  "🐦",
	  "🐧",
	  "🐨",
	  "🐩",
	  "🐪",
	  "🐫",
	  "🐬",
	  "🐭",
	  "🐮",
	  "🐯",
	  "🐰",
	  "🐱",
	  "🐲",
	  "🐳",
	  "🐴",
	  "🐵",
	  "🐶",
	  "🐷",
	  "🐸",
	  "🐹",
	  "🐺",
	  "🐻",
	  "🐼",
	  "🐽",
	  "🐾",
	  "🐿",
	  "👀",
	  "👁‍🗨",
	  "👁",
	  "👂🏻",
	  "👂🏼",
	  "👂🏽",
	  "👂🏾",
	  "👂🏿",
	  "👂",
	  "👃🏻",
	  "👃🏼",
	  "👃🏽",
	  "👃🏾",
	  "👃🏿",
	  "👃",
	  "👄",
	  "👅",
	  "👆🏻",
	  "👆🏼",
	  "👆🏽",
	  "👆🏾",
	  "👆🏿",
	  "👆",
	  "👇🏻",
	  "👇🏼",
	  "👇🏽",
	  "👇🏾",
	  "👇🏿",
	  "👇",
	  "👈🏻",
	  "👈🏼",
	  "👈🏽",
	  "👈🏾",
	  "👈🏿",
	  "👈",
	  "👉🏻",
	  "👉🏼",
	  "👉🏽",
	  "👉🏾",
	  "👉🏿",
	  "👉",
	  "👊🏻",
	  "👊🏼",
	  "👊🏽",
	  "👊🏾",
	  "👊🏿",
	  "👊",
	  "👋🏻",
	  "👋🏼",
	  "👋🏽",
	  "👋🏾",
	  "👋🏿",
	  "👋",
	  "👌🏻",
	  "👌🏼",
	  "👌🏽",
	  "👌🏾",
	  "👌🏿",
	  "👌",
	  "👍🏻",
	  "👍🏼",
	  "👍🏽",
	  "👍🏾",
	  "👍🏿",
	  "👍",
	  "👎🏻",
	  "👎🏼",
	  "👎🏽",
	  "👎🏾",
	  "👎🏿",
	  "👎",
	  "👏🏻",
	  "👏🏼",
	  "👏🏽",
	  "👏🏾",
	  "👏🏿",
	  "👏",
	  "👐🏻",
	  "👐🏼",
	  "👐🏽",
	  "👐🏾",
	  "👐🏿",
	  "👐",
	  "👑",
	  "👒",
	  "👓",
	  "👔",
	  "👕",
	  "👖",
	  "👗",
	  "👘",
	  "👙",
	  "👚",
	  "👛",
	  "👜",
	  "👝",
	  "👞",
	  "👟",
	  "👠",
	  "👡",
	  "👢",
	  "👣",
	  "👤",
	  "👥",
	  "👦🏻",
	  "👦🏼",
	  "👦🏽",
	  "👦🏾",
	  "👦🏿",
	  "👦",
	  "👧🏻",
	  "👧🏼",
	  "👧🏽",
	  "👧🏾",
	  "👧🏿",
	  "👧",
	  "👨🏻‍🌾",
	  "👨🏻‍🍳",
	  "👨🏻‍🎓",
	  "👨🏻‍🎤",
	  "👨🏻‍🎨",
	  "👨🏻‍🏫",
	  "👨🏻‍🏭",
	  "👨🏻‍💻",
	  "👨🏻‍💼",
	  "👨🏻‍🔧",
	  "👨🏻‍🔬",
	  "👨🏻‍🚀",
	  "👨🏻‍🚒",
	  "👨🏻‍⚕️",
	  "👨🏻‍⚖️",
	  "👨🏻‍✈️",
	  "👨🏻",
	  "👨🏼‍🌾",
	  "👨🏼‍🍳",
	  "👨🏼‍🎓",
	  "👨🏼‍🎤",
	  "👨🏼‍🎨",
	  "👨🏼‍🏫",
	  "👨🏼‍🏭",
	  "👨🏼‍💻",
	  "👨🏼‍💼",
	  "👨🏼‍🔧",
	  "👨🏼‍🔬",
	  "👨🏼‍🚀",
	  "👨🏼‍🚒",
	  "👨🏼‍⚕️",
	  "👨🏼‍⚖️",
	  "👨🏼‍✈️",
	  "👨🏼",
	  "👨🏽‍🌾",
	  "👨🏽‍🍳",
	  "👨🏽‍🎓",
	  "👨🏽‍🎤",
	  "👨🏽‍🎨",
	  "👨🏽‍🏫",
	  "👨🏽‍🏭",
	  "👨🏽‍💻",
	  "👨🏽‍💼",
	  "👨🏽‍🔧",
	  "👨🏽‍🔬",
	  "👨🏽‍🚀",
	  "👨🏽‍🚒",
	  "👨🏽‍⚕️",
	  "👨🏽‍⚖️",
	  "👨🏽‍✈️",
	  "👨🏽",
	  "👨🏾‍🌾",
	  "👨🏾‍🍳",
	  "👨🏾‍🎓",
	  "👨🏾‍🎤",
	  "👨🏾‍🎨",
	  "👨🏾‍🏫",
	  "👨🏾‍🏭",
	  "👨🏾‍💻",
	  "👨🏾‍💼",
	  "👨🏾‍🔧",
	  "👨🏾‍🔬",
	  "👨🏾‍🚀",
	  "👨🏾‍🚒",
	  "👨🏾‍⚕️",
	  "👨🏾‍⚖️",
	  "👨🏾‍✈️",
	  "👨🏾",
	  "👨🏿‍🌾",
	  "👨🏿‍🍳",
	  "👨🏿‍🎓",
	  "👨🏿‍🎤",
	  "👨🏿‍🎨",
	  "👨🏿‍🏫",
	  "👨🏿‍🏭",
	  "👨🏿‍💻",
	  "👨🏿‍💼",
	  "👨🏿‍🔧",
	  "👨🏿‍🔬",
	  "👨🏿‍🚀",
	  "👨🏿‍🚒",
	  "👨🏿‍⚕️",
	  "👨🏿‍⚖️",
	  "👨🏿‍✈️",
	  "👨🏿",
	  "👨‍🌾",
	  "👨‍🍳",
	  "👨‍🎓",
	  "👨‍🎤",
	  "👨‍🎨",
	  "👨‍🏫",
	  "👨‍🏭",
	  "👨‍👦‍👦",
	  "👨‍👦",
	  "👨‍👧‍👦",
	  "👨‍👧‍👧",
	  "👨‍👧",
	  "👨‍👨‍👦‍👦",
	  "👨‍👨‍👦",
	  "👨‍👨‍👧‍👦",
	  "👨‍👨‍👧‍👧",
	  "👨‍👨‍👧",
	  "👨‍👩‍👦‍👦",
	  "👨‍👩‍👦",
	  "👨‍👩‍👧‍👦",
	  "👨‍👩‍👧‍👧",
	  "👨‍👩‍👧",
	  "👨‍💻",
	  "👨‍💼",
	  "👨‍🔧",
	  "👨‍🔬",
	  "👨‍🚀",
	  "👨‍🚒",
	  "👨‍⚕️",
	  "👨‍⚖️",
	  "👨‍✈️",
	  "👨‍❤️‍👨",
	  "👨‍❤️‍💋‍👨",
	  "👨",
	  "👩🏻‍🌾",
	  "👩🏻‍🍳",
	  "👩🏻‍🎓",
	  "👩🏻‍🎤",
	  "👩🏻‍🎨",
	  "👩🏻‍🏫",
	  "👩🏻‍🏭",
	  "👩🏻‍💻",
	  "👩🏻‍💼",
	  "👩🏻‍🔧",
	  "👩🏻‍🔬",
	  "👩🏻‍🚀",
	  "👩🏻‍🚒",
	  "👩🏻‍⚕️",
	  "👩🏻‍⚖️",
	  "👩🏻‍✈️",
	  "👩🏻",
	  "👩🏼‍🌾",
	  "👩🏼‍🍳",
	  "👩🏼‍🎓",
	  "👩🏼‍🎤",
	  "👩🏼‍🎨",
	  "👩🏼‍🏫",
	  "👩🏼‍🏭",
	  "👩🏼‍💻",
	  "👩🏼‍💼",
	  "👩🏼‍🔧",
	  "👩🏼‍🔬",
	  "👩🏼‍🚀",
	  "👩🏼‍🚒",
	  "👩🏼‍⚕️",
	  "👩🏼‍⚖️",
	  "👩🏼‍✈️",
	  "👩🏼",
	  "👩🏽‍🌾",
	  "👩🏽‍🍳",
	  "👩🏽‍🎓",
	  "👩🏽‍🎤",
	  "👩🏽‍🎨",
	  "👩🏽‍🏫",
	  "👩🏽‍🏭",
	  "👩🏽‍💻",
	  "👩🏽‍💼",
	  "👩🏽‍🔧",
	  "👩🏽‍🔬",
	  "👩🏽‍🚀",
	  "👩🏽‍🚒",
	  "👩🏽‍⚕️",
	  "👩🏽‍⚖️",
	  "👩🏽‍✈️",
	  "👩🏽",
	  "👩🏾‍🌾",
	  "👩🏾‍🍳",
	  "👩🏾‍🎓",
	  "👩🏾‍🎤",
	  "👩🏾‍🎨",
	  "👩🏾‍🏫",
	  "👩🏾‍🏭",
	  "👩🏾‍💻",
	  "👩🏾‍💼",
	  "👩🏾‍🔧",
	  "👩🏾‍🔬",
	  "👩🏾‍🚀",
	  "👩🏾‍🚒",
	  "👩🏾‍⚕️",
	  "👩🏾‍⚖️",
	  "👩🏾‍✈️",
	  "👩🏾",
	  "👩🏿‍🌾",
	  "👩🏿‍🍳",
	  "👩🏿‍🎓",
	  "👩🏿‍🎤",
	  "👩🏿‍🎨",
	  "👩🏿‍🏫",
	  "👩🏿‍🏭",
	  "👩🏿‍💻",
	  "👩🏿‍💼",
	  "👩🏿‍🔧",
	  "👩🏿‍🔬",
	  "👩🏿‍🚀",
	  "👩🏿‍🚒",
	  "👩🏿‍⚕️",
	  "👩🏿‍⚖️",
	  "👩🏿‍✈️",
	  "👩🏿",
	  "👩‍🌾",
	  "👩‍🍳",
	  "👩‍🎓",
	  "👩‍🎤",
	  "👩‍🎨",
	  "👩‍🏫",
	  "👩‍🏭",
	  "👩‍👦‍👦",
	  "👩‍👦",
	  "👩‍👧‍👦",
	  "👩‍👧‍👧",
	  "👩‍👧",
	  "👩‍👩‍👦‍👦",
	  "👩‍👩‍👦",
	  "👩‍👩‍👧‍👦",
	  "👩‍👩‍👧‍👧",
	  "👩‍👩‍👧",
	  "👩‍💻",
	  "👩‍💼",
	  "👩‍🔧",
	  "👩‍🔬",
	  "👩‍🚀",
	  "👩‍🚒",
	  "👩‍⚕️",
	  "👩‍⚖️",
	  "👩‍✈️",
	  "👩‍❤️‍👨",
	  "👩‍❤️‍👩",
	  "👩‍❤️‍💋‍👨",
	  "👩‍❤️‍💋‍👩",
	  "👩",
	  "👪🏻",
	  "👪🏼",
	  "👪🏽",
	  "👪🏾",
	  "👪🏿",
	  "👪",
	  "👫🏻",
	  "👫🏼",
	  "👫🏽",
	  "👫🏾",
	  "👫🏿",
	  "👫",
	  "👬🏻",
	  "👬🏼",
	  "👬🏽",
	  "👬🏾",
	  "👬🏿",
	  "👬",
	  "👭🏻",
	  "👭🏼",
	  "👭🏽",
	  "👭🏾",
	  "👭🏿",
	  "👭",
	  "👮🏻‍♀️",
	  "👮🏻‍♂️",
	  "👮🏻",
	  "👮🏼‍♀️",
	  "👮🏼‍♂️",
	  "👮🏼",
	  "👮🏽‍♀️",
	  "👮🏽‍♂️",
	  "👮🏽",
	  "👮🏾‍♀️",
	  "👮🏾‍♂️",
	  "👮🏾",
	  "👮🏿‍♀️",
	  "👮🏿‍♂️",
	  "👮🏿",
	  "👮‍♀️",
	  "👮‍♂️",
	  "👮",
	  "👯🏻‍♀️",
	  "👯🏻‍♂️",
	  "👯🏻",
	  "👯🏼‍♀️",
	  "👯🏼‍♂️",
	  "👯🏼",
	  "👯🏽‍♀️",
	  "👯🏽‍♂️",
	  "👯🏽",
	  "👯🏾‍♀️",
	  "👯🏾‍♂️",
	  "👯🏾",
	  "👯🏿‍♀️",
	  "👯🏿‍♂️",
	  "👯🏿",
	  "👯‍♀️",
	  "👯‍♂️",
	  "👯",
	  "👰🏻",
	  "👰🏼",
	  "👰🏽",
	  "👰🏾",
	  "👰🏿",
	  "👰",
	  "👱🏻‍♀️",
	  "👱🏻‍♂️",
	  "👱🏻",
	  "👱🏼‍♀️",
	  "👱🏼‍♂️",
	  "👱🏼",
	  "👱🏽‍♀️",
	  "👱🏽‍♂️",
	  "👱🏽",
	  "👱🏾‍♀️",
	  "👱🏾‍♂️",
	  "👱🏾",
	  "👱🏿‍♀️",
	  "👱🏿‍♂️",
	  "👱🏿",
	  "👱‍♀️",
	  "👱‍♂️",
	  "👱",
	  "👲🏻",
	  "👲🏼",
	  "👲🏽",
	  "👲🏾",
	  "👲🏿",
	  "👲",
	  "👳🏻‍♀️",
	  "👳🏻‍♂️",
	  "👳🏻",
	  "👳🏼‍♀️",
	  "👳🏼‍♂️",
	  "👳🏼",
	  "👳🏽‍♀️",
	  "👳🏽‍♂️",
	  "👳🏽",
	  "👳🏾‍♀️",
	  "👳🏾‍♂️",
	  "👳🏾",
	  "👳🏿‍♀️",
	  "👳🏿‍♂️",
	  "👳🏿",
	  "👳‍♀️",
	  "👳‍♂️",
	  "👳",
	  "👴🏻",
	  "👴🏼",
	  "👴🏽",
	  "👴🏾",
	  "👴🏿",
	  "👴",
	  "👵🏻",
	  "👵🏼",
	  "👵🏽",
	  "👵🏾",
	  "👵🏿",
	  "👵",
	  "👶🏻",
	  "👶🏼",
	  "👶🏽",
	  "👶🏾",
	  "👶🏿",
	  "👶",
	  "👷🏻‍♀️",
	  "👷🏻‍♂️",
	  "👷🏻",
	  "👷🏼‍♀️",
	  "👷🏼‍♂️",
	  "👷🏼",
	  "👷🏽‍♀️",
	  "👷🏽‍♂️",
	  "👷🏽",
	  "👷🏾‍♀️",
	  "👷🏾‍♂️",
	  "👷🏾",
	  "👷🏿‍♀️",
	  "👷🏿‍♂️",
	  "👷🏿",
	  "👷‍♀️",
	  "👷‍♂️",
	  "👷",
	  "👸🏻",
	  "👸🏼",
	  "👸🏽",
	  "👸🏾",
	  "👸🏿",
	  "👸",
	  "👹",
	  "👺",
	  "👻",
	  "👼🏻",
	  "👼🏼",
	  "👼🏽",
	  "👼🏾",
	  "👼🏿",
	  "👼",
	  "👽",
	  "👾",
	  "👿",
	  "💀",
	  "💁🏻‍♀️",
	  "💁🏻‍♂️",
	  "💁🏻",
	  "💁🏼‍♀️",
	  "💁🏼‍♂️",
	  "💁🏼",
	  "💁🏽‍♀️",
	  "💁🏽‍♂️",
	  "💁🏽",
	  "💁🏾‍♀️",
	  "💁🏾‍♂️",
	  "💁🏾",
	  "💁🏿‍♀️",
	  "💁🏿‍♂️",
	  "💁🏿",
	  "💁‍♀️",
	  "💁‍♂️",
	  "💁",
	  "💂🏻‍♀️",
	  "💂🏻‍♂️",
	  "💂🏻",
	  "💂🏼‍♀️",
	  "💂🏼‍♂️",
	  "💂🏼",
	  "💂🏽‍♀️",
	  "💂🏽‍♂️",
	  "💂🏽",
	  "💂🏾‍♀️",
	  "💂🏾‍♂️",
	  "💂🏾",
	  "💂🏿‍♀️",
	  "💂🏿‍♂️",
	  "💂🏿",
	  "💂‍♀️",
	  "💂‍♂️",
	  "💂",
	  "💃🏻",
	  "💃🏼",
	  "💃🏽",
	  "💃🏾",
	  "💃🏿",
	  "💃",
	  "💄",
	  "💅🏻",
	  "💅🏼",
	  "💅🏽",
	  "💅🏾",
	  "💅🏿",
	  "💅",
	  "💆🏻‍♀️",
	  "💆🏻‍♂️",
	  "💆🏻",
	  "💆🏼‍♀️",
	  "💆🏼‍♂️",
	  "💆🏼",
	  "💆🏽‍♀️",
	  "💆🏽‍♂️",
	  "💆🏽",
	  "💆🏾‍♀️",
	  "💆🏾‍♂️",
	  "💆🏾",
	  "💆🏿‍♀️",
	  "💆🏿‍♂️",
	  "💆🏿",
	  "💆‍♀️",
	  "💆‍♂️",
	  "💆",
	  "💇🏻‍♀️",
	  "💇🏻‍♂️",
	  "💇🏻",
	  "💇🏼‍♀️",
	  "💇🏼‍♂️",
	  "💇🏼",
	  "💇🏽‍♀️",
	  "💇🏽‍♂️",
	  "💇🏽",
	  "💇🏾‍♀️",
	  "💇🏾‍♂️",
	  "💇🏾",
	  "💇🏿‍♀️",
	  "💇🏿‍♂️",
	  "💇🏿",
	  "💇‍♀️",
	  "💇‍♂️",
	  "💇",
	  "💈",
	  "💉",
	  "💊",
	  "💋",
	  "💌",
	  "💍",
	  "💎",
	  "💏",
	  "💐",
	  "💑",
	  "💒",
	  "💓",
	  "💔",
	  "💕",
	  "💖",
	  "💗",
	  "💘",
	  "💙",
	  "💚",
	  "💛",
	  "💜",
	  "💝",
	  "💞",
	  "💟",
	  "💠",
	  "💡",
	  "💢",
	  "💣",
	  "💤",
	  "💥",
	  "💦",
	  "💧",
	  "💨",
	  "💩",
	  "💪🏻",
	  "💪🏼",
	  "💪🏽",
	  "💪🏾",
	  "💪🏿",
	  "💪",
	  "💫",
	  "💬",
	  "💭",
	  "💮",
	  "💯",
	  "💰",
	  "💱",
	  "💲",
	  "💳",
	  "💴",
	  "💵",
	  "💶",
	  "💷",
	  "💸",
	  "💹",
	  "💺",
	  "💻",
	  "💼",
	  "💽",
	  "💾",
	  "💿",
	  "📀",
	  "📁",
	  "📂",
	  "📃",
	  "📄",
	  "📅",
	  "📆",
	  "📇",
	  "📈",
	  "📉",
	  "📊",
	  "📋",
	  "📌",
	  "📍",
	  "📎",
	  "📏",
	  "📐",
	  "📑",
	  "📒",
	  "📓",
	  "📔",
	  "📕",
	  "📖",
	  "📗",
	  "📘",
	  "📙",
	  "📚",
	  "📛",
	  "📜",
	  "📝",
	  "📞",
	  "📟",
	  "📠",
	  "📡",
	  "📢",
	  "📣",
	  "📤",
	  "📥",
	  "📦",
	  "📧",
	  "📨",
	  "📩",
	  "📪",
	  "📫",
	  "📬",
	  "📭",
	  "📮",
	  "📯",
	  "📰",
	  "📱",
	  "📲",
	  "📳",
	  "📴",
	  "📵",
	  "📶",
	  "📷",
	  "📸",
	  "📹",
	  "📺",
	  "📻",
	  "📼",
	  "📽",
	  "📿",
	  "🔀",
	  "🔁",
	  "🔂",
	  "🔃",
	  "🔄",
	  "🔅",
	  "🔆",
	  "🔇",
	  "🔈",
	  "🔉",
	  "🔊",
	  "🔋",
	  "🔌",
	  "🔍",
	  "🔎",
	  "🔏",
	  "🔐",
	  "🔑",
	  "🔒",
	  "🔓",
	  "🔔",
	  "🔕",
	  "🔖",
	  "🔗",
	  "🔘",
	  "🔙",
	  "🔚",
	  "🔛",
	  "🔜",
	  "🔝",
	  "🔞",
	  "🔟",
	  "🔠",
	  "🔡",
	  "🔢",
	  "🔣",
	  "🔤",
	  "🔥",
	  "🔦",
	  "🔧",
	  "🔨",
	  "🔩",
	  "🔪",
	  "🔫",
	  "🔬",
	  "🔭",
	  "🔮",
	  "🔯",
	  "🔰",
	  "🔱",
	  "🔲",
	  "🔳",
	  "🔴",
	  "🔵",
	  "🔶",
	  "🔷",
	  "🔸",
	  "🔹",
	  "🔺",
	  "🔻",
	  "🔼",
	  "🔽",
	  "🕉",
	  "🕊",
	  "🕋",
	  "🕌",
	  "🕍",
	  "🕎",
	  "🕐",
	  "🕑",
	  "🕒",
	  "🕓",
	  "🕔",
	  "🕕",
	  "🕖",
	  "🕗",
	  "🕘",
	  "🕙",
	  "🕚",
	  "🕛",
	  "🕜",
	  "🕝",
	  "🕞",
	  "🕟",
	  "🕠",
	  "🕡",
	  "🕢",
	  "🕣",
	  "🕤",
	  "🕥",
	  "🕦",
	  "🕧",
	  "🕯",
	  "🕰",
	  "🕳",
	  "🕴🏻",
	  "🕴🏼",
	  "🕴🏽",
	  "🕴🏾",
	  "🕴🏿",
	  "🕴",
	  "🕵🏻‍♀️",
	  "🕵🏻‍♂️",
	  "🕵🏻",
	  "🕵🏼‍♀️",
	  "🕵🏼‍♂️",
	  "🕵🏼",
	  "🕵🏽‍♀️",
	  "🕵🏽‍♂️",
	  "🕵🏽",
	  "🕵🏾‍♀️",
	  "🕵🏾‍♂️",
	  "🕵🏾",
	  "🕵🏿‍♀️",
	  "🕵🏿‍♂️",
	  "🕵🏿",
	  "🕵️‍♀️",
	  "🕵️‍♂️",
	  "🕵",
	  "🕶",
	  "🕷",
	  "🕸",
	  "🕹",
	  "🕺🏻",
	  "🕺🏼",
	  "🕺🏽",
	  "🕺🏾",
	  "🕺🏿",
	  "🕺",
	  "🖇",
	  "🖊",
	  "🖋",
	  "🖌",
	  "🖍",
	  "🖐🏻",
	  "🖐🏼",
	  "🖐🏽",
	  "🖐🏾",
	  "🖐🏿",
	  "🖐",
	  "🖕🏻",
	  "🖕🏼",
	  "🖕🏽",
	  "🖕🏾",
	  "🖕🏿",
	  "🖕",
	  "🖖🏻",
	  "🖖🏼",
	  "🖖🏽",
	  "🖖🏾",
	  "🖖🏿",
	  "🖖",
	  "🖤",
	  "🖥",
	  "🖨",
	  "🖱",
	  "🖲",
	  "🖼",
	  "🗂",
	  "🗃",
	  "🗄",
	  "🗑",
	  "🗒",
	  "🗓",
	  "🗜",
	  "🗝",
	  "🗞",
	  "🗡",
	  "🗣",
	  "🗨",
	  "🗯",
	  "🗳",
	  "🗺",
	  "🗻",
	  "🗼",
	  "🗽",
	  "🗾",
	  "🗿",
	  "😀",
	  "😁",
	  "😂",
	  "😃",
	  "😄",
	  "😅",
	  "😆",
	  "😇",
	  "😈",
	  "😉",
	  "😊",
	  "😋",
	  "😌",
	  "😍",
	  "😎",
	  "😏",
	  "😐",
	  "😑",
	  "😒",
	  "😓",
	  "😔",
	  "😕",
	  "😖",
	  "😗",
	  "😘",
	  "😙",
	  "😚",
	  "😛",
	  "😜",
	  "😝",
	  "😞",
	  "😟",
	  "😠",
	  "😡",
	  "😢",
	  "😣",
	  "😤",
	  "😥",
	  "😦",
	  "😧",
	  "😨",
	  "😩",
	  "😪",
	  "😫",
	  "😬",
	  "😭",
	  "😮",
	  "😯",
	  "😰",
	  "😱",
	  "😲",
	  "😳",
	  "😴",
	  "😵",
	  "😶",
	  "😷",
	  "😸",
	  "😹",
	  "😺",
	  "😻",
	  "😼",
	  "😽",
	  "😾",
	  "😿",
	  "🙀",
	  "🙁",
	  "🙂",
	  "🙃",
	  "🙄",
	  "🙅🏻‍♀️",
	  "🙅🏻‍♂️",
	  "🙅🏻",
	  "🙅🏼‍♀️",
	  "🙅🏼‍♂️",
	  "🙅🏼",
	  "🙅🏽‍♀️",
	  "🙅🏽‍♂️",
	  "🙅🏽",
	  "🙅🏾‍♀️",
	  "🙅🏾‍♂️",
	  "🙅🏾",
	  "🙅🏿‍♀️",
	  "🙅🏿‍♂️",
	  "🙅🏿",
	  "🙅‍♀️",
	  "🙅‍♂️",
	  "🙅",
	  "🙆🏻‍♀️",
	  "🙆🏻‍♂️",
	  "🙆🏻",
	  "🙆🏼‍♀️",
	  "🙆🏼‍♂️",
	  "🙆🏼",
	  "🙆🏽‍♀️",
	  "🙆🏽‍♂️",
	  "🙆🏽",
	  "🙆🏾‍♀️",
	  "🙆🏾‍♂️",
	  "🙆🏾",
	  "🙆🏿‍♀️",
	  "🙆🏿‍♂️",
	  "🙆🏿",
	  "🙆‍♀️",
	  "🙆‍♂️",
	  "🙆",
	  "🙇🏻‍♀️",
	  "🙇🏻‍♂️",
	  "🙇🏻",
	  "🙇🏼‍♀️",
	  "🙇🏼‍♂️",
	  "🙇🏼",
	  "🙇🏽‍♀️",
	  "🙇🏽‍♂️",
	  "🙇🏽",
	  "🙇🏾‍♀️",
	  "🙇🏾‍♂️",
	  "🙇🏾",
	  "🙇🏿‍♀️",
	  "🙇🏿‍♂️",
	  "🙇🏿",
	  "🙇‍♀️",
	  "🙇‍♂️",
	  "🙇",
	  "🙈",
	  "🙉",
	  "🙊",
	  "🙋🏻‍♀️",
	  "🙋🏻‍♂️",
	  "🙋🏻",
	  "🙋🏼‍♀️",
	  "🙋🏼‍♂️",
	  "🙋🏼",
	  "🙋🏽‍♀️",
	  "🙋🏽‍♂️",
	  "🙋🏽",
	  "🙋🏾‍♀️",
	  "🙋🏾‍♂️",
	  "🙋🏾",
	  "🙋🏿‍♀️",
	  "🙋🏿‍♂️",
	  "🙋🏿",
	  "🙋‍♀️",
	  "🙋‍♂️",
	  "🙋",
	  "🙌🏻",
	  "🙌🏼",
	  "🙌🏽",
	  "🙌🏾",
	  "🙌🏿",
	  "🙌",
	  "🙍🏻‍♀️",
	  "🙍🏻‍♂️",
	  "🙍🏻",
	  "🙍🏼‍♀️",
	  "🙍🏼‍♂️",
	  "🙍🏼",
	  "🙍🏽‍♀️",
	  "🙍🏽‍♂️",
	  "🙍🏽",
	  "🙍🏾‍♀️",
	  "🙍🏾‍♂️",
	  "🙍🏾",
	  "🙍🏿‍♀️",
	  "🙍🏿‍♂️",
	  "🙍🏿",
	  "🙍‍♀️",
	  "🙍‍♂️",
	  "🙍",
	  "🙎🏻‍♀️",
	  "🙎🏻‍♂️",
	  "🙎🏻",
	  "🙎🏼‍♀️",
	  "🙎🏼‍♂️",
	  "🙎🏼",
	  "🙎🏽‍♀️",
	  "🙎🏽‍♂️",
	  "🙎🏽",
	  "🙎🏾‍♀️",
	  "🙎🏾‍♂️",
	  "🙎🏾",
	  "🙎🏿‍♀️",
	  "🙎🏿‍♂️",
	  "🙎🏿",
	  "🙎‍♀️",
	  "🙎‍♂️",
	  "🙎",
	  "🙏🏻",
	  "🙏🏼",
	  "🙏🏽",
	  "🙏🏾",
	  "🙏🏿",
	  "🙏",
	  "🚀",
	  "🚁",
	  "🚂",
	  "🚃",
	  "🚄",
	  "🚅",
	  "🚆",
	  "🚇",
	  "🚈",
	  "🚉",
	  "🚊",
	  "🚋",
	  "🚌",
	  "🚍",
	  "🚎",
	  "🚏",
	  "🚐",
	  "🚑",
	  "🚒",
	  "🚓",
	  "🚔",
	  "🚕",
	  "🚖",
	  "🚗",
	  "🚘",
	  "🚙",
	  "🚚",
	  "🚛",
	  "🚜",
	  "🚝",
	  "🚞",
	  "🚟",
	  "🚠",
	  "🚡",
	  "🚢",
	  "🚣🏻‍♀️",
	  "🚣🏻‍♂️",
	  "🚣🏻",
	  "🚣🏼‍♀️",
	  "🚣🏼‍♂️",
	  "🚣🏼",
	  "🚣🏽‍♀️",
	  "🚣🏽‍♂️",
	  "🚣🏽",
	  "🚣🏾‍♀️",
	  "🚣🏾‍♂️",
	  "🚣🏾",
	  "🚣🏿‍♀️",
	  "🚣🏿‍♂️",
	  "🚣🏿",
	  "🚣‍♀️",
	  "🚣‍♂️",
	  "🚣",
	  "🚤",
	  "🚥",
	  "🚦",
	  "🚧",
	  "🚨",
	  "🚩",
	  "🚪",
	  "🚫",
	  "🚬",
	  "🚭",
	  "🚮",
	  "🚯",
	  "🚰",
	  "🚱",
	  "🚲",
	  "🚳",
	  "🚴🏻‍♀️",
	  "🚴🏻‍♂️",
	  "🚴🏻",
	  "🚴🏼‍♀️",
	  "🚴🏼‍♂️",
	  "🚴🏼",
	  "🚴🏽‍♀️",
	  "🚴🏽‍♂️",
	  "🚴🏽",
	  "🚴🏾‍♀️",
	  "🚴🏾‍♂️",
	  "🚴🏾",
	  "🚴🏿‍♀️",
	  "🚴🏿‍♂️",
	  "🚴🏿",
	  "🚴‍♀️",
	  "🚴‍♂️",
	  "🚴",
	  "🚵🏻‍♀️",
	  "🚵🏻‍♂️",
	  "🚵🏻",
	  "🚵🏼‍♀️",
	  "🚵🏼‍♂️",
	  "🚵🏼",
	  "🚵🏽‍♀️",
	  "🚵🏽‍♂️",
	  "🚵🏽",
	  "🚵🏾‍♀️",
	  "🚵🏾‍♂️",
	  "🚵🏾",
	  "🚵🏿‍♀️",
	  "🚵🏿‍♂️",
	  "🚵🏿",
	  "🚵‍♀️",
	  "🚵‍♂️",
	  "🚵",
	  "🚶🏻‍♀️",
	  "🚶🏻‍♂️",
	  "🚶🏻",
	  "🚶🏼‍♀️",
	  "🚶🏼‍♂️",
	  "🚶🏼",
	  "🚶🏽‍♀️",
	  "🚶🏽‍♂️",
	  "🚶🏽",
	  "🚶🏾‍♀️",
	  "🚶🏾‍♂️",
	  "🚶🏾",
	  "🚶🏿‍♀️",
	  "🚶🏿‍♂️",
	  "🚶🏿",
	  "🚶‍♀️",
	  "🚶‍♂️",
	  "🚶",
	  "🚷",
	  "🚸",
	  "🚹",
	  "🚺",
	  "🚻",
	  "🚼",
	  "🚽",
	  "🚾",
	  "🚿",
	  "🛀🏻",
	  "🛀🏼",
	  "🛀🏽",
	  "🛀🏾",
	  "🛀🏿",
	  "🛀",
	  "🛁",
	  "🛂",
	  "🛃",
	  "🛄",
	  "🛅",
	  "🛋",
	  "🛌🏻",
	  "🛌🏼",
	  "🛌🏽",
	  "🛌🏾",
	  "🛌🏿",
	  "🛌",
	  "🛍",
	  "🛎",
	  "🛏",
	  "🛐",
	  "🛑",
	  "🛒",
	  "🛠",
	  "🛡",
	  "🛢",
	  "🛣",
	  "🛤",
	  "🛥",
	  "🛩",
	  "🛫",
	  "🛬",
	  "🛰",
	  "🛳",
	  "🛴",
	  "🛵",
	  "🛶",
	  "🤐",
	  "🤑",
	  "🤒",
	  "🤓",
	  "🤔",
	  "🤕",
	  "🤖",
	  "🤗",
	  "🤘🏻",
	  "🤘🏼",
	  "🤘🏽",
	  "🤘🏾",
	  "🤘🏿",
	  "🤘",
	  "🤙🏻",
	  "🤙🏼",
	  "🤙🏽",
	  "🤙🏾",
	  "🤙🏿",
	  "🤙",
	  "🤚🏻",
	  "🤚🏼",
	  "🤚🏽",
	  "🤚🏾",
	  "🤚🏿",
	  "🤚",
	  "🤛🏻",
	  "🤛🏼",
	  "🤛🏽",
	  "🤛🏾",
	  "🤛🏿",
	  "🤛",
	  "🤜🏻",
	  "🤜🏼",
	  "🤜🏽",
	  "🤜🏾",
	  "🤜🏿",
	  "🤜",
	  "🤝🏻",
	  "🤝🏼",
	  "🤝🏽",
	  "🤝🏾",
	  "🤝🏿",
	  "🤝",
	  "🤞🏻",
	  "🤞🏼",
	  "🤞🏽",
	  "🤞🏾",
	  "🤞🏿",
	  "🤞",
	  "🤠",
	  "🤡",
	  "🤢",
	  "🤣",
	  "🤤",
	  "🤥",
	  "🤦🏻‍♀️",
	  "🤦🏻‍♂️",
	  "🤦🏻",
	  "🤦🏼‍♀️",
	  "🤦🏼‍♂️",
	  "🤦🏼",
	  "🤦🏽‍♀️",
	  "🤦🏽‍♂️",
	  "🤦🏽",
	  "🤦🏾‍♀️",
	  "🤦🏾‍♂️",
	  "🤦🏾",
	  "🤦🏿‍♀️",
	  "🤦🏿‍♂️",
	  "🤦🏿",
	  "🤦‍♀️",
	  "🤦‍♂️",
	  "🤦",
	  "🤧",
	  "🤰🏻",
	  "🤰🏼",
	  "🤰🏽",
	  "🤰🏾",
	  "🤰🏿",
	  "🤰",
	  "🤳🏻",
	  "🤳🏼",
	  "🤳🏽",
	  "🤳🏾",
	  "🤳🏿",
	  "🤳",
	  "🤴🏻",
	  "🤴🏼",
	  "🤴🏽",
	  "🤴🏾",
	  "🤴🏿",
	  "🤴",
	  "🤵🏻",
	  "🤵🏼",
	  "🤵🏽",
	  "🤵🏾",
	  "🤵🏿",
	  "🤵",
	  "🤶🏻",
	  "🤶🏼",
	  "🤶🏽",
	  "🤶🏾",
	  "🤶🏿",
	  "🤶",
	  "🤷🏻‍♀️",
	  "🤷🏻‍♂️",
	  "🤷🏻",
	  "🤷🏼‍♀️",
	  "🤷🏼‍♂️",
	  "🤷🏼",
	  "🤷🏽‍♀️",
	  "🤷🏽‍♂️",
	  "🤷🏽",
	  "🤷🏾‍♀️",
	  "🤷🏾‍♂️",
	  "🤷🏾",
	  "🤷🏿‍♀️",
	  "🤷🏿‍♂️",
	  "🤷🏿",
	  "🤷‍♀️",
	  "🤷‍♂️",
	  "🤷",
	  "🤸🏻‍♀️",
	  "🤸🏻‍♂️",
	  "🤸🏻",
	  "🤸🏼‍♀️",
	  "🤸🏼‍♂️",
	  "🤸🏼",
	  "🤸🏽‍♀️",
	  "🤸🏽‍♂️",
	  "🤸🏽",
	  "🤸🏾‍♀️",
	  "🤸🏾‍♂️",
	  "🤸🏾",
	  "🤸🏿‍♀️",
	  "🤸🏿‍♂️",
	  "🤸🏿",
	  "🤸‍♀️",
	  "🤸‍♂️",
	  "🤸",
	  "🤹🏻‍♀️",
	  "🤹🏻‍♂️",
	  "🤹🏻",
	  "🤹🏼‍♀️",
	  "🤹🏼‍♂️",
	  "🤹🏼",
	  "🤹🏽‍♀️",
	  "🤹🏽‍♂️",
	  "🤹🏽",
	  "🤹🏾‍♀️",
	  "🤹🏾‍♂️",
	  "🤹🏾",
	  "🤹🏿‍♀️",
	  "🤹🏿‍♂️",
	  "🤹🏿",
	  "🤹‍♀️",
	  "🤹‍♂️",
	  "🤹",
	  "🤺",
	  "🤼🏻‍♀️",
	  "🤼🏻‍♂️",
	  "🤼🏻",
	  "🤼🏼‍♀️",
	  "🤼🏼‍♂️",
	  "🤼🏼",
	  "🤼🏽‍♀️",
	  "🤼🏽‍♂️",
	  "🤼🏽",
	  "🤼🏾‍♀️",
	  "🤼🏾‍♂️",
	  "🤼🏾",
	  "🤼🏿‍♀️",
	  "🤼🏿‍♂️",
	  "🤼🏿",
	  "🤼‍♀️",
	  "🤼‍♂️",
	  "🤼",
	  "🤽🏻‍♀️",
	  "🤽🏻‍♂️",
	  "🤽🏻",
	  "🤽🏼‍♀️",
	  "🤽🏼‍♂️",
	  "🤽🏼",
	  "🤽🏽‍♀️",
	  "🤽🏽‍♂️",
	  "🤽🏽",
	  "🤽🏾‍♀️",
	  "🤽🏾‍♂️",
	  "🤽🏾",
	  "🤽🏿‍♀️",
	  "🤽🏿‍♂️",
	  "🤽🏿",
	  "🤽‍♀️",
	  "🤽‍♂️",
	  "🤽",
	  "🤾🏻‍♀️",
	  "🤾🏻‍♂️",
	  "🤾🏻",
	  "🤾🏼‍♀️",
	  "🤾🏼‍♂️",
	  "🤾🏼",
	  "🤾🏽‍♀️",
	  "🤾🏽‍♂️",
	  "🤾🏽",
	  "🤾🏾‍♀️",
	  "🤾🏾‍♂️",
	  "🤾🏾",
	  "🤾🏿‍♀️",
	  "🤾🏿‍♂️",
	  "🤾🏿",
	  "🤾‍♀️",
	  "🤾‍♂️",
	  "🤾",
	  "🥀",
	  "🥁",
	  "🥂",
	  "🥃",
	  "🥄",
	  "🥅",
	  "🥇",
	  "🥈",
	  "🥉",
	  "🥊",
	  "🥋",
	  "🥐",
	  "🥑",
	  "🥒",
	  "🥓",
	  "🥔",
	  "🥕",
	  "🥖",
	  "🥗",
	  "🥘",
	  "🥙",
	  "🥚",
	  "🥛",
	  "🥜",
	  "🥝",
	  "🥞",
	  "🦀",
	  "🦁",
	  "🦂",
	  "🦃",
	  "🦄",
	  "🦅",
	  "🦆",
	  "🦇",
	  "🦈",
	  "🦉",
	  "🦊",
	  "🦋",
	  "🦌",
	  "🦍",
	  "🦎",
	  "🦏",
	  "🦐",
	  "🦑",
	  "🧀",
	  "‼",
	  "⁉",
	  "™",
	  "ℹ",
	  "↔",
	  "↕",
	  "↖",
	  "↗",
	  "↘",
	  "↙",
	  "↩",
	  "↪",
	  "#⃣",
	  "⌚",
	  "⌛",
	  "⌨",
	  "⏏",
	  "⏩",
	  "⏪",
	  "⏫",
	  "⏬",
	  "⏭",
	  "⏮",
	  "⏯",
	  "⏰",
	  "⏱",
	  "⏲",
	  "⏳",
	  "⏸",
	  "⏹",
	  "⏺",
	  "Ⓜ",
	  "▪",
	  "▫",
	  "▶",
	  "◀",
	  "◻",
	  "◼",
	  "◽",
	  "◾",
	  "☀",
	  "☁",
	  "☂",
	  "☃",
	  "☄",
	  "☎",
	  "☑",
	  "☔",
	  "☕",
	  "☘",
	  "☝🏻",
	  "☝🏼",
	  "☝🏽",
	  "☝🏾",
	  "☝🏿",
	  "☝",
	  "☠",
	  "☢",
	  "☣",
	  "☦",
	  "☪",
	  "☮",
	  "☯",
	  "☸",
	  "☹",
	  "☺",
	  "♀",
	  "♂",
	  "♈",
	  "♉",
	  "♊",
	  "♋",
	  "♌",
	  "♍",
	  "♎",
	  "♏",
	  "♐",
	  "♑",
	  "♒",
	  "♓",
	  "♠",
	  "♣",
	  "♥",
	  "♦",
	  "♨",
	  "♻",
	  "♿",
	  "⚒",
	  "⚓",
	  "⚔",
	  "⚕",
	  "⚖",
	  "⚗",
	  "⚙",
	  "⚛",
	  "⚜",
	  "⚠",
	  "⚡",
	  "⚪",
	  "⚫",
	  "⚰",
	  "⚱",
	  "⚽",
	  "⚾",
	  "⛄",
	  "⛅",
	  "⛈",
	  "⛎",
	  "⛏",
	  "⛑",
	  "⛓",
	  "⛔",
	  "⛩",
	  "⛪",
	  "⛰",
	  "⛱",
	  "⛲",
	  "⛳",
	  "⛴",
	  "⛵",
	  "⛷🏻",
	  "⛷🏼",
	  "⛷🏽",
	  "⛷🏾",
	  "⛷🏿",
	  "⛷",
	  "⛸",
	  "⛹🏻‍♀️",
	  "⛹🏻‍♂️",
	  "⛹🏻",
	  "⛹🏼‍♀️",
	  "⛹🏼‍♂️",
	  "⛹🏼",
	  "⛹🏽‍♀️",
	  "⛹🏽‍♂️",
	  "⛹🏽",
	  "⛹🏾‍♀️",
	  "⛹🏾‍♂️",
	  "⛹🏾",
	  "⛹🏿‍♀️",
	  "⛹🏿‍♂️",
	  "⛹🏿",
	  "⛹️‍♀️",
	  "⛹️‍♂️",
	  "⛹",
	  "⛺",
	  "⛽",
	  "✂",
	  "✅",
	  "✈",
	  "✉",
	  "✊🏻",
	  "✊🏼",
	  "✊🏽",
	  "✊🏾",
	  "✊🏿",
	  "✊",
	  "✋🏻",
	  "✋🏼",
	  "✋🏽",
	  "✋🏾",
	  "✋🏿",
	  "✋",
	  "✌🏻",
	  "✌🏼",
	  "✌🏽",
	  "✌🏾",
	  "✌🏿",
	  "✌",
	  "✍🏻",
	  "✍🏼",
	  "✍🏽",
	  "✍🏾",
	  "✍🏿",
	  "✍",
	  "✏",
	  "✒",
	  "✔",
	  "✖",
	  "✝",
	  "✡",
	  "✨",
	  "✳",
	  "✴",
	  "❄",
	  "❇",
	  "❌",
	  "❎",
	  "❓",
	  "❔",
	  "❕",
	  "❗",
	  "❣",
	  "❤",
	  "➕",
	  "➖",
	  "➗",
	  "➡",
	  "➰",
	  "➿",
	  "⤴",
	  "⤵",
	  "*⃣",
	  "⬅",
	  "⬆",
	  "⬇",
	  "⬛",
	  "⬜",
	  "⭐",
	  "⭕",
	  "0⃣",
	  "〰",
	  "〽",
	  "1⃣",
	  "2⃣",
	  "㊗",
	  "㊙",
	  "3⃣",
	  "4⃣",
	  "5⃣",
	  "6⃣",
	  "7⃣",
	  "8⃣",
	  "9⃣",
	  "©",
	  "®",
	  ""
	]

/***/ }
/******/ ])
});
;