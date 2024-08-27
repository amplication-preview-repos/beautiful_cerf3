import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StorageCreateInput = {
  capacity?: number | null;
  location?: string | null;
  usedSpace?: number | null;
  user?: UserWhereUniqueInput | null;
};
