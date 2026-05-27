# Academic Personal Website

A minimalist, humanities-style academic site built with HTML and CSS. No build step required.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Homepage |
| `about.html` | Biography, education, CV download |
| `publications.html` | Articles, reviews, working papers |
| `research.html` | Research projects |
| `contact.html` | Email, office, links |

## Customize

1. Replace **Your Name**, affiliations, and placeholder text in every HTML file.
2. Update email and social links in the footer and contact page.
3. Add your CV: place a PDF at `assets/cv.pdf` (the About page links to this file).

## Publish on GitHub Pages

1. Create a new repository on GitHub.
2. Upload all files (keep `index.html` at the root).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set Source to **Deploy from a branch**.
5. Choose branch `main` (or `master`) and folder `/ (root)`.
6. Save. Your site will be live at `https://yourusername.github.io/repository-name/`.

If you use a custom domain, add a `CNAME` file with your domain name.

## Local preview

Open `index.html` in a browser, or run a simple server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

Replace this section with your preferred license, or remove it.
