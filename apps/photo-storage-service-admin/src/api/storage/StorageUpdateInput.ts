import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StorageUpdateInput = {
  capacity?: number | null;
  location?: string | null;
  usedSpace?: number | null;
  user?: UserWhereUniqueInput | null;
};
