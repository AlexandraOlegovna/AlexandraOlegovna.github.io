var gulp = require('gulp');

var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('scss/styles.sass')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('src/css'))
});

gulp.task('sass', function() {
  return gulp.src('scss/**/*.sass') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

var babel = require('gulp-babel');

gulp.task('babel', () => {
    return gulp.src('js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('js/babel'));
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('scss/**/*.sass', ['sass']);
  gulp.watch('js/*.js', ['babel']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
  // Other watchers
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});



var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

gulp.task('useref', function(){
  return gulp.src('*.html')
    .pipe(useref())
    .pipe(gulpIf('js/*.js', uglify()))
    .pipe(gulpIf('css/*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('images', function(){
  return gulp.src('img/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/img'))
});

var fontmin = require('gulp-fontmin');
gulp.task('fonts', function () {
    return gulp.src('fonts/*.ttf')
        .pipe(fontmin({
            text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ☰!',
        }))
        .pipe(gulp.dest('dist/fonts'));
});


var del = require('del');

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
})

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})
