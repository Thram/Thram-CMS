/**
 * Created by Thram on 8/11/16.
 */
import Router from "koa-router";
import {setBasicHeader} from "./headers";
const router = new Router();
router.get('/blogs/:blog', (ctx, next) => {
  setBasicHeader(ctx);
});

router.get('/blogs/:blog/:post', (ctx, next) => {
  setBasicHeader(ctx);
});

router.get('/news/:news', (ctx, next) => {
  setBasicHeader(ctx);
});

router.get('/news/:news/:post', (ctx, next) => {
  setBasicHeader(ctx);
});

export default router;