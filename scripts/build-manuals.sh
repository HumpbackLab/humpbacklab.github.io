#!/bin/bash

# 编译 manual submodules 为 PDF
# 需要安装 typst: https://github.com/typst/typst

set -e

echo "开始编译手册..."

# 添加常见的 typst 安装路径到 PATH
export PATH="$HOME/.cargo/bin:$HOME/.local/bin:$PATH"

# 检查 typst 是否安装
if ! command -v typst &> /dev/null; then
    echo "错误: 未找到 typst 命令"
    echo "请安装 typst: https://github.com/typst/typst#installation"
    exit 1
fi

# 创建 public 目录用于存放静态资源
mkdir -p public/manuals

# 编译 Android-ELRS 手册
echo "编译 Android-ELRS 用户手册为 PDF..."
cd manuals/Android-ELRS-manual
typst compile user-guide.typ ../../public/manuals/android-elrs-manual.pdf
cd ../..

# 编译飞控手册
echo "编译 AT32F435mini 飞控用户手册为 PDF..."
cd manuals/flight-controller-manual
typst compile main.typ ../../public/manuals/flight-controller-manual.pdf
cd ../..

echo ""
echo "复制 assets 资源文件..."
rm -rf public/manuals/Android-ELRS-manual public/manuals/flight-controller-manual
mkdir -p public/manuals/Android-ELRS-manual public/manuals/flight-controller-manual
cp -r manuals/Android-ELRS-manual/assets public/manuals/Android-ELRS-manual/
cp -r manuals/flight-controller-manual/assets public/manuals/flight-controller-manual/

echo ""
echo "手册编译完成！"
echo "- Android-ELRS 手册: public/manuals/android-elrs-manual.pdf"
echo "- 飞控手册: public/manuals/flight-controller-manual.pdf"
echo "- Assets 资源文件已复制"
