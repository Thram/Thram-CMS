/**
 * Created by Thram on 8/11/16.
 */
import base from "./base";
import thram_cms from "./thram_cms";
import images from "./images";
import posts from "./posts";

base.use('/thram_cms', thram_cms.routes(), thram_cms.allowedMethods());
base.use('/posts', posts.routes(), posts.allowedMethods());
base.use('/images', images.routes(), images.allowedMethods());

export default base;