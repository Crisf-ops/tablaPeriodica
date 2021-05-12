const {series,src,dest,watch} = require ('gulp');
const sass = require('gulp-sass');

//Rutas
const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

//Funcion que compila SASS
function css() {
    return src(paths.scss)
    .pipe( sass({outputStyle: 'expanded'}) )//Leer el archivo scss de la ruta //outputStyle: 'expanded' formato del css como se visualiza
    .pipe( dest('./build/css'))//Crea la carpeta y guarda el CSS
}
//Funcion javascript para unificar varios
function javacript() {
    return src(paths.js)
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'))
}
//Funcion, Utilizada (Watch) para auto-ejecutar los cambios a nuestra hoja de estilos
function watchArchivo() {
    watch(paths.scss,css); // * = La carpeta actual - ** = Todos los archivos con esa extencion
    watch(paths.js, javacript);
}

exports.javacript =javacript;
exports.css = css;
exports.watchArchivo = watchArchivo;

exports.default = series(css,watchArchivo);