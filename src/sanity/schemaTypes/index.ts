import { type SchemaTypeDefinition } from "sanity";

import propertydescription from "../schemas/propertydescription";
import homebanner from "../schemas/homebanner";
import downtownpansacola from "../schemas/downtownpansacola";
import gallerybanner from "../schemas/gallerybanner";
import gallery from "../schemas/gallery";
import galleryOrdered from "../schemas/galleryOrdered";
import video from "../schemas/video";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homebanner,
    gallerybanner,
    gallery,
    downtownpansacola,
    propertydescription,
    video,
    galleryOrdered
  ],
};
