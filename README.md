# StandWithUs UK Explore Activity Hub

A complete, responsive website for the StandWithUs UK Explore programme.

## What is included

* All eight existing activities and their original web links.
* The eight supplied game cover images.
* The supplied StandWithUs UK logo, with a transparent lower background for its UK lettering.
* The Explore programme logo and adapted header mark, both displayed without white background boxes.
* Search and working topic filters.
* Layouts designed for desktop, tablet and mobile.
* Plain HTML, CSS and JavaScript. No installation or external services required.

## Updating your existing GitHub Pages website

1. Download `StandWithUs_Explore_Activity_Hub_v3.zip` and extract it.
2. Open your GitHub repository for the Explore Activity Hub.
3. Select `Add file`, then `Upload files`.
4. Upload `index.html`, `styles.css`, `script.js`, `README.md` and the **entire `assets` folder**. Keep them at the root of the repository. They must not be inside an extra folder.
5. If GitHub asks about replacements, replace the older files with the new versions.
6. Under **Commit changes**, use the commit message below.
7. Commit directly to the `main` branch. Your existing GitHub Pages settings can remain unchanged.

**Suggested commit message:**

`Remove white backgrounds from StandWithUs UK and Explore logos`

The site address stays the same. If the repository is called `explorehub`, it will be:

`https://yehuda-swu.github.io/explorehub/`

You do **not** need to create a new repository. Do **not** upload the ZIP file itself. Extract it first and upload its contents.

## Updating using Git on your computer

In a local copy of your repository, copy in the extracted website files and run:

```bash
git add .
git commit -m "Remove white backgrounds from StandWithUs UK and Explore logos"
git push origin main
```

## Adding another activity

Edit `script.js`. Add a new entry to the `ACTIVITIES` array. For example:

```javascript
{
  title: 'A New Explore Game',
  description: 'A short description of the activity.',
  image: 'assets/new_game.png',
  imageAlt: 'A New Explore Game artwork',
  category: 'CLASSROOM CHALLENGE',
  details: 'Teams · Quiz',
  tags: ['classroom'],
  url: 'https://example.github.io/newgame/'
},
```

Put the image in the `assets` folder. Accepted browser image formats include PNG, JPG, SVG and WebP. Match the filename exactly, including capitalisation. Every activity should have its own image.

Use one or more of these `tags` values: `history`, `decisions`, `peace`, `classroom`. Search and filter results are updated automatically. The activity count also updates automatically.

## Files

* `index.html`: structure of the homepage and branding.
* `styles.css`: colours, typography, card layouts and mobile styling.
* `script.js`: activities, URLs, descriptions, search and filters.
* `assets/`: all supplied covers and logos, plus the website favicon.

## Logo transparency

* `assets/standwithus_uk_transparent.png` is the header and footer version, with the lower white background removed while preserving the logo lettering.
* The original `assets/standwithus_uk.png` is included as a backup.
* `assets/explore_mark.png` and `assets/explore_logo_full.png` are transparent images. Their white CSS background boxes have been removed from the header and Explore section.

## Notes

This site links to your eight existing games. It does not change them. Activity links open in a separate tab. All supplied artwork is included locally, so nothing needs to load from a third party image host.

© StandWithUs UK.
