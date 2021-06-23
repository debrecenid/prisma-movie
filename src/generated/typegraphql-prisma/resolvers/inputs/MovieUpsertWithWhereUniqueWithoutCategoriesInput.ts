import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutCategoriesInput } from "../inputs/MovieCreateWithoutCategoriesInput";
import { MovieUpdateWithoutCategoriesInput } from "../inputs/MovieUpdateWithoutCategoriesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpsertWithWhereUniqueWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutCategoriesInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: MovieCreateWithoutCategoriesInput;
}
