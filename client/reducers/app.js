/**
 * Created by Thram on 9/11/16.
 */
import {START, CHANGE_LANG} from "../actions/app";

const INIT_STATE = {};

export default function app(state = INIT_STATE, action) {
  switch (action.type) {
    case START:
      return Object.assign({}, INIT_STATE, {started: true});
    case CHANGE_LANG:
      return Object.assign({}, state, {lang: action.lang});
    default:
      return state;
  }
}
