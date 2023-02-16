
<!doctype html>
<html lang="en-US">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Interpretasi ID &#8211; Website baca berita dan artikel.</title>
    <link rel="stylesheet" href="{{ asset('assets/css/' . $id . '.css') }}" media="all" />
    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}" media="all" />
    <link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico') }}" type="image/x-icon">
    <script src="{{ asset('assets/js/jquery/jquery.mina7a0.js') }}" id="jquery-core-js"></script>
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

        {!! $element !!}

        <div class="clearfix"></div>
    </div>
    @include('components.layouts.footer')
    @include('components.layouts.includes.back-top')
    @include('components.layouts.includes.switch-theme')
        
    <script src="{{ asset('assets/js/app.js') }}" defer></script>
    <script src="{{ asset('assets/js/react.js') }}" defer></script>
</body>

</html>