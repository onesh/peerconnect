import { match } from 'react-router';
import routes from './routes';

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    }
    else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }
    else if (renderProps) {
      if (process.env.NODE_ENV === 'development') {
        res.status(200).send(`
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width">
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </head>
            <body>
              <div id='app'></div>
              <script  src='/bundle.js'></script>
            </body>
          </html>
        `);
      } else {
        console.info('production');
      }
}
    else {
      res.status(404).send('Not found');
    }
  });
};
