/**
 * Created by Thram on 8/11/16.
 */
export const setBasicHeader = (response) => {
  response.append("Cache-Control", "max-age=2592000, cache");
  response.append("Server", "ThramCMS - a CMS written in node with Koa and React.");
};