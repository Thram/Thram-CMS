/**
 * Created by Thram on 9/11/16.
 */
import {Model} from "mongorito";

export class Widget extends Model {
  collection() {
    return 'widgets';
  }
}