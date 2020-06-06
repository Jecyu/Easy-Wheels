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
import "../styles/index.css";
// 引入状态管理
import TreeModel from "../model/TreelModel";
// 引入工具类
import { createDOMFromString } from "@/_utils/base";
const prefix = "easy-virtual-tree";
export default class VirtualTree {
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
    this.treeModel = new TreeModel(this.data);
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
    this.domRefs.treeWrapper = createDOMFromString(
      `<div class="${prefix}" style="height: ${this.treeWrapperHeight}px"></div>`
    );
    this.domRefs.treePhantom = createDOMFromString(
      `<div class="${prefix}-phantom"></div>`
    );
    this.domRefs.treeContent = createDOMFromString(
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
    const titleDom = createDOMFromString(title);
    const div = `<div class="${prefix}-node-content"></div>`;
    const divDom = createDOMFromString(div);
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
    const iconDom = createDOMFromString(icon);
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
    const liDom = createDOMFromString(li);
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
