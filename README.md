# Soulborne: Oath of Vengeance — teaser site

A one-page React site for *Soulborne: Oath of Vengeance*, Book One of a high fantasy trilogy.
The art (sigil and drifting embers) is drawn in SVG and CSS, so the site needs no image files.

## Run it locally

```bash
npm install
npm run dev      # opens a live-reloading dev server
npm run build    # makes the production site in dist/
npm run preview  # serves the built site to check it
```

Requires Node.js 20 or newer.

## How it is built

- **Vite + React.** Vite runs the dev server and builds the site. React builds the page from components.
- **One component per section** in `src/components/`. Content that changes (books, world entries,
  the chapter excerpt) sits in plain lists at the top of each file, so editing copy is easy.
- **All styling** lives in `src/index.css`, with the colors defined once as variables at the top.

## CI/CD

`.github/workflows/deploy.yml` runs on every push and pull request:

1. Installs dependencies with `npm ci`.
2. Builds the site with `npm run build`.
3. On pushes to `main`, deploys the build to GitHub Pages.

To turn deployment on: in the GitHub repo, go to **Settings → Pages** and set **Source** to
**GitHub Actions**. The site URL appears in the workflow run after the first deploy.

## To do before launch

- [ ] Replace the world entries in `src/components/World.jsx`
- [ ] Paste the opening excerpt into `src/components/Chapter.jsx`
- [ ] Replace `[Author name]` in `src/components/Footer.jsx`
- [ ] Connect the signup form in `src/components/Signup.jsx` to an email service
- [ ] Add a release date or retailer links when they exist

## Later

Defining the hosting as Terraform and deploying to AWS (S3 and CloudFront) instead of GitHub Pages.
