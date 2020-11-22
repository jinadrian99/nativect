<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>NATIVE</title>
        <link rel="icon" href="./image/NativeLogo.png">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet">

        {{-- animation component --}}
        {{-- <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> --}}

    </head>
    <body class="antialiased">
        <div id="root"></div>
    </body>

    <script src="/js/app.js"></script>

    {{-- animation component --}}
    {{-- <script>
        AOS.init();
    </script> --}}

</html>
