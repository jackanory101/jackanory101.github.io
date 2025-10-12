In *httpd.conf*

```conf
<VirtualHost *:80>
    ServerName jackanory101.localhost
    DocumentRoot "C:/xampp/htdocs/github/jackanory101.github.io"
</VirtualHost>
```

Resources in e.g. */_media/* depend on above virtual server. E.g. 

    background-image: url('/_media/blossom.jpg');

Resources will only be loaded if URL is e.g. 

	http://jackanory101.localhost/

not 

	http://localhost/github/jackanory101.github.io/

HTML pages generated via `\co` in vim will produce links to local `file://` resources e.g. styles. These can be removed opening HTML file in vim and running

	:so c:/xampp/htdocs/github/fix-html-for-httpd.vim

See [fix-html-for-httpd-README.md](file://c:/xampp/htdocs/github/fix-html-for-httpd-README.md)


