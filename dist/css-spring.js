(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["css-spring"] = factory();
	else
		root["css-spring"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(25);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(16),
    baseIteratee = __webpack_require__(2),
    basePickBy = __webpack_require__(22),
    getAllKeysIn = __webpack_require__(26);

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(18),
    keys = __webpack_require__(40);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseTransform */
/* unused harmony export handleTransform */
/* unused harmony export split */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return combine; });
/* unused harmony export parseNumber */
/* unused harmony export parseHexColor */
/* unused harmony export parseValues */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_map__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_compact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_compact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_compact__);




var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// css properties that can have values joined by spaces
var spaceCombinedProps = ['-moz-outline-radius', '-webkit-text-stroke', 'background', 'border', 'border-bottom', 'border-color', 'border-left', 'border-radius', 'border-right', 'border-spacing', 'border-top', 'border-width', 'margin', 'outline', 'padding'];

var commaCombinedProps = ['transform'];

var parseTransform = function parseTransform(value) {
  var valueRegex = /([\w]*)\((.*)\)/;
  var styles = value.split('),');
  var result = [];

  styles.map(function (style) {
    if (style[style.length - 1] !== ')') {
      style = style + ')';
    }
    var inner = [];
    var values = valueRegex.exec(style);
    var action = values[1];
    values[2].split(',').forEach(function (value, index) {
      inner.push({
        action: action,
        value: value.trim(),
        position: index
      });
    });
    result.push(inner);
  });

  return result;
};

var handleTransform = function handleTransform(prop, start, end) {
  if (commaCombinedProps.indexOf(prop) === -1) {
    return null;
  }

  var startParsed = parseTransform(start);
  var endParsed = parseTransform(end);

  var result = [];

  startParsed.map(function (startPair, index) {
    startPair.map(function (pair, pairIndex) {
      result.push(_extends({
        prop: prop,
        action: pair.action,
        position: pair.position
      }, parseValues(pair.value, endParsed[index][pairIndex].value)));
    });
  });
  return result;
};

// splits a css property value into multiple values
var split = function split(key, value) {
  if (spaceCombinedProps.indexOf(key) >= 0) {
    var arr = value.split(' ');
    return arr.length === 1 ? arr[0] : arr;
  }

  return value;
};

// combines multiple values to a single css property value
var combine = function combine(key, value) {
  return __WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default()(value) && spaceCombinedProps.indexOf(key) >= 0 ? value.join(' ') : value;
};

// this splits css numbers from units.
//
// according to the css spec, a number can either be an integer or it can be
// zero or more digits followed by a dot followed by one or more digits.
// assuming the unit can be any sequence of lowercase letters (including none)
//
// returns an object with `unit` and `value` properties.
var parseNumber = function parseNumber(number) {
  var regex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;

  var _ref = ('' + number).match(regex) || [],
      _ref2 = _slicedToArray(_ref, 3),
      value = _ref2[1],
      unit = _ref2[2];

  return value ? { unit: unit, value: Number(value) } : undefined;
};

// check if a string is a hex color. returns an array of three integers
// between 0 and 255 for the three rgb components if it is.
var parseHexColor = function parseHexColor(color) {
  var _ref3 = ('' + color).match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i) || [],
      _ref4 = _slicedToArray(_ref3, 2),
      hex = _ref4[1];

  if (hex) {
    hex = hex.length === 3 ? __WEBPACK_IMPORTED_MODULE_0_lodash_map___default()(hex, function (v) {
      return '' + v + v;
    }).join('') : hex;
    return __WEBPACK_IMPORTED_MODULE_0_lodash_map___default()(hex.match(/.{1,2}/g), function (v) {
      return parseInt(v, 16);
    });
  }
};

// parses css startValue and endValue.
//
// returns an object consisting of start and end values for interpolation
// and an additional unit if the start and end values are numeric. in cases
// of unchanged values, returns the fixed value
var parseValues = function parseValues(startValue, endValue) {
  // when both values are equal, the value is fixed
  if (startValue === endValue) {
    return { fixed: startValue };
  }

  // check if both values are numeric with optional unit
  var numericStart = parseNumber(startValue);
  var numericEnd = parseNumber(endValue);

  if (numericStart && numericEnd) {
    var startUnit = numericStart.unit;
    var endUnit = numericEnd.unit;

    // when start unit is the same as end unit or one of them is unitless
    if (startUnit === endUnit || !startUnit || !endUnit) {
      return {
        unit: startUnit || endUnit,
        start: numericStart.value,
        end: numericEnd.value
      };
    }
  }

  // check of both values are hex rgb colors
  var colorStart = parseHexColor(startValue);
  var colorEnd = parseHexColor(endValue);

  if (colorStart && colorEnd) {
    return { rgb: [colorStart, colorEnd] };
  }
};

