# ulTrain Marketing Site

This repository contains the marketing site for **ulTrain**, an endurance training and race planning app. It is designed to be deployed with **GitHub Pages**.

## Structure

- `index.html` – main landing page served by GitHub Pages.
- `assets/js/main.js` – JavaScript for navigation, scroll animations, and parallax effects.
- `images/` – static image assets used throughout the page.
- `CNAME` – custom domain configuration for GitHub Pages.

## GitHub Pages

The site is intended to be hosted from the root of the repository using GitHub Pages:

1. Go to **Settings → Pages** in your GitHub repository.
2. Select the **`main` branch** and the **root (`/`)** folder.
3. Save to enable GitHub Pages.

GitHub Pages will pick up `index.html` automatically.

## Local development

You can open `index.html` directly in a browser, or serve the folder with any static file server, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

