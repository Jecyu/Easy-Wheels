(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["easyWheels"] = factory();
	else
		root["easyWheels"] = factory();
})(window, function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./packages/easyTree/src/styles/index.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./packages/easyTree/src/styles/index.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background: paleturquoise;\n}\n/* li {\n  list-style: none;\n} */", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./packages/easyVirtualTree/src/styles/index.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./packages/easyVirtualTree/src/styles/index.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n}\nli {\n  list-style: none;\n}\n.easy-virtual-tree {\n  overflow: auto;\n  position: relative;\n}\n.easy-virtual-tree-phantom {\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n.easy-virtual-tree-content {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n/* .easy-virtual-tree-node {\n} */\n.easy-virtual-tree-node-icon {\n  display: inline-block;\n  padding: 6px;\n  font-size: 12px;\n}\n.easy-virtual-tree-node-icon.is-leaf {\n  color: transparent;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./packages/_utils/base.js":
/*!*********************************!*\
  !*** ./packages/_utils/base.js ***!
  \*********************************/
/*! exports provided: createDOMFromString, dataMaker, buildTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDOMFromString", function() { return createDOMFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataMaker", function() { return dataMaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTree", function() { return buildTree; });
/*
 * @Description: 
 * @Author: Jecyu
 * @Date: 2020-05-27 15:07:58
 * @LastEditTime: 2020-06-06 12:10:18
 * @LastEditors: Jecyu
 */ 
const createDOMFromString = domString => {
  const div = document.createElement('div');
  div.innerHTML = domString;
  return div.childNodes[0];
};

const dataMaker = function(count, nodeKey = "id", parentKey = "pId") {
  let nodes = [],
    min = 10,
    max = 90,
    level = 0,
    curLevel = [],
    prevLevel = [],
    levelCount,
    i = 0,
    j,
    k,
    l,
    m;
  while (i < count) {
    if (level == 0) {
      levelCount = Math.round(Math.random() * max) + min;
      for (j = 0; j < levelCount && i < count; j++, i++) {
        const n = { [nodeKey]: i, [parentKey]: -1, name: "Big-" + i };
        nodes.push(n);
        curLevel.push(n);
      }
    } else {
      for (l = 0, m = prevLevel.length; l < m && i < count; l++) {
        levelCount = Math.round(Math.random() * max) + min;
        for (j = 0; j < levelCount && i < count; j++, i++) {
          const n = { [nodeKey]: i, [parentKey]: prevLevel[l][nodeKey], name: "Big-" + i };
          nodes.push(n);
          curLevel.push(n);
        }
      }
    }
    prevLevel = curLevel;
    curLevel = [];
    level++;
  }
  return nodes;
};

const buildTree = (
  tree,
  childrenKey = "children",
  key = "nodeKey",
  parentKey = "parent"
) => {
  const n = []; // 添加多一个数组，记录父级
  const treeMap = {};
  // 删除 所有 children，传入的值带有 children，以防止孩子重复
  tree.forEach((node) => {
    node[childrenKey] && delete node[childrenKey];
  });

  tree.forEach((node) => (treeMap[node[key]] = node));
  tree.forEach((node) => {
    const parent = treeMap[node[parentKey]];
    // 如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到它对应的父级中
    if (parent) {
      const children = parent[childrenKey] || []; // parent.children ，避免相同值
      children.push(node);
      parent[childrenKey] = children;
    } else {
      // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 n 结果集中，作为顶级
      n.push(node);
    }
  });
  return n;
};

/***/ }),

/***/ "./packages/easyTree/src/index.js":
/*!****************************************!*\
  !*** ./packages/easyTree/src/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_Tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Tree.js */ "./packages/easyTree/src/views/Tree.js");
/*
 * @Description: 
 * @Author: Jecyu
 * @Date: 2020-06-05 16:02:12
 * @LastEditTime: 2020-06-06 14:30:14
 * @LastEditors: Jecyu
 */ 

