var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    del = require('del');

//TODO:
//  add jspm or other packager
//  add eslint
//  add uglify of some sort, with source map
//  add watch
//  add unit test framework, with integration browser tests

gulp.task('watch', function() {
   return gulp.watch(['src/**/*.jsx', 'src/**/*.js', 'demo/**/*.jsx'], ['js']);
});

gulp.task('js', ['clean','babel','babel-demo','package']);

gulp.task('clean', function(done) {
    del.sync([
        'build/**/*',
        'dist/**/*',
        'dist/*',
        'build/*'
    ]);
    done();
});

gulp.task('babel-demo', ['clean'], function() {
   return gulp.src(['demo/**/*.jsx'])
       .pipe(babel())
       .pipe(gulp.dest('demo'));
});

gulp.task('babel', ['clean'], function() {
  //Build all of the demo es6 code separately
  gulp.src(['demo/**/*.es6'])
  .pipe(babel())
  .pipe(gulp.dest('demo'));

    return gulp.src(['src/**/*.jsx', 'src/**/*.js'])
	.pipe(babel())
	.pipe(gulp.dest('build'));
});


//TODO: I really want to use an intelligent module loader
//      but I need one that works well for packaged browser libraries.
gulp.task('package', ['babel', 'babel-demo'], function() {
   return gulp.src(['./build/common.js',
   './build/components/**/*.js',
   './build/kendo.reactComponent.js'])
    .pipe(sourcemaps.init())
    .pipe(concat("kendo.reactComponent.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write('../dist/'))
    .pipe(gulp.dest('dist'));
});