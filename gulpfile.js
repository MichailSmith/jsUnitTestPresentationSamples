var gulp = require('gulp'),
	console = require('better-console'),
	mocha = require('gulp-mocha'),
	watch = require('gulp-watch');

gulp.task('clear', function() {
	console.clear();
});

gulp.task('test', function() {
	return gulp.src('allTests.js', { read: false })
		.pipe(mocha({
			reporter: 'spec'
		}));
});

gulp.task('watch', function() {
	gulp.watch(['**/*.js', '!node_modules'], ['build']);
});

gulp.task('build', ['clear', 'test']);
gulp.task('default', ['build', 'watch']);