/* harmony default export */ __webpack_exports__["default"] = (_views_Tree_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./packages/easyTree/src/model/NodeModel.js":
/*!**************************************************!*\
  !*** ./packages/easyTree/src/model/NodeModel.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NodeModel; });
/*
 * @Description: 
 * @Author: Jecyu
 * @Date: 2020-05-27 17:01:38
 * @LastEditTime: 2020-05-28 22:16:34
 * @LastEditors: Jecyu
*/ 
let nodeIdSeed = 0;
class NodeModel {
  constructor(options, parent) { 
    // data 数据
    this.id = nodeIdSeed++;
    this.name = null; 
    this.expand = false;
    this.visible = true; 
    
    this.parent = parent; // nodeModel 类型
    this.children = [] // children data，存放 nodeModel 类型

    // 添加使用者的数据
    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }
  }
  addChild(value) {
    if (value instanceof NodeModel) {
      this.children.push(value);
    }
  }

  hasChild() {
    return this.children.length > 0;
  }

  getChildNodes() {
    return this.children;
  }

  setChildNodesShow(nodeModel) {
    if (nodeModel.hasChild()) {
      const children = nodeModel.getChildNodes();
      children.forEach(item => {
        if (!item.visible) {
          item.visible = true;
        }
        this.setChildNodesShow(item);
      });
    }
  }

  setChildNodesHide(nodeModel) {
    if (nodeModel.hasChild()) {
      const children = nodeModel.getChildNodes();
      children.forEach(item => {
        if (item.visible) {
          item.visible = false;
        }
        this.setChildNodesShow(item);
      });
    }
  }
}


/***/ }),

/***/ "./packages/easyTree/src/model/TreelModel.js":
/*!***************************************************!*\
  !*** ./packages/easyTree/src/model/TreelModel.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TreeModel; });
/* harmony import */ var _NodeModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeModel */ "./packages/easyTree/src/model/NodeModel.js");
/*
 * @Description: 树的根
 * @Author: Jecyu
 * @Date: 2020-05-27 17:01:31
 * @LastEditTime: 2020-05-29 21:57:58
 * @LastEditors: Jecyu
 */


class TreeModel {
  // 每个节点都 new 一个实例对象，可能对性能有影响，但是解耦
  /**
   *
   */
  constructor(data) {
    this._roots = []; // 多个根
    this.nodeModelMap = {}
    this.initTree(data);
  }

  initTree(data) {
    // ✅动态创建
    // this._root = new NodeModel({ name: "parent 1" }, null);
    // const parent1_1 = new NodeModel({ name: "parent 1-1" }, this._root);
    // const parent1_2 = new NodeModel({ name: "parent 1-2" }, this._root);
    // this._root.addChild(parent1_1);
    // this._root.addChild(parent1_2);
    // const parent1_1_1 = new NodeModel({ name: "parent 1-1-1" }, parent1_1);
    // parent1_1.addChild(parent1_1_1);
    // const parent1_1_2 = new NodeModel({ name: "parent 1-1-2" }, parent1_1);
    // parent1_1.addChild(parent1_1_2);
    this.convertDataToTree(data, this._roots);
  }

  /**
   * 针对多个 root，遍历
   */
  convertDataToTree(data, parent) {
    data.forEach(item => {
      const node = new _NodeModel__WEBPACK_IMPORTED_MODULE_0__["default"]({ name: item.name }, null);
      this.nodeModelMap[node.id] = node;
      parent.push(node);
      if (item.children && item.children.length) {
        this.convertDataToTree(item.children, node.children);
      }
    })
  }

  /** 
   * 根据 id 设置节点的显示
  */
 setChildNodeVisible(id) {
    // 根据 id 找到 nodeModel
    const targetNodeModel = this.findNodeModel(id);
    if (!targetNodeModel) return;
    // 设置 visible 值
    if(!targetNodeModel.visible) {
      targetNodeModel.setChildNodesShow(targetNodeModel);
    } else {
      targetNodeModel.setChildNodesHide(targetNodeModel);

    }
  }

