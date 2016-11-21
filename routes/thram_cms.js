/**
 * Created by Thram on 8/11/16.
 */
import Router from "koa-router";
import {spawn} from "child_process";
import {render} from "../renderer";
const router = new Router();


router.get('/build', (ctx, next) => {
  let env      = Object.create(process.env);
  env.NODE_ENV = ctx.query.dev != undefined ? 'development' : 'production';
  let prc      = spawn('npm', ['run', 'build'], {env});
  //noinspection JSUnresolvedFunction
  prc.stdout.setEncoding('utf8');
  prc.stdout.on('data', (data) => console.log(data.toString().split(/(\r?\n)/g).join("")));
  prc.on('close', (code) => console.log('process exit code ' + code));
  ctx.body = 'building';
});

router.get('*', (ctx, next) => render('admin', ctx, next));


// router.get('/:page', (ctx, next) => {
//   setBasicHeader(ctx);
//   ctx.body = ctx.params.page;
// });

export default router;