// returns an object that lists the property, unit, start and end values of
// the animatable properties based on the given arguments.
//
// to be animatable, a property has to be present on both `startStyles` and
// `endProps` with a numeric value and same unit for both or unitless for one
// of them which will then take the unit of the other.
var parseStyles = function parseStyles(startStyles, endStyles) {
  var result = [];

  var _loop = function _loop(prop) {
    // only animate props that exist in both start and end styles
    if (!(prop in endStyles)) {
      return 'break';
    }

    var transforms = handleTransform(prop, startStyles[prop], endStyles[prop]);
    if (transforms) {
      result = result.concat(transforms);
    } else {
      // in case of combined values, split them!
      var startValues = [].concat(split(prop, startStyles[prop]));
      var endValues = [].concat(split(prop, endStyles[prop]));

      // only animate props that have the same number of values
      if (startValues.length !== endValues.length) {
        return 'break';
      }

      // parse start and end value combinations
      var parsedValues = __WEBPACK_IMPORTED_MODULE_2_lodash_compact___default()(__WEBPACK_IMPORTED_MODULE_0_lodash_map___default()(startValues, function (value, key) {
        var parsed = parseValues(value, endValues[key]);
        return parsed ? _extends({ prop: prop }, parsed) : null;
      }));

      // when parsing was successful for every combination, use the results
      if (parsedValues.length === startValues.length) {
        result = result.concat(parsedValues);
      }
    }
  };

  for (var prop in startStyles) {
    var _ret = _loop(prop);

    if (_ret === 'break') break;
  }

  return result;
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInterpolator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addValueToProperty; });
/* unused harmony export calculateObsoleteFrames */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return calculateObsoleteValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return appendToKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return omitEmptyValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rgbFloatToHex; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_reduce__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pickBy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pickBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_pickBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_negate__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_negate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_negate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_mapKeys__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_mapKeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_mapKeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_map__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_compact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_compact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_compact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interpolate__ = __webpack_require__(15);








var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



// returns interpolation method based on stiffness and damping.
var getInterpolator = function getInterpolator(stiffness, damping) {
  // interpolation method is invoked with start and end values and returns
  // an array consisting of start, 99 interpolated values inbetween and end.
  return function (value, end, velocity) {
    var interpolated = [value].concat(_toConsumableArray(Array(99)), [end]);

    return __WEBPACK_IMPORTED_MODULE_4_lodash_map___default()(interpolated, function () {
      var _interpolate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__interpolate__["a" /* default */])(0.01, value, velocity || 0, end, stiffness, damping);

      var _interpolate2 = _slicedToArray(_interpolate, 2);

      value = _interpolate2[0];
      velocity = _interpolate2[1];

      return value;
    });
  };
};

// adds a value to an objects property.
// when a property value exists, forms an array of values.
var addValueToProperty = function addValueToProperty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var prop = arguments[1];
  var value = arguments[2];
  var action = arguments[3];

  if (prop === 'transform' && action) {
    if (typeof obj[prop] === 'undefined') {
      obj[prop] = _defineProperty({}, action, value);
    } else {
      obj[prop][action] = [].concat(obj[prop][action], value);
    }
    return obj;
  }

  return Object.assign(obj, _defineProperty({}, prop, obj[prop] === undefined ? value : [].concat(obj[prop], value)));
};

// based on an array with interpolated values for a property, return
// an array with indices that are obsolete.
var calculateObsoleteFrames = function calculateObsoleteFrames(arr, prop) {
  return __WEBPACK_IMPORTED_MODULE_6_lodash_compact___default()(__WEBPACK_IMPORTED_MODULE_4_lodash_map___default()(arr, function (value, i, arr) {
    var current = JSON.stringify(value[prop]);
    var previous = JSON.stringify((arr[i - 1] || {})[prop]);
    var next = JSON.stringify((arr[i + 1] || {})[prop]);

    // when the current value equals the previous and the next one
    // mark the current value as obsolete
    return current === next && current === previous ? i : null;
  }));
};

