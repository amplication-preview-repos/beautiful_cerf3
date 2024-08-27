import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUpdateInput = {
  description?: string | null;
  title?: string | null;
  uploadDate?: Date | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
