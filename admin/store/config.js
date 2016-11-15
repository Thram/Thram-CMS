import prodStore from "./config.prod";
import devStore from "./config.dev";

export const init = (state)=> process.env.NODE_ENV === 'production' ? prodStore(state) : devStore(state);

