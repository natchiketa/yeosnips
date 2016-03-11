'use strict';

import path from 'path';
import glob from 'glob';
import browserify from 'browserify';
import watchify from 'watchify';
import envify from 'envify';
import babelify from 'babelify';
import _ from 'lodash';
import File from 'vinyl';
import vsource from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gulpif from 'gulp-if';
import fs from 'fs';
import replace from 'gulp-replace';
import gutil from 'gulp-util';
import map from 'vinyl-map';
import file from 'gulp-file';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {

  // let dirs = config.directories;
  let chromeProfilePreferencesFile = './gc-prefs.json';
  let sourcePath = './tmp/scripts/*.js';

  gulp.task('snips', (done) => {
    let files = glob.sync(sourcePath);

    let scriptIdx = 0;
    let scriptObjects = files.map((filename) => {
      let script = {
        id: ++scriptIdx,
        name: path.basename(filename),
        content: fs.readFileSync(filename, {encoding: 'utf8'})
      };

      return script;
    });
    let scriptSnippets = JSON.stringify(scriptObjects);

    return file('snippets.json', scriptSnippets, {src: true})
      .pipe(gulp.dest('./src'));
  });
}
