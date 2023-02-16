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
    // 'resources/css/animation.css',
    // 'resources/css/animation.min.css',
    // 'resources/css/benqu-main.min.css',
    // 'resources/css/benqu-post.min.css',
    // 'resources/css/benqu-responsive.min.css',
    // 'resources/css/benqu-style.css',
    // 'resources/css/benqu-theme-custom-style.min.css',
    // 'resources/css/benqu-woocommerce.min.css',
    // 'resources/css/bootstrap.min.css',
    // 'resources/css/custom-style.css',
    // 'resources/css/magnific-popup.css',
    // 'resources/css/magnific-popup.min.css',
    // 'resources/css/metis-menu.css',
    // 'resources/css/metis-menu.min.css',
    // 'resources/css/owl.carousel.min.css',
    // 'resources/css/post-style.css',
    // 'resources/css/responsive.css',
    // 'resources/css/rtl.css',
    // 'resources/css/sidebarnav.min.css',
    // 'resources/css/slick.css',
    // 'resources/css/woocommerce.css',
    'resources/css/style.css',
    'resources/fonts/latin.css',
    'resources/fonts/roboto.css',
], 'public_html/assets/css/app.css').version();

mix.styles([
    'resources/css/show.css',
], 'public_html/assets/css/show.css').version();

mix.styles([
    'resources/css/index.css',
], 'public_html/assets/css/index.css').version();

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

mix.js('resources/js/react/react.js', 'assets/js');
