/*
 * @Description: 
 * @Author: Jecyu
 * @Date: 2020-05-30 23:31:43
 * @LastEditTime: 2020-05-31 00:33:00
 * @LastEditors: Jecyu
 */ 
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
const nodes = dataMaker(5000, "nodeKey", "parentKey");
console.log("data Maker => ", );
