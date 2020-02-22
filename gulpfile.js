const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images', function () {
    return gulp.src('images/**/*.+(png|jpg)')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
});

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('build'))
});

gulp.task('javascript', function () {
    return gulp.src('js/**/*')
        .pipe(gulp.dest('build/js'))
});

gulp.task('css', function () {
    return gulp.src('css/**/*')
        .pipe(gulp.dest('build/css'))
});

gulp.task('build', gulp.series(['images', 'html', 'javascript', 'css'], function (done) {
    done();
}));