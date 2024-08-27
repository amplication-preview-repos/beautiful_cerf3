import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";
import { StorageListRelationFilter } from "../storage/StorageListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  photos?: PhotoListRelationFilter;
  storages?: StorageListRelationFilter;
  username?: StringFilter;
};
