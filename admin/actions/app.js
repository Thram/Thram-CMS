/**
 * Created by Thram on 9/11/16.
 */
export const START = 'START';
export const start = () => ({type: START});

export const CHANGE_LANG = 'CHANGE_LANG';
export const changeLang  = (lang) => ({type: CHANGE_LANG, lang});