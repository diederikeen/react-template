import express from 'express';
import React from 'react';
import { Route, StaticRouter, Switch } from 'react-router-dom';
import { Provider, Store } from 'react-redux';

import createStoreMiddleware from './helpers/CreateMiddlewareStore';
import renderDocument from './helpers/RenderDocument';
import renderRoutes from '../app/helpers/RenderRoutes';
import routes from '../app/routes/index';

const app = express();
app.use(express.static(`${__dirname}/../public`));
app.use(createStoreMiddleware);


app.get('*', function(req, res){
  const context = {};

  const markup = renderDocument(
    <Provider store={req.store}>
      <StaticRouter context={context} location={req.url}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>,

    req.store.getState(),
  )

  res.send(markup);
});

app.listen(1337, () => { console.info('Listening on port 1337'); });