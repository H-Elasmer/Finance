const { src, dest, parallel } = require('gulp');
const pug = require('gulp-pug');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

// Pug Function
function html() {
    return src('src/pug/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(dest('./build'))
}

// Move Css Function
function mcss() {
    return src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
        'node_modules/wowjs/css/libs/animate.css'
    ])
    .pipe(dest('./build/css'))
}

// Move Css Function
function css() {
    return src([
        'src/scss/**/*.scss'
    ])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(concat('default-theme.css'))
    .pipe(dest('./build/css'))
}

// Move Js Function
function js() {
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js.map',
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'node_modules/wowjs/dist/wow.min.js'
    ])
    .pipe(dest('./build/js'))
}

// Move Font-Awesome Function
function faFont() {
    return src([
        'node_modules/font-awesome/fonts/*'
    ])
    .pipe(dest('./build/fonts'))
}

// Compile All Js File Function 
function scripts() {
    return src([
        'src/js/default-assets/avoid.console.error.js',
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'node_modules/wowjs/dist/wow.min.js',
        'src/js/default-assets/jquery.scrollup.min.js',
        'src/js/default-assets/active.js'
    ])
        .pipe(concat('financial.bundle.js'))
        .pipe(dest('./build/js'))
}

// Move Css Function
function imgMin() {
    return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('./build/img'))
}

exports.faFont = faFont;
exports.scripts = scripts;
exports.js = js;
exports.mcss = mcss;
exports.css = css;
exports.html = html;
exports.imgMin = imgMin;
exports.default = parallel(html, css, scripts, mcss, js, faFont);
