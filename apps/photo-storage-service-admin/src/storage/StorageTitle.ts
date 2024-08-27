import { Storage as TStorage } from "../api/storage/Storage";

export const STORAGE_TITLE_FIELD = "location";

export const StorageTitle = (record: TStorage): string => {
  return record.location?.toString() || String(record.id);
};
