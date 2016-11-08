/**
 * Created by Thram on 9/11/16.
 */
import {Model} from "mongorito";

export class Page extends Model {
  collection() {
    return 'pages';
  }
}