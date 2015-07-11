var gulp    = require('gulp')
    uglify  = require('gulp-uglify')
    concat  = require('gulp-concat')
    minify  = require('gulp-minify-css');

gulp.task('scripts', function() {
    return gulp.src('assets/js/*.js')
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('default', [
    'scripts',
    'styles'
]);
