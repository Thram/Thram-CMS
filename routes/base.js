/**
 * Created by Thram on 8/11/16.
 */
import Router from "koa-router";
import {setBasicHeader} from "./headers";
import {Page} from "../models/Page"
import {render} from "../renderer";
const router = new Router();

router.get('/', render);

router.get('/favicon.ico', (ctx, next) => {
  ctx.set("Content-Type", "image/ico");
  setBasicHeader(ctx);
});

router.get('/stylesheets.css', (ctx, next) => {
  ctx.set("Content-Type", "text/css");
  setBasicHeader(ctx);
});

router.get('/scripts.js', (ctx, next) => {
  ctx.set("Content-Type", "text/javascript");
  setBasicHeader(ctx);
});

router.get('/:page', (ctx, next) => {
  setBasicHeader(ctx);
  ctx.body = ctx.params.page;
});

export default router;