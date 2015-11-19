var gulp = require('gulp');
var fs = require('fs');
var runSequence = require('run-sequence');
var tasksDir = 'gulp-tasks';
var appVersion = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;

require('require-dir')(tasksDir);

GLOBAL.config = {
  api: 'http://localhost:3000',
  env: 'prod',
  src: 'src',
  dest: 'dist',
  version: appVersion,
};

gulp.task('default', function(cb) {
  runSequence(
    'clean',
    'bump',
    cb);
});
