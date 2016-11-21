/**
 * Created by Thram on 9/11/16.
 */
import React from "react";
import {renderToString} from "react-dom/server";
import {template, HTML} from "./templates";
import configureStoreClient from "./client/store/config.prod";
import configureStoreAdmin from "./admin/store/config.prod";
import {Provider} from 'react-redux';
import {createMemoryHistory, match, RouterContext} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routesAdmin from './admin/modules/routes';
import routesClient from './client/modules/routes';


export const render = (type, ctx, next) => {
    const url           = ctx.params[0],
          memoryHistory = createMemoryHistory(url),
          store         = type === 'admin' ? configureStoreAdmin({}) : configureStoreClient({}),
          history       = syncHistoryWithStore(memoryHistory, store);
    match({
        history,
        routes  : type === 'admin' ? routesAdmin : routesClient,
        location: url
    }, (error, redirectLocation, renderProps) => {
        const content = renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps}/>
            </Provider>
        );

        ctx.body = `<!doctype html>${renderToString(<HTML type={type} content={content} store={store}/>)}`;
    });

};