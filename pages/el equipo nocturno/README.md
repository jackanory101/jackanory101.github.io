# Readme

`html_snip_from_media.py` process media files in 'media' folder, ignoring `_DEV` folder.

Media folders name will be used as title for all files in that folder except where folder name ends in hyphen, in which case no title is written.

`descript.ion` files provided title for each media file where filename is either one word or enclosed in quotes, followed by file description.

Script generates file `media_snippet.html` which is inserted into `index.html` with JavaScript in latter file and placeholder `<main id="main">Loading media...</main>`.

About order:

- alphanumeric (ignoring case) in reverse (e.g. `02` comes before `01`)
- `_` comes after digits in natural sort so comes before in reverse sort


---

TODO:

- script to standardize media file format and size





