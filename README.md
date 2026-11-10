# StandWithUs UK Explore Activity Hub

A responsive landing page for the StandWithUs UK Explore interactive learning collection.

## What is included

1. All eight supplied activity links.
2. Search and category filters.
3. Original visual artwork for each activity.
4. Your supplied StandWithUs UK logo.
5. Mobile, tablet and desktop layouts.
6. A simple structure for adding future activities.

There are no packages, installations or external services required. Everything is plain HTML, CSS and JavaScript. All images are included locally.

## Publish with GitHub Pages

1. Create a new **public** GitHub repository. Suggested name: `explorehub`.
2. Download and extract the ZIP file containing this website.
3. In your new GitHub repository, choose **Add file**, then **Upload files**.
4. Upload `index.html`, `styles.css`, `script.js`, `README.md` and the entire `assets` folder. The files must be in the **root** of the repository, not within another folder named `explorehub`.
5. Choose **Commit changes**. Suggested commit message: `Add StandWithUs UK Explore activity hub`.
6. Open **Settings**, then **Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main`, choose `/ (root)` and save.
7. Your website will use a URL similar to `https://yehuda-swu.github.io/explorehub/` if you use the suggested repository name and your existing GitHub username.

Do not upload the ZIP itself. Extract it and upload its contents.

## Add another activity

Open `script.js` and find `const GAMES = [` near the top. Copy an existing game object, paste the copy as another entry in the array, and update the fields.

Example:

```javascript
{
  title: 'Example New Game',
  subtitle: 'A short description students can understand.',
  category: 'history',
  categoryLabel: 'HISTORY & DECISIONS',
  type: 'Decision simulation',
  era: 'NEW ACTIVITY',
  cover: 'assets/cover-1967.svg',
  url: 'https://example.github.io/newgame/'
},
```

Use one of these category values: `history`, `peace` or `classroom`. For the artwork, you can reuse any existing cover or upload a new `.svg`, `.png` or `.jpg` to the `assets` folder and change the `cover` path.

The total activity count updates automatically. Search and filtering will immediately include the new activity.

## Update via Git commands

After editing the files in a local copy of the repository:

```bash
git add .
git commit -m "Update Explore activity hub"
git push origin main
```

## Files

`index.html` contains the page structure and headings.

`styles.css` contains the colours, layouts and responsive design.

`script.js` contains the activity descriptions, links, search and filters.

`assets/` contains the supplied logo, favicon and original SVG cover illustrations.

## Notes

The hub links directly to your existing GitHub Pages activities. It does not copy or change the games themselves. Each activity opens in a new browser tab.

© StandWithUs UK. The uploaded brand logo remains the organisation's asset.
