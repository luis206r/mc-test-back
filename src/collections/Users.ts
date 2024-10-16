import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    depth: 0,
  },
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: "email",
  },

  fields: [
    {
      type: "row",
      fields: [
        {
          name: "firstName",
          type: "text",
          required: true,
        },
        {
          name: "lastName",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "roles",
      saveToJWT: true,
      type: "select",
      hasMany: true,
      defaultValue: ["editorCat"],
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "EditorCat",
          value: "editorCat",
        },
        {
          label: "EditorAmb",
          value: "editorAmb",
        },
      ],
    },
  ],
};

export default Users;
