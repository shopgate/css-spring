'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbFloatToHex = exports.toString = exports.omitEmptyValues = exports.appendToKeys = exports.calculateObsoleteValues = exports.calculateObsoleteFrames = exports.addValueToProperty = exports.getInterpolator = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _lodash = require('lodash');

var _interpolate3 = require('./interpolate');

var _interpolate4 = _interopRequireDefault(_interpolate3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// returns interpolation method based on stiffness and damping.
var getInterpolator = exports.getInterpolator = function getInterpolator(stiffness, damping) {
  // interpolation method is invoked with start and end values and returns
  // an array consisting of start, 99 interpolated values inbetween and end.
  return function (value, end, velocity) {
    var interpolated = [value].concat(_toConsumableArray(Array(99)), [end]);

    return (0, _lodash.map)(interpolated, function () {
      var _interpolate = (0, _interpolate4.default)(0.01, value, velocity || 0, end, stiffness, damping);

      var _interpolate2 = _slicedToArray(_interpolate, 2);

      value = _interpolate2[0];
      velocity = _interpolate2[1];

      return value;
    });
  };
};

// adds a value to an objects property.
// when a property value exists, forms an array of values.
var addValueToProperty = exports.addValueToProperty = function addValueToProperty() {
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
var calculateObsoleteFrames = exports.calculateObsoleteFrames = function calculateObsoleteFrames(arr, prop) {
  return (0, _lodash.compact)((0, _lodash.map)(arr, function (value, i, arr) {
    var current = JSON.stringify(value[prop]);
    var previous = JSON.stringify((arr[i - 1] || {})[prop]);
    var next = JSON.stringify((arr[i + 1] || {})[prop]);

    // when the current value equals the previous and the next one
    // mark the current value as obsolete
    return current === next && current === previous ? i : null;
  }));
};

// calculate obsolete values based on an array of properties and
var calculateObsoleteValues = exports.calculateObsoleteValues = function calculateObsoleteValues(keyframes) {
  return (0, _lodash.reduce)(Object.keys(keyframes[0]), function (accumulator, property) {
    return Object.assign(accumulator, _defineProperty({}, property, calculateObsoleteFrames(Object.keys(keyframes).map(function (key) {
      return keyframes[key];
    }), property)));
  }, {});
};

// append a string to every key of an object
var appendToKeys = exports.appendToKeys = function appendToKeys(obj, suffix) {
  return (0, _lodash.mapKeys)(obj, function (_, key) {
    return '' + key + suffix;
  });
};

// omit all properties with empty values from an object
var omitEmptyValues = exports.omitEmptyValues = function omitEmptyValues(obj) {
  return (0, _lodash.pickBy)(obj, function (value) {
    return (0, _lodash.negate)(_lodash.isEmpty)(value);
  });
};

// format keyframe styles to string
var defaultFormatter = function defaultFormatter(key, value) {
  return key + ':' + value + ';';
};
var toString = exports.toString = function toString(keyframes) {
  var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFormatter;

  return Object.keys(keyframes).reduce(function (outer, perc) {
    var value = Object.keys(keyframes[perc]).reduce(function (inner, prop) {
      return '' + inner + formatter(prop, keyframes[perc][prop]);
    }, '');
    return '' + outer + perc + '{' + value + '}';
  }, '');
};

// convert an interpolated rgb color value float to hex
var rgbFloatToHex = exports.rgbFloatToHex = function rgbFloatToHex(float) {
  var limited = Math.min(255, Math.max(0, float));
  return ('0' + Number(limited.toFixed(0)).toString(16)).substr(-2);
};