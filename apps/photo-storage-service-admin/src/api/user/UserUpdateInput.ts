import { PhotoUpdateManyWithoutUsersInput } from "./PhotoUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StorageUpdateManyWithoutUsersInput } from "./StorageUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  photos?: PhotoUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  storages?: StorageUpdateManyWithoutUsersInput;
  username?: string;
};
