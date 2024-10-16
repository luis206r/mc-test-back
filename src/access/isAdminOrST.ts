import { Access } from "payload/config";

export const isAdminOrCatEditor: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes("admin") || user.roles?.includes("editorCat")) {
      return true;
    }
  }

  // Reject everyone else
  return false;
};

export const isAdminOrAmbEditor: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes("admin") || user.roles?.includes("editorAmb")) {
      return true;
    }
  }

  // Reject everyone else
  return false;
};
