var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(cb) {
  del([GLOBAL.config.dest], {dot: true})
    .then(function() {
      cb();
    });
});
