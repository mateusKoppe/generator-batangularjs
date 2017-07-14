const distDir = './src/app/dist';
const indexPage = './src/index.php';

/* Sass */
const sassStart = './src/app/app.style.scss';
const sassWatch = './src/app/**/*.scss';
const sassName = 'app.css';
const sassDist = './src/app/dist';

/* Js */
const jsDir = ['./src/**/*.js', '!./src/libraries/**/*.js', '!**/dist/**.js'];
const jsName = 'app.js';
const jsDist = './src/app/dist';

/* Html */
const htmlDir = ['./src/**/*.html', './src/index.php', '!**/dist/*.html'];
const htmlDist = './src/';

/* Images */
const imagesDir = ['./src/app/**/*.png', './src/app/**/*.jpg', './src/app/**/*.PNG', './src/app/**/*.JPG'];
const imagesDist = './src';

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
			baseDir: "./src/"
		}
	});
});

gulp.task('server', () => {
	browserSync.init({
		server: {
			baseDir: "./src/"
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
	return del(['./src/libraries']);
})

gulp.task('javascript-development', () => {
	return gulp.src(jsDir)
		.pipe(sourcemaps.init())
		.pipe(order([
			'**/*module.js',
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
			'**/*module.js',
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
			'**/*module.js',
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
	return gulp.src(['./src/app/**/*.js','./src/app/**/*.scss', '!./src/app/dist/*.js'])
		.pipe(clean({force: true}));
	deleteEmpty('./src/app', (a, b) => {
		console.log(a);
	});
})

gulp.task('images-deploy', () => {
	return gulp.src(imagesDir)
		.pipe(image())
		.pipe(gulp.dest(imagesDist));
})

gulp.task('default', ['javascript-development', 'sass-development']);
