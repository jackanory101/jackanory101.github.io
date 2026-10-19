## La Familia jackanory101 

Quickly hacked up scripts to process files in [La Familia](file:///c:/xampp/htdocs/github/jackanory101.github.io/pages/_lafamilia/) dir of Jackanory101.

Text docs can be simply dropped into `docs` folder, and media files into `media` folder, and a one-click script in *"la familia"* folder processes all files automatically. All that's required are `index.md` files in `lafamilia` and `lafamilia/media` folders with required comment delimiters (see below).

Files in [docs](file:///c:/xampp/htdocs/github/jackanory101.github.io/pages/_lafamilia/docs/) folder are automatically written between comment delimiters in [index.md](file:///c:/xampp/htdocs/github/jackanory101.github.io/pages/_lafamilia/index.md) using script [update_links_el_familia.py](file:///c:/cygwin64/home/tom/bin/programming/html/update_links_el_familia.py).

Docs in latter folder are assumed to be self-contained or 'fixed' via `:so ../../../../fix-html-for-httpd.vim` (i.e. default generated HTML via `\co` or `\cm` are *'fixed'* with above).

Media files in [media](file:///c:/xampp/htdocs/github/jackanory101.github.io/pages/_lafamilia/media/) are automatically written between comment delimiters in [media/index.md](file:///c:/xampp/htdocs/github/jackanory101.github.io/pages/_lafamilia/media/index.md) using script [update_media_el_familia.py](file:///c:/cygwin64/home/tom/bin/programming/html/update_media_el_familia.py).

Markdown files are then converted to HTML via Pandoc using [pandoc_convert_md2html.sh](file:///c:/xampp/htdocs/github/jackanory101.github.io/pages/_lafamilia/pandoc_convert_md2html.sh).

All scripts are run at once from single BAT file [process_files_la_familia.bat](file:///c:/xampp/htdocs/github/jackanory101.github.io/pages/_lafamilia/process_files_la_familia.bat).

HTTP files include [jackanory101.localhost/.../_lafamilia](http://jackanory101.localhost/pages/_lafamilia/) and [jackanory101.localhost/.../index.html](http://jackanory101.localhost/pages/_lafamilia/media/index.html).

Media index file has custom CSS [media-glass.css](file:///c:/xampp/htdocs/github/jackanory101.github.io/pages/_lafamilia/src/media-glass.css).




