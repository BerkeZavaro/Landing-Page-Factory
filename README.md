
# Landing Factory (Eleventy)

Generate lots of compliant, fast static landing pages for supplement campaigns.

## Quick start
```bash
npm i
npm run dev   # http://localhost:8080
npm run build # outputs to _site/
```

## How it works
- Each **product** lives under `src/products/<product>/` with a shared `product.json`.
- Each **angle** (e.g., `brain`, `muscle`) is a Markdown file in `src/products/<product>/angles/` using the `landing.njk` template.
- The template merges angle-specific front matter with `product.json` to output a full landing page.

## Create a new angle quickly
Duplicate one of the files in `src/products/creatine/angles/`, adjust the front matter, and content blocks.

## Deploy
- Netlify: set build command to `npm run build`, publish directory `_site`.
- Vercel: add a build step `npx @11ty/eleventy` and set output to `_site`.

## Notes
- Variants intended only for paid traffic should include `noindex: true` in front matter.
- Use the `claims` block with citations; the template auto-renders a disclaimer footer.
