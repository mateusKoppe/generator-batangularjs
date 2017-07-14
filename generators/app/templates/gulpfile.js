const distDir = './app/dist';
const indexPage = './app/index.html';

/* Sass */
const sassStart = './app/app.style.scss';
const sassWatch = 'app/**/*.scss';
const sassName = 'app.css';
const sassDist = './app/dist';

/* Js */
const jsDir = ['./app/**/*.js', '!./app/bower_components/**/*.js', '!./app/dist/**.js'];
const jsName = 'app.js';
const jsDist = './app/dist';

/* Html */
const htmlDir = ['./app/**/*.html'];
const htmlDist = './';

/* Images */
const imagesDir = ['./app/**/*.png', './app/**/*.jpg', './app/**/*.PNG', './app/**/*.JPG'];
const imagesDist = '.';

const gulp = require('gulp'),
	order = require('gulp-order'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	ngAnnotate = require('gulp-ng-annotate'),
	htmlmin = require('gulp-htmlmin'),
	clean = require('gulp-clean'),
	deleteEmpty = require('delete-empty'),
	image = require('gulp-imagemin'),
	browserSync = require('browser-sync').create(),
	useref = require('gulp-useref'),
	del = require('del');

gulp.task('develop', ['watchs'], () => {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('server', () => {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('old-browser', ['sass-deploy', 'javascript-deploy']);
gulp.task('deploy', ['html-deploy', 'images-deploy', 'remove-vendors']);

/* Watchs  */
gulp.task('watchs', ['sass-watch', 'javascript-watch']);
gulp.task('watchs-transpilers', ['javascript-transpiler-watch', 'sass-transpiler-watch']);

gulp.task('sass-transpiler-watch', ['sass-deploy'], () => {
	return gulp.watch(sassWatch, ['sass-deploy']);
});

gulp.task('javascript-transpiler-watch', ['javascript-transpiler'], () => {
	return gulp.watch(jsDir, ['javascript-transpiler']);
});

gulp.task('sass-watch', ['sass-development'], () => {
	return gulp.watch(sassWatch, ['sass-development']);
});

gulp.task('javascript-watch', ['javascript-development'], () => {
	return gulp.watch(jsDir, ['javascript-development']);
});

/**  Basic functions **/
gulp.task('vendors', () => {
	return gulp.src(indexPage)
    .pipe(useref())
    .pipe(gulp.dest(htmlDist));
});

gulp.task('remove-vendors', ['vendors', 'delete-develop-files'], () => {
	return del(['./bower_components']);
})

gulp.task('javascript-development', () => {
	return gulp.src(jsDir)
		.pipe(sourcemaps.init())
		.pipe(order([
			'**/*.module.js',
			'**/*.js'
		]))
		.pipe(concat(jsName))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(jsDist));
});

gulp.task('sass-development', () => {
	return gulp.src(sassStart)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('app.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(sassDist));
});

gulp.task('javascript-deploy', () => {
	return gulp.src(jsDir)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(order([
			'**/*.module.js',
			'**/*.js'
		]))
		.pipe(concat(jsName))
		.pipe(gulp.dest(jsDist));
});

gulp.task('sass-deploy', () => {
	return gulp.src(sassStart)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(rename(sassName))
		.pipe(autoprefixer())
		.pipe(gulp.dest(sassDist));
});

gulp.task('javascript-transpiler', () => {
	return gulp.src(jsDir)
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(ngAnnotate())
		.pipe(order([
			'**/*.module.js',
			'**/*.js'
		]))
		.pipe(concat(jsName))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(jsDist));
});

gulp.task('sass-transpiler', () => {
	return gulp.src(sassStart + '/app.style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({}).on('error', sass.logError))
		.pipe(rename(sassName))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(sassDist));
});

gulp.task('html-deploy', () => {
	return gulp.src(htmlDir)
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest(htmlDist));
})

gulp.task('delete-develop-files', ['javascript-deploy', 'sass-deploy'], () => {
	return gulp.src(['./app/**/*.js','./app/**/*.scss', '!./app/dist/*.js'])
		.pipe(clean({force: true}));
	deleteEmpty('./app', (a, b) => {
		console.log(a);
	});
})

gulp.task('images-deploy', () => {
	return gulp.src(imagesDir)
		.pipe(image())
		.pipe(gulp.dest(imagesDist));
})

gulp.task('default', ['javascript-development', 'sass-development']);
