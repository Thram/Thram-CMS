/**
 * Created by Thram on 9/11/16.
 */
import React from "react";
import {renderToString} from "react-dom/server";
import {template} from "./templates";
import configureStoreClient from "./client/store/config.prod";
import RootClient from "./client/containers/Root.prod";
import configureStoreAdmin from "./admin/store/config.prod";
import RootAdmin from "./admin/containers/Root.prod";

const renders = {
  client: (ctx, next) => {

    const store          = configureStoreClient({}),
          html           = renderToString(<RootClient store={store}/>),
          preloadedState = store.getState();

    // Send the rendered page back to the client
    return template({type: 'client', html, preloadedState});
  },
  admin : (ctx, next) => {
    const store          = configureStoreAdmin({}),
          html           = renderToString(<RootAdmin store={store}/>),
          preloadedState = store.getState();

    // Send the rendered page back to the client
    return template({type: 'admin', html, preloadedState});
  }
};

export const render = (template, ctx, next) => {
  ctx.body = renders[template](ctx, next);
};