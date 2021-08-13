/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/master.js":
/*!*******************************!*\
  !*** ./src/classes/master.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Master = /*#__PURE__*/function () {\n  function Master(player) {\n    _classCallCheck(this, Master);\n\n    this.trackPlaying = false;\n    this.player = player;\n  }\n\n  _createClass(Master, [{\n    key: \"stop\",\n    value: function stop() {\n      this.trackPlaying = false;\n      console.log(\"STOP\");\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.trackPlaying = true;\n      console.log(\"awef;awefhui\");\n      console.log(this.player);\n      this.player.playInstruments.bind(this.player)();\n    }\n  }]);\n\n  return Master;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Master);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9tYXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFNQTtBQUNGLGtCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLFNBQUtDLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7OztXQUVELGdCQUFNO0FBQ0YsV0FBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0g7OztXQUVELGlCQUFPO0FBQ0gsV0FBS0YsWUFBTCxHQUFvQixJQUFwQjtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtILE1BQWpCO0FBQ0EsV0FBS0EsTUFBTCxDQUFZSSxlQUFaLENBQTRCQyxJQUE1QixDQUFpQyxLQUFLTCxNQUF0QztBQUNIOzs7Ozs7QUFNTCwrREFBZUQsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL0RvdWdoTG9vcHMvLi9zcmMvY2xhc3Nlcy9tYXN0ZXIuanM/OWEzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNYXN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgICAgICB0aGlzLnRyYWNrUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB9XG5cbiAgICBzdG9wKCl7XG4gICAgICAgIHRoaXMudHJhY2tQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1RPUFwiKTtcbiAgICB9XG5cbiAgICBzdGFydCgpe1xuICAgICAgICB0aGlzLnRyYWNrUGxheWluZyA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXdlZjthd2VmaHVpXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllcik7XG4gICAgICAgIHRoaXMucGxheWVyLnBsYXlJbnN0cnVtZW50cy5iaW5kKHRoaXMucGxheWVyKSgpO1xuICAgIH1cblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyOyJdLCJuYW1lcyI6WyJNYXN0ZXIiLCJwbGF5ZXIiLCJ0cmFja1BsYXlpbmciLCJjb25zb2xlIiwibG9nIiwicGxheUluc3RydW1lbnRzIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/classes/master.js\n");

/***/ }),

/***/ "./src/classes/player.js":
/*!*******************************!*\
  !*** ./src/classes/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player(instrumentSeqs) {\n    _classCallCheck(this, Player);\n\n    this.instrumentSeqs = instrumentSeqs;\n  }\n\n  _createClass(Player, [{\n    key: \"playInstruments\",\n    value: function playInstruments() {\n      var i = 0;\n      var interval = 400;\n      var lastTime = Date.now();\n      console.log(\"hi\");\n\n      while (this.trackPlaying) {\n        var currentTime = Date.now();\n\n        if (lastTime + interval < currentTime) {\n          this.playStep(i);\n\n          if (i < 3) {\n            i++;\n          } else {\n            i = 0;\n          }\n\n          lastTime += interval;\n        }\n      }\n    }\n  }, {\n    key: \"playStep\",\n    value: function playStep(i) {\n      console.log(this.instrumentSeqs);\n\n      for (var _i = 0; _i < this.instrumentSeqs.length; _i++) {\n        console.log(this.instrumentSeqs[_i]);\n      } // let clapBoxes = clapsUl.children;\n      // if (clapBoxes[i].checked) {\n      //     var volume = document.getElementById('vol');\n      //     var audio = document.getElementById('clap');\n      //     audio.currentTime = 0;\n      //     // console.log(0.01 * volume.value);\n      //     audio.volume = 0.01 * volume.value;\n      //     audio.play();\n      // }\n\n    }\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFNQTtBQUVGLGtCQUFZQyxjQUFaLEVBQTJCO0FBQUE7O0FBQ3ZCLFNBQUtBLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0g7Ozs7V0FFRCwyQkFBa0I7QUFDZCxVQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLFVBQUlDLFFBQVEsR0FBRyxHQUFmO0FBQ0EsVUFBSUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsRUFBZjtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaOztBQUNBLGFBQU8sS0FBS0MsWUFBWixFQUEwQjtBQUN0QixZQUFJQyxXQUFXLEdBQUdMLElBQUksQ0FBQ0MsR0FBTCxFQUFsQjs7QUFDQSxZQUFJRixRQUFRLEdBQUdELFFBQVgsR0FBc0JPLFdBQTFCLEVBQXVDO0FBQ25DLGVBQUtDLFFBQUwsQ0FBY1QsQ0FBZDs7QUFDQSxjQUFJQSxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1BBLFlBQUFBLENBQUM7QUFDSixXQUZELE1BRU87QUFDSEEsWUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFDSDs7QUFDREUsVUFBQUEsUUFBUSxJQUFJRCxRQUFaO0FBQ0g7QUFDSjtBQUNKOzs7V0FFRCxrQkFBU0QsQ0FBVCxFQUFZO0FBQ1JLLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtQLGNBQWpCOztBQUNBLFdBQUssSUFBSUMsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxLQUFLRCxjQUFMLENBQW9CVyxNQUF4QyxFQUFnRFYsRUFBQyxFQUFqRCxFQUFxRDtBQUNqREssUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1AsY0FBTCxDQUFvQkMsRUFBcEIsQ0FBWjtBQUNILE9BSk8sQ0FNUjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0g7Ozs7OztBQUtMLCtEQUFlRixNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRG91Z2hMb29wcy8uL3NyYy9jbGFzc2VzL3BsYXllci5qcz82NTcwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnN0cnVtZW50U2Vxcyl7XG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudFNlcXMgPSBpbnN0cnVtZW50U2Vxc1xuICAgIH1cblxuICAgIHBsYXlJbnN0cnVtZW50cygpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSA0MDA7XG4gICAgICAgIGxldCBsYXN0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGlcIik7XG4gICAgICAgIHdoaWxlICh0aGlzLnRyYWNrUGxheWluZykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChsYXN0VGltZSArIGludGVydmFsIDwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlTdGVwKGkpO1xuICAgICAgICAgICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhc3RUaW1lICs9IGludGVydmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheVN0ZXAoaSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluc3RydW1lbnRTZXFzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmluc3RydW1lbnRTZXFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluc3RydW1lbnRTZXFzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBjbGFwQm94ZXMgPSBjbGFwc1VsLmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIGlmIChjbGFwQm94ZXNbaV0uY2hlY2tlZCkge1xuICAgICAgICAvLyAgICAgdmFyIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2wnKTtcbiAgICAgICAgLy8gICAgIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGFwJyk7XG4gICAgICAgIC8vICAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygwLjAxICogdm9sdW1lLnZhbHVlKTtcbiAgICAgICAgLy8gICAgIGF1ZGlvLnZvbHVtZSA9IDAuMDEgKiB2b2x1bWUudmFsdWU7XG4gICAgICAgIC8vICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7Il0sIm5hbWVzIjpbIlBsYXllciIsImluc3RydW1lbnRTZXFzIiwiaSIsImludGVydmFsIiwibGFzdFRpbWUiLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyIsInRyYWNrUGxheWluZyIsImN1cnJlbnRUaW1lIiwicGxheVN0ZXAiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/classes/player.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_master_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/master.js */ \"./src/classes/master.js\");\n/* harmony import */ var _classes_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/player.js */ \"./src/classes/player.js\");\nvar subsDivsDisp = document.getElementById('dispSubDivs');\nvar subsDivs = document.getElementById('numSubDivs'); // disp1.innerHTML = subsDivs;\n// function play() {\n//     var volume = document.getElementById('vol');\n//     var audio = document.getElementById('kick');\n//     audio.currentTime = 0;\n//     console.log(0.01 * volume.value);\n//     audio.volume = 0.01*volume.value;\n//     audio.play();\n//     console.log(\"CLICKED\");\n//     ul = document.getElementById('kicks');\n//     li = document.createElement(\"li\");\n//     li.innerHTML = \"Kick\";\n//     li.classList.add(\"blue\");\n//     ul.appendChild(li);\n// }\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var instrumentSeqs = document.querySelectorAll('#instrumentSeqs > *');\n  var player = new _classes_player_js__WEBPACK_IMPORTED_MODULE_1__.default(instrumentSeqs);\n  var master = new _classes_master_js__WEBPACK_IMPORTED_MODULE_0__.default(player);\n  var stopButton = document.getElementById('stopButton');\n  var startButton = document.getElementById('startButton');\n  console.log(instrumentSeqs);\n  stopButton.addEventListener('click', master.stop.bind(master));\n  startButton.addEventListener('click', master.start.bind(master));\n  log1(master);\n});\n\nfunction log1(m) {\n  setInterval(function () {}, 500);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7QUFDQSxJQUFJQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFmLEVBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQUQsUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxNQUFJQyxjQUFjLEdBQUdOLFFBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIscUJBQTFCLENBQXJCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLElBQUlKLHVEQUFKLENBQVdFLGNBQVgsQ0FBYjtBQUNBLE1BQUlHLE1BQU0sR0FBRyxJQUFJTix1REFBSixDQUFXSyxNQUFYLENBQWI7QUFDQSxNQUFJRSxVQUFVLEdBQUdWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLE1BQUlVLFdBQVcsR0FBR1gsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWxCO0FBQ0FXLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxjQUFaO0FBQ0FJLEVBQUFBLFVBQVUsQ0FBQ0wsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNJLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZQyxJQUFaLENBQWlCTixNQUFqQixDQUFyQztBQUNBRSxFQUFBQSxXQUFXLENBQUNOLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDSSxNQUFNLENBQUNPLEtBQVAsQ0FBYUQsSUFBYixDQUFrQk4sTUFBbEIsQ0FBdEM7QUFDQVEsRUFBQUEsSUFBSSxDQUFDUixNQUFELENBQUo7QUFDSCxDQVZEOztBQWNBLFNBQVNRLElBQVQsQ0FBY0MsQ0FBZCxFQUFnQjtBQUNaQyxFQUFBQSxXQUFXLENBQUMsWUFBVSxDQUVyQixDQUZVLEVBRVQsR0FGUyxDQUFYO0FBR0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Eb3VnaExvb3BzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHN1YnNEaXZzRGlzcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwU3ViRGl2cycpO1xudmFyIHN1YnNEaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bVN1YkRpdnMnKTtcbi8vIGRpc3AxLmlubmVySFRNTCA9IHN1YnNEaXZzO1xuXG4vLyBmdW5jdGlvbiBwbGF5KCkge1xuXG4vLyAgICAgdmFyIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2wnKTtcbi8vICAgICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2ljaycpO1xuLy8gICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbi8vICAgICBjb25zb2xlLmxvZygwLjAxICogdm9sdW1lLnZhbHVlKTtcbi8vICAgICBhdWRpby52b2x1bWUgPSAwLjAxKnZvbHVtZS52YWx1ZTtcbi8vICAgICBhdWRpby5wbGF5KCk7XG5cbi8vICAgICBjb25zb2xlLmxvZyhcIkNMSUNLRURcIik7XG4vLyAgICAgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2lja3MnKTtcbi8vICAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbi8vICAgICBsaS5pbm5lckhUTUwgPSBcIktpY2tcIjtcbi8vICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYmx1ZVwiKTtcbi8vICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4vLyB9XG5cbmltcG9ydCBNYXN0ZXIgZnJvbSAnLi9jbGFzc2VzL21hc3Rlci5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vY2xhc3Nlcy9wbGF5ZXIuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGluc3RydW1lbnRTZXFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2luc3RydW1lbnRTZXFzID4gKicpO1xuICAgIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKGluc3RydW1lbnRTZXFzKTtcbiAgICBsZXQgbWFzdGVyID0gbmV3IE1hc3RlcihwbGF5ZXIpO1xuICAgIGxldCBzdG9wQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3BCdXR0b24nKTtcbiAgICBsZXQgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKTtcbiAgICBjb25zb2xlLmxvZyhpbnN0cnVtZW50U2Vxcyk7XG4gICAgc3RvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1hc3Rlci5zdG9wLmJpbmQobWFzdGVyKSk7XG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYXN0ZXIuc3RhcnQuYmluZChtYXN0ZXIpKTtcbiAgICBsb2cxKG1hc3Rlcik7XG59KTtcblxuXG5cbmZ1bmN0aW9uIGxvZzEobSl7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcblxuICAgIH0sNTAwKTtcbn1cbiJdLCJuYW1lcyI6WyJzdWJzRGl2c0Rpc3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3Vic0RpdnMiLCJNYXN0ZXIiLCJQbGF5ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5zdHJ1bWVudFNlcXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGxheWVyIiwibWFzdGVyIiwic3RvcEJ1dHRvbiIsInN0YXJ0QnV0dG9uIiwiY29uc29sZSIsImxvZyIsInN0b3AiLCJiaW5kIiwic3RhcnQiLCJsb2cxIiwibSIsInNldEludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Eb3VnaExvb3BzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;