const appDir = 'app';
const buildDir = 'build';
const dist = 'dist';

const indexFile = `index.html`;

/* Sass */
const cssStart = 'app.style.scss';
const cssWatch = '**/*.scss';
const cssName = 'app.css';

/* Js */
const jsFiles = ['**/*.js', '!bower_components/**/*.js', '!dist/**.js'];
const jsOrder = ['**/*.module.js','**/*.js'];
const jsName = 'app.js';

/* Html */
const htmlFiles = '**/*.html';

/* Images */
const imagesDir = '/**/*.{png,jpg,jpeg,gif}';

const gulp = require('gulp');
const async = require('async');
const del = require('del');
const $ = require('gulp-load-plugins')({
	camelize: true,
	lazy: true
});

const inFolder = (folder, selection) => {
  if(typeof selection == 'object')
    return selection.map(_getFormatedFileDir);
  else if(typeof selection == 'string')
    return _getFormatedFileDir(selection)
  return false;

  function _getFormatedFileDir(file){
    let prefix = '';
  	if(file.charAt(0) === '!') {
    	prefix = '!';
      file = file.slice(1);
    }
    return `${prefix}${folder}/${file}`;
  }
}

/* Server */
gulp.task('dev', ['server', 'watch'])

gulp.task('server', () =>
	$.connect.server({
		root: appDir,
		livereload: false
	})
)

gulp.task('server-build', () =>
	$.connect.server({
		root: buildDir,
		livereload: false
	})
)

/* Watchs */
gulp.task('watch', ['js', 'css'], () => {
  $.watch(inFolder(appDir, jsFiles), () => gulp.start('js'))
  $.watch(inFolder(appDir, cssWatch), () => gulp.start('css'))
});

/* Basic functions */
gulp.task('js', () =>
	gulp.src(inFolder(appDir, jsFiles))
		.pipe($.sourcemaps.init())
		.pipe($.order(jsOrder))
		.pipe($.concat(jsName))
		.pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest(inFolder(appDir, dist)))
)

gulp.task('css', () =>
	gulp.src(inFolder(appDir, cssStart))
		.pipe($.sourcemaps.init())
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.rename(cssName))
		.pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest(inFolder(appDir, dist)))
)

/* Production */
gulp.task('build', (cb) => {
  async.series([
    next => _buildJs().on('end', next),
    next => _buildCss().on('end', next),
    next => _buildHtml().on('end', next),
    next => _buildImages().on('end', next),
    next => _buildVendors()
  ], cb)
})

function _buildJs() {
	return gulp.src(inFolder(appDir, jsFiles))
		.pipe($.order(jsOrder))
		.pipe($.ngAnnotate())
		.pipe($.babel({presets: ['es2015']}))
		.pipe($.concat(jsName))
		.pipe($.uglify())
		.pipe(gulp.dest(inFolder(buildDir, dist)));
}

function _buildCss(){
  return gulp.src(inFolder(appDir, cssStart))
		.pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
		.pipe($.autoprefixer())
		.pipe($.rename(cssName))
		.pipe(gulp.dest(inFolder(buildDir, dist)));
}

function _buildHtml(){
  return gulp.src(inFolder(appDir, htmlFiles))
		.pipe($.htmlmin({collapseWhitespace: true, removeComments: true}))
		.pipe(gulp.dest(buildDir));
}

function _buildVendors(cb) {
  return async.series([
    next => gulp.src(inFolder(appDir, indexFile))
      .pipe(gulp.dest(buildDir))
      .on('end', next),
    next => gulp.src(inFolder(appDir, 'bower_components/**'))
      .pipe(gulp.dest(inFolder(buildDir, 'bower_components')))
      .on('end', next),
    next => gulp.src(inFolder(buildDir, 'bower_components/**/*.css'), {base: buildDir + 'app/bower_components'})
  		.pipe($.cssUrlFix())
      .pipe($.replace(new RegExp(`${buildDir}\/bower_components\/`, 'g'), './'))
      .pipe($.sass({outputStyle: 'compressed'}))
  		.pipe(gulp.dest(inFolder(buildDir, 'bower_components')))
      .on('end', next),
    next => gulp.src(inFolder(buildDir, 'bower_components/**/*.{eot,ttf,svg,woff,woff2}'), {base: inFolder(buildDir, 'bower_components')})
      .pipe(gulp.dest(inFolder(buildDir, dist)))
      .on('end', next),
    next => gulp.src(inFolder(buildDir, indexFile))
      .pipe($.useref())
      .pipe(gulp.dest(buildDir))
      .on('end', next),
    next => gulp.src(inFolder(buildDir, indexFile))
      .pipe($.htmlmin({collapseWhitespace: true, removeComments: true}))
      .pipe(gulp.dest(buildDir))
      .on('end', next),
    next => del(inFolder(buildDir, 'bower_components'), next)
  ], cb);
}

function _buildImages(){
  return gulp.src(inFolder(appDir, imagesDir))
		.pipe($.smushit({verbose: true}))
		.pipe(gulp.dest(buildDir))
}


gulp.task('default', ['dev']);
