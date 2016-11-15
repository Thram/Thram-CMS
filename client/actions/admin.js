/**
 * Created by Thram on 9/11/16.
 */
export const LOG_IN_ADMIN = 'START_ADMIN';
export const startAdmin  = () => ({type: START_ADMIN});

export const REMOVE_TRACK = 'REMOVE_TRACK';
export const removeTrack  = (id) =>({
  type: REMOVE_TRACK,
  id
});
