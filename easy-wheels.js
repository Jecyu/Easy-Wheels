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
exports.push([module.i, "li {\n  list-style: none;\n}\n.easy-virtual-tree {\n  overflow: auto;\n  position: relative;\n}\n.easy-virtual-tree-phantom {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n.easy-virtual-tree-content {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n.easy-virtual-tree-node-icon {\n  display: inline-block;\n  padding: 6px;\n  font-size: 12px;\n}\n.easy-virtual-tree-node-icon.is-leaf {\n  color: transparent; \n}", ""]);
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
 * @LastEditTime: 2020-06-06 15:45:23
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
 * @LastEditTime: 2020-06-06 17:09:55
 * @LastEditors: Jecyu
 */

// 引入样式

// 引入状态管理

// 引入工具类

const prefix = "easy-virtual-tree";
class VirtualTree {
  constructor(props) {
    // 传入配置，初始化
    this.baseNode = null;
    this.paddingLeft = 16;
    this.data = [];
    this.treeWrapperHeight = 500;
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
    this.nodeModelList = [];
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
    console.log(this.nodeModelList);

    return this;
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

    this.nodeModelList.forEach((nodeModel) => {
      // 遍历渲染
      const treeNode = this.renderTreeNode(nodeModel);
      this.domRefs.treeContent.appendChild(treeNode); // 添加进根节点
    });

    this.domRefs.treeWrapper.appendChild(this.domRefs.treePhantom);
    this.domRefs.treeWrapper.appendChild(this.domRefs.treeContent);
    this.baseNode.appendChild(this.domRefs.treeWrapper); // 渲染完成再添加进 web 浏览器，添加到外部容器
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
    const { level, expand, visible, parent } = nodeModel;
    const li = `<li class="${prefix}-node" style="padding-left: ${this
      .paddingLeft * level}px"></li>`; // 节点模版
    const liDom = Object(_utils_base__WEBPACK_IMPORTED_MODULE_2__["createDOMFromString"])(li);
    liDom.setAttribute("pId", parent.id);
    const nodeContentDom = this.renderSeletor(nodeModel);
    liDom.appendChild(nodeContentDom);
    if (!visible) {
      // 是否可见，后续再状态同步处理，目前只是抽离 Model 层
      liDom.style.display = "none";
    } else {
      liDom.style.display = "block";
    }
    if (nodeModel.hasChild()) {
      const nodeModels = nodeModel.getChildNodes();
      if (expand) {
        // showChildren
        nodeModels.forEach((item) => {
          item.visible = true;
        });
        // hideChildren
      } else {
        nodeModels.forEach((item) => {
          item.visible = false;
        });
      }
    }
    return liDom;
  }

