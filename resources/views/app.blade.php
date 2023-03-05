<!doctype html>
<html lang="id">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="Interpretasi ID &#8211; Website baca berita dan artikel." />
    <meta property="og:url" content="https://interpretasi.id/" />
    <meta property="og:description" content="Baca berita & artikel lengkap dan terbaru hanya disini" />
    <meta property="og:image" content="//interpretasi.id/assets/images/favicon.png" />
    <meta property="og:type" content="article" />
    <meta property="og:locale" content="in_ID" />
    <title>Interpretasi ID &#8211; Website baca berita dan artikel.</title>
    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}" media="all" />
    <link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico') }}" type="image/x-icon">
    <noscript>
        <style>
            .woocommerce-product-gallery {
                opacity: 1 !important;
            }

        </style>
    </noscript>
</head>

<body class="home page-template page-template-elementor-template page-template-elementor-template-php page page-id-12 theme-benqu woocommerce-no-js ehf-template-benqu ehf-stylesheet-benqu elementor-default elementor-kit-5 elementor-page elementor-page-12">
    <div class="pfy-main-wrapper">
        @include('components.layouts.header')

        <div class="body-overlay"></div>

        @include('components.layouts.includes.mobile-navbar')

        <div class="clearfix"></div>
        <div id="pfy_reading_progress"></div>
        {!! $element !!}

        <div class="clearfix"></div>
    </div>
    @include('components.layouts.footer')
    @include('components.layouts.includes.back-top')
    @include('components.layouts.includes.switch-theme')
    <script src="{{ asset('assets/js/app.js') }}" defer></script>
    <script src="{{ asset('assets/js/core.js') }}" defer></script>
    <script src="{{ asset('assets/js/jquery/jquery.min.js') }}" id="jquery-core-js"></script>
</body>

</html>
