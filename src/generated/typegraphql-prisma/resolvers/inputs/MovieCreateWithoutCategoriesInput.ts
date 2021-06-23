import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedManyWithoutMoviesInput } from "../inputs/PersonCreateNestedManyWithoutMoviesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => PersonCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  actors?: PersonCreateNestedManyWithoutMoviesInput | undefined;
}
