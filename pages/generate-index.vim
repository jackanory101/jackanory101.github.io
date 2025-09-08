norm! ggVGd
norm! i<link rel="stylesheet" href="index-style.css" />
put ='' | put =''
norm! i# Misc index
put ='' | put =''
norm! i:::index
:r !find . -maxdepth 4 -type f \( -iname \*.html \)
norm! o:::
"Make visual selection
exe "norm! ?^:::index\<CR>j\<Esc>"
exe "norm! V/^:::\<CR>k\<Esc>"
"Remove preceding two chars
"exe "'<,'>norm! ^xx\<CR>"
" Remove any index.html docs in this root dir
:g/\.\/index.html/d
"exe "'<,'>vg^/^d\<CR>"
"Create links
exe "'<,'>vg^/^ norm! dd"
"Note double space at end 
exe "'<,'>norm! $v?\/\<CR>l\"ay^i[\<Esc>\"apa](\<Esc>A)  "

" clean up href links title; i.e. remove hyphens and ext
:%s/^\[\zs\([^]]*\).html\ze\]/\=substitute(submatch(1),'-',' ','g')/





"norm! G
"put ='' 
"norm! Go<style>
"norm! o</style>
"norm! ?^<styl

"if filereadable("template-style.css")
	":r !cat template-style.css
"endif

"norm \co
