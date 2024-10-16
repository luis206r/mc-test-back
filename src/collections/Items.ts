import { isAdmin } from "../access/isAdmin";
import { isAdminOrCatEditor } from "../access/isAdminOrST";
import { CollectionConfig } from "payload/types";

const Items: CollectionConfig = {
  slug: "items",
  //auth: true,
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: isAdminOrCatEditor,
    read: isAdminOrCatEditor,
    update: isAdminOrCatEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "price",
      type: "number",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "quality",
      type: "number",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Items;
