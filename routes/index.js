/**
 * Created by Thram on 8/11/16.
 */
import base from "./base";
import images from "./images";
import posts from "./posts";

base.use('/posts', posts.routes(), posts.allowedMethods());
base.use('/images', images.routes(), images.allowedMethods());

export default base;