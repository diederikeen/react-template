import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function renderRoutes(routes) {
  return (
    <Switch>
      {routes.map((route, i) => route.childRoutes ? (
        React.createElement(
          route.component,
          { key: i },
          renderRoutes(route.childRoutes)
        )
      ) : (
        <Route key={i} {...route} />
      ))}
    </Switch>
  );
}