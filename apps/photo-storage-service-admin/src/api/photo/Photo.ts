import { User } from "../user/User";

export type Photo = {
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  uploadDate: Date | null;
  url: string | null;
  user?: User | null;
};