  findNodeModel(id) {
    return this.nodeModelMap[id];
  }

  getTreeRoot() {
    return this._roots;
  }
}


/***/ }),

/***/ "./packages/easyTree/src/styles/index.css":
/*!************************************************!*\
  !*** ./packages/easyTree/src/styles/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./packages/easyTree/src/styles/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./packages/easyTree/src/views/Tree.js":
/*!*********************************************!*\
  !*** ./packages/easyTree/src/views/Tree.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EasyTree; });
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./packages/easyTree/src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_TreelModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/TreelModel */ "./packages/easyTree/src/model/TreelModel.js");
/* harmony import */ var _utils_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/_utils/base */ "./packages/_utils/base.js");
/*
 * @Description:mvc 架构
 * 原型：先渲染树，展开、收缩，后续 checkbox，增删改查、上下移动、拖拽，把数据与视图分离开
 * 思路：
 * 1. view：所有的模版都实现创建，树的容器、树节点
 * <ul class="tiny-tree">
 *  <li class="tiny-tree-node">
 *    <div class="tiny-tree-node-content"></div>
 *    <ul class="tiny-tree-node-children"></ul>  <!-- 孩子节点-->
 *  </li>
 * </ul>
 * initState model 存储数据
 * render view +（包括 bindEvent）
 * 外部 controller 触发事件
 * @Author: Jecyu
 * @Date: 2020-05-26 15:11:24
 * @LastEditTime: 2020-06-06 14:33:59
 * @LastEditors: Jecyu
 */

// 引入样式

// 引入状态管理

// 引入工具类

const prefix = "easy-tree";

class EasyTree {
  constructor(prop) {
    // 传入配置，初始化
    this.defaultOpt = {
      baseNode: null,
      paddingLeft: 16,
      data: [],
    };
    this.opts = Object.assign(this.defaultOpt, prop);
    this.init(); // 初始化
    this.prefix = "easy";
  }
  init() {
    this.initState().render();
  }

  initState() {
    // 实例化 TreeStore，存储数据
    this.treeModel = new _model_TreelModel__WEBPACK_IMPORTED_MODULE_1__["default"](this.opts.data);
    this.roots = this.treeModel.getTreeRoot();
    return this;
  }

  render() {
    // 渲染树
    // <ul class="easy-tree">
    // new TreeNode() 渲染
    // </ul>
    this.treeWrapperDom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(`<ul class="${prefix}"></ul>`);
    // const treeNode = new node(this.root).render();
    this.roots.forEach((nodeModel) => {
      // 遍历渲染
      const treeNode = this.renderTreeNode(nodeModel);
      this.treeWrapperDom.appendChild(treeNode); // 添加进根节点
    });
    this.opts.baseNode.appendChild(this.treeWrapperDom); // 渲染完成再添加进 web 浏览器，添加到外部容器

    // 给 ul 容器添加事件，给每个节点分配 id，然后点击事件的时候，通过 id 寻找对应的 nodeData，进行属性值的更改，如 expand、visiable等。
    this.bindEvent();
    return this;
  }

  /**
   * 渲染节点 name 和 icon
   */
  renderSeletor(nodeModel) {
    const { name, expand, id } = nodeModel;
    const title = `<span class="${prefix}-node-title">${name}</span>`;
    const titleDom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(title);
    const div = `<div class="${prefix}-node-content"></div>`;
    const divDom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(div);
    let icon = null;
    // 文件夹和文件显示不同的 icon
    if (nodeModel.hasChild()) {
      // 文件夹还需要区分展开和收缩
      if (expand) {
        divDom.setAttribute("expand", "true");
        icon = `<span class="${prefix}-node-icon iconfont cl-icon-unfold"></span>`;
      } else {
        icon = `<span class="${prefix}-node-icon iconfont cl-icon-fold"></span>`;
        divDom.setAttribute("expand", "false");
      }
    } else {
      // 文件
      icon = `<span class="${prefix}-node-icon"></span>`;
    }
    const iconDom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(icon);
    // iconDom.id = id; // 记录 id属性
    iconDom.setAttribute("action", "expand");
    divDom.appendChild(iconDom);
    divDom.appendChild(titleDom);
    return divDom;
  }

