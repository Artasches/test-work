'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');

function browserSyncInit() {
	return browserSync.init({
		server: {
			baseDir: './'
		}
	});
}

gulp.task('serve', function() {
	return browserSyncInit();
});

gulp.task('default', [], function() {
	return gulp.start('serve');
});