'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseStyles = exports.parseValues = exports.parseHexColor = exports.parseNumber = exports.combine = exports.split = exports.handleTransform = exports.parseTransform = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

// css properties that can have values joined by spaces
var spaceCombinedProps = ['-moz-outline-radius', '-webkit-text-stroke', 'background', 'border', 'border-bottom', 'border-color', 'border-left', 'border-radius', 'border-right', 'border-spacing', 'border-top', 'border-width', 'margin', 'outline', 'padding'];

var commaCombinedProps = ['transform'];

var parseTransform = exports.parseTransform = function parseTransform(value) {
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

var handleTransform = exports.handleTransform = function handleTransform(prop, start, end) {
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
var split = exports.split = function split(key, value) {
  if (spaceCombinedProps.indexOf(key) >= 0) {
    var arr = value.split(' ');
    return arr.length === 1 ? arr[0] : arr;
  }

  return value;
};

// combines multiple values to a single css property value
var combine = exports.combine = function combine(key, value) {
  return (0, _lodash.isArray)(value) && spaceCombinedProps.indexOf(key) >= 0 ? value.join(' ') : value;
};

// this splits css numbers from units.
//
// according to the css spec, a number can either be an integer or it can be
// zero or more digits followed by a dot followed by one or more digits.
// assuming the unit can be any sequence of lowercase letters (including none)
//
// returns an object with `unit` and `value` properties.
var parseNumber = exports.parseNumber = function parseNumber(number) {
  var regex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;

  var _ref = ('' + number).match(regex) || [],
      _ref2 = _slicedToArray(_ref, 3),
      value = _ref2[1],
      unit = _ref2[2];

  return value ? { unit: unit, value: Number(value) } : undefined;
};

// check if a string is a hex color. returns an array of three integers
// between 0 and 255 for the three rgb components if it is.
var parseHexColor = exports.parseHexColor = function parseHexColor(color) {
  var _ref3 = ('' + color).match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i) || [],
      _ref4 = _slicedToArray(_ref3, 2),
      hex = _ref4[1];

  if (hex) {
    hex = hex.length === 3 ? (0, _lodash.map)(hex, function (v) {
      return '' + v + v;
    }).join('') : hex;
    return (0, _lodash.map)(hex.match(/.{1,2}/g), function (v) {
      return parseInt(v, 16);
    });
  }
};

// parses css startValue and endValue.
//
// returns an object consisting of start and end values for interpolation
// and an additional unit if the start and end values are numeric. in cases
// of unchanged values, returns the fixed value
var parseValues = exports.parseValues = function parseValues(startValue, endValue) {
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
var parseStyles = exports.parseStyles = function parseStyles(startStyles, endStyles) {
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
      var parsedValues = (0, _lodash.compact)((0, _lodash.map)(startValues, function (value, key) {
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