const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/css/app.css',
    'resources/css/style.css',
    'resources/fonts/latin.css',
    'resources/fonts/roboto.css',
], 'app.css').version();

mix.scripts([
    'resources/js/style.js',
	'resources/js/themes/popper.minab7d.js',
    'resources/js/themes/bootstrap.minbdeb.js',
    'resources/js/themes/owl.carousel.min8a54.js',
    'resources/js/themes/metisMenu.min8a54.js',
    'resources/js/themes/jquery.magnific-popup.minf488.js',
    'resources/js/themes/scripts8a54.js',
    'resources/js/plugins/elementor/webpack.runtime.min7e2e.js',
    'resources/js/plugins/elementor/frontend-modules.min7e2e.js',
    'resources/js/plugins/elementor/frontend.min7e2e.js',
    'resources/js/jquery/jquery-migrate.mind617.js'
], 'app.js').version();

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');
