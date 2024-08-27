import { Photo } from "../photo/Photo";
import { JsonValue } from "type-fest";
import { Storage } from "../storage/Storage";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  photos?: Array<Photo>;
  roles: JsonValue;
  storages?: Array<Storage>;
  updatedAt: Date;
  username: string;
};