  /**
   * @description: 展开、收缩节点
   * TODO后续同步改变 model 状态，然后由数据驱动更新视图，把记录状态从 attribute 抽离出来。
   * attribue 到这样后续维护困难，目前没有用上 model 的状态驱动 view 的展开、收缩更新，也没有对数据进行回写。
   * 改为把所有关联的孩子 dom 进行显示和隐藏
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
      if (treeNodeCon.getAttribute("expand") === "false") {
        treeNodeCon.firstChild.classList.remove("cl-icon-unfold");
        treeNodeCon.setAttribute("expand", "true");
        // showChildrenNode
        nodeList.forEach((item) => {
          if (item.getAttribute("pId") === id) {
            item.style.display = "block";
          }
        });
      } else {
        // hideChildrenNode
        nodeList.forEach((item) => {
          if (item.getAttribute("pId") === id) {
            item.style.display = "none";
          }
        });
        treeNodeCon.firstChild.classList.add("cl-icon-unfold");
        treeNodeCon.setAttribute("expand", "false");
      }
    }
  }

  bindEvent() {
    this.domRefs.treeContent.addEventListener(
      "click",
      this.expandCollapseNode.bind(this),
      false
    );
    // this.domRefs.treeContent.addEventListener("scroll", )
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
    this.baseNode.removeChild(this.domRefs.treeContent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5V2hlZWxzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Vhc3lXaGVlbHMvLi9wYWNrYWdlcy9lYXN5VHJlZS9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzLy4vcGFja2FnZXMvZWFzeVZpcnR1YWxUcmVlL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL2Vhc3lXaGVlbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Vhc3lXaGVlbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZWFzeVdoZWVscy8uL3BhY2thZ2VzL191dGlscy9iYXNlLmpzIiwid2VicGFjazovL2Vhc3lXaGVlbHMvLi9wYWNrYWdlcy9lYXN5VHJlZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeVdoZWVscy8uL3BhY2thZ2VzL2Vhc3lUcmVlL3NyYy9tb2RlbC9Ob2RlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vZWFzeVdoZWVscy8uL3BhY2thZ2VzL2Vhc3lUcmVlL3NyYy9tb2RlbC9UcmVlbE1vZGVsLmpzIiwid2VicGFjazovL2Vhc3lXaGVlbHMvLi9wYWNrYWdlcy9lYXN5VHJlZS9zcmMvc3R5bGVzL2luZGV4LmNzcz8yMzczIiwid2VicGFjazovL2Vhc3lXaGVlbHMvLi9wYWNrYWdlcy9lYXN5VHJlZS9zcmMvdmlld3MvVHJlZS5qcyIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzLy4vcGFja2FnZXMvZWFzeVZpcnR1YWxUcmVlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzLy4vcGFja2FnZXMvZWFzeVZpcnR1YWxUcmVlL3NyYy9tb2RlbC9Ob2RlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vZWFzeVdoZWVscy8uL3BhY2thZ2VzL2Vhc3lWaXJ0dWFsVHJlZS9zcmMvbW9kZWwvVHJlZWxNb2RlbC5qcyIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzLy4vcGFja2FnZXMvZWFzeVZpcnR1YWxUcmVlL3NyYy9zdHlsZXMvaW5kZXguY3NzPzg4M2EiLCJ3ZWJwYWNrOi8vZWFzeVdoZWVscy8uL3BhY2thZ2VzL2Vhc3lWaXJ0dWFsVHJlZS9zcmMvdmlld3MvVHJlZS5qcyIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzLy4vcGFja2FnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDhHQUF5RDtBQUNuRztB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BPQTtBQUFBO0FBQUE7QUFBQTtBQUMyQztBQUNjO0FBQzFDO0FBQ2YsRUFBRSxxRUFBUTtBQUNWLEVBQUUsbUZBQWU7QUFDakIsQ0FBQyxFIiwiZmlsZSI6ImVhc3ktd2hlZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZWFzeVdoZWVsc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlYXN5V2hlZWxzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhY2thZ2VzL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZDogcGFsZXR1cnF1b2lzZTtcXG59XFxuLyogbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59ICovXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uZWFzeS12aXJ0dWFsLXRyZWUge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5lYXN5LXZpcnR1YWwtdHJlZS1waGFudG9tIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4uZWFzeS12aXJ0dWFsLXRyZWUtY29udGVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcbi5lYXN5LXZpcnR1YWwtdHJlZS1ub2RlLWljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uZWFzeS12aXJ0dWFsLXRyZWUtbm9kZS1pY29uLmlzLWxlYWYge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50OyBcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogSmVjeXVcbiAqIEBEYXRlOiAyMDIwLTA1LTI3IDE1OjA3OjU4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA2LTA2IDEyOjEwOjE4XG4gKiBATGFzdEVkaXRvcnM6IEplY3l1XG4gKi8gXG5leHBvcnQgY29uc3QgY3JlYXRlRE9NRnJvbVN0cmluZyA9IGRvbVN0cmluZyA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gZG9tU3RyaW5nO1xuICByZXR1cm4gZGl2LmNoaWxkTm9kZXNbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZGF0YU1ha2VyID0gZnVuY3Rpb24oY291bnQsIG5vZGVLZXkgPSBcImlkXCIsIHBhcmVudEtleSA9IFwicElkXCIpIHtcbiAgbGV0IG5vZGVzID0gW10sXG4gICAgbWluID0gMTAsXG4gICAgbWF4ID0gOTAsXG4gICAgbGV2ZWwgPSAwLFxuICAgIGN1ckxldmVsID0gW10sXG4gICAgcHJldkxldmVsID0gW10sXG4gICAgbGV2ZWxDb3VudCxcbiAgICBpID0gMCxcbiAgICBqLFxuICAgIGssXG4gICAgbCxcbiAgICBtO1xuICB3aGlsZSAoaSA8IGNvdW50KSB7XG4gICAgaWYgKGxldmVsID09IDApIHtcbiAgICAgIGxldmVsQ291bnQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGxldmVsQ291bnQgJiYgaSA8IGNvdW50OyBqKyssIGkrKykge1xuICAgICAgICBjb25zdCBuID0geyBbbm9kZUtleV06IGksIFtwYXJlbnRLZXldOiAtMSwgbmFtZTogXCJCaWctXCIgKyBpIH07XG4gICAgICAgIG5vZGVzLnB1c2gobik7XG4gICAgICAgIGN1ckxldmVsLnB1c2gobik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobCA9IDAsIG0gPSBwcmV2TGV2ZWwubGVuZ3RoOyBsIDwgbSAmJiBpIDwgY291bnQ7IGwrKykge1xuICAgICAgICBsZXZlbENvdW50ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pbjtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGxldmVsQ291bnQgJiYgaSA8IGNvdW50OyBqKyssIGkrKykge1xuICAgICAgICAgIGNvbnN0IG4gPSB7IFtub2RlS2V5XTogaSwgW3BhcmVudEtleV06IHByZXZMZXZlbFtsXVtub2RlS2V5XSwgbmFtZTogXCJCaWctXCIgKyBpIH07XG4gICAgICAgICAgbm9kZXMucHVzaChuKTtcbiAgICAgICAgICBjdXJMZXZlbC5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHByZXZMZXZlbCA9IGN1ckxldmVsO1xuICAgIGN1ckxldmVsID0gW107XG4gICAgbGV2ZWwrKztcbiAgfVxuICByZXR1cm4gbm9kZXM7XG59O1xuXG5leHBvcnQgY29uc3QgYnVpbGRUcmVlID0gKFxuICB0cmVlLFxuICBjaGlsZHJlbktleSA9IFwiY2hpbGRyZW5cIixcbiAga2V5ID0gXCJub2RlS2V5XCIsXG4gIHBhcmVudEtleSA9IFwicGFyZW50XCJcbikgPT4ge1xuICBjb25zdCBuID0gW107IC8vIOa3u+WKoOWkmuS4gOS4quaVsOe7hO+8jOiusOW9leeItue6p1xuICBjb25zdCB0cmVlTWFwID0ge307XG4gIC8vIOWIoOmZpCDmiYDmnIkgY2hpbGRyZW7vvIzkvKDlhaXnmoTlgLzluKbmnIkgY2hpbGRyZW7vvIzku6XpmLLmraLlranlrZDph43lpI1cbiAgdHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgbm9kZVtjaGlsZHJlbktleV0gJiYgZGVsZXRlIG5vZGVbY2hpbGRyZW5LZXldO1xuICB9KTtcblxuICB0cmVlLmZvckVhY2goKG5vZGUpID0+ICh0cmVlTWFwW25vZGVba2V5XV0gPSBub2RlKSk7XG4gIHRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IHRyZWVNYXBbbm9kZVtwYXJlbnRLZXldXTtcbiAgICAvLyDlpoLmnpzmib7liLDntKLlvJXvvIzpgqPkuYjor7TmmI7mraTpobnkuI3lnKjpobbnuqflvZPkuK0s6YKj5LmI6ZyA6KaB5oqK5q2k6aG55re75Yqg5Yiw5a6D5a+55bqU55qE54i257qn5LitXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnRbY2hpbGRyZW5LZXldIHx8IFtdOyAvLyBwYXJlbnQuY2hpbGRyZW4g77yM6YG/5YWN55u45ZCM5YC8XG4gICAgICBjaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgcGFyZW50W2NoaWxkcmVuS2V5XSA9IGNoaWxkcmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlpoLmnpzmsqHmnInlnKhtYXDkuK3mib7liLDlr7nlupTnmoTntKLlvJVJRCzpgqPkuYjnm7TmjqXmioog5b2T5YmN55qEaXRlbea3u+WKoOWIsCBuIOe7k+aenOmbhuS4re+8jOS9nOS4uumhtue6p1xuICAgICAgbi5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuO1xufTsiLCIvKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IEplY3l1XG4gKiBARGF0ZTogMjAyMC0wNi0wNSAxNjowMjoxMlxuICogQExhc3RFZGl0VGltZTogMjAyMC0wNi0wNiAxNDozMDoxNFxuICogQExhc3RFZGl0b3JzOiBKZWN5dVxuICovIFxuaW1wb3J0IEVhc3lUcmVlIGZyb20gXCIuL3ZpZXdzL1RyZWUuanNcIlxuZXhwb3J0IGRlZmF1bHQgRWFzeVRyZWU7IiwiLypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiBKZWN5dVxuICogQERhdGU6IDIwMjAtMDUtMjcgMTc6MDE6MzhcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDUtMjggMjI6MTY6MzRcbiAqIEBMYXN0RWRpdG9yczogSmVjeXVcbiovIFxubGV0IG5vZGVJZFNlZWQgPSAwO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZU1vZGVsIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucywgcGFyZW50KSB7IFxuICAgIC8vIGRhdGEg5pWw5o2uXG4gICAgdGhpcy5pZCA9IG5vZGVJZFNlZWQrKztcbiAgICB0aGlzLm5hbWUgPSBudWxsOyBcbiAgICB0aGlzLmV4cGFuZCA9IGZhbHNlO1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7IFxuICAgIFxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50OyAvLyBub2RlTW9kZWwg57G75Z6LXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdIC8vIGNoaWxkcmVuIGRhdGHvvIzlrZjmlL4gbm9kZU1vZGVsIOexu+Wei1xuXG4gICAgLy8g5re75Yqg5L2/55So6ICF55qE5pWw5o2uXG4gICAgZm9yIChsZXQgbmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICB0aGlzW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYWRkQ2hpbGQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBOb2RlTW9kZWwpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaGFzQ2hpbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzU2hvdyhub2RlTW9kZWwpIHtcbiAgICBpZiAobm9kZU1vZGVsLmhhc0NoaWxkKCkpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9kZU1vZGVsLmdldENoaWxkTm9kZXMoKTtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmICghaXRlbS52aXNpYmxlKSB7XG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldENoaWxkTm9kZXNTaG93KGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q2hpbGROb2Rlc0hpZGUobm9kZU1vZGVsKSB7XG4gICAgaWYgKG5vZGVNb2RlbC5oYXNDaGlsZCgpKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGVNb2RlbC5nZXRDaGlsZE5vZGVzKCk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS52aXNpYmxlKSB7XG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRDaGlsZE5vZGVzU2hvdyhpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiLypcbiAqIEBEZXNjcmlwdGlvbjog5qCR55qE5qC5XG4gKiBAQXV0aG9yOiBKZWN5dVxuICogQERhdGU6IDIwMjAtMDUtMjcgMTc6MDE6MzFcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDUtMjkgMjE6NTc6NThcbiAqIEBMYXN0RWRpdG9yczogSmVjeXVcbiAqL1xuXG5pbXBvcnQgTm9kZU1vZGVsIGZyb20gXCIuL05vZGVNb2RlbFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZU1vZGVsIHtcbiAgLy8g5q+P5Liq6IqC54K56YO9IG5ldyDkuIDkuKrlrp7kvovlr7nosaHvvIzlj6/og73lr7nmgKfog73mnInlvbHlk43vvIzkvYbmmK/op6PogKZcbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5fcm9vdHMgPSBbXTsgLy8g5aSa5Liq5qC5XG4gICAgdGhpcy5ub2RlTW9kZWxNYXAgPSB7fVxuICAgIHRoaXMuaW5pdFRyZWUoZGF0YSk7XG4gIH1cblxuICBpbml0VHJlZShkYXRhKSB7XG4gICAgLy8g4pyF5Yqo5oCB5Yib5bu6XG4gICAgLy8gdGhpcy5fcm9vdCA9IG5ldyBOb2RlTW9kZWwoeyBuYW1lOiBcInBhcmVudCAxXCIgfSwgbnVsbCk7XG4gICAgLy8gY29uc3QgcGFyZW50MV8xID0gbmV3IE5vZGVNb2RlbCh7IG5hbWU6IFwicGFyZW50IDEtMVwiIH0sIHRoaXMuX3Jvb3QpO1xuICAgIC8vIGNvbnN0IHBhcmVudDFfMiA9IG5ldyBOb2RlTW9kZWwoeyBuYW1lOiBcInBhcmVudCAxLTJcIiB9LCB0aGlzLl9yb290KTtcbiAgICAvLyB0aGlzLl9yb290LmFkZENoaWxkKHBhcmVudDFfMSk7XG4gICAgLy8gdGhpcy5fcm9vdC5hZGRDaGlsZChwYXJlbnQxXzIpO1xuICAgIC8vIGNvbnN0IHBhcmVudDFfMV8xID0gbmV3IE5vZGVNb2RlbCh7IG5hbWU6IFwicGFyZW50IDEtMS0xXCIgfSwgcGFyZW50MV8xKTtcbiAgICAvLyBwYXJlbnQxXzEuYWRkQ2hpbGQocGFyZW50MV8xXzEpO1xuICAgIC8vIGNvbnN0IHBhcmVudDFfMV8yID0gbmV3IE5vZGVNb2RlbCh7IG5hbWU6IFwicGFyZW50IDEtMS0yXCIgfSwgcGFyZW50MV8xKTtcbiAgICAvLyBwYXJlbnQxXzEuYWRkQ2hpbGQocGFyZW50MV8xXzIpO1xuICAgIHRoaXMuY29udmVydERhdGFUb1RyZWUoZGF0YSwgdGhpcy5fcm9vdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmSiOWvueWkmuS4qiByb29077yM6YGN5Y6GXG4gICAqL1xuICBjb252ZXJ0RGF0YVRvVHJlZShkYXRhLCBwYXJlbnQpIHtcbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gbmV3IE5vZGVNb2RlbCh7IG5hbWU6IGl0ZW0ubmFtZSB9LCBudWxsKTtcbiAgICAgIHRoaXMubm9kZU1vZGVsTWFwW25vZGUuaWRdID0gbm9kZTtcbiAgICAgIHBhcmVudC5wdXNoKG5vZGUpO1xuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jb252ZXJ0RGF0YVRvVHJlZShpdGVtLmNoaWxkcmVuLCBub2RlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqIFxuICAgKiDmoLnmja4gaWQg6K6+572u6IqC54K555qE5pi+56S6XG4gICovXG4gc2V0Q2hpbGROb2RlVmlzaWJsZShpZCkge1xuICAgIC8vIOagueaNriBpZCDmib7liLAgbm9kZU1vZGVsXG4gICAgY29uc3QgdGFyZ2V0Tm9kZU1vZGVsID0gdGhpcy5maW5kTm9kZU1vZGVsKGlkKTtcbiAgICBpZiAoIXRhcmdldE5vZGVNb2RlbCkgcmV0dXJuO1xuICAgIC8vIOiuvue9riB2aXNpYmxlIOWAvFxuICAgIGlmKCF0YXJnZXROb2RlTW9kZWwudmlzaWJsZSkge1xuICAgICAgdGFyZ2V0Tm9kZU1vZGVsLnNldENoaWxkTm9kZXNTaG93KHRhcmdldE5vZGVNb2RlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldE5vZGVNb2RlbC5zZXRDaGlsZE5vZGVzSGlkZSh0YXJnZXROb2RlTW9kZWwpO1xuXG4gICAgfVxuICB9XG5cbiAgZmluZE5vZGVNb2RlbChpZCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVNb2RlbE1hcFtpZF07XG4gIH1cblxuICBnZXRUcmVlUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdHM7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qXG4gKiBARGVzY3JpcHRpb246bXZjIOaetuaehFxuICog5Y6f5Z6L77ya5YWI5riy5p+T5qCR77yM5bGV5byA44CB5pS257yp77yM5ZCO57utIGNoZWNrYm9477yM5aKe5Yig5pS55p+l44CB5LiK5LiL56e75Yqo44CB5ouW5ou977yM5oqK5pWw5o2u5LiO6KeG5Zu+5YiG56a75byAXG4gKiDmgJ3ot6/vvJpcbiAqIDEuIHZpZXfvvJrmiYDmnInnmoTmqKHniYjpg73lrp7njrDliJvlu7rvvIzmoJHnmoTlrrnlmajjgIHmoJHoioLngrlcbiAqIDx1bCBjbGFzcz1cInRpbnktdHJlZVwiPlxuICogIDxsaSBjbGFzcz1cInRpbnktdHJlZS1ub2RlXCI+XG4gKiAgICA8ZGl2IGNsYXNzPVwidGlueS10cmVlLW5vZGUtY29udGVudFwiPjwvZGl2PlxuICogICAgPHVsIGNsYXNzPVwidGlueS10cmVlLW5vZGUtY2hpbGRyZW5cIj48L3VsPiAgPCEtLSDlranlrZDoioLngrktLT5cbiAqICA8L2xpPlxuICogPC91bD5cbiAqIGluaXRTdGF0ZSBtb2RlbCDlrZjlgqjmlbDmja5cbiAqIHJlbmRlciB2aWV3ICvvvIjljIXmi6wgYmluZEV2ZW5077yJXG4gKiDlpJbpg6ggY29udHJvbGxlciDop6blj5Hkuovku7ZcbiAqIEBBdXRob3I6IEplY3l1XG4gKiBARGF0ZTogMjAyMC0wNS0yNiAxNToxMToyNFxuICogQExhc3RFZGl0VGltZTogMjAyMC0wNi0wNiAxNDozMzo1OVxuICogQExhc3RFZGl0b3JzOiBKZWN5dVxuICovXG5cbi8vIOW8leWFpeagt+W8j1xuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuLy8g5byV5YWl54q25oCB566h55CGXG5pbXBvcnQgVHJlZU1vZGVsIGZyb20gXCIuLi9tb2RlbC9UcmVlbE1vZGVsXCI7XG4vLyDlvJXlhaXlt6XlhbfnsbtcbmltcG9ydCB7IGNyZWF0ZURPTUZyb21TdHJpbmcgfSBmcm9tIFwiQC9fdXRpbHMvYmFzZVwiO1xuY29uc3QgcHJlZml4ID0gXCJlYXN5LXRyZWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWFzeVRyZWUge1xuICBjb25zdHJ1Y3Rvcihwcm9wKSB7XG4gICAgLy8g5Lyg5YWl6YWN572u77yM5Yid5aeL5YyWXG4gICAgdGhpcy5kZWZhdWx0T3B0ID0ge1xuICAgICAgYmFzZU5vZGU6IG51bGwsXG4gICAgICBwYWRkaW5nTGVmdDogMTYsXG4gICAgICBkYXRhOiBbXSxcbiAgICB9O1xuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0T3B0LCBwcm9wKTtcbiAgICB0aGlzLmluaXQoKTsgLy8g5Yid5aeL5YyWXG4gICAgdGhpcy5wcmVmaXggPSBcImVhc3lcIjtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdFN0YXRlKCkucmVuZGVyKCk7XG4gIH1cblxuICBpbml0U3RhdGUoKSB7XG4gICAgLy8g5a6e5L6L5YyWIFRyZWVTdG9yZe+8jOWtmOWCqOaVsOaNrlxuICAgIHRoaXMudHJlZU1vZGVsID0gbmV3IFRyZWVNb2RlbCh0aGlzLm9wdHMuZGF0YSk7XG4gICAgdGhpcy5yb290cyA9IHRoaXMudHJlZU1vZGVsLmdldFRyZWVSb290KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8g5riy5p+T5qCRXG4gICAgLy8gPHVsIGNsYXNzPVwiZWFzeS10cmVlXCI+XG4gICAgLy8gbmV3IFRyZWVOb2RlKCkg5riy5p+TXG4gICAgLy8gPC91bD5cbiAgICB0aGlzLnRyZWVXcmFwcGVyRG9tID0gY3JlYXRlRE9NRnJvbVN0cmluZyhgPHVsIGNsYXNzPVwiJHtwcmVmaXh9XCI+PC91bD5gKTtcbiAgICAvLyBjb25zdCB0cmVlTm9kZSA9IG5ldyBub2RlKHRoaXMucm9vdCkucmVuZGVyKCk7XG4gICAgdGhpcy5yb290cy5mb3JFYWNoKChub2RlTW9kZWwpID0+IHtcbiAgICAgIC8vIOmBjeWOhua4suafk1xuICAgICAgY29uc3QgdHJlZU5vZGUgPSB0aGlzLnJlbmRlclRyZWVOb2RlKG5vZGVNb2RlbCk7XG4gICAgICB0aGlzLnRyZWVXcmFwcGVyRG9tLmFwcGVuZENoaWxkKHRyZWVOb2RlKTsgLy8g5re75Yqg6L+b5qC56IqC54K5XG4gICAgfSk7XG4gICAgdGhpcy5vcHRzLmJhc2VOb2RlLmFwcGVuZENoaWxkKHRoaXMudHJlZVdyYXBwZXJEb20pOyAvLyDmuLLmn5PlrozmiJDlho3mt7vliqDov5sgd2ViIOa1j+iniOWZqO+8jOa3u+WKoOWIsOWklumDqOWuueWZqFxuXG4gICAgLy8g57uZIHVsIOWuueWZqOa3u+WKoOS6i+S7tu+8jOe7meavj+S4quiKgueCueWIhumFjSBpZO+8jOeEtuWQjueCueWHu+S6i+S7tueahOaXtuWAme+8jOmAmui/hyBpZCDlr7vmib7lr7nlupTnmoQgbm9kZURhdGHvvIzov5vooYzlsZ7mgKflgLznmoTmm7TmlLnvvIzlpoIgZXhwYW5k44CBdmlzaWFibGXnrYnjgIJcbiAgICB0aGlzLmJpbmRFdmVudCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOa4suafk+iKgueCuSBuYW1lIOWSjCBpY29uXG4gICAqL1xuICByZW5kZXJTZWxldG9yKG5vZGVNb2RlbCkge1xuICAgIGNvbnN0IHsgbmFtZSwgZXhwYW5kLCBpZCB9ID0gbm9kZU1vZGVsO1xuICAgIGNvbnN0IHRpdGxlID0gYDxzcGFuIGNsYXNzPVwiJHtwcmVmaXh9LW5vZGUtdGl0bGVcIj4ke25hbWV9PC9zcGFuPmA7XG4gICAgY29uc3QgdGl0bGVEb20gPSBjcmVhdGVET01Gcm9tU3RyaW5nKHRpdGxlKTtcbiAgICBjb25zdCBkaXYgPSBgPGRpdiBjbGFzcz1cIiR7cHJlZml4fS1ub2RlLWNvbnRlbnRcIj48L2Rpdj5gO1xuICAgIGNvbnN0IGRpdkRvbSA9IGNyZWF0ZURPTUZyb21TdHJpbmcoZGl2KTtcbiAgICBsZXQgaWNvbiA9IG51bGw7XG4gICAgLy8g5paH5Lu25aS55ZKM5paH5Lu25pi+56S65LiN5ZCM55qEIGljb25cbiAgICBpZiAobm9kZU1vZGVsLmhhc0NoaWxkKCkpIHtcbiAgICAgIC8vIOaWh+S7tuWkuei/mOmcgOimgeWMuuWIhuWxleW8gOWSjOaUtue8qVxuICAgICAgaWYgKGV4cGFuZCkge1xuICAgICAgICBkaXZEb20uc2V0QXR0cmlidXRlKFwiZXhwYW5kXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgaWNvbiA9IGA8c3BhbiBjbGFzcz1cIiR7cHJlZml4fS1ub2RlLWljb24gaWNvbmZvbnQgY2wtaWNvbi11bmZvbGRcIj48L3NwYW4+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGljb24gPSBgPHNwYW4gY2xhc3M9XCIke3ByZWZpeH0tbm9kZS1pY29uIGljb25mb250IGNsLWljb24tZm9sZFwiPjwvc3Bhbj5gO1xuICAgICAgICBkaXZEb20uc2V0QXR0cmlidXRlKFwiZXhwYW5kXCIsIFwiZmFsc2VcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOaWh+S7tlxuICAgICAgaWNvbiA9IGA8c3BhbiBjbGFzcz1cIiR7cHJlZml4fS1ub2RlLWljb25cIj48L3NwYW4+YDtcbiAgICB9XG4gICAgY29uc3QgaWNvbkRvbSA9IGNyZWF0ZURPTUZyb21TdHJpbmcoaWNvbik7XG4gICAgLy8gaWNvbkRvbS5pZCA9IGlkOyAvLyDorrDlvZUgaWTlsZ7mgKdcbiAgICBpY29uRG9tLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcImV4cGFuZFwiKTtcbiAgICBkaXZEb20uYXBwZW5kQ2hpbGQoaWNvbkRvbSk7XG4gICAgZGl2RG9tLmFwcGVuZENoaWxkKHRpdGxlRG9tKTtcbiAgICByZXR1cm4gZGl2RG9tO1xuICB9XG5cbiAgcmVuZGVyVHJlZU5vZGUobm9kZU1vZGVsKSB7XG4gICAgLy8g6YCS5b2S5riy5p+TXG4gICAgLy8g6LCD55SoIFRyZWVOb2RlLnJlbmRlcigpIOiOt+W+l+a4suafk+eahOWAvFxuICAgIC8vIDxsaT5cbiAgICAvLyAgIDxkaXYgY2xhc3M9XCJlYXN5LXRyZWUtbm9kZS1jb250ZW50XCI+PC9kaXY+XG4gICAgLy8gICB7cmVuZGVyQ2hpbGRyZW59XG4gICAgLy8gPC9saT5cbiAgICBjb25zdCBsaSA9IGA8bGkgY2xhc3M9XCIke3ByZWZpeH0tbm9kZVwiPjwvbGk+YDsgLy8g6IqC54K55qih54mIXG4gICAgY29uc3QgbGlEb20gPSBjcmVhdGVET01Gcm9tU3RyaW5nKGxpKTtcbiAgICBjb25zdCBub2RlQ29udGVudERvbSA9IHRoaXMucmVuZGVyU2VsZXRvcihub2RlTW9kZWwpO1xuICAgIGxpRG9tLmFwcGVuZENoaWxkKG5vZGVDb250ZW50RG9tKTtcblxuICAgIGlmIChub2RlTW9kZWwuaGFzQ2hpbGQoKSkge1xuICAgICAgLy8g6YCS5b2S5a2p5a2QXG4gICAgICBjb25zdCBub2RlTW9kZWxzID0gbm9kZU1vZGVsLmdldENoaWxkTm9kZXMoKTtcbiAgICAgIGxpRG9tLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyQ2hpbGRyZW4obm9kZU1vZGVscywgbm9kZU1vZGVsKSk7XG4gICAgfVxuICAgIC8vIGNvbnN0IHsgdmlzaWJsZSB9ID0gbm9kZU1vZGVsO1xuICAgIC8vIGlmICghdmlzaWJsZSkge1xuICAgIC8vICAgLy8g5piv5ZCm5Y+v6KeB77yM5ZCO57ut5YaN54q25oCB5ZCM5q2l5aSE55CG77yM55uu5YmN5Y+q5piv5oq956a7IE1vZGVsIOWxglxuICAgIC8vICAgbGlEb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBsaURvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIC8vIH1cbiAgICByZXR1cm4gbGlEb207XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbihub2RlTW9kZWxMaXN0LCBub2RlTW9kZWwpIHtcbiAgICAvLyByZW5kZXJUcmVlTm9kZVxuICAgIC8vIDx1bCBjbGFzcz1cImVhc3ktdHJlZS1ub2RlLWNoaWxkcmVuXCI+XG4gICAgLy8ge3JlbmRlclRyZWVOb2RlfVxuICAgIC8vIHtyZW5kZXJUcmVlTm9kZX1cbiAgICAvLyA8L3VsPlxuICAgIGNvbnN0IHVsID0gYDx1bCBjbGFzcz1cIiR7cHJlZml4fS1ub2RlLWNoaWxkcmVuXCI+PC91bD5gO1xuICAgIGNvbnN0IHVsRG9tID0gY3JlYXRlRE9NRnJvbVN0cmluZyh1bCk7XG4gICAgLy8g5re75YqgIGV4cGFuZCBhdHRyaWJ1ZSDlkowg5pi+56S644CB6ZqQ6JePXG4gICAgY29uc3QgeyBleHBhbmQgfSA9IG5vZGVNb2RlbDtcbiAgICBpZiAoZXhwYW5kKSB7XG4gICAgICB1bERvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bERvbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIG5vZGVNb2RlbExpc3QuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgdWxEb20uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJUcmVlTm9kZShub2RlKSk7IC8vIOmAkuW9kua4suafk1xuICAgIH0pO1xuICAgIHJldHVybiB1bERvbTtcbiAgfVxuXG4gIGV4cGFuZENvbGxhcHNlTm9kZShldnQpIHtcbiAgICAvLyBjb25zdCBpZCA9IGV2dC50YXJnZXQuaWQ7XG4gICAgLy8gVE9ETyDlkI7nu63lkIzmraXmlLnlj5ggbW9kZWwg54q25oCB77yM54S25ZCO55Sx5pWw5o2u6amx5Yqo5pu05paw6KeG5Zu+77yM5oqK6K6w5b2V54q25oCB5LuOIGF0dHJpYnV0ZSDmir3nprvlh7rmnaXjgIJcbiAgICAvLyB0aGlzLnRyZWVNb2RlbC5zZXRDaGlsZE5vZGVWaXNpYmxlKGlkKTsgLy8g5ZCM5q2l5a2Q6IqC54K555qEIHZpc2libGUg54q25oCBXG5cbiAgICAvLyDnm7TmjqXmlLnlj5ggZG9tIOeahOWxleW8gOOAgeaUtue8qVxuICAgIC8vIOaJvuWIsOW9k+WJjeiKgueCuSBkb20g55qE54i25Lqy55qE5YWE5byf5YWD57Sg77yM6L+b6KGM5pi+56S65aSE55CG77yM6L+Z6YeM5LiN5b6X5LiN5L2/55SoIGF0dHJpYnV0ZSDlkIzmraXorrDlvZXmqKHniYjnirbmgIHnmoTnrqHnkIbvvIzov5nmoLflnKjmuLLmn5PnmoTml7blgJnkuZ/pnIDopoHorrDlvZUgZXhwYW5kXG4gICAgLy8gYXR0cmlidWUg5Yiw6L+Z5qC35ZCO57ut57u05oqk5Zuw6Zq+77yM55uu5YmN5rKh5pyJ55So5LiKIG1vZGVsIOeahOeKtuaAgempseWKqCB2aWV3IOeahOWxleW8gOOAgeaUtue8qeabtOaWsOOAglxuICAgIGNvbnN0IGUgPSBldnQgfHwgd2luZG93LmV2ZW50O1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICBpZiAoXG4gICAgICB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpICYmXG4gICAgICB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpID09PSBcImV4cGFuZFwiXG4gICAgKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGxldCB0cmVlTm9kZUNvbiA9IHRhZ05hbWUgPT09IFwiZGl2XCIgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIGlmIChcbiAgICAgICAgIXRyZWVOb2RlQ29uLmNsYXNzTGlzdC5jb250YWlucyhgJHtwcmVmaXh9LW5vZGUtY29udGVudGApIHx8XG4gICAgICAgICF0cmVlTm9kZUNvbi5nZXRBdHRyaWJ1dGUoXCJleHBhbmRcIilcbiAgICAgIClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbGV0IGNoaWxkcmVuRG9tID0gdHJlZU5vZGVDb24ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKHRyZWVOb2RlQ29uLmdldEF0dHJpYnV0ZShcImV4cGFuZFwiKSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIHRyZWVOb2RlQ29uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImNsLWljb24tdW5mb2xkXCIpO1xuICAgICAgICB0cmVlTm9kZUNvbi5zZXRBdHRyaWJ1dGUoXCJleHBhbmRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICBjaGlsZHJlbkRvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJlZU5vZGVDb24uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwiY2wtaWNvbi11bmZvbGRcIik7XG4gICAgICAgIGNoaWxkcmVuRG9tLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdHJlZU5vZGVDb24uc2V0QXR0cmlidXRlKFwiZXhwYW5kXCIsIFwiZmFsc2VcIik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFRPRE8g5ZCO57ut55yL55yL5piv5ZCm6ZyA6KaB6YCa6L+HIG1vZGVsIOaUueWPmOadpeabtOaWsOinhuWbvu+8jOS9huaYr+imgeWBmuWlvSB2aXJ0dWFsIERPTSDkvJjljJbvvIzlvZPliY3nmoTln7rmnKzlsZXlvIDkuI7mlLbnvKnmsqHlv4XopoHvvIzlkI7nu63pnIDopoFkcm9w44CB562J5YaN6ICD6JmRXG4gIH1cblxuICBiaW5kRXZlbnQoKSB7XG4gICAgdGhpcy50cmVlV3JhcHBlckRvbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5leHBhbmRDb2xsYXBzZU5vZGUuYmluZCh0aGlzKSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVuYmluZEV2ZW50KCkge1xuICAgIHRoaXMudHJlZVdyYXBwZXJEb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHRoaXMuZXhwYW5kQ29sbGFwc2VOb2RlLmJpbmQodGhpcyksXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIOenu+mZpOagkVxuICAgIHRoaXMub3B0cy5iYXNlTm9kZS5yZW1vdmVDaGlsZCh0aGlzLnRyZWVXcmFwcGVyRG9tKTtcbiAgICAvLyDnp7vpmaTkuovku7bnm5HlkKxcbiAgICB0aGlzLnVuYmluZEV2ZW50KCk7XG4gIH1cbn1cbiIsIi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogSmVjeXVcbiAqIEBEYXRlOiAyMDIwLTA2LTA1IDE2OjAyOjEyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA2LTA2IDE0OjU4OjMyXG4gKiBATGFzdEVkaXRvcnM6IEplY3l1XG4gKi8gXG5pbXBvcnQgRWFzeVZpcnR1YWxUcmVlIGZyb20gXCIuL3ZpZXdzL1RyZWUuanNcIlxuZXhwb3J0IGRlZmF1bHQgRWFzeVZpcnR1YWxUcmVlOyIsIi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogSmVjeXVcbiAqIEBEYXRlOiAyMDIwLTA1LTI3IDE3OjAxOjM4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA2LTA2IDE1OjQ1OjIzXG4gKiBATGFzdEVkaXRvcnM6IEplY3l1XG4qLyBcbmxldCBub2RlSWRTZWVkID0gMDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIHBhcmVudCkgeyBcbiAgICAvLyBkYXRhIOaVsOaNrlxuICAgIHRoaXMuaWQgPSBub2RlSWRTZWVkKys7XG4gICAgdGhpcy5uYW1lID0gbnVsbDsgXG4gICAgdGhpcy5leHBhbmQgPSBmYWxzZTtcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMubGV2ZWwgPSAwOyBcbiAgICBcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDsgLy8gbm9kZU1vZGVsIOexu+Wei1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXSAvLyBjaGlsZHJlbiBkYXRh77yM5a2Y5pS+IG5vZGVNb2RlbCDnsbvlnotcblxuICAgIC8vIOa3u+WKoOS9v+eUqOiAheeahOaVsOaNrlxuICAgIGZvciAobGV0IG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgdGhpc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldExldmVsKGxldmVsKSB7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICB9XG4gIGFkZENoaWxkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZU1vZGVsKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGhhc0NoaWxkKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgc2V0Q2hpbGROb2Rlc1Nob3cobm9kZU1vZGVsKSB7XG4gICAgaWYgKG5vZGVNb2RlbC5oYXNDaGlsZCgpKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGVNb2RlbC5nZXRDaGlsZE5vZGVzKCk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0udmlzaWJsZSkge1xuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRDaGlsZE5vZGVzU2hvdyhpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldENoaWxkTm9kZXNIaWRlKG5vZGVNb2RlbCkge1xuICAgIGlmIChub2RlTW9kZWwuaGFzQ2hpbGQoKSkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2RlTW9kZWwuZ2V0Q2hpbGROb2RlcygpO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udmlzaWJsZSkge1xuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Q2hpbGROb2Rlc1Nob3coaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qXG4gKiBARGVzY3JpcHRpb246IOagkeeahOaVsOaNrueuoeeQhlxuICogQEF1dGhvcjogSmVjeXVcbiAqIEBEYXRlOiAyMDIwLTA1LTI3IDE3OjAxOjMxXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA2LTA2IDE3OjAzOjE0XG4gKiBATGFzdEVkaXRvcnM6IEplY3l1XG4gKi9cblxuaW1wb3J0IE5vZGVNb2RlbCBmcm9tIFwiLi9Ob2RlTW9kZWxcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLl9yb290ID0ge1xuICAgICAgaWQ6IC0xLFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07IC8vIOWkmuS4quaguVxuICAgIHRoaXMubm9kZU1vZGVsTWFwID0ge307XG4gICAgdGhpcy5mbGF0Tm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLmluaXRUcmVlKGRhdGEpO1xuICB9XG5cbiAgaW5pdFRyZWUoZGF0YSkge1xuICAgIC8vIOWKqOaAgeWIm+W7ulxuICAgIHRoaXMuY29udmVydERhdGFUb1RyZWUoZGF0YSwgdGhpcy5fcm9vdCk7XG4gIH1cblxuICAvKipcbiAgICog6ZKI5a+55aSa5LiqIHJvb3TvvIzpgY3ljoZcbiAgICovXG4gIGNvbnZlcnREYXRhVG9UcmVlKGRhdGEsIHBhcmVudCwgbGV2ZWwgPSAwKSB7XG4gICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gbmV3IE5vZGVNb2RlbCh7IG5hbWU6IGl0ZW0ubmFtZSB9LCBwYXJlbnQpO1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICBub2RlLnNldExldmVsKGxldmVsKTtcbiAgICAgIHRoaXMubm9kZU1vZGVsTWFwW25vZGUuaWRdID0gbm9kZTtcbiAgICAgIHRoaXMuZmxhdE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmNvbnZlcnREYXRhVG9UcmVlKGl0ZW0uY2hpbGRyZW4sIG5vZGUsIGxldmVsICsgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2uIGlkIOiuvue9ruiKgueCueeahOaYvuekulxuICAgKi9cbiAgc2V0Q2hpbGROb2RlVmlzaWJsZShpZCkge1xuICAgIC8vIOagueaNriBpZCDmib7liLAgbm9kZU1vZGVsXG4gICAgY29uc3QgdGFyZ2V0Tm9kZU1vZGVsID0gdGhpcy5maW5kTm9kZU1vZGVsKGlkKTtcbiAgICBpZiAoIXRhcmdldE5vZGVNb2RlbCkgcmV0dXJuO1xuICAgIC8vIOiuvue9riB2aXNpYmxlIOWAvFxuICAgIGlmICghdGFyZ2V0Tm9kZU1vZGVsLnZpc2libGUpIHtcbiAgICAgIHRhcmdldE5vZGVNb2RlbC5zZXRDaGlsZE5vZGVzU2hvdyh0YXJnZXROb2RlTW9kZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXROb2RlTW9kZWwuc2V0Q2hpbGROb2Rlc0hpZGUodGFyZ2V0Tm9kZU1vZGVsKTtcbiAgICB9XG4gIH1cblxuICBmaW5kTm9kZU1vZGVsKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZU1vZGVsTWFwW2lkXTtcbiAgfVxuXG4gIGdldFRyZWVSb290KCkge1xuICAgIHJldHVybiB0aGlzLl9yb290LmNoaWxkcmVuO1xuICB9XG5cbiAgZ2V0Tm9kZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxhdE5vZGVMaXN0O1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvKlxuICogQERlc2NyaXB0aW9uOiDomZrmi5/ljJbliJfooajmoJFcbiAqIOWOn+Wei++8muWFiOa4suafk+agke+8jOWxleW8gOOAgeaUtue8qVxuICog5oCd6Lev77yaXG4gKiAxLiB2aWV377ya5omA5pyJ55qE5qih54mI6YO95a6e546w5Yib5bu677yM5qCR55qE5a655Zmo44CB5qCR6IqC54K544CC5riy5p+T5Li65LiA5Liq5bmz57qn55qE5YiX6KGo77yM5oyJ54Wn5qCR57uT5p6E55qE6aG65bqP5riy5p+TXG4gKiAyLiDmr4/kuKroioLngrkgYXR0cmlidXRlIOS4iuWtmOWCqCBwYXJlbnROb2RlS2V577yM54K55Ye75p+Q5Liq6IqC54K55pe277yM5om+5Yiw5a6D5a2p5a2Q5omA5pyJ55qE6IqC54K555qEIHBhcmVudE5vZGVLeWUg5a+55q+U5piv5ZCm55u4562J77yM6L+b6KGM6ZqQ6JeP5ZKM5pi+56S644CC5oqK5omA5pyJ55qE6IqC54K55bmz6ZO644CCXG4gKiA8ZGl2IGNsYXNzPVwidmlydHVhbC10cmVlXCI+XG4gKiAgIDxkaXYgY2xhc3M9dmlydHVhbC10cmVlLXBoYW50b21cIj48L2Rpdj5cbiAqICAgPHVsIGNsYXNzPVwidmlydHVhbC10cmVlLWNvbnRlbnRcIj5cbiAqICAgICA8bGkgY2xhc3M9XCJ0aW55LXRyZWUtbm9kZVwiPlxuICogICAgICA8ZGl2IGNsYXNzPVwidGlueS10cmVlLW5vZGUtY29udGVudFwiPjwvZGl2PlxuICogICAgPC9saT5cbiAqICAgICA8bGkgY2xhc3M9XCJ0aW55LXRyZWUtbm9kZVwiPlxuICogICAgICA8ZGl2IGNsYXNzPVwidGlueS10cmVlLW5vZGUtY29udGVudFwiPjwvZGl2PlxuICogICAgPC9saT5cbiAqICAgPC91bD5cbiAqIDwvZGl2PlxuICogQEF1dGhvcjogSmVjeXVcbiAqIEBEYXRlOiAyMDIwLTA1LTI2IDE1OjExOjI0XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA2LTA2IDE3OjA5OjU1XG4gKiBATGFzdEVkaXRvcnM6IEplY3l1XG4gKi9cblxuLy8g5byV5YWl5qC35byPXG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguY3NzXCI7XG4vLyDlvJXlhaXnirbmgIHnrqHnkIZcbmltcG9ydCBUcmVlTW9kZWwgZnJvbSBcIi4uL21vZGVsL1RyZWVsTW9kZWxcIjtcbi8vIOW8leWFpeW3peWFt+exu1xuaW1wb3J0IHsgY3JlYXRlRE9NRnJvbVN0cmluZyB9IGZyb20gXCJAL191dGlscy9iYXNlXCI7XG5jb25zdCBwcmVmaXggPSBcImVhc3ktdmlydHVhbC10cmVlXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXJ0dWFsVHJlZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgLy8g5Lyg5YWl6YWN572u77yM5Yid5aeL5YyWXG4gICAgdGhpcy5iYXNlTm9kZSA9IG51bGw7XG4gICAgdGhpcy5wYWRkaW5nTGVmdCA9IDE2O1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMudHJlZVdyYXBwZXJIZWlnaHQgPSA1MDA7XG4gICAgLy8gZG9tIOW8leeUqFxuICAgIHRoaXMuZG9tUmVmcyA9IHtcbiAgICAgIHRyZWVXcmFwcGVyOiBudWxsLFxuICAgICAgdHJlZVBoYW50b206IG51bGwsXG4gICAgICB0cmVlQ29udGVudDogbnVsbCxcbiAgICB9O1xuICAgIC8vIOa3u+WKoOS9v+eUqOiAheeahOaVsOaNrlxuICAgIGZvciAobGV0IG5hbWUgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICB0aGlzW25hbWVdID0gcHJvcHNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucm9vdHMgPSBbXTtcbiAgICB0aGlzLm5vZGVNb2RlbExpc3QgPSBbXTtcbiAgICB0aGlzLmluaXQoKTsgLy8g5Yid5aeL5YyWXG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRTdGF0ZSgpXG4gICAgICAucmVuZGVyKClcbiAgICAgIC5iaW5kRXZlbnQoKTtcbiAgfVxuXG4gIGluaXRTdGF0ZSgpIHtcbiAgICAvLyDlrp7kvovljJYgVHJlZVN0b3Jl77yM5a2Y5YKo5pWw5o2uXG4gICAgdGhpcy50cmVlTW9kZWwgPSBuZXcgVHJlZU1vZGVsKHRoaXMuZGF0YSk7XG4gICAgdGhpcy5yb290cyA9IHRoaXMudHJlZU1vZGVsLmdldFRyZWVSb290KCk7XG4gICAgdGhpcy5ub2RlTW9kZWxMaXN0ID0gdGhpcy50cmVlTW9kZWwuZ2V0Tm9kZUxpc3QoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGVNb2RlbExpc3QpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8g5riy5p+T5qCRXG4gICAgdGhpcy5kb21SZWZzLnRyZWVXcmFwcGVyID0gY3JlYXRlRE9NRnJvbVN0cmluZyhcbiAgICAgIGA8ZGl2IGNsYXNzPVwiJHtwcmVmaXh9XCIgc3R5bGU9XCJoZWlnaHQ6ICR7dGhpcy50cmVlV3JhcHBlckhlaWdodH1weFwiPjwvZGl2PmBcbiAgICApO1xuICAgIHRoaXMuZG9tUmVmcy50cmVlUGhhbnRvbSA9IGNyZWF0ZURPTUZyb21TdHJpbmcoXG4gICAgICBgPGRpdiBjbGFzcz1cIiR7cHJlZml4fS1waGFudG9tXCI+PC9kaXY+YFxuICAgICk7XG4gICAgdGhpcy5kb21SZWZzLnRyZWVDb250ZW50ID0gY3JlYXRlRE9NRnJvbVN0cmluZyhcbiAgICAgIGA8dWwgY2xhc3M9XCIke3ByZWZpeH0tY29udGVudFwiPjwvdWw+YFxuICAgICk7XG5cbiAgICB0aGlzLm5vZGVNb2RlbExpc3QuZm9yRWFjaCgobm9kZU1vZGVsKSA9PiB7XG4gICAgICAvLyDpgY3ljobmuLLmn5NcbiAgICAgIGNvbnN0IHRyZWVOb2RlID0gdGhpcy5yZW5kZXJUcmVlTm9kZShub2RlTW9kZWwpO1xuICAgICAgdGhpcy5kb21SZWZzLnRyZWVDb250ZW50LmFwcGVuZENoaWxkKHRyZWVOb2RlKTsgLy8g5re75Yqg6L+b5qC56IqC54K5XG4gICAgfSk7XG5cbiAgICB0aGlzLmRvbVJlZnMudHJlZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5kb21SZWZzLnRyZWVQaGFudG9tKTtcbiAgICB0aGlzLmRvbVJlZnMudHJlZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5kb21SZWZzLnRyZWVDb250ZW50KTtcbiAgICB0aGlzLmJhc2VOb2RlLmFwcGVuZENoaWxkKHRoaXMuZG9tUmVmcy50cmVlV3JhcHBlcik7IC8vIOa4suafk+WujOaIkOWGjea3u+WKoOi/myB3ZWIg5rWP6KeI5Zmo77yM5re75Yqg5Yiw5aSW6YOo5a655ZmoXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICog5riy5p+T6IqC54K5IG5hbWUg5ZKMIGljb25cbiAgICovXG4gIHJlbmRlclNlbGV0b3Iobm9kZU1vZGVsKSB7XG4gICAgY29uc3QgeyBuYW1lLCBleHBhbmQsIGlkIH0gPSBub2RlTW9kZWw7XG4gICAgY29uc3QgdGl0bGUgPSBgPHNwYW4gY2xhc3M9XCIke3ByZWZpeH0tbm9kZS10aXRsZVwiPiR7bmFtZX08L3NwYW4+YDtcbiAgICBjb25zdCB0aXRsZURvbSA9IGNyZWF0ZURPTUZyb21TdHJpbmcodGl0bGUpO1xuICAgIGNvbnN0IGRpdiA9IGA8ZGl2IGNsYXNzPVwiJHtwcmVmaXh9LW5vZGUtY29udGVudFwiPjwvZGl2PmA7XG4gICAgY29uc3QgZGl2RG9tID0gY3JlYXRlRE9NRnJvbVN0cmluZyhkaXYpO1xuICAgIGxldCBpY29uID0gbnVsbDtcbiAgICAvLyDmlofku7blpLnlkozmlofku7bmmL7npLrkuI3lkIznmoQgaWNvblxuICAgIGlmIChub2RlTW9kZWwuaGFzQ2hpbGQoKSkge1xuICAgICAgLy8g5paH5Lu25aS56L+Y6ZyA6KaB5Yy65YiG5bGV5byA5ZKM5pS257ypXG4gICAgICBpZiAoZXhwYW5kKSB7XG4gICAgICAgIGRpdkRvbS5zZXRBdHRyaWJ1dGUoXCJleHBhbmRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICBpY29uID0gYDxzcGFuIGNsYXNzPVwiJHtwcmVmaXh9LW5vZGUtaWNvbiBpY29uZm9udCBjbC1pY29uLXVuZm9sZFwiPjwvc3Bhbj5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWNvbiA9IGA8c3BhbiBjbGFzcz1cIiR7cHJlZml4fS1ub2RlLWljb24gaWNvbmZvbnQgY2wtaWNvbi1mb2xkXCI+PC9zcGFuPmA7XG4gICAgICAgIGRpdkRvbS5zZXRBdHRyaWJ1dGUoXCJleHBhbmRcIiwgXCJmYWxzZVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5paH5Lu2XG4gICAgICBpY29uID0gYDxzcGFuIGNsYXNzPVwiJHtwcmVmaXh9LW5vZGUtaWNvbiBpY29uZm9udCBjbC1pY29uLXVuZm9sZCBpcy1sZWFmXCI+PC9zcGFuPmA7IC8vIOi/memHjCBpY29uZm9udCDkuZ/opoHorr7nva7vvIznhLblkI7lpITnkIYgY29sb3Ig5Li6IHRyYW5zcGFyZW5077yM6YG/5YWNIHBhZGRpbmctbGVmdCDkuI3kuIDoh7RcbiAgICB9XG4gICAgY29uc3QgaWNvbkRvbSA9IGNyZWF0ZURPTUZyb21TdHJpbmcoaWNvbik7XG4gICAgaWNvbkRvbS5pZCA9IGlkOyAvLyDorrDlvZUgaWTlsZ7mgKdcbiAgICBpY29uRG9tLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcImV4cGFuZFwiKTtcbiAgICBkaXZEb20uYXBwZW5kQ2hpbGQoaWNvbkRvbSk7XG4gICAgZGl2RG9tLmFwcGVuZENoaWxkKHRpdGxlRG9tKTtcbiAgICByZXR1cm4gZGl2RG9tO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbjog5riy5p+T6IqC54K5XG4gICAqIEBwYXJhbSB7dHlwZX0gXG4gICAqIEByZXR1cm46IFxuICAgKi9cbiAgcmVuZGVyVHJlZU5vZGUobm9kZU1vZGVsKSB7XG4gICAgY29uc3QgeyBsZXZlbCwgZXhwYW5kLCB2aXNpYmxlLCBwYXJlbnQgfSA9IG5vZGVNb2RlbDtcbiAgICBjb25zdCBsaSA9IGA8bGkgY2xhc3M9XCIke3ByZWZpeH0tbm9kZVwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAke3RoaXNcbiAgICAgIC5wYWRkaW5nTGVmdCAqIGxldmVsfXB4XCI+PC9saT5gOyAvLyDoioLngrnmqKHniYhcbiAgICBjb25zdCBsaURvbSA9IGNyZWF0ZURPTUZyb21TdHJpbmcobGkpO1xuICAgIGxpRG9tLnNldEF0dHJpYnV0ZShcInBJZFwiLCBwYXJlbnQuaWQpO1xuICAgIGNvbnN0IG5vZGVDb250ZW50RG9tID0gdGhpcy5yZW5kZXJTZWxldG9yKG5vZGVNb2RlbCk7XG4gICAgbGlEb20uYXBwZW5kQ2hpbGQobm9kZUNvbnRlbnREb20pO1xuICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgLy8g5piv5ZCm5Y+v6KeB77yM5ZCO57ut5YaN54q25oCB5ZCM5q2l5aSE55CG77yM55uu5YmN5Y+q5piv5oq956a7IE1vZGVsIOWxglxuICAgICAgbGlEb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaURvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICBpZiAobm9kZU1vZGVsLmhhc0NoaWxkKCkpIHtcbiAgICAgIGNvbnN0IG5vZGVNb2RlbHMgPSBub2RlTW9kZWwuZ2V0Q2hpbGROb2RlcygpO1xuICAgICAgaWYgKGV4cGFuZCkge1xuICAgICAgICAvLyBzaG93Q2hpbGRyZW5cbiAgICAgICAgbm9kZU1vZGVscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGhpZGVDaGlsZHJlblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZU1vZGVscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGlEb207XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uOiDlsZXlvIDjgIHmlLbnvKnoioLngrlcbiAgICogVE9ET+WQjue7reWQjOatpeaUueWPmCBtb2RlbCDnirbmgIHvvIznhLblkI7nlLHmlbDmja7pqbHliqjmm7TmlrDop4blm77vvIzmiororrDlvZXnirbmgIHku44gYXR0cmlidXRlIOaKveemu+WHuuadpeOAglxuICAgKiBhdHRyaWJ1ZSDliLDov5nmoLflkI7nu63nu7TmiqTlm7Dpmr7vvIznm67liY3msqHmnInnlKjkuIogbW9kZWwg55qE54q25oCB6amx5YqoIHZpZXcg55qE5bGV5byA44CB5pS257yp5pu05paw77yM5Lmf5rKh5pyJ5a+55pWw5o2u6L+b6KGM5Zue5YaZ44CCXG4gICAqIOaUueS4uuaKiuaJgOacieWFs+iBlOeahOWtqeWtkCBkb20g6L+b6KGM5pi+56S65ZKM6ZqQ6JePXG4gICAqIGV4cGFuZENvbGxhcHNlTm9kZUNoaWxkcmVuXG4gICAqIG5vZGUucGFyZW50ID0+IHBhcmVudC5pZCA9PT0gaWQgPT09PiBkaXNwbGF5IGhpZGVcbiAgICogQHBhcmFtIHt0eXBlfVxuICAgKiBAcmV0dXJuOlxuICAgKi9cbiAgZXhwYW5kQ29sbGFwc2VOb2RlKGV2dCkge1xuICAgIGNvbnN0IGUgPSBldnQgfHwgd2luZG93LmV2ZW50O1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICBjb25zdCBub2RlTGlzdCA9IEFycmF5LmZyb20odGhpcy5kb21SZWZzLnRyZWVDb250ZW50LmNoaWxkTm9kZXMpO1xuICAgIGlmIChcbiAgICAgIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgJiZcbiAgICAgIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgPT09IFwiZXhwYW5kXCJcbiAgICApIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgbGV0IHRyZWVOb2RlQ29uID0gdGFnTmFtZSA9PT0gXCJkaXZcIiA/IHRhcmdldCA6IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgaWYgKHRyZWVOb2RlQ29uLmdldEF0dHJpYnV0ZShcImV4cGFuZFwiKSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIHRyZWVOb2RlQ29uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImNsLWljb24tdW5mb2xkXCIpO1xuICAgICAgICB0cmVlTm9kZUNvbi5zZXRBdHRyaWJ1dGUoXCJleHBhbmRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAvLyBzaG93Q2hpbGRyZW5Ob2RlXG4gICAgICAgIG5vZGVMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoXCJwSWRcIikgPT09IGlkKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGhpZGVDaGlsZHJlbk5vZGVcbiAgICAgICAgbm9kZUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZShcInBJZFwiKSA9PT0gaWQpIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRyZWVOb2RlQ29uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImNsLWljb24tdW5mb2xkXCIpO1xuICAgICAgICB0cmVlTm9kZUNvbi5zZXRBdHRyaWJ1dGUoXCJleHBhbmRcIiwgXCJmYWxzZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBiaW5kRXZlbnQoKSB7XG4gICAgdGhpcy5kb21SZWZzLnRyZWVDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLmV4cGFuZENvbGxhcHNlTm9kZS5iaW5kKHRoaXMpLFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIC8vIHRoaXMuZG9tUmVmcy50cmVlQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIClcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVuYmluZEV2ZW50KCkge1xuICAgIHRoaXMuZG9tUmVmcy50cmVlQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5leHBhbmRDb2xsYXBzZU5vZGUuYmluZCh0aGlzKSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8g56e76Zmk5qCRXG4gICAgdGhpcy5iYXNlTm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRvbVJlZnMudHJlZUNvbnRlbnQpO1xuICAgIC8vIOenu+mZpOS6i+S7tuebkeWQrFxuICAgIHRoaXMudW5iaW5kRXZlbnQoKTtcbiAgfVxufVxuIiwiLy8gVE9ETyDoh6rliqjljJbor7vlhaXmlofku7blpLlcbmltcG9ydCBFYXN5VHJlZSBmcm9tIFwiLi9lYXN5VHJlZS9zcmMvaW5kZXhcIlxuaW1wb3J0IEVhc3lWaXJ0dWFsVHJlZSBmcm9tIFwiQC9lYXN5VmlydHVhbFRyZWUvc3JjL2luZGV4XCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgRWFzeVRyZWUsXG4gIEVhc3lWaXJ0dWFsVHJlZSxcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==