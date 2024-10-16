export interface User {
  id: string;
  firstName: string;
  lastName: string;
  roles?: ("admin" | "editorCat" | "editorAmb")[];
  // sites?: string[] | Site[];
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
