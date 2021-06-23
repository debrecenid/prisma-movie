import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedManyWithoutMoviesInput } from "../inputs/CategoryCreateNestedManyWithoutMoviesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateWithoutActorsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  categories?: CategoryCreateNestedManyWithoutMoviesInput | undefined;
}
