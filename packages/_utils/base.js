/*
 * @Description: 
 * @Author: Jecyu
 * @Date: 2020-05-27 15:07:58
 * @LastEditTime: 2020-06-06 12:10:18
 * @LastEditors: Jecyu
 */ 
export const createDOMFromString = domString => {
  const div = document.createElement('div');
  div.innerHTML = domString;
  return div.childNodes[0];
};

export const dataMaker = function(count, nodeKey = "id", parentKey = "pId") {
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

export const buildTree = (
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