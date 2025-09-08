" remove .html suffix and hyphens in index list
" \zs start match for submatch()
" \ze emd match for submatch()
" submatch(1) the first match
" \s* accounts for preceding spaces
"
:%s/">\s*\zs\(.*\)\.html\ze\s*</\=substitute(submatch(1),'-',' ','g')/


