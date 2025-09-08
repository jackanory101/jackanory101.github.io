%s/^\[\(\zs[^]]*\)\.html\ze/\=substitute(submatch(0),'-',' ','g')/
:%s/\.html//
