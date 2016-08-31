var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('styles', function() {
	return gulp.src('./assets/scss/*.scss')
		.pipe(sass({style: 'expanded'}))
		.pipe(autoprefixer("last 4 versions", "Explorer 7"))
		.pipe(gulp.dest('./assets/css/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function() {
	gulp.watch('./assets/scss/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);
