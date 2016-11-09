/**
 * Created by Thram on 9/11/16.
 */
import React from "react";
import configureStore from "./store/config.prod";
import Root from "./containers/Root.prod";
import {renderToString} from "react-dom/server";

const renderFullPage = ({html, preloadedState}) => `
    <!doctype html>
    <html>
      <head>
        <title>Thram CMS Crawling Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;

export const render = (ctx, next) => {
  const store          = configureStore({}),
        html           = renderToString(<Root store={store}/>),
        preloadedState = store.getState();

  // Send the rendered page back to the client
  ctx.body = renderFullPage({html, preloadedState});
};