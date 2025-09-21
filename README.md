[![Deploy](https://github.com/abianche/skroll-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/abianche/skroll-website/actions/workflows/deploy.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=abianche_skroll-website&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=abianche_skroll-website)

# Skroll Website

Simple Docusaurus site for the Skroll project.

## Branding

- UnDraw illustration accent color: `#2e8555`

## Requirements

- Node.js 22+
- pnpm 10+

## Quick Start

```bash
pnpm install
pnpm start
```

This starts the dev server and opens the site. Edits hot‑reload.

## Build

```bash
pnpm build
```

Outputs static files to `build/`.

## Preview Production Build

```bash
pnpm serve
```

Serves the contents of `build/` locally.

## Scripts

- `pnpm start`: Run dev server
- `pnpm build`: Generate static site
- `pnpm serve`: Preview the production build
- `pnpm clear`: Clear Docusaurus cache

## Troubleshooting

- Stale build: run `pnpm clear` then `pnpm start`
- Port in use: set `PORT=3001 pnpm start`
