var gulp = require('gulp');
var bump = require('gulp-bump');
var fs = require('fs');

gulp.task('update-pkg', function() {
  return gulp.src('./package.json')
    .pipe(bump({type:'patch'}))
    .pipe(gulp.dest('./'));
});

gulp.task('bump', ['update-pkg'], function(cb) {
  GLOBAL.config.version =
    JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
  cb();
});
