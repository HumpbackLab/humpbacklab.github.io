#!/bin/bash

# 安装手册编译所需的字体
# 支持 Ubuntu/Debian 系统

set -e

echo "==================================="
echo "安装手册编译所需字体"
echo "==================================="

# 检测系统类型
if command -v apt &> /dev/null; then
    echo "检测到 Debian/Ubuntu 系统，使用 apt 安装..."

    echo ""
    echo "更新软件包列表..."
    sudo apt update

    echo ""
    echo "安装 Noto Sans 基础字体..."
    sudo apt install -y fonts-noto-core

    echo ""
    echo "安装 Noto Sans CJK (中日韩字体)..."
    sudo apt install -y fonts-noto-cjk

    echo ""
    echo "字体安装完成！"

elif command -v dnf &> /dev/null; then
    echo "检测到 Fedora/RHEL 系统，使用 dnf 安装..."

    echo ""
    echo "安装 Google Noto 字体..."
    sudo dnf install -y google-noto-sans-fonts google-noto-sans-cjk-sc-fonts

    echo ""
    echo "字体安装完成！"

elif command -v pacman &> /dev/null; then
    echo "检测到 Arch Linux 系统，使用 pacman 安装..."

    echo ""
    echo "安装 Noto 字体..."
    sudo pacman -S --noconfirm noto-fonts noto-fonts-cjk

    echo ""
    echo "字体安装完成！"

else
    echo "未检测到支持的包管理器，将手动下载安装字体..."

    # 创建字体目录
    FONT_DIR="$HOME/.local/share/fonts"
    mkdir -p "$FONT_DIR"

    # 临时目录
    TMP_DIR=$(mktemp -d)
    cd "$TMP_DIR"

    echo ""
    echo "下载 Noto Sans 字体..."
    wget -q https://github.com/google/fonts/raw/main/ofl/notosans/NotoSans-Regular.ttf
    wget -q https://github.com/google/fonts/raw/main/ofl/notosans/NotoSans-Bold.ttf
    mv NotoSans-*.ttf "$FONT_DIR/"

    echo ""
    echo "下载 Noto Sans CJK SC 字体..."
    wget -q https://github.com/googlefonts/noto-cjk/releases/download/Sans2.004/NotoSansCJKsc.zip
    unzip -q NotoSansCJKsc.zip
    mv *.otf "$FONT_DIR/"

    # 清理临时文件
    cd ~
    rm -rf "$TMP_DIR"

    echo ""
    echo "刷新字体缓存..."
    fc-cache -fv > /dev/null 2>&1

    echo ""
    echo "字体安装完成！"
fi

echo ""
echo "==================================="
echo "验证字体安装"
echo "==================================="

echo ""
echo "系统可用的 Noto 字体："
fc-list | grep -i "noto" | cut -d: -f2 | sort -u

echo ""
echo "Typst 可用的 Noto 字体："
if command -v typst &> /dev/null; then
    typst fonts 2>/dev/null | grep -i "noto" || echo "（需要重启终端后生效）"
elif [ -f "$HOME/.cargo/bin/typst" ]; then
    "$HOME/.cargo/bin/typst" fonts 2>/dev/null | grep -i "noto" || echo "（需要重启终端后生效）"
else
    echo "未找到 typst 命令"
fi

echo ""
echo "==================================="
echo "安装完成！"
echo "==================================="
echo ""
echo "现在可以运行以下命令编译手册："
echo "  npm run build:manuals"
echo ""