  renderTreeNode(nodeModel) {
    // 递归渲染
    // 调用 TreeNode.render() 获得渲染的值
    // <li>
    //   <div class="easy-tree-node-content"></div>
    //   {renderChildren}
    // </li>
    const li = `<li class="${prefix}-node"></li>`; // 节点模版
    const liDom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(li);
    const nodeContentDom = this.renderSeletor(nodeModel);
    liDom.appendChild(nodeContentDom);

    if (nodeModel.hasChild()) {
      // 递归孩子
      const nodeModels = nodeModel.getChildNodes();
      liDom.appendChild(this.renderChildren(nodeModels, nodeModel));
    }
    // const { visible } = nodeModel;
    // if (!visible) {
    //   // 是否可见，后续再状态同步处理，目前只是抽离 Model 层
    //   liDom.style.display = "none";
    // } else {
    //   liDom.style.display = "block";
    // }
    return liDom;
  }

  renderChildren(nodeModelList, nodeModel) {
    // renderTreeNode
    // <ul class="easy-tree-node-children">
    // {renderTreeNode}
    // {renderTreeNode}
    // </ul>
    const ul = `<ul class="${prefix}-node-children"></ul>`;
    const ulDom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(ul);
    // 添加 expand attribue 和 显示、隐藏
    const { expand } = nodeModel;
    if (expand) {
      ulDom.style.display = "block";
    } else {
      ulDom.style.display = "none";
    }
    nodeModelList.forEach((node) => {
      ulDom.appendChild(this.renderTreeNode(node)); // 递归渲染
    });
    return ulDom;
  }

  expandCollapseNode(evt) {
    // const id = evt.target.id;
    // TODO 后续同步改变 model 状态，然后由数据驱动更新视图，把记录状态从 attribute 抽离出来。
    // this.treeModel.setChildNodeVisible(id); // 同步子节点的 visible 状态

    // 直接改变 dom 的展开、收缩
    // 找到当前节点 dom 的父亲的兄弟元素，进行显示处理，这里不得不使用 attribute 同步记录模版状态的管理，这样在渲染的时候也需要记录 expand
    // attribue 到这样后续维护困难，目前没有用上 model 的状态驱动 view 的展开、收缩更新。
    const e = evt || window.event;
    const target = e.target || e.srcElement;
    if (
      target.getAttribute("action") &&
      target.getAttribute("action") === "expand"
    ) {
      const tagName = target.tagName.toLowerCase();
      let treeNodeCon = tagName === "div" ? target : target.parentNode;
      if (
        !treeNodeCon.classList.contains(`${prefix}-node-content`) ||
        !treeNodeCon.getAttribute("expand")
      )
        return;
      let childrenDom = treeNodeCon.nextElementSibling;
      if (treeNodeCon.getAttribute("expand") === "false") {
        treeNodeCon.firstChild.classList.remove("cl-icon-unfold");
        treeNodeCon.setAttribute("expand", "true");
        childrenDom.style.display = "block";
      } else {
        treeNodeCon.firstChild.classList.add("cl-icon-unfold");
        childrenDom.style.display = "none";
        treeNodeCon.setAttribute("expand", "false");
      }
    }
    // TODO 后续看看是否需要通过 model 改变来更新视图，但是要做好 virtual DOM 优化，当前的基本展开与收缩没必要，后续需要drop、等再考虑
  }

  bindEvent() {
    this.treeWrapperDom.addEventListener(
      "click",
      this.expandCollapseNode.bind(this),
      false
    );
    return this;
  }

  unbindEvent() {
    this.treeWrapperDom.removeEventListener(
      "click",
      this.expandCollapseNode.bind(this),
      false
    );
  }

