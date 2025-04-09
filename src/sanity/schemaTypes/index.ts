import { type SchemaTypeDefinition } from "sanity";

import homebanner from "../schemas/homebanner";
import downtownpansacola from "../schemas/downtownpansacola";
import gallerybanner from "../schemas/gallerybanner";
import gallery from "../schemas/gallery";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homebanner, gallerybanner, gallery, downtownpansacola],
};
