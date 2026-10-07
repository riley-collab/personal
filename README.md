# Riley Morris — personal site

Built with Vite and React, deployed to GitHub Pages at https://riley-collab.github.io/.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173/
npm run build    # production build into dist/
npm run format   # prettier
```

## Content

Everything on the page comes from [`src/data.js`](src/data.js): jobs, skills and projects.
The CV served by the Download button is [`src/assets/Riley-Morris-CV.pdf`](src/assets/Riley-Morris-CV.pdf).

## Contact form (optional)

The form is powered by EmailJS and only appears when these are set. Locally, put them in `.env`;
for the deployed site, add them as **repository variables** (Settings → Secrets and variables → Actions → Variables):

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Without them the section shows direct email/LinkedIn/GitHub links instead.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
This needs **Settings → Pages → Build and deployment → Source: GitHub Actions**.
