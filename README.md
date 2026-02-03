# HumpbackLab 官方网站

本项目使用 VitePress 构建，包含了我们的产品用户手册。

## 项目结构

```
.
├── manuals/                    # 手册子模块
│   ├── Android-ELRS-manual/   # Android-ELRS 用户手册 (Typst)
│   └── flight-controller-manual/ # 飞控用户手册 (Typst)
├── scripts/                    # 构建脚本
│   └── build-manuals.sh       # 编译手册为 PDF
├── public/                     # 静态资源 (构建后生成)
│   └── manuals/               # 编译后的 PDF 文件
├── .vitepress/                # VitePress 配置
└── *.md                       # Markdown 页面

```

## 环境要求

- Node.js 18+
- Typst (用于编译手册)
- 中文字体 (Noto Sans, Noto Sans CJK SC)

### 安装 Typst

**Linux:**
```bash
# 使用 Cargo 安装
cargo install typst-cli
```

**macOS:**
```bash
brew install typst
```

**Windows:**
```bash
winget install --id Typst.Typst
```

或访问 [Typst Releases](https://github.com/typst/typst/releases) 下载安装。

### 安装字体

**Linux (推荐使用脚本):**
```bash
# 运行字体安装脚本
bash scripts/install-fonts.sh
```

**手动安装 (所有系统):**

Ubuntu/Debian:
```bash
sudo apt update
sudo apt install fonts-noto-core fonts-noto-cjk
```

macOS:
```bash
brew tap homebrew/cask-fonts
brew install font-noto-sans font-noto-sans-cjk-sc
```

Windows: 访问 [Google Fonts](https://fonts.google.com/noto) 下载并安装 Noto Sans 和 Noto Sans CJK SC。

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 编译手册 (需要先安装 Typst)
npm run build:manuals

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 手册编译

手册源文件使用 Typst 格式编写：

- `manuals/Android-ELRS-manual/user-guide.typ` - Android-ELRS 用户手册
- `manuals/flight-controller-manual/main.typ` - 飞控用户手册

运行 `npm run build:manuals` 会将这些文件编译为 PDF 并放置到 `public/manuals/` 目录。

## 更新手册

手册存储在 Git 子模块中。要更新手册内容：

```bash
# 进入子模块目录
cd manuals/Android-ELRS-manual
# 或
cd manuals/flight-controller-manual

# 拉取最新更改
git pull origin main

# 返回主项目
cd ../..

# 提交子模块更新
git add manuals/
git commit -m "Update manual submodules"
```

## 部署

网站可以部署到任何静态托管服务，如：

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

在部署前确保运行 `npm run build` 以编译手册和构建网站。

## License

请查看各个子模块的 LICENSE 文件了解其许可证信息。
