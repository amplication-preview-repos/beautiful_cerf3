import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PhotoTitle } from "../photo/PhotoTitle";
import { StorageTitle } from "../storage/StorageTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput
          source="photos"
          reference="Photo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PhotoTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="storages"
          reference="Storage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StorageTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
