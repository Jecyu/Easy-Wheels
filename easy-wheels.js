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
/*! exports provided: createDOMFromString, buildTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDOMFromString", function() { return createDOMFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTree", function() { return buildTree; });
/*
 * @Description: 
 * @Author: Jecyu
 * @Date: 2020-05-27 15:07:58
 * @LastEditTime: 2020-05-31 00:47:19
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
 * @LastEditTime: 2020-06-05 16:02:30
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
 * @LastEditTime: 2020-06-05 16:29:56
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
      this.onNodeExpand.bind(this),
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

/***/ "./packages/index.js":
/*!***************************!*\
  !*** ./packages/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _easyTree_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easyTree/src/index */ "./packages/easyTree/src/index.js");
/* harmony import */ var _listView_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listView/index */ "./packages/listView/index.js");
// TODO 自动化读入文件夹


/* harmony default export */ __webpack_exports__["default"] = ({
  EasyTree: _easyTree_src_index__WEBPACK_IMPORTED_MODULE_0__["default"],
  ListView: _listView_index__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./packages/listView/index.js":
/*!************************************!*\
  !*** ./packages/listView/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * @Description: 
 * @Author: Jecyu
 * @Date: 2020-06-05 15:57:12
 * @LastEditTime: 2020-06-05 15:59:51
 * @LastEditors: Jecyu
 */ 
const say = "Hello"
/* harmony default export */ __webpack_exports__["default"] = (say);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5V2hlZWxzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Vhc3lXaGVlbHMvLi9wYWNrYWdlcy9lYXN5VHJlZS9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Vhc3lXaGVlbHMvLi9wYWNrYWdlcy9fdXRpbHMvYmFzZS5qcyIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzLy4vcGFja2FnZXMvZWFzeVRyZWUvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Vhc3lXaGVlbHMvLi9wYWNrYWdlcy9lYXN5VHJlZS9zcmMvbW9kZWwvTm9kZU1vZGVsLmpzIiwid2VicGFjazovL2Vhc3lXaGVlbHMvLi9wYWNrYWdlcy9lYXN5VHJlZS9zcmMvbW9kZWwvVHJlZWxNb2RlbC5qcyIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzLy4vcGFja2FnZXMvZWFzeVRyZWUvc3JjL3N0eWxlcy9pbmRleC5jc3M/MjM3MyIsIndlYnBhY2s6Ly9lYXN5V2hlZWxzLy4vcGFja2FnZXMvZWFzeVRyZWUvc3JjL3ZpZXdzL1RyZWUuanMiLCJ3ZWJwYWNrOi8vZWFzeVdoZWVscy8uL3BhY2thZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Vhc3lXaGVlbHMvLi9wYWNrYWdlcy9saXN0Vmlldy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HO0FBQ0E7QUFDQSxjQUFjLFFBQVMsU0FBUyw4QkFBOEIsR0FBRyxTQUFTLHFCQUFxQixHQUFHO0FBQ2xHO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZCQUE2QjtBQUM5QyxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHVDQUF1QyxvQkFBb0I7QUFDM0Q7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzlFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0M7QUFDdkIscUhBQVEsRTs7Ozs7Ozs7Ozs7O0FDUnZCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixnQztBQUNBO0FBQ0E7QUFDQSxxQjtBQUNBO0FBQ0Esd0I7O0FBRUEseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0M7QUFDckI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLG1CQUFtQjtBQUN0RCx3Q0FBd0MscUJBQXFCO0FBQzdELHdDQUF3QyxxQkFBcUI7QUFDN0Q7QUFDQTtBQUNBLDBDQUEwQyx1QkFBdUI7QUFDakU7QUFDQSwwQ0FBMEMsdUJBQXVCO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFTLEVBQUUsa0JBQWtCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZFQSxVQUFVLG1CQUFPLENBQUMsNEpBQWlGO0FBQ25HLDBCQUEwQixtQkFBTyxDQUFDLG9KQUErRDs7QUFFakc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUM2QjtBQUM3QjtBQUM0QztBQUM1QztBQUNvRDtBQUNwRDs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLHlEQUFTO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVFQUFtQixlQUFlLE9BQU87QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsS0FBSztBQUNMLHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixrQ0FBa0MsT0FBTyxlQUFlLEtBQUs7QUFDN0QscUJBQXFCLHVFQUFtQjtBQUN4QywrQkFBK0IsT0FBTztBQUN0QyxtQkFBbUIsdUVBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPO0FBQ3RDLE9BQU87QUFDUCwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQSxvQkFBb0IsdUVBQW1CO0FBQ3ZDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSw2QkFBNkIsT0FBTyxjQUFjO0FBQ2xELGtCQUFrQix1RUFBbUI7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUTtBQUNSO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsa0JBQWtCLHVFQUFtQjtBQUNyQztBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hOQTtBQUFBO0FBQUE7QUFBQTtBQUMyQztBQUNKO0FBQ3hCO0FBQ2YsRUFBRSxxRUFBUTtBQUNWLEVBQUUsaUVBQVE7QUFDVixDQUFDLEU7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLGtFQUFHLEUiLCJmaWxlIjoiZWFzeS13aGVlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlYXN5V2hlZWxzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImVhc3lXaGVlbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFja2FnZXMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBwYWxldHVycXVvaXNlO1xcbn1cXG4vKiBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn0gKi9cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiBKZWN5dVxuICogQERhdGU6IDIwMjAtMDUtMjcgMTU6MDc6NThcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDUtMzEgMDA6NDc6MTlcbiAqIEBMYXN0RWRpdG9yczogSmVjeXVcbiAqLyBcbmV4cG9ydCBjb25zdCBjcmVhdGVET01Gcm9tU3RyaW5nID0gZG9tU3RyaW5nID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBkb21TdHJpbmc7XG4gIHJldHVybiBkaXYuY2hpbGROb2Rlc1swXTtcbn07XG5cbmNvbnN0IGRhdGFNYWtlciA9IGZ1bmN0aW9uKGNvdW50LCBub2RlS2V5ID0gXCJpZFwiLCBwYXJlbnRLZXkgPSBcInBJZFwiKSB7XG4gIGxldCBub2RlcyA9IFtdLFxuICAgIG1pbiA9IDEwLFxuICAgIG1heCA9IDkwLFxuICAgIGxldmVsID0gMCxcbiAgICBjdXJMZXZlbCA9IFtdLFxuICAgIHByZXZMZXZlbCA9IFtdLFxuICAgIGxldmVsQ291bnQsXG4gICAgaSA9IDAsXG4gICAgaixcbiAgICBrLFxuICAgIGwsXG4gICAgbTtcbiAgd2hpbGUgKGkgPCBjb3VudCkge1xuICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICBsZXZlbENvdW50ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pbjtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBsZXZlbENvdW50ICYmIGkgPCBjb3VudDsgaisrLCBpKyspIHtcbiAgICAgICAgY29uc3QgbiA9IHsgW25vZGVLZXldOiBpLCBbcGFyZW50S2V5XTogLTEsIG5hbWU6IFwiQmlnLVwiICsgaSB9O1xuICAgICAgICBub2Rlcy5wdXNoKG4pO1xuICAgICAgICBjdXJMZXZlbC5wdXNoKG4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGwgPSAwLCBtID0gcHJldkxldmVsLmxlbmd0aDsgbCA8IG0gJiYgaSA8IGNvdW50OyBsKyspIHtcbiAgICAgICAgbGV2ZWxDb3VudCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW47XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBsZXZlbENvdW50ICYmIGkgPCBjb3VudDsgaisrLCBpKyspIHtcbiAgICAgICAgICBjb25zdCBuID0geyBbbm9kZUtleV06IGksIFtwYXJlbnRLZXldOiBwcmV2TGV2ZWxbbF1bbm9kZUtleV0sIG5hbWU6IFwiQmlnLVwiICsgaSB9O1xuICAgICAgICAgIG5vZGVzLnB1c2gobik7XG4gICAgICAgICAgY3VyTGV2ZWwucHVzaChuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwcmV2TGV2ZWwgPSBjdXJMZXZlbDtcbiAgICBjdXJMZXZlbCA9IFtdO1xuICAgIGxldmVsKys7XG4gIH1cbiAgcmV0dXJuIG5vZGVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkVHJlZSA9IChcbiAgdHJlZSxcbiAgY2hpbGRyZW5LZXkgPSBcImNoaWxkcmVuXCIsXG4gIGtleSA9IFwibm9kZUtleVwiLFxuICBwYXJlbnRLZXkgPSBcInBhcmVudFwiXG4pID0+IHtcbiAgY29uc3QgbiA9IFtdOyAvLyDmt7vliqDlpJrkuIDkuKrmlbDnu4TvvIzorrDlvZXniLbnuqdcbiAgY29uc3QgdHJlZU1hcCA9IHt9O1xuICAvLyDliKDpmaQg5omA5pyJIGNoaWxkcmVu77yM5Lyg5YWl55qE5YC85bim5pyJIGNoaWxkcmVu77yM5Lul6Ziy5q2i5a2p5a2Q6YeN5aSNXG4gIHRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIG5vZGVbY2hpbGRyZW5LZXldICYmIGRlbGV0ZSBub2RlW2NoaWxkcmVuS2V5XTtcbiAgfSk7XG5cbiAgdHJlZS5mb3JFYWNoKChub2RlKSA9PiAodHJlZU1hcFtub2RlW2tleV1dID0gbm9kZSkpO1xuICB0cmVlLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSB0cmVlTWFwW25vZGVbcGFyZW50S2V5XV07XG4gICAgLy8g5aaC5p6c5om+5Yiw57Si5byV77yM6YKj5LmI6K+05piO5q2k6aG55LiN5Zyo6aG257qn5b2T5LitLOmCo+S5iOmcgOimgeaKiuatpOmhuea3u+WKoOWIsOWug+WvueW6lOeahOeItue6p+S4rVxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50W2NoaWxkcmVuS2V5XSB8fCBbXTsgLy8gcGFyZW50LmNoaWxkcmVuIO+8jOmBv+WFjeebuOWQjOWAvFxuICAgICAgY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgIHBhcmVudFtjaGlsZHJlbktleV0gPSBjaGlsZHJlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5aaC5p6c5rKh5pyJ5ZyobWFw5Lit5om+5Yiw5a+55bqU55qE57Si5byVSUQs6YKj5LmI55u05o6l5oqKIOW9k+WJjeeahGl0ZW3mt7vliqDliLAgbiDnu5Pmnpzpm4bkuK3vvIzkvZzkuLrpobbnuqdcbiAgICAgIG4ucHVzaChub2RlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbjtcbn07IiwiLypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiBKZWN5dVxuICogQERhdGU6IDIwMjAtMDYtMDUgMTY6MDI6MTJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDYtMDUgMTY6MDI6MzBcbiAqIEBMYXN0RWRpdG9yczogSmVjeXVcbiAqLyBcbmltcG9ydCBFYXN5VHJlZSBmcm9tIFwiLi92aWV3cy9UcmVlLmpzXCJcbmV4cG9ydCBkZWZhdWx0IEVhc3lUcmVlOyIsIi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogSmVjeXVcbiAqIEBEYXRlOiAyMDIwLTA1LTI3IDE3OjAxOjM4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA1LTI4IDIyOjE2OjM0XG4gKiBATGFzdEVkaXRvcnM6IEplY3l1XG4qLyBcbmxldCBub2RlSWRTZWVkID0gMDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIHBhcmVudCkgeyBcbiAgICAvLyBkYXRhIOaVsOaNrlxuICAgIHRoaXMuaWQgPSBub2RlSWRTZWVkKys7XG4gICAgdGhpcy5uYW1lID0gbnVsbDsgXG4gICAgdGhpcy5leHBhbmQgPSBmYWxzZTtcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlOyBcbiAgICBcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDsgLy8gbm9kZU1vZGVsIOexu+Wei1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXSAvLyBjaGlsZHJlbiBkYXRh77yM5a2Y5pS+IG5vZGVNb2RlbCDnsbvlnotcblxuICAgIC8vIOa3u+WKoOS9v+eUqOiAheeahOaVsOaNrlxuICAgIGZvciAobGV0IG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgdGhpc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFkZENoaWxkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZU1vZGVsKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGhhc0NoaWxkKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgc2V0Q2hpbGROb2Rlc1Nob3cobm9kZU1vZGVsKSB7XG4gICAgaWYgKG5vZGVNb2RlbC5oYXNDaGlsZCgpKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGVNb2RlbC5nZXRDaGlsZE5vZGVzKCk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0udmlzaWJsZSkge1xuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRDaGlsZE5vZGVzU2hvdyhpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldENoaWxkTm9kZXNIaWRlKG5vZGVNb2RlbCkge1xuICAgIGlmIChub2RlTW9kZWwuaGFzQ2hpbGQoKSkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2RlTW9kZWwuZ2V0Q2hpbGROb2RlcygpO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udmlzaWJsZSkge1xuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Q2hpbGROb2Rlc1Nob3coaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qXG4gKiBARGVzY3JpcHRpb246IOagkeeahOaguVxuICogQEF1dGhvcjogSmVjeXVcbiAqIEBEYXRlOiAyMDIwLTA1LTI3IDE3OjAxOjMxXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA1LTI5IDIxOjU3OjU4XG4gKiBATGFzdEVkaXRvcnM6IEplY3l1XG4gKi9cblxuaW1wb3J0IE5vZGVNb2RlbCBmcm9tIFwiLi9Ob2RlTW9kZWxcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVNb2RlbCB7XG4gIC8vIOavj+S4quiKgueCuemDvSBuZXcg5LiA5Liq5a6e5L6L5a+56LGh77yM5Y+v6IO95a+55oCn6IO95pyJ5b2x5ZON77yM5L2G5piv6Kej6ICmXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuX3Jvb3RzID0gW107IC8vIOWkmuS4quaguVxuICAgIHRoaXMubm9kZU1vZGVsTWFwID0ge31cbiAgICB0aGlzLmluaXRUcmVlKGRhdGEpO1xuICB9XG5cbiAgaW5pdFRyZWUoZGF0YSkge1xuICAgIC8vIOKcheWKqOaAgeWIm+W7ulxuICAgIC8vIHRoaXMuX3Jvb3QgPSBuZXcgTm9kZU1vZGVsKHsgbmFtZTogXCJwYXJlbnQgMVwiIH0sIG51bGwpO1xuICAgIC8vIGNvbnN0IHBhcmVudDFfMSA9IG5ldyBOb2RlTW9kZWwoeyBuYW1lOiBcInBhcmVudCAxLTFcIiB9LCB0aGlzLl9yb290KTtcbiAgICAvLyBjb25zdCBwYXJlbnQxXzIgPSBuZXcgTm9kZU1vZGVsKHsgbmFtZTogXCJwYXJlbnQgMS0yXCIgfSwgdGhpcy5fcm9vdCk7XG4gICAgLy8gdGhpcy5fcm9vdC5hZGRDaGlsZChwYXJlbnQxXzEpO1xuICAgIC8vIHRoaXMuX3Jvb3QuYWRkQ2hpbGQocGFyZW50MV8yKTtcbiAgICAvLyBjb25zdCBwYXJlbnQxXzFfMSA9IG5ldyBOb2RlTW9kZWwoeyBuYW1lOiBcInBhcmVudCAxLTEtMVwiIH0sIHBhcmVudDFfMSk7XG4gICAgLy8gcGFyZW50MV8xLmFkZENoaWxkKHBhcmVudDFfMV8xKTtcbiAgICAvLyBjb25zdCBwYXJlbnQxXzFfMiA9IG5ldyBOb2RlTW9kZWwoeyBuYW1lOiBcInBhcmVudCAxLTEtMlwiIH0sIHBhcmVudDFfMSk7XG4gICAgLy8gcGFyZW50MV8xLmFkZENoaWxkKHBhcmVudDFfMV8yKTtcbiAgICB0aGlzLmNvbnZlcnREYXRhVG9UcmVlKGRhdGEsIHRoaXMuX3Jvb3RzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpkojlr7nlpJrkuKogcm9vdO+8jOmBjeWOhlxuICAgKi9cbiAgY29udmVydERhdGFUb1RyZWUoZGF0YSwgcGFyZW50KSB7XG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlTW9kZWwoeyBuYW1lOiBpdGVtLm5hbWUgfSwgbnVsbCk7XG4gICAgICB0aGlzLm5vZGVNb2RlbE1hcFtub2RlLmlkXSA9IG5vZGU7XG4gICAgICBwYXJlbnQucHVzaChub2RlKTtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY29udmVydERhdGFUb1RyZWUoaXRlbS5jaGlsZHJlbiwgbm9kZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKiBcbiAgICog5qC55o2uIGlkIOiuvue9ruiKgueCueeahOaYvuekulxuICAqL1xuIHNldENoaWxkTm9kZVZpc2libGUoaWQpIHtcbiAgICAvLyDmoLnmja4gaWQg5om+5YiwIG5vZGVNb2RlbFxuICAgIGNvbnN0IHRhcmdldE5vZGVNb2RlbCA9IHRoaXMuZmluZE5vZGVNb2RlbChpZCk7XG4gICAgaWYgKCF0YXJnZXROb2RlTW9kZWwpIHJldHVybjtcbiAgICAvLyDorr7nva4gdmlzaWJsZSDlgLxcbiAgICBpZighdGFyZ2V0Tm9kZU1vZGVsLnZpc2libGUpIHtcbiAgICAgIHRhcmdldE5vZGVNb2RlbC5zZXRDaGlsZE5vZGVzU2hvdyh0YXJnZXROb2RlTW9kZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXROb2RlTW9kZWwuc2V0Q2hpbGROb2Rlc0hpZGUodGFyZ2V0Tm9kZU1vZGVsKTtcblxuICAgIH1cbiAgfVxuXG4gIGZpbmROb2RlTW9kZWwoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlTW9kZWxNYXBbaWRdO1xuICB9XG5cbiAgZ2V0VHJlZVJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3RzO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvKlxuICogQERlc2NyaXB0aW9uOm12YyDmnrbmnoRcbiAqIOWOn+Wei++8muWFiOa4suafk+agke+8jOWxleW8gOOAgeaUtue8qe+8jOWQjue7rSBjaGVja2JveO+8jOWinuWIoOaUueafpeOAgeS4iuS4i+enu+WKqOOAgeaLluaLve+8jOaKiuaVsOaNruS4juinhuWbvuWIhuemu+W8gFxuICog5oCd6Lev77yaXG4gKiAxLiB2aWV377ya5omA5pyJ55qE5qih54mI6YO95a6e546w5Yib5bu677yM5qCR55qE5a655Zmo44CB5qCR6IqC54K5XG4gKiA8dWwgY2xhc3M9XCJ0aW55LXRyZWVcIj5cbiAqICA8bGkgY2xhc3M9XCJ0aW55LXRyZWUtbm9kZVwiPlxuICogICAgPGRpdiBjbGFzcz1cInRpbnktdHJlZS1ub2RlLWNvbnRlbnRcIj48L2Rpdj5cbiAqICAgIDx1bCBjbGFzcz1cInRpbnktdHJlZS1ub2RlLWNoaWxkcmVuXCI+PC91bD4gIDwhLS0g5a2p5a2Q6IqC54K5LS0+XG4gKiAgPC9saT5cbiAqIDwvdWw+XG4gKiBpbml0U3RhdGUgbW9kZWwg5a2Y5YKo5pWw5o2uXG4gKiByZW5kZXIgdmlldyAr77yI5YyF5ousIGJpbmRFdmVudO+8iVxuICog5aSW6YOoIGNvbnRyb2xsZXIg6Kem5Y+R5LqL5Lu2XG4gKiBAQXV0aG9yOiBKZWN5dVxuICogQERhdGU6IDIwMjAtMDUtMjYgMTU6MTE6MjRcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDYtMDUgMTY6Mjk6NTZcbiAqIEBMYXN0RWRpdG9yczogSmVjeXVcbiAqL1xuXG4vLyDlvJXlhaXmoLflvI9cbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcbi8vIOW8leWFpeeKtuaAgeeuoeeQhlxuaW1wb3J0IFRyZWVNb2RlbCBmcm9tIFwiLi4vbW9kZWwvVHJlZWxNb2RlbFwiO1xuLy8g5byV5YWl5bel5YW357G7XG5pbXBvcnQgeyBjcmVhdGVET01Gcm9tU3RyaW5nIH0gZnJvbSBcIkAvX3V0aWxzL2Jhc2VcIjtcbmNvbnN0IHByZWZpeCA9IFwiZWFzeS10cmVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVhc3lUcmVlIHtcbiAgY29uc3RydWN0b3IocHJvcCkge1xuICAgIC8vIOS8oOWFpemFjee9ru+8jOWIneWni+WMllxuICAgIHRoaXMuZGVmYXVsdE9wdCA9IHtcbiAgICAgIGJhc2VOb2RlOiBudWxsLFxuICAgICAgcGFkZGluZ0xlZnQ6IDE2LFxuICAgICAgZGF0YTogW10sXG4gICAgfTtcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdE9wdCwgcHJvcCk7XG4gICAgdGhpcy5pbml0KCk7IC8vIOWIneWni+WMllxuICAgIHRoaXMucHJlZml4ID0gXCJlYXN5XCI7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRTdGF0ZSgpLnJlbmRlcigpO1xuICB9XG5cbiAgaW5pdFN0YXRlKCkge1xuICAgIC8vIOWunuS+i+WMliBUcmVlU3RvcmXvvIzlrZjlgqjmlbDmja5cbiAgICB0aGlzLnRyZWVNb2RlbCA9IG5ldyBUcmVlTW9kZWwodGhpcy5vcHRzLmRhdGEpO1xuICAgIHRoaXMucm9vdHMgPSB0aGlzLnRyZWVNb2RlbC5nZXRUcmVlUm9vdCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIOa4suafk+agkVxuICAgIC8vIDx1bCBjbGFzcz1cImVhc3ktdHJlZVwiPlxuICAgIC8vIG5ldyBUcmVlTm9kZSgpIOa4suafk1xuICAgIC8vIDwvdWw+XG4gICAgdGhpcy50cmVlV3JhcHBlckRvbSA9IGNyZWF0ZURPTUZyb21TdHJpbmcoYDx1bCBjbGFzcz1cIiR7cHJlZml4fVwiPjwvdWw+YCk7XG4gICAgLy8gY29uc3QgdHJlZU5vZGUgPSBuZXcgbm9kZSh0aGlzLnJvb3QpLnJlbmRlcigpO1xuICAgIHRoaXMucm9vdHMuZm9yRWFjaCgobm9kZU1vZGVsKSA9PiB7XG4gICAgICAvLyDpgY3ljobmuLLmn5NcbiAgICAgIGNvbnN0IHRyZWVOb2RlID0gdGhpcy5yZW5kZXJUcmVlTm9kZShub2RlTW9kZWwpO1xuICAgICAgdGhpcy50cmVlV3JhcHBlckRvbS5hcHBlbmRDaGlsZCh0cmVlTm9kZSk7IC8vIOa3u+WKoOi/m+agueiKgueCuVxuICAgIH0pO1xuICAgIHRoaXMub3B0cy5iYXNlTm9kZS5hcHBlbmRDaGlsZCh0aGlzLnRyZWVXcmFwcGVyRG9tKTsgLy8g5riy5p+T5a6M5oiQ5YaN5re75Yqg6L+bIHdlYiDmtY/op4jlmajvvIzmt7vliqDliLDlpJbpg6jlrrnlmahcblxuICAgIC8vIOe7mSB1bCDlrrnlmajmt7vliqDkuovku7bvvIznu5nmr4/kuKroioLngrnliIbphY0gaWTvvIznhLblkI7ngrnlh7vkuovku7bnmoTml7blgJnvvIzpgJrov4cgaWQg5a+75om+5a+55bqU55qEIG5vZGVEYXRh77yM6L+b6KGM5bGe5oCn5YC855qE5pu05pS577yM5aaCIGV4cGFuZOOAgXZpc2lhYmxl562J44CCXG4gICAgdGhpcy5iaW5kRXZlbnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDmuLLmn5PoioLngrkgbmFtZSDlkowgaWNvblxuICAgKi9cbiAgcmVuZGVyU2VsZXRvcihub2RlTW9kZWwpIHtcbiAgICBjb25zdCB7IG5hbWUsIGV4cGFuZCwgaWQgfSA9IG5vZGVNb2RlbDtcbiAgICBjb25zdCB0aXRsZSA9IGA8c3BhbiBjbGFzcz1cIiR7cHJlZml4fS1ub2RlLXRpdGxlXCI+JHtuYW1lfTwvc3Bhbj5gO1xuICAgIGNvbnN0IHRpdGxlRG9tID0gY3JlYXRlRE9NRnJvbVN0cmluZyh0aXRsZSk7XG4gICAgY29uc3QgZGl2ID0gYDxkaXYgY2xhc3M9XCIke3ByZWZpeH0tbm9kZS1jb250ZW50XCI+PC9kaXY+YDtcbiAgICBjb25zdCBkaXZEb20gPSBjcmVhdGVET01Gcm9tU3RyaW5nKGRpdik7XG4gICAgbGV0IGljb24gPSBudWxsO1xuICAgIC8vIOaWh+S7tuWkueWSjOaWh+S7tuaYvuekuuS4jeWQjOeahCBpY29uXG4gICAgaWYgKG5vZGVNb2RlbC5oYXNDaGlsZCgpKSB7XG4gICAgICAvLyDmlofku7blpLnov5jpnIDopoHljLrliIblsZXlvIDlkozmlLbnvKlcbiAgICAgIGlmIChleHBhbmQpIHtcbiAgICAgICAgZGl2RG9tLnNldEF0dHJpYnV0ZShcImV4cGFuZFwiLCBcInRydWVcIik7XG4gICAgICAgIGljb24gPSBgPHNwYW4gY2xhc3M9XCIke3ByZWZpeH0tbm9kZS1pY29uIGljb25mb250IGNsLWljb24tdW5mb2xkXCI+PC9zcGFuPmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpY29uID0gYDxzcGFuIGNsYXNzPVwiJHtwcmVmaXh9LW5vZGUtaWNvbiBpY29uZm9udCBjbC1pY29uLWZvbGRcIj48L3NwYW4+YDtcbiAgICAgICAgZGl2RG9tLnNldEF0dHJpYnV0ZShcImV4cGFuZFwiLCBcImZhbHNlXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDmlofku7ZcbiAgICAgIGljb24gPSBgPHNwYW4gY2xhc3M9XCIke3ByZWZpeH0tbm9kZS1pY29uXCI+PC9zcGFuPmA7XG4gICAgfVxuICAgIGNvbnN0IGljb25Eb20gPSBjcmVhdGVET01Gcm9tU3RyaW5nKGljb24pO1xuICAgIC8vIGljb25Eb20uaWQgPSBpZDsgLy8g6K6w5b2VIGlk5bGe5oCnXG4gICAgaWNvbkRvbS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJleHBhbmRcIik7XG4gICAgZGl2RG9tLmFwcGVuZENoaWxkKGljb25Eb20pO1xuICAgIGRpdkRvbS5hcHBlbmRDaGlsZCh0aXRsZURvbSk7XG4gICAgcmV0dXJuIGRpdkRvbTtcbiAgfVxuXG4gIHJlbmRlclRyZWVOb2RlKG5vZGVNb2RlbCkge1xuICAgIC8vIOmAkuW9kua4suafk1xuICAgIC8vIOiwg+eUqCBUcmVlTm9kZS5yZW5kZXIoKSDojrflvpfmuLLmn5PnmoTlgLxcbiAgICAvLyA8bGk+XG4gICAgLy8gICA8ZGl2IGNsYXNzPVwiZWFzeS10cmVlLW5vZGUtY29udGVudFwiPjwvZGl2PlxuICAgIC8vICAge3JlbmRlckNoaWxkcmVufVxuICAgIC8vIDwvbGk+XG4gICAgY29uc3QgbGkgPSBgPGxpIGNsYXNzPVwiJHtwcmVmaXh9LW5vZGVcIj48L2xpPmA7IC8vIOiKgueCueaooeeJiFxuICAgIGNvbnN0IGxpRG9tID0gY3JlYXRlRE9NRnJvbVN0cmluZyhsaSk7XG4gICAgY29uc3Qgbm9kZUNvbnRlbnREb20gPSB0aGlzLnJlbmRlclNlbGV0b3Iobm9kZU1vZGVsKTtcbiAgICBsaURvbS5hcHBlbmRDaGlsZChub2RlQ29udGVudERvbSk7XG5cbiAgICBpZiAobm9kZU1vZGVsLmhhc0NoaWxkKCkpIHtcbiAgICAgIC8vIOmAkuW9kuWtqeWtkFxuICAgICAgY29uc3Qgbm9kZU1vZGVscyA9IG5vZGVNb2RlbC5nZXRDaGlsZE5vZGVzKCk7XG4gICAgICBsaURvbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckNoaWxkcmVuKG5vZGVNb2RlbHMsIG5vZGVNb2RlbCkpO1xuICAgIH1cbiAgICAvLyBjb25zdCB7IHZpc2libGUgfSA9IG5vZGVNb2RlbDtcbiAgICAvLyBpZiAoIXZpc2libGUpIHtcbiAgICAvLyAgIC8vIOaYr+WQpuWPr+inge+8jOWQjue7reWGjeeKtuaAgeWQjOatpeWkhOeQhu+8jOebruWJjeWPquaYr+aKveemuyBNb2RlbCDlsYJcbiAgICAvLyAgIGxpRG9tLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgbGlEb20uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAvLyB9XG4gICAgcmV0dXJuIGxpRG9tO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4obm9kZU1vZGVsTGlzdCwgbm9kZU1vZGVsKSB7XG4gICAgLy8gcmVuZGVyVHJlZU5vZGVcbiAgICAvLyA8dWwgY2xhc3M9XCJlYXN5LXRyZWUtbm9kZS1jaGlsZHJlblwiPlxuICAgIC8vIHtyZW5kZXJUcmVlTm9kZX1cbiAgICAvLyB7cmVuZGVyVHJlZU5vZGV9XG4gICAgLy8gPC91bD5cbiAgICBjb25zdCB1bCA9IGA8dWwgY2xhc3M9XCIke3ByZWZpeH0tbm9kZS1jaGlsZHJlblwiPjwvdWw+YDtcbiAgICBjb25zdCB1bERvbSA9IGNyZWF0ZURPTUZyb21TdHJpbmcodWwpO1xuICAgIC8vIOa3u+WKoCBleHBhbmQgYXR0cmlidWUg5ZKMIOaYvuekuuOAgemakOiXj1xuICAgIGNvbnN0IHsgZXhwYW5kIH0gPSBub2RlTW9kZWw7XG4gICAgaWYgKGV4cGFuZCkge1xuICAgICAgdWxEb20uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdWxEb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBub2RlTW9kZWxMaXN0LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIHVsRG9tLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyVHJlZU5vZGUobm9kZSkpOyAvLyDpgJLlvZLmuLLmn5NcbiAgICB9KTtcbiAgICByZXR1cm4gdWxEb207XG4gIH1cblxuICBleHBhbmRDb2xsYXBzZU5vZGUoZXZ0KSB7XG4gICAgLy8gY29uc3QgaWQgPSBldnQudGFyZ2V0LmlkO1xuICAgIC8vIFRPRE8g5ZCO57ut5ZCM5q2l5pS55Y+YIG1vZGVsIOeKtuaAge+8jOeEtuWQjueUseaVsOaNrumpseWKqOabtOaWsOinhuWbvu+8jOaKiuiusOW9leeKtuaAgeS7jiBhdHRyaWJ1dGUg5oq956a75Ye65p2l44CCXG4gICAgLy8gdGhpcy50cmVlTW9kZWwuc2V0Q2hpbGROb2RlVmlzaWJsZShpZCk7IC8vIOWQjOatpeWtkOiKgueCueeahCB2aXNpYmxlIOeKtuaAgVxuXG4gICAgLy8g55u05o6l5pS55Y+YIGRvbSDnmoTlsZXlvIDjgIHmlLbnvKlcbiAgICAvLyDmib7liLDlvZPliY3oioLngrkgZG9tIOeahOeItuS6sueahOWFhOW8n+WFg+e0oO+8jOi/m+ihjOaYvuekuuWkhOeQhu+8jOi/memHjOS4jeW+l+S4jeS9v+eUqCBhdHRyaWJ1dGUg5ZCM5q2l6K6w5b2V5qih54mI54q25oCB55qE566h55CG77yM6L+Z5qC35Zyo5riy5p+T55qE5pe25YCZ5Lmf6ZyA6KaB6K6w5b2VIGV4cGFuZFxuICAgIC8vIGF0dHJpYnVlIOWIsOi/meagt+WQjue7ree7tOaKpOWbsOmavu+8jOebruWJjeayoeacieeUqOS4iiBtb2RlbCDnmoTnirbmgIHpqbHliqggdmlldyDnmoTlsZXlvIDjgIHmlLbnvKnmm7TmlrDjgIJcbiAgICBjb25zdCBlID0gZXZ0IHx8IHdpbmRvdy5ldmVudDtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgaWYgKFxuICAgICAgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImFjdGlvblwiKSAmJlxuICAgICAgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImFjdGlvblwiKSA9PT0gXCJleHBhbmRcIlxuICAgICkge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBsZXQgdHJlZU5vZGVDb24gPSB0YWdOYW1lID09PSBcImRpdlwiID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICBpZiAoXG4gICAgICAgICF0cmVlTm9kZUNvbi5jbGFzc0xpc3QuY29udGFpbnMoYCR7cHJlZml4fS1ub2RlLWNvbnRlbnRgKSB8fFxuICAgICAgICAhdHJlZU5vZGVDb24uZ2V0QXR0cmlidXRlKFwiZXhwYW5kXCIpXG4gICAgICApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCBjaGlsZHJlbkRvbSA9IHRyZWVOb2RlQ29uLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmICh0cmVlTm9kZUNvbi5nZXRBdHRyaWJ1dGUoXCJleHBhbmRcIikgPT09IFwiZmFsc2VcIikge1xuICAgICAgICB0cmVlTm9kZUNvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJjbC1pY29uLXVuZm9sZFwiKTtcbiAgICAgICAgdHJlZU5vZGVDb24uc2V0QXR0cmlidXRlKFwiZXhwYW5kXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgY2hpbGRyZW5Eb20uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWVOb2RlQ29uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImNsLWljb24tdW5mb2xkXCIpO1xuICAgICAgICBjaGlsZHJlbkRvbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRyZWVOb2RlQ29uLnNldEF0dHJpYnV0ZShcImV4cGFuZFwiLCBcImZhbHNlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBUT0RPIOWQjue7reeci+eci+aYr+WQpumcgOimgemAmui/hyBtb2RlbCDmlLnlj5jmnaXmm7TmlrDop4blm77vvIzkvYbmmK/opoHlgZrlpb0gdmlydHVhbCBET00g5LyY5YyW77yM5b2T5YmN55qE5Z+65pys5bGV5byA5LiO5pS257yp5rKh5b+F6KaB77yM5ZCO57ut6ZyA6KaBZHJvcOOAgeetieWGjeiAg+iZkVxuICB9XG5cbiAgYmluZEV2ZW50KCkge1xuICAgIHRoaXMudHJlZVdyYXBwZXJEb20uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHRoaXMuZXhwYW5kQ29sbGFwc2VOb2RlLmJpbmQodGhpcyksXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bmJpbmRFdmVudCgpIHtcbiAgICB0aGlzLnRyZWVXcmFwcGVyRG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLm9uTm9kZUV4cGFuZC5iaW5kKHRoaXMpLFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyDnp7vpmaTmoJFcbiAgICB0aGlzLm9wdHMuYmFzZU5vZGUucmVtb3ZlQ2hpbGQodGhpcy50cmVlV3JhcHBlckRvbSk7XG4gICAgLy8g56e76Zmk5LqL5Lu255uR5ZCsXG4gICAgdGhpcy51bmJpbmRFdmVudCgpO1xuICB9XG59XG4iLCIvLyBUT0RPIOiHquWKqOWMluivu+WFpeaWh+S7tuWkuVxuaW1wb3J0IEVhc3lUcmVlIGZyb20gXCIuL2Vhc3lUcmVlL3NyYy9pbmRleFwiXG5pbXBvcnQgTGlzdFZpZXcgZnJvbSBcIi4vbGlzdFZpZXcvaW5kZXhcIlxuZXhwb3J0IGRlZmF1bHQge1xuICBFYXN5VHJlZSxcbiAgTGlzdFZpZXdcbn07IiwiLypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiBKZWN5dVxuICogQERhdGU6IDIwMjAtMDYtMDUgMTU6NTc6MTJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDYtMDUgMTU6NTk6NTFcbiAqIEBMYXN0RWRpdG9yczogSmVjeXVcbiAqLyBcbmNvbnN0IHNheSA9IFwiSGVsbG9cIlxuZXhwb3J0IGRlZmF1bHQgc2F5OyJdLCJzb3VyY2VSb290IjoiIn0=