  destroy() {
    // 移除树
    this.opts.baseNode.removeChild(this.treeWrapperDom);
    // 移除事件监听
    this.unbindEvent();
  }
}


/***/ }),

/***/ "./packages/easyVirtualTree/src/index.js":
/*!***********************************************!*\
  !*** ./packages/easyVirtualTree/src/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_Tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Tree.js */ "./packages/easyVirtualTree/src/views/Tree.js");
/*
 * @Description: 
 * @Author: Jecyu
 * @Date: 2020-06-05 16:02:12
 * @LastEditTime: 2020-06-06 14:58:32
 * @LastEditors: Jecyu
 */ 

/* harmony default export */ __webpack_exports__["default"] = (_views_Tree_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./packages/easyVirtualTree/src/model/NodeModel.js":
/*!*********************************************************!*\
  !*** ./packages/easyVirtualTree/src/model/NodeModel.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NodeModel; });
/*
 * @Description: 
 * @Author: Jecyu
 * @Date: 2020-05-27 17:01:38
 * @LastEditTime: 2020-06-09 16:09:02
 * @LastEditors: Jecyu
*/ 
let nodeIdSeed = 0;
class NodeModel {
  constructor(options, parent) { 
    // data 数据
    this.id = nodeIdSeed++;
    this.name = null; 
    this.expand = false;
    this.visible = true;
    this.level = 0; 
    
    this.parent = parent; // nodeModel 类型
    this.children = [] // children data，存放 nodeModel 类型

    // 添加使用者的数据
    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }
  }
  setLevel(level) {
    this.level = level;
  }
  addChild(value) {
    if (value instanceof NodeModel) {
      this.children.push(value);
    }
  }

  hasChild() {
    return this.children.length > 0;
  }

  getChildNodes() {
    return this.children;
  }

  setChildNodesShow(nodeModel) {
    if (nodeModel.hasChild()) {
      const children = nodeModel.getChildNodes();
      children.forEach(item => {
        if (!item.visible) {
          item.visible = true;
        }
        this.setChildNodesShow(item);
      });
    }
  }

  setChildNodesHide(nodeModel) {
    if (nodeModel.hasChild()) {
      const children = nodeModel.getChildNodes();
      children.forEach(item => {
        if (item.visible) {
          item.visible = false;
        }
        this.setChildNodesShow(item);
      });
    }
  }
}


/***/ }),

/***/ "./packages/easyVirtualTree/src/model/TreelModel.js":
/*!**********************************************************!*\
  !*** ./packages/easyVirtualTree/src/model/TreelModel.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TreeModel; });
/* harmony import */ var _NodeModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeModel */ "./packages/easyVirtualTree/src/model/NodeModel.js");
/*
 * @Description: 树的数据管理
 * @Author: Jecyu
 * @Date: 2020-05-27 17:01:31
 * @LastEditTime: 2020-06-06 17:03:14
 * @LastEditors: Jecyu
 */


class TreeModel {
  constructor(data) {
    this._root = {
      id: -1,
      children: [],
    }; // 多个根
    this.nodeModelMap = {};
    this.flatNodeList = [];
    this.initTree(data);
  }

  initTree(data) {
    // 动态创建
    this.convertDataToTree(data, this._root);
  }

  /**
   * 针对多个 root，遍历
   */
  convertDataToTree(data, parent, level = 0) {
    data.forEach((item) => {
      const node = new _NodeModel__WEBPACK_IMPORTED_MODULE_0__["default"]({ name: item.name }, parent);
      parent.children.push(node);
      node.setLevel(level);
      this.nodeModelMap[node.id] = node;
      this.flatNodeList.push(node);
      if (item.children && item.children.length) {
        this.convertDataToTree(item.children, node, level + 1);
      }
    });
  }

