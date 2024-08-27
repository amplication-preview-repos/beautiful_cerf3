import { PhotoCreateNestedManyWithoutUsersInput } from "./PhotoCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StorageCreateNestedManyWithoutUsersInput } from "./StorageCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  photos?: PhotoCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  storages?: StorageCreateNestedManyWithoutUsersInput;
  username: string;
};