// calculate obsolete values based on an array of properties and
var calculateObsoleteValues = function calculateObsoleteValues(keyframes) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash_reduce___default()(Object.keys(keyframes[0]), function (accumulator, property) {
    return Object.assign(accumulator, _defineProperty({}, property, calculateObsoleteFrames(Object.keys(keyframes).map(function (key) {
      return keyframes[key];
    }), property)));
  }, {});
};

// append a string to every key of an object
var appendToKeys = function appendToKeys(obj, suffix) {
  return __WEBPACK_IMPORTED_MODULE_3_lodash_mapKeys___default()(obj, function (_, key) {
    return '' + key + suffix;
  });
};

// omit all properties with empty values from an object
var omitEmptyValues = function omitEmptyValues(obj) {
  return __WEBPACK_IMPORTED_MODULE_1_lodash_pickBy___default()(obj, function (value) {
    return __WEBPACK_IMPORTED_MODULE_2_lodash_negate___default()(__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default.a)(value);
  });
};

// format keyframe styles to string
var defaultFormatter = function defaultFormatter(key, value) {
  return key + ':' + value + ';';
};
var toString = function toString(keyframes) {
  var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFormatter;

  return Object.keys(keyframes).reduce(function (outer, perc) {
    var value = Object.keys(keyframes[perc]).reduce(function (inner, prop) {
      return '' + inner + formatter(prop, keyframes[perc][prop]);
    }, '');
    return '' + outer + perc + '{' + value + '}';
  }, '');
};

// convert an interpolated rgb color value float to hex
var rgbFloatToHex = function rgbFloatToHex(float) {
  var limited = Math.min(255, Math.max(0, float));
  return ('0' + Number(limited.toFixed(0)).toString(16)).substr(-2);
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(1),
    baseForOwn = __webpack_require__(5),
    baseIteratee = __webpack_require__(2);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return spring; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_compact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_compact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_compact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pickBy__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pickBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_pickBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_mapValues__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_mapValues__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isNil__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parse__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return __WEBPACK_IMPORTED_MODULE_5__util__["g"]; });










// spring presets. selected combinations of stiffness/damping.
var presets = {
  noWobble: { stiffness: 170, damping: 26 },
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }

  // default spring options.
  // damping and precision reflect the values of the `wobbly` preset,
  // precision defaults to 2 which should be a good tradeoff between
  // animation detail and resulting filesize.
};var defaultOptions = {
  stiffness: 180,
  damping: 12,
  precision: 2

  // css-spring
  // ----------
  // invoke with startStyles, endStyles and options and gain a keyframe
  // style object with interpolated values.
};var spring = function spring(startStyles, endStyles) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var result = {};

  // define stiffness, damping and precision based on default options
  // and options given in arguments.

  var _Object$assign = Object.assign({}, defaultOptions, options, presets[options.preset] || {}),
      stiffness = _Object$assign.stiffness,
      damping = _Object$assign.damping,
      precision = _Object$assign.precision;

  // get an interpolation function and parse start- and end styles


  var interpolate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["a" /* getInterpolator */])(stiffness, damping);
  var parsed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse__["a" /* parseStyles */])(startStyles, endStyles);

  // build keyframe styles based on parsed properties
  parsed.forEach(function (_ref, index) {
    var prop = _ref.prop,
        unit = _ref.unit,
        start = _ref.start,
        end = _ref.end,
        rgb = _ref.rgb,
        fixed = _ref.fixed,
        action = _ref.action,
        position = _ref.position;

    // if start and end values differ, interpolate between them
    if (!__WEBPACK_IMPORTED_MODULE_3_lodash_isNil___default()(start) && !__WEBPACK_IMPORTED_MODULE_3_lodash_isNil___default()(end)) {
      interpolate(start, end).forEach(function (interpolated, i) {
        // round to desired precision (except when interpolating pixels)
        var value = Number(interpolated.toFixed(unit === 'px' ? 0 : precision));
        // add unit when applicable
        value = value === 0 || !unit ? value : '' + value + unit;
        result[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["b" /* addValueToProperty */])(result[i], prop, value, action);
      });
      // if hex representations of rgb colors are found
    } else if (!__WEBPACK_IMPORTED_MODULE_3_lodash_isNil___default()(rgb)) {
      // interpolate each color component separately
      var r = interpolate(rgb[0][0], rgb[1][0]);
      var g = interpolate(rgb[0][1], rgb[1][1]);
      var b = interpolate(rgb[0][2], rgb[1][2]);
      r.forEach(function (interpolated, i) {
        var toRgb = __WEBPACK_IMPORTED_MODULE_5__util__["c" /* rgbFloatToHex */];
        result[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["b" /* addValueToProperty */])(result[i], prop, '#' + toRgb(r[i]) + toRgb(g[i]) + toRgb(b[i]), action);
      });
      // otherwise the value is fixed and can directly be appended to the
      // resulting keyframe styles
    } else if (!__WEBPACK_IMPORTED_MODULE_3_lodash_isNil___default()(fixed)) {
      for (var i = 0; i < 101; i += 1) {
        result[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["b" /* addValueToProperty */])(result[i], prop, fixed, action);
      }
    }
  });

  // remove obsolete values, combine multiple values for the same property
  // to single ones and append % to the object keys
  var obsoleteValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["d" /* calculateObsoleteValues */])(result);
  result = __WEBPACK_IMPORTED_MODULE_2_lodash_mapValues___default()(result, function (value, i) {
    var result = __WEBPACK_IMPORTED_MODULE_2_lodash_mapValues___default()(value, function (value, key) {
      if (key === 'transform') {
        var combinedValue = [];
        Object.keys(value).forEach(function (key) {
          combinedValue.push(key + '(' + __WEBPACK_IMPORTED_MODULE_0_lodash_compact___default()(value[key]).join(', ') + ')');
        });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse__["b" /* combine */])(key, combinedValue.join(', '));
      }
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse__["b" /* combine */])(key, value);
    });
    return __WEBPACK_IMPORTED_MODULE_1_lodash_pickBy___default()(result, function (_, property) {
      return obsoleteValues[property].indexOf(Number(i)) < 0;
    });
  });
  result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["e" /* omitEmptyValues */])(result);
  result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["f" /* appendToKeys */])(result, '%');

  // console.log(result)
  return result;
};