  /**
   * 根据 id 设置节点的显示
   */
  setChildNodeVisible(id) {
    // 根据 id 找到 nodeModel
    const targetNodeModel = this.findNodeModel(id);
    if (!targetNodeModel) return;
    // 设置 visible 值
    if (!targetNodeModel.visible) {
      targetNodeModel.setChildNodesShow(targetNodeModel);
    } else {
      targetNodeModel.setChildNodesHide(targetNodeModel);
    }
  }

  findNodeModel(id) {
    return this.nodeModelMap[id];
  }

  getTreeRoot() {
    return this._root.children;
  }

  getNodeList() {
    return this.flatNodeList;
  }
}


/***/ }),

/***/ "./packages/easyVirtualTree/src/styles/index.css":
/*!*******************************************************!*\
  !*** ./packages/easyVirtualTree/src/styles/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./packages/easyVirtualTree/src/styles/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./packages/easyVirtualTree/src/views/Tree.js":
/*!****************************************************!*\
  !*** ./packages/easyVirtualTree/src/views/Tree.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VirtualTree; });
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./packages/easyVirtualTree/src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_TreelModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/TreelModel */ "./packages/easyVirtualTree/src/model/TreelModel.js");
/* harmony import */ var _utils_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/_utils/base */ "./packages/_utils/base.js");
/*
 * @Description: 虚拟化列表树
 * 原型：先渲染树，展开、收缩
 * 思路：
 * 1. view：所有的模版都实现创建，树的容器、树节点。渲染为一个平级的列表，按照树结构的顺序渲染
 * 2. 每个节点 attribute 上存储 parentNodeKey，点击某个节点时，找到它孩子所有的节点的 parentNodeKye 对比是否相等，进行隐藏和显示。把所有的节点平铺。
 * <div class="virtual-tree">
 *   <div class=virtual-tree-phantom"></div>
 *   <ul class="virtual-tree-content">
 *     <li class="tiny-tree-node">
 *      <div class="tiny-tree-node-content"></div>
 *    </li>
 *     <li class="tiny-tree-node">
 *      <div class="tiny-tree-node-content"></div>
 *    </li>
 *   </ul>
 * </div>
 * @Author: Jecyu
 * @Date: 2020-05-26 15:11:24
 * @LastEditTime: 2020-06-09 16:47:17
 * @LastEditors: Jecyu
 */

// 引入样式

// 引入状态管理

// 引入工具类

const prefix = "easy-virtual-tree";
class VirtualTree {
  constructor(props) {
    // 传入配置，初始化
    this.refContainerNode = null; // 外部容器节点
    this.paddingLeft = 16; // 树节点左边距
    this.data = []; // 传入的树数组数据
    this.visible = { // 可见数据处理
      start: 0, // 起始切割点
      end: 0, // 终点切割点
      count: 0, // 可见的条数
      data: [], // 当前可见的数据
    };
    this.treeWrapperHeight = 200; // 容器高度
    this.treePhantomHeight = 0; // 幽灵高度，用于滚动，内容高度
    this.treeNodeItemHeight = 30; // 节点的高度
    // dom 引用
    this.domRefs = {
      treeWrapper: null,
      treePhantom: null,
      treeContent: null,
    };
    // 添加使用者的数据
    for (let name in props) {
      if (props.hasOwnProperty(name)) {
        this[name] = props[name];
      }
    }
    this.roots = [];
    this.nodeModelList = []; // 总数据
    this.init(); // 初始化
  }
  init() {
    this.initState()
      .render()
      .bindEvent();
  }

  initState() {
    // 实例化 TreeStore，存储数据
    this.treeModel = new _model_TreelModel__WEBPACK_IMPORTED_MODULE_1__["default"](this.data);
    this.roots = this.treeModel.getTreeRoot();
    this.nodeModelList = this.treeModel.getNodeList();
    return this;
  }

  /**
   * @description: 获得渲染的数据
   * @param {type}
   * @return:
   */
  getVisibleData(el, start = 0) {
    this.visible.start = start;
    this.visible.count = Math.ceil(el.clientHeight / this.treeNodeItemHeight); // 向上取整
    this.visible.end = this.visible.start + this.visible.count;
    const visibleData = this.nodeModelList.slice(
      this.visible.start,
      this.visible.end
    );

    return visibleData;
  }

