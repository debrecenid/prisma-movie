import * as TypeGraphQL from "type-graphql";

export enum PersonScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  name = "name",
  born = "born",
  died = "died"
}
TypeGraphQL.registerEnumType(PersonScalarFieldEnum, {
  name: "PersonScalarFieldEnum",
  description: undefined,
});
