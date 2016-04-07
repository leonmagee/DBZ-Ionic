/**
 * Dependencies
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var util = require('gulp-util');
//var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');
var inject = require('gulp-inject');

/**
 * Default Task - calls other tasks when 'gulp' is run
 */
gulp.task('default', function () {
    runSequence('sass', 'watch');
});

/**
 * Inject Resources to index.html
 */
gulp.task('index', function () {
    var tmp_src = [
        './www/lib/foundation/css/foundation.min.css',
        './www/lib/fontawesome/css/font-awesome.min.css',
        './www/css/dbz.min.css',
        './www/lib/angular/angular.min.js',
        //'//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js',
        './www/lib/ui-router/release/angular-ui-router.min.js',
        './www/js/app.js',
    ];
    return gulp.src('www/build/index.html')
        .pipe(inject(gulp.src(tmp_src,{read: false}),
            {
                ignorePath: 'www',
                addRootSlash: false
            }
        ))
        .pipe(gulp.dest('www/'));
});

gulp.task('index-report', function () {
    util.log(util.colors.red('build/index.html File Changed - New index.html Compiled'));
});

/**
 * Compile SCSS
 */
gulp.task('sass', function () {
    gulp.src(['scss/import.scss'])
        .pipe(sass({style: 'compressed', errLogToConsole: true}))
        .pipe(rename('dbz.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('www/css/'));
        //.pipe(livereload());
    util.log(util.colors.yellow('Kamehameha!'));
});

/**
 * Watch for HTML, JS, or SCSS changes - trigger LiveReload
 */
gulp.task('watch', function () {

    /**
     * there is a new syntax for getting livereload to work correctly...
     */
        //var server = livereload();
    gulp.watch('**/*.html').on('change', function (file) {
        //server.changed(file.path);
        util.log(util.colors.blue('HTML file changed' + ' (' + file.path + ')'));
    });

    gulp.watch('**/*.js').on('change', function (file) {
        //server.changed(file.path);
        util.log(util.colors.green('JS file changed' + ' (' + file.path + ')'));
    });

    gulp.watch('www/build/index.html').on('change', function(file) {
        runSequence('index', 'index-report');
        //server.changed(file.path);
    });

    gulp.watch('scss/**/*.scss', ['sass']);
});