  render() {
    // 渲染树
    this.domRefs.treeWrapper = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(
      `<div class="${prefix}" style="height: ${this.treeWrapperHeight}px"></div>`
    );
    this.domRefs.treePhantom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(
      `<div class="${prefix}-phantom"></div>`
    );
    this.domRefs.treeContent = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(
      `<ul class="${prefix}-content"></ul>`
    );
    this.domRefs.treePhantom.style.height =
      this.nodeModelList.length * this.treeNodeItemHeight + "px";
      

    this.domRefs.treeWrapper.appendChild(this.domRefs.treePhantom);
    this.domRefs.treeWrapper.appendChild(this.domRefs.treeContent);
    this.refContainerNode.appendChild(this.domRefs.treeWrapper); // 渲染完成再添加进 web 浏览器，添加到外部容器
    this.visible.data = this.getVisibleData(
      this.domRefs.treeWrapper,
      this.visible.start
    );
    this.renderNodeList();
    return this;
  }
  renderNodeList() {
    this.domRefs.treeContent.innerHTML = "";
    this.visible.data.forEach((nodeModel) => {
      // 遍历渲染
      const treeNode = this.renderTreeNode(nodeModel);
      this.domRefs.treeContent.appendChild(treeNode); // 添加进根节点
    });
  }

  /**
   * 渲染节点 name 和 icon
   */
  renderSeletor(nodeModel) {
    const { name, expand, id } = nodeModel;
    const title = `<span class="${prefix}-node-title">${name}</span>`;
    const titleDom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(title);
    const div = `<div class="${prefix}-node-content"></div>`;
    const divDom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(div);
    let icon = null;
    // 文件夹和文件显示不同的 icon
    if (nodeModel.hasChild()) {
      // 文件夹还需要区分展开和收缩
      if (expand) {
        divDom.setAttribute("expand", "true");
        icon = `<span class="${prefix}-node-icon iconfont cl-icon-unfold"></span>`;
      } else {
        icon = `<span class="${prefix}-node-icon iconfont cl-icon-fold"></span>`;
        divDom.setAttribute("expand", "false");
      }
    } else {
      // 文件
      icon = `<span class="${prefix}-node-icon iconfont cl-icon-unfold is-leaf"></span>`; // 这里 iconfont 也要设置，然后处理 color 为 transparent，避免 padding-left 不一致
    }
    const iconDom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(icon);
    iconDom.id = id; // 记录 id属性
    iconDom.setAttribute("action", "expand");
    divDom.appendChild(iconDom);
    divDom.appendChild(titleDom);
    return divDom;
  }

  /**
   * @description: 渲染节点
   * @param {type}
   * @return:
   */
  renderTreeNode(nodeModel) {
    const { level, expand, visible, parent, id } = nodeModel;
    const li = `<li class="${prefix}-node" style="padding-left: ${this
      .paddingLeft * level}px; height: ${this.treeNodeItemHeight}px"></li>`; // 节点模版
    const liDom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(li);
    liDom.setAttribute("pId", parent.id);
    liDom.setAttribute("id", id);
    const nodeContentDom = this.renderSeletor(nodeModel);
    liDom.appendChild(nodeContentDom);
    if (!visible) {
      // 是否可见
      liDom.style.display = "none"; 
    } else {
      liDom.style.display = "block";
    }
    if (nodeModel.hasChild()) {
      if (expand) {
        // showChildren
        nodeModel.setChildNodesShow(nodeModel);
      } else {
        // hideChildren
        nodeModel.setChildNodesHide(nodeModel);
      }
    }
    return liDom;
  }

