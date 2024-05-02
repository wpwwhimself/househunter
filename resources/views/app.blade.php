<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Househunter</title>
    </head>
    <body>
        <app-root></app-root>
    </body>
    <script src="{{ asset('polyfills.js') }}" type="module"></script>
    <script src="{{ asset('main.js') }}" type="module"></script>
</html>
