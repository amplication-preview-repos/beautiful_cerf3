import { StorageWhereInput } from "./StorageWhereInput";
import { StorageOrderByInput } from "./StorageOrderByInput";

export type StorageFindManyArgs = {
  where?: StorageWhereInput;
  orderBy?: Array<StorageOrderByInput>;
  skip?: number;
  take?: number;
};
