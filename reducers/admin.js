/**
 * Created by Thram on 9/11/16.
 */
import {ADD_TRACK, REMOVE_TRACK} from "../actions/tracks";

const initialState = [];

export default function tracks(state = initialState, action) {
  switch (action.type) {
    case ADD_TRACK:
      return [...state, action.track];

    case REMOVE_TRACK:
      return state.filter((track) => track.id !== action.id);

    default:
      return state;
  }
}
