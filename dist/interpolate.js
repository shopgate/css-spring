"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
exports.default = stepper;