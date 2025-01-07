# `dlGithub`


## Development: Getting Started

-   `npm run dev` - Starts a dev server at http://localhost:5173/

-   `npm run build` - Builds for production, emitting to `dist/`. Prerenders all found routes in app to static HTML

-   `npm run preview` - Starts a server at http://localhost:4173/ to test production build locally

## Development: With docker

If you don't want to install NPM on your host machine, you can set up a temporary development enviornment using Docker:
- `git clone https://github.com/dylanpdx/dlgithub.git`
- `cd dlgithub`
- `docker run --rm -it --entrypoint bash -p 5173:5173 -v .:/dlgithub node:20 -c "eval cd /dlgithub && npm install && CHOKIDAR_USEPOLLING=true npm run dev -- --host 0.0.0.0"`

The dev server should be at http://localhost:5173/

Changing any file in your cloned directory will refresh the page.