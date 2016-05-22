'use strict';

var gulp = require('gulp');
var es3ify = require("gulp-es3ify");
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var jshint = require('gulp-jshint');

var pluginname = 'mypluginname';
var jsHintReport = 'default';
var jsHintPaths = {
  js : ['./*.js', './test/test.js']
};

gulp.task('afterbrowserify', function() {
  gulp.src('./temp-browserify/index.js')
  .pipe(es3ify())
  .pipe(rename('pouchdb.'+pluginname+'.js'))
  .pipe(gulp.dest('./dist/'))
  .pipe(uglify())
  .pipe(rename('pouchdb.'+pluginname+'.min.js'))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('jshint', function() {
  return gulp.src(jsHintPaths.js)
    .pipe(jshint())
    .pipe(jshint.reporter(jsHintReport));
});
