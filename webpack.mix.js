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
mix.setPublicPath('public_html/');

mix.styles([
    'resources/css/show.css',
    'resources/css/index.css',
    'resources/css/style.css',
    'resources/fonts/latin.css',
    'resources/fonts/roboto.css',
], 'public_html/assets/css/app.css').version();

mix.scripts([
    'resources/js/style.js',
	'resources/js/themes/popper.min.js',
    'resources/js/themes/bootstrap.min.js',
    'resources/js/themes/owl.carousel.min.js',
    'resources/js/themes/metisMenu.min.js',
    'resources/js/themes/jquery.magnific-popup.min.js',
    'resources/js/themes/scripts.js',
    'resources/js/plugins/elementor/webpack.runtime.min.js',
    'resources/js/plugins/elementor/frontend-modules.min.js',
    'resources/js/plugins/elementor/frontend.min.js',
    'resources/js/jquery/jquery-migrate.min.js',

    'resources/js/imagesloaded.min.js',
    'resources/js/masonry.min.js',
    'resources/js/themes/slick.min.js',
    'resources/js/themes/sidebarnav.min.js',
    'resources/js/themes/resize-sensor.min.js',
    'resources/js/themes/theia-sticky-sidebar.min.js',
    'resources/js/themes/wow.min.js',
    'resources/js/themes/jquery.magnific-popup.min.js',

], 'public_html/assets/js/app.js').version();

mix.js('resources/js/react/core.js', 'assets/js');
mix.js('resources/js/react/mui.js', 'assets/js');