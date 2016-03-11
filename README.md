# Yosnips
Yeoman-based dev environment for writing and deploying Snippets for Google Chrome Developer Tools.

Built with Yeoman, using the excellent [Yeogurt](https://github.com/larsonjj/generator-yeogurt) generator.

# TODO
* This would work better as a generator, since one of the main motivators is to keep my own snippets under version control.
* Automagical injection into the Chrome profile's preferences file (e.g. `~/Library/Application\ Support/Google/Chrome/Default/Preferences`) would be awesome, but there are some caveats:
  * Apparently, Chrome can't be running
  * Using a tool like `jq` or the `gulp-json-editor` package seems to render the file 'corrupted' as far as Chrome is concerned.
  * Allow other sources like Gists, remote URLs, etc.
