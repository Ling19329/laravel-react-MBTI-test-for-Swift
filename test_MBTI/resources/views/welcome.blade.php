<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Test For Swift</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
        />
    </head>
    <body>
        
        <div id="root"></div>
        <script src="{{mix('js/app.js')}}" ></script>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin ></script>

        <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
        />

        <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
        />

        <script>var Alert = ReactBootstrap.Alert;</script>
    </body>
</html>