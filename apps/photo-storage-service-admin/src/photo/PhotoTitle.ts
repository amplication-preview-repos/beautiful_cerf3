import { Photo as TPhoto } from "../api/photo/Photo";

export const PHOTO_TITLE_FIELD = "title";

export const PhotoTitle = (record: TPhoto): string => {
  return record.title?.toString() || String(record.id);
};