  /**
   * @description: 展开、收缩节点
   * TODO后续由数据驱动更新视图，把展开、折叠视图状态从 attribute 抽离出来。
   * expandCollapseNodeChildren
   * node.parent => parent.id === id ===> display hide
   * @param {type}
   * @return:
   */
  expandCollapseNode(evt) {
    const e = evt || window.event;
    const target = e.target || e.srcElement;
    const id = target.id;
    const nodeList = Array.from(this.domRefs.treeContent.childNodes);
    if (
      target.getAttribute("action") &&
      target.getAttribute("action") === "expand"
    ) {
      const tagName = target.tagName.toLowerCase();
      let treeNodeCon = tagName === "div" ? target : target.parentNode;
      const nodeModel = this.treeModel.findNodeModel(id);
      if (treeNodeCon.getAttribute("expand") === "false") {
        treeNodeCon.firstChild.classList.remove("cl-icon-unfold");
        treeNodeCon.firstChild.classList.add("cl-icon-fold");
        treeNodeCon.setAttribute("expand", "true");
        // 同步状态
        nodeModel.expand = true;
        nodeModel.setChildNodesShow(nodeModel);
        // showChildrenNode
        nodeList.forEach((item) => {
          if (item.getAttribute("pId") === id) {
            item.style.display = "block";
          }
        });
      } else {
        // hideChildrenNode
        // 同步状态
        nodeModel.expand = false;
        nodeModel.setChildNodesHide(nodeModel);
        nodeList.forEach((item) => {
          if (item.getAttribute("pId") === id) {
            item.style.display = "none";
          }
        });
        treeNodeCon.firstChild.classList.add("cl-icon-unfold");
        treeNodeCon.firstChild.classList.remove("cl-icon-fold");
        treeNodeCon.setAttribute("expand", "false");
      }
    }
  }
  handleScroll(e) {
    const target = e.target || e.srcElement;
    const scrollTop = target.scrollTop;
    // 减去整除 itemHeigt 多出来的距离，得到整倍数，并进行 transformY 移动，使listViewContentDom容器的位置回到可见区域（因为滚动导致）
    const fixedScrollTop = scrollTop - (scrollTop % this.treeNodeItemHeight); // 跟下面的 start 求值做对应处理，因此只需要移动整倍数。
    // const fixedScrollTop = scrollTop; // 直接采用这个的话，拖到底部后会出现页面抖动现象。
    this.domRefs.treeContent.style.webkitTransform = `translate3d(0, ${fixedScrollTop}px, 0)`;

    // 改变要渲染的数据
    this.visible.start = Math.floor(scrollTop / this.treeNodeItemHeight); // 起点数据不会计算上余数，因此不会多请求额外的数据，保证整个容器高度容纳了所有显示的数据。
    this.visible.data = this.getVisibleData(target, this.visible.start);
    this.renderNodeList();
  }

  bindEvent() {
    this.domRefs.treeContent.addEventListener(
      "click",
      this.expandCollapseNode.bind(this),
      false
    );
    this.domRefs.treeWrapper.addEventListener(
      "scroll",
      this.handleScroll.bind(this),
      false
    );
    return this;
  }

  unbindEvent() {
    this.domRefs.treeContent.removeEventListener(
      "click",
      this.expandCollapseNode.bind(this),
      false
    );
  }

  destroy() {
    // 移除树
    this.refContainerNode.removeChild(this.domRefs.treeContent);
    // 移除事件监听
    this.unbindEvent();
  }
}


/***/ }),

/***/ "./packages/index.js":
/*!***************************!*\
  !*** ./packages/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _easyTree_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easyTree/src/index */ "./packages/easyTree/src/index.js");
/* harmony import */ var _easyVirtualTree_src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/easyVirtualTree/src/index */ "./packages/easyVirtualTree/src/index.js");
// TODO 自动化读入文件夹


/* harmony default export */ __webpack_exports__["default"] = ({
  EasyTree: _easyTree_src_index__WEBPACK_IMPORTED_MODULE_0__["default"],
  EasyVirtualTree: _easyVirtualTree_src_index__WEBPACK_IMPORTED_MODULE_1__["default"],
});

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=easy-wheels.js.map