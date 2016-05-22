var gulp = require('gulp');
var es3ify = require("gulp-es3ify");
var derequire = require("derequire");
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

var _pluginname = "yourpluginname";

gulp.task('afterbrowserify', function() {
  gulp.src('./temp-browserify/index.js')
  .pipe(es3ify())
  .pipe(rename("pouchdb."+_pluginname+".js"))
  .pipe(gulp.dest('./dist/'))
  .pipe(uglify())
  .pipe(rename("pouchdb."+_pluginname+".min.js"))
  .pipe(gulp.dest('./dist/'))
});
