/**
 * Created by thram on 16/08/16.
 */
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import morgan from "koa-morgan";
import mongorito from "mongorito";
import {createWriteStream} from "fs";
import router from "./routes";
import config from "./config";

mongorito.connect(`${config.database.host}/${config.database.name}`);

const app             = new Koa(),
      // create a write stream (in append mode)
      accessLogStream = createWriteStream(`${__dirname}/access.log`, {flags: 'a'});

app
  .use(morgan('combined', {stream: accessLogStream}))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000, () => console.log('server started 4000'));

export default app