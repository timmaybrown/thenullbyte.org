var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat'),
    minify  = require('gulp-minify-css'),
    rename  = require('gulp-rename');

gulp.task('scripts', function() {
    return gulp.src('assets/js/*.js')
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('styles', function() {
    return gulp.src('assets/css/main.css')
        .pipe(minify({processImport: false}))
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', [
    'scripts',
    'styles'
]);
