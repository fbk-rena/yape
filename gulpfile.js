const gulp =  require('gulp');
const uglify = require('gulp-uglify');
const sass =  require('gulp-sass');
const obfuscate =  require('gulp-obfuscate');

const base =  {
    src: "./src/",
    dist: "./public/"
};

const rutas =  {
    js: "js/*.js",
    scss: "scss/*.scss",
    index: "index.html",
    views: "views/*.html"
};

gulp.task('moverHtml', ()=>{
    gulp.src(base.src + rutas.index)
    .pipe(gulp.dest(base.dist));
});

gulp.task('moverJs', ()=>{
   gulp.src(base.src + rutas.js)
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest(base.dist + "js/"));
});

gulp.task('prepararCss', ()=>{
    gulp.src(base.src + rutas.scss)
    .pipe(sass ({outputStyle: "compressed"})
                .on("error", sass.logError))
    .pipe(gulp.dest(base.dist + "css/"));
    
});