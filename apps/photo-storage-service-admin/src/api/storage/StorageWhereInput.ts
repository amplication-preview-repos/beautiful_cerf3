import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StorageWhereInput = {
  capacity?: IntNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  usedSpace?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
