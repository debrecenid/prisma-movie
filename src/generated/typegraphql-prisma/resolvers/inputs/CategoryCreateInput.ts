import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutCategoriesInput } from "../inputs/MovieCreateNestedManyWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CategoryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutCategoriesInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutCategoriesInput | undefined;
}
