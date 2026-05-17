# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Three-file SPA: `index.html` (HTML structure ~86 lines), `style.css` (CSS ~444 lines), `app.js` (JS ~2700 lines). Plus PWA assets (`manifest.json`, `service-worker.js`, `icon-*.svg`). No build step, no framework, no dependencies. Hosted on GitHub Pages at `jianxingw169-boop.github.io/custom-furniture/`.

## Architecture

### Single-file structure
All CSS (~360 lines) is in `<style>` at the top, all JS (~2900 lines) in a single `<script>` at the bottom. 6 pages (tabs) shown/hidden via CSS `display:none/active`.

### Page modules (bottom tab bar)
| Tab | Module | Key Functions |
|-----|--------|--------------|
| 尺寸 | Dimensions | `renderDim()`, `showDimDetail()`, `renderCustomDims()`, `renderSpaceEstimator()` |
| 量尺 | Measure | `renderMeasure()`, `showMeasureForm()`, `saveMeasureForm()`, `calcRecs()` |
| 报价 | Quote | `renderQuote()`, `calcQuote()`, `showQDetail()` |
| 流程 | Workflow | `renderWF()`, `toggleCheck()`, `completeStep()` |
| 材料 | Materials | `renderMat()`, `showMatDetail()` |
| 推荐 | Recommend | `renderRecommend()`, `renderDiscover()`, `selectStyle()`, `generateStyledPlans()`, `renderStyledResults()` |

### localStorage keys
All persistence uses localStorage:
- `ff_favs` — favorite dimension IDs
- `ff_measure` — measurement records array
- `ff_quotes` — quote records array
- `ff_wf` — workflow progress per project
- `ff_brand` — brand settings (company, phone, wechat, address)
- `ff_customers` — customer records array
- `ff_plans` — saved plan thumbnails with metadata
- `ff_customDims` — user-defined custom dimensions
- `ff_hasSeenWelcome` — first-run welcome flag
- `ff_uploadedImgs` — user-uploaded plan images (base64)
- `ff_refSource` — preferred search source ('znzmo'|'xiaohongshu')
- `ff_spaceDims` — per-space-type room dimensions

### Key Data Flows

**AI reference images for plans:** `genRefCard()` creates a canvas card (layout diagram + color swatches + labels) as the immediate default image. Background AI via `bgLoadPlanImages()` tries 4 proxy levels for pollinations.ai, with Unsplash CDN as final fallback. In China, canvas card stays; outside China AI images replace it.

**Quote export:** Two paths — `renderWithHtml2canvas()` using CDN-loaded html2canvas (primary), or `renderFallbackCanvas()` using pure Canvas API (fallback for WeChat/offline).

**Style recommendation engine:** `generateStyledPlans()` generates layout configurations based on space type × style × grade. Each style (STYLE_DB) has 13+ entries with materials, colors, hardware, tips.

**Image search links:** Opens znzmo.com or xiaohongshu.com search in system browser. Uses direct href construction via `refSearchUrl(q)` — onclick onclick handlers don't work reliably on desktop for cross-origin navigation.

## Commands

### Deploy
```bash
git push origin main
```
GitHub Pages auto-deploys from main branch. No build step.

### Development
No build/dev server needed — open `index.html` directly in browser or serve with:
```bash
python -m http.server 8000
```

### Git
```bash
git add index.html manifest.json service-worker.js icon-*.svg
git commit -m "description"
git push origin main
```

## Key Conventions

- **Single file only** — all code goes into `index.html`. Only exceptions: `manifest.json`, `service-worker.js`, `icon-*.svg`.
- **Mobile-first** — viewport locked, bottom tab nav, touch interactions, safe-area-inset support.
- **No backend** — everything in localStorage. Data import/export via JSON file.
- **Chinese-first** — all UI text in Chinese. Google Fonts may be blocked in China, font fallback stack guarantees readability.
- **Canvas over DOM** — plan images prefer Canvas rendering (always works offline) over AI/network images.
- **CSS custom properties** — `--clay`, `--brown`, `--cream`, etc. for consistent theming.
