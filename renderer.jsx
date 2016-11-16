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

export const render = (type, ctx, next) => {
    let store, Root;
    switch (type) {
        case 'admin':
            store = configureStoreAdmin({});
            Root = <RootAdmin store={store}/>;
            break;
        default:
            store = configureStoreClient({});
            Root = <RootClient store={store}/>;
    }
    ctx.body = template({type: type, html: renderToString(Root), preloadedState: store.getState()});
};