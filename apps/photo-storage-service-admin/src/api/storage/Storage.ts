import { User } from "../user/User";

export type Storage = {
  capacity: number | null;
  createdAt: Date;
  id: string;
  location: string | null;
  updatedAt: Date;
  usedSpace: number | null;
  user?: User | null;
};
