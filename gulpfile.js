const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('minify', function () {
   gulp.src('app.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});
