import { isAdmin } from "../access/isAdmin";
import { isAdminOrAmbEditor, isAdminOrCatEditor } from "../access/isAdminOrST";
import { CollectionConfig } from "payload/types";

const Consumptions: CollectionConfig = {
  slug: "consumptions",
  //auth: true,
  admin: {
    useAsTitle: "consumptionDay",
  },
  access: {
    create: isAdminOrAmbEditor,
    read: isAdminOrAmbEditor,
    update: isAdminOrAmbEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: "consumptionDay",
      type: "date",
    },
    {
      name: "quantity",
      type: "number",
    },
    {
      name: "charge",
      type: "number",
    },
  ],
};

export default Consumptions;
