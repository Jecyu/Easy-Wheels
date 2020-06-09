###
 # @Description: 
 # @Author: Jecyu
 # @Date: 2020-06-05 16:58:23
 # @LastEditTime: 2020-06-09 20:54:06
 # @LastEditors: Jecyu
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
rm easy-wheels.min.js easy-wheels.js easy-wheels.js.map
yarn build

git init
git add -A
git commit -m '🎉deploy'
git push -f git@github.com:Jecyu/Easy-Wheels.git master:gh-pages