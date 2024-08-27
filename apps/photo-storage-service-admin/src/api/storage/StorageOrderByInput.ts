import { SortOrder } from "../../util/SortOrder";

export type StorageOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  updatedAt?: SortOrder;
  usedSpace?: SortOrder;
  userId?: SortOrder;
};
