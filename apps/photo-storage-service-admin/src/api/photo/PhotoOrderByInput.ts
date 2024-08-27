import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
};
