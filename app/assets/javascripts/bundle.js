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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!******************************************************!*\
  !*** ./app/assets/frontend/components/TweetList.jsx ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _Tweet = __webpack_require__(/*! ./Tweet */ 2);\n\nvar _Tweet2 = _interopRequireDefault(_Tweet);\n\nvar TweetList = (function (_React$Component) {\n    _inherits(TweetList, _React$Component);\n\n    function TweetList() {\n        _classCallCheck(this, TweetList);\n\n        _get(Object.getPrototypeOf(TweetList.prototype), \"constructor\", this).apply(this, arguments);\n    }\n\n    _createClass(TweetList, [{\n        key: \"render\",\n        value: function render() {\n            var tweets = this.props.tweets.map(function (tweet) {\n                return React.createElement(_Tweet2[\"default\"], _extends({ key: tweet.id }, tweet));\n            });\n            return React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                    \"ul\",\n                    { className: \"collection\" },\n                    tweets\n                )\n            );\n        }\n    }]);\n\n    return TweetList;\n})(React.Component);\n\nexports[\"default\"] = TweetList;\nmodule.exports = exports[\"default\"];//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9hc3NldHMvZnJvbnRlbmQvY29tcG9uZW50cy9Ud2VldExpc3QuanN4PzI0MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWV0IGZyb20gXCIuL1R3ZWV0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZXRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB0d2VldHMgPSB0aGlzLnByb3BzLnR3ZWV0cy5tYXAodHdlZXQgPT4gPFR3ZWV0IGtleT17dHdlZXQuaWR9IHsuLi50d2VldH0gLz4pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICB7dHdlZXRzfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hc3NldHMvZnJvbnRlbmQvY29tcG9uZW50cy9Ud2VldExpc3QuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTs7O0FBQUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBVkE7QUFBQTtBQUNBO0FBREE7QSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!*****************************************************!*\
  !*** ./app/assets/frontend/components/Tweetbox.jsx ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TweetBox = (function (_React$Component) {\n    _inherits(TweetBox, _React$Component);\n\n    function TweetBox() {\n        _classCallCheck(this, TweetBox);\n\n        _get(Object.getPrototypeOf(TweetBox.prototype), \"constructor\", this).apply(this, arguments);\n    }\n\n    _createClass(TweetBox, [{\n        key: \"sendTweet\",\n        value: function sendTweet(event) {\n            event.preventDefault();\n            this.props.sendTweet(this.refs.tweetTextArea.value);\n            this.refs.tweetTextArea.value = '';\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            return React.createElement(\n                \"div\",\n                { className: \"row\" },\n                React.createElement(\n                    \"form\",\n                    { onSubmit: this.sendTweet.bind(this) },\n                    React.createElement(\n                        \"div\",\n                        { className: \"input-field\" },\n                        React.createElement(\"textarea\", { ref: \"tweetTextArea\", className: \"materialize-textarea\" }),\n                        React.createElement(\n                            \"label\",\n                            null,\n                            \"What's happening?\"\n                        ),\n                        React.createElement(\n                            \"button\",\n                            { type: \"submit\", className: \"btn right\" },\n                            \"Tweet\"\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return TweetBox;\n})(React.Component);\n\nexports[\"default\"] = TweetBox;\nmodule.exports = exports[\"default\"];//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9hc3NldHMvZnJvbnRlbmQvY29tcG9uZW50cy9Ud2VldGJveC5qc3g/NjBjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VldEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzZW5kVHdlZXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zZW5kVHdlZXQodGhpcy5yZWZzLnR3ZWV0VGV4dEFyZWEudmFsdWUpO1xuICAgICAgICB0aGlzLnJlZnMudHdlZXRUZXh0QXJlYS52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zZW5kVHdlZXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByZWY9XCJ0d2VldFRleHRBcmVhXCIgY2xhc3NOYW1lPVwibWF0ZXJpYWxpemUtdGV4dGFyZWFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldoYXQncyBoYXBwZW5pbmc/PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiICBjbGFzc05hbWU9XCJidG4gcmlnaHRcIj5Ud2VldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXRib3guanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBOzs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFBQTtBQUNBOztBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQXBCQTtBQUFBO0FBQ0E7QUFEQTtBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!**************************************************!*\
  !*** ./app/assets/frontend/components/Tweet.jsx ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Tweet = (function (_React$Component) {\n    _inherits(Tweet, _React$Component);\n\n    function Tweet() {\n        _classCallCheck(this, Tweet);\n\n        _get(Object.getPrototypeOf(Tweet.prototype), \"constructor\", this).apply(this, arguments);\n    }\n\n    _createClass(Tweet, [{\n        key: \"render\",\n        value: function render() {\n            return React.createElement(\n                \"li\",\n                { className: \"collection-item avatar\" },\n                React.createElement(\n                    \"i\",\n                    { className: \"material-icons circle\" },\n                    \"person_pin\"\n                ),\n                React.createElement(\n                    \"span\",\n                    { className: \"title\" },\n                    this.props.name\n                ),\n                React.createElement(\n                    \"p\",\n                    null,\n                    this.props.body\n                )\n            );\n        }\n    }]);\n\n    return Tweet;\n})(React.Component);\n\nexports[\"default\"] = Tweet;\nmodule.exports = exports[\"default\"];//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9hc3NldHMvZnJvbnRlbmQvY29tcG9uZW50cy9Ud2VldC5qc3g/YzY4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjaXJjbGVcIj5wZXJzb25fcGluPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuYm9keX08L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hc3NldHMvZnJvbnRlbmQvY29tcG9uZW50cy9Ud2VldC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7OztBQUFBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTs7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7O0FBVEE7QUFBQTtBQUNBO0FBREE7QSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _componentsTweetbox = __webpack_require__(/*! ./components/Tweetbox */ 1);\n\nvar _componentsTweetbox2 = _interopRequireDefault(_componentsTweetbox);\n\nvar _componentsTweetList = __webpack_require__(/*! ./components/TweetList */ 0);\n\nvar _componentsTweetList2 = _interopRequireDefault(_componentsTweetList);\n\nvar Main = (function (_React$Component) {\n    _inherits(Main, _React$Component);\n\n    function Main(props) {\n        _classCallCheck(this, Main);\n\n        _get(Object.getPrototypeOf(Main.prototype), \"constructor\", this).call(this, props);\n        this.state = { tweetList: [] };\n    }\n\n    _createClass(Main, [{\n        key: \"addTweet\",\n        value: function addTweet(tweetToAdd) {\n            var newTweetList = this.state.tweetList;\n            newTweetList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });\n\n            this.setState({ tweetList: newTweetList });\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            return React.createElement(\n                \"div\",\n                { className: \"container\" },\n                React.createElement(_componentsTweetbox2[\"default\"], { sendTweet: this.addTweet.bind(this) }),\n                React.createElement(_componentsTweetList2[\"default\"], { tweets: this.state.tweetList })\n            );\n        }\n    }]);\n\n    return Main;\n})(React.Component);\n\nvar documentReady = function documentReady() {\n    var reactNode = document.getElementById('react');\n    if (reactNode) {\n        ReactDOM.render(React.createElement(Main, null), reactNode);\n    }\n};\n\n$(documentReady());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9hc3NldHMvZnJvbnRlbmQvbWFpbi5qc3g/ZWJjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZXRCb3ggZnJvbSBcIi4vY29tcG9uZW50cy9Ud2VldGJveFwiXG5pbXBvcnQgVHdlZXRMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvVHdlZXRMaXN0XCJcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge3R3ZWV0TGlzdDogW119O1xuICAgIH1cblxuICAgIGFkZFR3ZWV0KHR3ZWV0VG9BZGQpIHtcbiAgICAgICAgbGV0IG5ld1R3ZWV0TGlzdCA9IHRoaXMuc3RhdGUudHdlZXRMaXN0O1xuICAgICAgICBuZXdUd2VldExpc3QudW5zaGlmdCh7IGlkOiBEYXRlLm5vdygpLCBuYW1lOiAnR3Vlc3QnLCBib2R5OiB0d2VldFRvQWRkIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0d2VldExpc3Q6IG5ld1R3ZWV0TGlzdH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgIDxUd2VldEJveCBzZW5kVHdlZXQ9e3RoaXMuYWRkVHdlZXQuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgPFR3ZWV0TGlzdCB0d2VldHM9e3RoaXMuc3RhdGUudHdlZXRMaXN0fSAvPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxubGV0IGRvY3VtZW50UmVhZHkgPSAoKSA9PiB7XG4gICAgbGV0IHJlYWN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdCcpO1xuICAgIGlmIChyZWFjdE5vZGUpIHtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICAgICAgPE1haW4gLz4sXG4gICAgICAgICAgICByZWFjdE5vZGVcbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG4kKGRvY3VtZW50UmVhZHkoKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2Fzc2V0cy9mcm9udGVuZC9tYWluLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBcEJBO0FBQUE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);