# @jt-view-exports-svg/docs

Documentation website for the **View Exports SVG** project, built with Docusaurus.

## Role In The Project

This package contains the official guides, development documentation, and resources for all internal packages. It also hosts the changelog and mirrors the extension's brand and UI.

## Tech Stack

- Docusaurus 3
- React + TypeScript
- Tailwind CSS + HeroUI components

## Dependencies

- Production: none (does not depend on workspace packages)
- Runtime stack: Docusaurus + React

## Local Development

From the workspace root, install dependencies:

```bash
pnpm install
pnpm -F @jt-view-exports-svg/docs run start
```

- Dev server runs on `http://localhost:3000` by default
- Hot reloads on file changes

## Build

```bash
pnpm -F @jt-view-exports-svg/docs run build
```

- Output is written to `packages/docs/build`

## Environment Variables (Optional)

Required only for production or search indexing:

```bash
SITE_URL=https://your-domain.example
ALGOLIA_APP_ID=...
ALGOLIA_API_KEY=...
ALGOLIA_INDEX_NAME=...
ALGOLIA_SITE_VERIFICATION=...
```

Local development works without these variables; search and verification features will be skipped.

## Notes for Contributors

- Changelog is sourced from root `CHANGELOG.md`
- Custom plugins and theming live in `packages/docs/src/plugins`
