norm! ggVGd
norm! i<link rel="stylesheet" href="index-style.css" />
put ='' | put =''
norm! i# AI Images
put ='' | put =''
norm! i:::index
:r !find . -maxdepth 4 -type f \( -iname \*.html \)
norm! o:::
"Make visual selection
exe "norm! ?^:::index\<CR>j\<Esc>"
exe "norm! V/^:::\<CR>k\<Esc>"
"Remove preceding two chars
exe "'<,'>norm! ^xx\<CR>"
" Remove any html docs in this root dir
"exe "'<,'>vg^/^d\<CR>"
"Create links
exe "'<,'>vg^/^ norm! dd"
"Note double space at end 
exe "'<,'>norm! $v?\/\<CR>l\"ay^i[\<Esc>\"apa](\<Esc>A)  "
norm! G
put ='' 
norm! Go<style>
norm! o</style>
"norm! ?^<styl

"if filereadable("template-style.css")
	":r !cat template-style.css
"endif

"norm \co
