(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.warn = function () {};

require('./components.js');
require('./shaders.js');

},{"./components.js":2,"./shaders.js":7}],2:[function(require,module,exports){
'use strict';

if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('time-gradation-component', {
    schema: {},
    init: function init() {
        this.data.count = 0;
    },
    tick: function tick() {
        this.data.count += 1;
        this.el.setAttribute('material', 'time', this.data.count * 0.01);
    }
});

},{}],3:[function(require,module,exports){
module.exports = function parse(params){
      var template = "varying vec2 vUV; \n" +
" \n" +
"void main(void) { \n" +
"  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); \n" +
"  vUV = uv; \n" +
"} \n" +
" \n" 
      params = params || {}
      for(var key in params) {
        var matcher = new RegExp("{{"+key+"}}","g")
        template = template.replace(matcher, params[key])
      }
      return template
    };

},{}],4:[function(require,module,exports){
module.exports = function parse(params){
      var template = "varying vec2 vUV; // [0.0, 0.0] ~ [1.0, 1.0] \n" +
" \n" +
"void main(void) { \n" +
"	vec2 p = (vUV * 2.0) - vec2(1.0, 1.0); // [-1.0, 1.0] ~ [1.0, 1.0] \n" +
"	float x = p[0]; \n" +
"	float y = p[1]; \n" +
"    gl_FragColor = vec4(abs(x), abs(y), 0.5, 0.9); //(Red, Green, Blue, Alpha) \n" +
"} \n" +
" \n" 
      params = params || {}
      for(var key in params) {
        var matcher = new RegExp("{{"+key+"}}","g")
        template = template.replace(matcher, params[key])
      }
      return template
    };

},{}],5:[function(require,module,exports){
module.exports = function parse(params){
      var template = "varying vec2 vUV; // [0.0, 0.0] ~ [1.0, 1.0] \n" +
"uniform float time; \n" +
" \n" +
"void main(void) { \n" +
"	vec2 p = (vUV * 2.0) - vec2(1.0, 1.0); // [-1.0, 1.0] ~ [1.0, 1.0] \n" +
"	float x = p[0]; \n" +
"	float y = p[1]; \n" +
"    gl_FragColor = vec4(abs(x), abs(y), sin(time), 0.9); //(Red, Green, Blue, Alpha) \n" +
"} \n" +
" \n" 
      params = params || {}
      for(var key in params) {
        var matcher = new RegExp("{{"+key+"}}","g")
        template = template.replace(matcher, params[key])
      }
      return template
    };

},{}],6:[function(require,module,exports){
module.exports = function parse(params){
      var template = "varying vec2 vUV; \n" +
"uniform float time; \n" +
" \n" +
"void main(void) { \n" +
"	float Pi = 3.141592; \n" +
"	float tx = position.x * abs(sin(position.y * Pi + time)); \n" +
"	float ty = position.y; \n" +
"	float tz = position.z; \n" +
"	vec3 transform = vec3(tx, ty, tz); \n" +
"    gl_Position = projectionMatrix * modelViewMatrix * vec4(transform, 1.0); \n" +
"    vUV = uv; \n" +
"} \n" +
" \n" 
      params = params || {}
      for(var key in params) {
        var matcher = new RegExp("{{"+key+"}}","g")
        template = template.replace(matcher, params[key])
      }
      return template
    };

},{}],7:[function(require,module,exports){
'use strict';

if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerShader('red-shader', {
    vertexShader: ['varying vec2 vUV;', 'void main(void) {', '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);', '  vUV = uv;', '}'].join('\n'),

    fragmentShader: ['void main(void) {', '    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); //(Red, Green, Blue, Alpha)', '}'].join('\n')

});

AFRAME.registerShader('gradation-shader', {
    vertexShader: require('./shader/default.vert')(),
    fragmentShader: require('./shader/gradation.frag')()
});

AFRAME.registerShader('time-gradation-shader', {
    schema: {
        time: { type: 'float', default: 0.0, is: 'uniform' }
    },
    vertexShader: require('./shader/default.vert')(),
    fragmentShader: require('./shader/time-gradation.frag')()
});

AFRAME.registerShader('time-transform-shader', {
    schema: {
        time: { type: 'float', default: 0.0, is: 'uniform' }
    },
    vertexShader: require('./shader/time-transform.vert')(),
    fragmentShader: require('./shader/time-gradation.frag')()
});

},{"./shader/default.vert":3,"./shader/gradation.frag":4,"./shader/time-gradation.frag":5,"./shader/time-transform.vert":6}]},{},[1]);
