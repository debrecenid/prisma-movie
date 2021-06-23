import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutMoviesInput } from "../inputs/CategoryUpdateWithoutMoviesInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CategoryUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutMoviesInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutMoviesInput;
}
