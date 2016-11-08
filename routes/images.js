/**
 * Created by Thram on 8/11/16.
 */
import Router from "koa-router";
import {setBasicHeader} from "./headers";
const router = new Router();
router.get('/:image', (ctx, next) => {
  setBasicHeader(ctx);
  ctx.body = ctx.params.image
});

export default router;