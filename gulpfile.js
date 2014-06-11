var gulp = require('gulp'),
	livereload = require('gulp-livereload');

gulp.task('watch', function () {  // 'watch' 是 task 的名稱，可以任意定義名稱  
	var server = livereload();

	
    gulp.watch('*.*', function (file) {	// 監控的檔案，在這裏 '*.*' 我監控所有檔案
        server.changed(file.path);
    });
});