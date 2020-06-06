/*
 * @Description: 树的数据管理
 * @Author: Jecyu
 * @Date: 2020-05-27 17:01:31
 * @LastEditTime: 2020-06-06 17:03:14
 * @LastEditors: Jecyu
 */

import NodeModel from "./NodeModel";
export default class TreeModel {
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
      const node = new NodeModel({ name: item.name }, parent);
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
