const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


return gulp.src([
        './src/js/*.js'
    ])
    
    .pipe(concat('bundle.min.js'))
    
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('./public/js'))