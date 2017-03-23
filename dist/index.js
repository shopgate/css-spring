'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toString = exports.spring = undefined;

var _compact2 = require('lodash/compact');

var _compact3 = _interopRequireDefault(_compact2);

var _pickBy2 = require('lodash/pickBy');

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _mapValues2 = require('lodash/mapValues');

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _parse = require('./parse');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// spring presets. selected combinations of stiffness/damping.
var presets = {
  noWobble: { stiffness: 170, damping: 26 },
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }
};

// default spring options.
// damping and precision reflect the values of the `wobbly` preset,
// precision defaults to 2 which should be a good tradeoff between
// animation detail and resulting filesize.
var defaultOptions = {
  stiffness: 180,
  damping: 12,
  precision: 2
};

// css-spring
// ----------
// invoke with startStyles, endStyles and options and gain a keyframe
// style object with interpolated values.
var spring = exports.spring = function spring(startStyles, endStyles) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var result = {};

  // define stiffness, damping and precision based on default options
  // and options given in arguments.

  var _Object$assign = Object.assign({}, defaultOptions, options, presets[options.preset] || {}),
      stiffness = _Object$assign.stiffness,
      damping = _Object$assign.damping,
      precision = _Object$assign.precision;

  // get an interpolation function and parse start- and end styles


  var interpolate = (0, _util.getInterpolator)(stiffness, damping);
  var parsed = (0, _parse.parseStyles)(startStyles, endStyles);

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
    if (!(0, _isNil3.default)(start) && !(0, _isNil3.default)(end)) {
      interpolate(start, end).forEach(function (interpolated, i) {
        // round to desired precision (except when interpolating pixels)
        var value = Number(interpolated.toFixed(unit === 'px' ? 0 : precision));
        // add unit when applicable
        value = value === 0 || !unit ? value : '' + value + unit;
        result[i] = (0, _util.addValueToProperty)(result[i], prop, value, action);
      });
      // if hex representations of rgb colors are found
    } else if (!(0, _isNil3.default)(rgb)) {
      // interpolate each color component separately
      var r = interpolate(rgb[0][0], rgb[1][0]);
      var g = interpolate(rgb[0][1], rgb[1][1]);
      var b = interpolate(rgb[0][2], rgb[1][2]);
      r.forEach(function (interpolated, i) {
        var toRgb = _util.rgbFloatToHex;
        result[i] = (0, _util.addValueToProperty)(result[i], prop, '#' + toRgb(r[i]) + toRgb(g[i]) + toRgb(b[i]), action);
      });
      // otherwise the value is fixed and can directly be appended to the
      // resulting keyframe styles
    } else if (!(0, _isNil3.default)(fixed)) {
      for (var i = 0; i < 101; i += 1) {
        result[i] = (0, _util.addValueToProperty)(result[i], prop, fixed, action);
      }
    }
  });

  // remove obsolete values, combine multiple values for the same property
  // to single ones and append % to the object keys
  var obsoleteValues = (0, _util.calculateObsoleteValues)(result);
  result = (0, _mapValues3.default)(result, function (value, i) {
    var result = (0, _mapValues3.default)(value, function (value, key) {
      if (key === 'transform') {
        var combinedValue = [];
        Object.keys(value).forEach(function (key) {
          combinedValue.push(key + '(' + (0, _compact3.default)(value[key]).join(', ') + ')');
        });
        return (0, _parse.combine)(key, combinedValue.join(', '));
      }
      return (0, _parse.combine)(key, value);
    });
    return (0, _pickBy3.default)(result, function (_, property) {
      return obsoleteValues[property].indexOf(Number(i)) < 0;
    });
  });
  result = (0, _util.omitEmptyValues)(result);
  result = (0, _util.appendToKeys)(result, '%');

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

exports.toString = _util.toString;
exports.default = spring;