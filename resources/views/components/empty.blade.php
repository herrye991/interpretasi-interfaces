<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico') }}" type="image/x-icon">
    <title>Interpretasi ID</title>
</head>
<body>
    <div id="{{ $type }}"></div>
    <script src="{{ asset('assets/js/app.js') }}" defer></script>
    <script src="{{ asset('assets/js/react.js') }}" defer></script>
    <script src="{{ asset('assets/js/jquery/jquery.min.js') }}" id="jquery-core-js"></script>
</body>
</html>