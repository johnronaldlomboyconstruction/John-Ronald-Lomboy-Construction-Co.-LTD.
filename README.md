# John Ronald Lomboy Construction Co. LTD. — GitHub Pages Package

This is a static GitHub Pages ready website package.

## File structure

- `index.html` — main homepage
- `style.css` — site styles
- `script.js` — interactive functions, theme toggle, gallery, inquiry storage, hidden admin
- `assets/` — local SVG artwork used by the site

## How to upload to GitHub Pages

1. Open your repository:
   `https://github.com/johnronaldlomboyconstruction/John-Ronald-Lomboy-Construction-Co.-LTD.`
2. Upload **all files and folders** from this package to the repository root.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your active branch)
   - **Folder:** `/ (root)`
5. Save.
6. Wait for GitHub Pages to publish the site.

## Notes

- The site uses only static HTML, CSS, and JS.
- All paths are relative, so it works on GitHub Pages.
- Inquiry form entries are saved in browser `localStorage` only.
- Hidden admin panel:
  - Triple-click the **⚙ Admin** button at the lower left, or
  - Press **Ctrl + Shift + A**
- Dark/light theme is saved in `localStorage`.

## Customize later

You can replace any SVG in `assets/` with your real project images using the same file names.
