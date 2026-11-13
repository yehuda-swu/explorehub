# StandWithUs UK Explore Activity Hub

A responsive GitHub Pages website linking to the ten Explore educational activities.

## Latest update: version 6

* Added **Northern Front: The Security Cabinet**, a historical decision activity about Israel and Lebanon.
* Included the supplied cover art at `assets/a_nation_on_the_brink.png`.
* Added the exact activity URL `https://yehuda-swu.github.io/lebanonbrink/`.
* Included the activity in **History** and **Decision simulations** filters.
* Updated all activity counts to ten and preserved the three column desktop layout.
* Retained all nine existing activities, cover images, transparent SWU UK and Explore logos, search and reset features.

## Files included

* `index.html`: website structure, headings, logos and filter controls.
* `styles.css`: responsive page layout, colours and typography.
* `script.js`: activity information, search, filtering and clickable cards.
* `assets/`: the ten supplied game covers, SWU UK and Explore logos, and the favicon.

## Update the existing GitHub Pages site

1. Download `StandWithUs_Explore_Activity_Hub_v6.zip` and extract it.
2. Open the GitHub repository used for the existing Explore Activity Hub.
3. Select **Add file** and then **Upload files**.
4. Upload the extracted `index.html`, `styles.css`, `script.js`, `README.md`, and **the entire contents of `assets/`** into the matching locations in the repository. The website files must stay at the repository root.
5. Commit the changes to the existing `main` branch with this message:

   `Fix Northern Front image and update Explore hub`

Do not upload the ZIP file itself to the repository. Extract it and upload the website files inside it. There is no need to create a new repository or change the GitHub Pages settings.

## Local Git commands

Copy the new files into your existing locally cloned Explore hub repository, then run:

```bash
git add .
git commit -m "Fix Northern Front image and update Explore hub"
git push origin main
```

## How to add another activity

1. Put its cover PNG or JPEG in `assets/`.
2. In `script.js`, add an entry to the `ACTIVITIES` array, using the other entries as examples.
3. Provide the exact GitHub Pages URL and an accurate image filename.
4. Add suitable `tags` from `history`, `decisions`, `peace`, `classroom`, and `innovation`.
5. Update the fixed fallback counts in `index.html` if you want them to be accurate even before JavaScript loads. The displayed totals will update automatically when JavaScript runs.

Activities open in a new browser tab. The hub is a static site and needs no special installation.
