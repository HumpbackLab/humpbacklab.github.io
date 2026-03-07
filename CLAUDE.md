# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the HumpbackLab official website, built with VitePress. It contains product documentation and user manuals for HumpbackLab products, particularly:

- **PocketTX**: A lightweight RC controller solution for Android phones
- **LightFin**: A compact flight controller for 1S powered aircraft

## Architecture

- **Framework**: VitePress static site generator
- **Structure**:
  - `*.md`: Main website content pages
  - `.vitepress/config.mts`: Site configuration with bilingual support (Chinese/English)
  - `public/manuals/`: Compiled PDF manuals served as static assets
  - `manuals/`: Git submodules containing Typst source files for manuals
  - `scripts/build-manuals.sh`: Builds Typst manuals to PDF

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Compile manuals to PDF (requires Typst installed)
npm run build:manuals

# Build production site
npm run build

# Preview production build
npm run preview
```

## Manual Compilation

The project uses Typst for manual creation:

1. Manuals are stored as Git submodules in `manuals/`
2. `npm run build:manuals` compiles Typst sources to PDF
3. PDFs are placed in `public/manuals/` for distribution
4. Requires Typst installation: https://github.com/typst/typst

## Localization

- Bilingual support (Chinese/English) via VitePress locale configuration
- Separate navigation and content for each language
- Chinese as root locale, English under `/en/` path

## Deployment

- GitHub Actions automatically deploys to GitHub Pages on `main` branch pushes
- Workflow builds manuals, compiles site, and deploys to `gh-pages` branch
- Manual deployment: `npx gh-pages -d .vitepress/dist`

## Product Information

- Product pages: `pockettx.md`, `lightfin.md`
- Technical specifications and user manuals linked as PDF downloads
- Community support links and contact information

## Updating Manuals

Manuals are in Git submodules:
```bash
# Update manual submodules
cd manuals/Android-ELRS-manual  # or manuals/flight-controller-manual
git pull origin main
cd ../..
git add manuals/
git commit -m "Update manual submodules"
```