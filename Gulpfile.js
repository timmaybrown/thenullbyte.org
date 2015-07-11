var gulp    = require('gulp')
    concat  = require('gulp-concat')
    minify  = require('gulp-minify');

gulp.task('default', [
    'scripts',
    'styles'
]);
