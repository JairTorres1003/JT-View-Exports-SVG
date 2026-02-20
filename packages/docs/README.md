# View Exports SVG: Documentation Site

Welcome to the `packages/docs` workspace. This folder contains the documentation and marketing site for the View Exports SVG extension. The site is a Docusaurus app with a custom changelog pipeline and a UI layer that mirrors the extension's brand.

## What lives here

- Product documentation, guides, and usage examples.
- A changelog section generated from the root `CHANGELOG.md` files.
- Custom plugins and theming (Tailwind, HeroUI components, and Docusaurus theme config).

## Tech stack

- Docusaurus 3
- React + TypeScript
- Tailwind CSS + HeroUI

## Local development

From the repo root, install dependencies:

```bash
pnpm install
```

Start the docs site:

```bash
pnpm --filter @jt-view-exports-svg/docs start
```

The dev server runs on `http://localhost:3000` by default and reloads on file changes.

## Build

```bash
pnpm --filter @jt-view-exports-svg/docs build
```

The build output is written to `packages/docs/build`.

## Environment variables (optional)

These variables are only needed for production or search indexing:

```bash
SITE_URL=https://your-domain.example
ALGOLIA_APP_ID=...
ALGOLIA_API_KEY=...
ALGOLIA_INDEX_NAME=...
ALGOLIA_SITE_VERIFICATION=...
```

If these are not set, the local dev server still works; search and verification tags will be skipped.

## Notes for contributors

- The changelog is sourced from the repository root. Update `CHANGELOG.md` and the docs site will reflect it.
- Custom plugins live in `packages/docs/src/plugins`.
