module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountDownTimer = function (_Component) {
    _inherits(CountDownTimer, _Component);

    function CountDownTimer(props) {
        _classCallCheck(this, CountDownTimer);

        var _this = _possibleConstructorReturn(this, (CountDownTimer.__proto__ || Object.getPrototypeOf(CountDownTimer)).call(this, props));

        _this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        return _this;
    }

    _createClass(CountDownTimer, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getTimeUntil(this.props.deadline);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setInterval(function () {
                return _this2.getTimeUntil(_this2.props.deadline);
            }, 1000);
        }
    }, {
        key: 'getTimeUntil',
        value: function getTimeUntil(deadline) {
            var time = Date.parse(deadline) - Date.parse(new Date());
            var seconds = Math.floor(time / 1000 % 60);
            var minutes = Math.floor(time / 1000 / 60 % 60);
            var hours = Math.floor(time / (1000 * 60 * 60) % 24);
            var days = Math.floor(time / (1000 * 60 * 60 * 24));

            console.log(days, ',', hours, ',', minutes, ',', seconds);
            this.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'days' },
                            this.state.days
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'smalltext' },
                            'Days'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'hours' },
                            this.state.hours
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'smalltext' },
                            'Hours'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'minutes' },
                            this.state.minutes
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'smalltext' },
                            'Minutes'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'seconds' },
                            this.state.seconds
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'smalltext' },
                            'Seconds'
                        )
                    )
                )
            );
        }
    }]);

    return CountDownTimer;
}(_react.Component);

exports.default = CountDownTimer;

/***/ })
/******/ ]);