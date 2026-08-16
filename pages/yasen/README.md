# Readme

`html_snip_from_media.py` process media files in 'media' folder, ignoring `_DEV` folder.

Media folders name will be used as title for all files in that folder except where folder name ends in hyphen, in which case no title is written.

`description.txt` files provided title for each media file where `<filename<tab><description>`.

Script generates file `media_snippet.html` which is inserted into `index.html` with JavaScript in latter file and placeholder `<main id="main">Loading media...</main>`.


---

TODO:

- script to standardize media file format and size





