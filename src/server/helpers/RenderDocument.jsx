import { renderToString } from 'react-dom/server';

export default function renderDocument(component, state) {
    return (
`<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Test app</title>

        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">

    </head>
    <body>
        <div id="app-container">${renderToString(component)}</div>
        <script>
            window.INITIAL_STATE = ${JSON.stringify(state)};
        </script>
        <script src="/bundle.js"></script>
    </body>
</html>`
    );
}
