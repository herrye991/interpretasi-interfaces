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
    'resources/css/app.css',
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

    'resources/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js',
    'resources/js/imagesloaded.min.js',
    'resources/js/masonry.min.js',
    'resources/themes/benqu/assets/js/slick.min.js',
    'resources/themes/benqu/assets/js/sidebarnav.min.js',
    'resources/themes/benqu/assets/js/resize-sensor.min.js',
    'resources/themes/benqu/assets/js/theia-sticky-sidebar.min.js',
    'resources/themes/benqu/assets/js/wow.min.js',
    'resources/themes/benqu/assets/js/jquery.magnific-popup.min.js',

], 'public_html/assets/js/app.js').version();

mix.js('resources/js/react/react.js', 'assets/js');
