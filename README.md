Deployment:

The site auto-deploys via GitHub Actions on every push to `main` (see `.github/workflows/node.js.yml`). It builds the app and publishes it to GitHub Pages — no manual `npm run deploy` needed.

Live site: https://sandeeptiwari.me (custom domain, configured via `public/CNAME` and DNS records at the registrar)

## How to run

1. Run the app with Docker Compose:

   docker compose up

> If your system does not recognize `docker compose`, install the Docker Compose plugin or use `docker-compose up` instead.
