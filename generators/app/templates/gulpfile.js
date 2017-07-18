const indexPage = 'app/index.html';

/* Sass */
const cssStart = 'app/app.style.scss';
const cssWatch = 'app/**/*.scss';
const cssName = 'app.css';
const cssDist = 'app/dist';

/* Js */
const jsDir = ['app/**/*.js', '!app/bower_components/**/*.js', '!app/dist/**.js'];
const jsOrder = ['**/*.module.js','**/*.js'];
const jsName = 'app.js';
const jsDist = 'app/dist';

/* Html */
const htmlDir = ['app/**/*.html'];
const htmlDist = 'app';

/* Images */
const imagesDir = ['app/**/*.png', 'app/**/*.jpg', 'app/**/*.PNG', 'app/**/*.JPG'];
const imagesDist = 'app';

const prodDist = 'production/';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')({
	camelize: true,
	lazy: true
});

/* Server */
gulp.task('server-dev', ['server', 'watch'])

gulp.task('server', () =>
	$.connect.server({
		root: 'app',
		livereload: false
	})
)

/* Watchs */
gulp.task('watch', ['js:watch', 'css:watch']);

gulp.task('js:watch', ['js'], () =>
	$.watch(jsDir, () => gulp.start('js'))
)

gulp.task('css:watch', ['css'], () =>
	$.watch(cssWatch, () => gulp.start('css'))
)

/* Basic functions */
gulp.task('js', () =>
	gulp.src(jsDir)
		.pipe($.sourcemaps.init())
		.pipe($.order(jsOrder))
		.pipe($.concat(jsName))
		.pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest(jsDist))
)

gulp.task('css', () =>
	gulp.src(cssStart)
		.pipe($.sourcemaps.init())
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.rename(cssName))
		.pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest(cssDist))
)

/* Old browsers */
gulp.task('oldbrowser', ['js:oldbrowser', 'css:oldbrowser'])

gulp.task('js:oldbrowser', () =>
	gulp.src(jsDir)
		.pipe($.sourcemaps.init())
		.pipe($.order(jsOrder))
		.pipe($.ngAnnotate())
		.pipe($.babel({presets: ['es2015']}))
		.pipe($.concat(jsName))
		.pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest(jsDist))
)

gulp.task('css:oldbrowser', () =>
	gulp.src(cssStart)
		.pipe($.sourcemaps.init())
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.autoprefixer())
		.pipe($.rename(cssName))
		.pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest(cssDist))
)

/* Production */
gulp.task('js:prod', () =>
	gulp.src(jsDir)
		.pipe($.order(jsOrder))
		.pipe($.ngAnnotate())
		.pipe($.babel({presets: ['es2015']}))
		.pipe($.concat(jsName))
		.pipe($.uglify())
		.pipe(gulp.dest(prodDist + jsDist))
)

gulp.task('css:prod', () =>
	gulp.src(cssStart)
		.pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
		.pipe($.autoprefixer())
		.pipe($.rename(cssName))
		.pipe(gulp.dest(prodDist + cssDist))
)

gulp.task('html:prod', ['vendors:prod'], () =>
	gulp.src(htmlDir)
		.pipe($.htmlmin({collapseWhitespace: true, removeComments: true}))
		.pipe(gulp.dest(prodDist + htmlDist))
)

gulp.task('vendors:prod', () =>
	gulp.src(indexPage)
		.pipe($.useref())
		.pipe(gulp.dest(prodDist))
)

gulp.task('images:prod', () =>
	gulp.src(imagesDir)
		.pipe($.smushit({verbose: true}))
		.pipe(gulp.dest(prodDist + imagesDist))
)

gulp.task('default', ['server-dev']);