// console.time('interpolate')
// spring({
//   left: '10px',
//   right: '20px',
//   padding: '0 0 10px 10rem',
//   opacity: 0,
// }, {
//   left: '20px',
//   right: 0,
//   padding: '10em 10em 0 20rem',
//   opacity: 1,
// }, {
//   preset: 'noWobble',
// })
// console.timeEnd('interpolate')

// console.time('interpolate 2')
// spring(
//   { 'margin-left': `250px`, border: '1px solid #f00' },
//   { 'margin-left': 0, border: '10px solid #bada55' },
//   { preset: 'gentle' },
// )
// console.timeEnd('interpolate 2')


/* harmony default export */ __webpack_exports__["default"] = (spring);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Taken from react-motion
// @see https://github.com/chenglou/react-motion/blob/master/src/stepper.js
var reusedTuple = [0, 0];

// eslint-disable-next-line max-params
var stepper = function stepper(secondPerFrame, x, v, destX, k, b) {
  var precision = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.01;

  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  var a = Fspring + Fdamper;

  var newV = v + a * secondPerFrame;
  var newX = x + newV * secondPerFrame;

  stepper.count += 1;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
};

stepper.count = 0;
/* harmony default export */ __webpack_exports__["a"] = (stepper);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(1),
    eq = __webpack_require__(32);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(24);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(7);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(19),
    baseSet = __webpack_require__(23),
    castPath = __webpack_require__(6);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(17),
    castPath = __webpack_require__(6),
    isIndex = __webpack_require__(29),
    isObject = __webpack_require__(8),
    toKey = __webpack_require__(31);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(27);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(37),
    isLength = __webpack_require__(38);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(21),
    getTag = __webpack_require__(28),
    isArguments = __webpack_require__(33),
    isArray = __webpack_require__(3),
    isArrayLike = __webpack_require__(34),
    isBuffer = __webpack_require__(35),
    isPrototype = __webpack_require__(30),
    isTypedArray = __webpack_require__(39);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(20),
    isObject = __webpack_require__(8);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(7);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(1),
    baseForOwn = __webpack_require__(5),
    baseIteratee = __webpack_require__(2);

/**
 * The opposite of `_.mapValues`; this method creates an object with the
 * same values as `object` and keys generated by running each own enumerable
 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
 * with three arguments: (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapValues
 * @example
 *
 * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value;
 * });
 * // => { 'a1': 1, 'b2': 2 }
 */
function mapKeys(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, iteratee(value, key, object), value);
  });
  return result;
}

module.exports = mapKeys;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

module.exports = negate;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ })
/******/ ]);
});