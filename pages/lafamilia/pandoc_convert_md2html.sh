pandoc="/cygdrive/c/Users/tom/Documents/bin/apps/pandoc/pandoc"

"$pandoc" -f markdown+pipe_tables -i index.md -t html -s --mathml --metadata title="La Familia Index" --css "/_styles/baskerville-panam.css" -o index.html

"$pandoc" -f markdown+pipe_tables -i media/index.md -t html -s --mathml --metadata title="La Familia Media Index" --css "../src/media-glass.css" -o media/index.html



