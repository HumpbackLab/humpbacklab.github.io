#!/bin/bash

# 自动化部署脚本
# 用于构建并部署网站到远程服务器

set -e  # 遇到错误时停止执行

# 获取脚本所在目录并切换到项目根目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."  # 切换到项目根目录

echo "开始部署流程..."

# 1. 构建所有PDF手册
echo "步骤 1: 构建PDF手册..."
bash scripts/build-manuals.sh

# 2. 构建网站
echo "步骤 2: 构建网站..."
npm run build

# 3. 检查远程服务器目录
echo "步骤 3: 检查远程服务器..."
REMOTE_DIR="/var/www/humpbacklab.com"
SERVER="root@120.27.202.1"

# 验证服务器连接
if ssh -o ConnectTimeout=10 $SERVER 'exit' 2>/dev/null; then
    echo "成功连接到远程服务器"
else
    echo "错误: 无法连接到远程服务器 $SERVER"
    exit 1
fi

# 4. 同步文件到远程服务器
echo "步骤 4: 同步文件到远程服务器 $SERVER:$REMOTE_DIR..."
rsync -avz --delete .vitepress/dist/ $SERVER:$REMOTE_DIR/

# 5. 设置正确的权限
echo "步骤 5: 设置文件权限..."
ssh $SERVER "chown -R www-data:www-data $REMOTE_DIR && chmod -R 644 $REMOTE_DIR && find $REMOTE_DIR -type d -exec chmod 755 {} \;"

echo ""
echo "部署完成！"
echo "网站已更新到 $SERVER:$REMOTE_DIR"
echo ""
echo "更新内容包括:"
echo "- 网站名称从'座头鲸工作室'更新为'座头鲸实验室'"
echo "- 页脚添加了备案信息并链接到https://beian.miit.gov.cn/"
echo "- 更新了子模块到最新版本"
echo "- 生成并添加了quick-tutorial.pdf"
echo "- 移除了产品页面的在线PDF查看功能"
