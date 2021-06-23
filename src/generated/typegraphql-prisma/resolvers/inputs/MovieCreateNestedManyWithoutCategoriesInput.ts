import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutCategoriesInput } from "../inputs/MovieCreateOrConnectWithoutCategoriesInput";
import { MovieCreateWithoutCategoriesInput } from "../inputs/MovieCreateWithoutCategoriesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateNestedManyWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutCategoriesInput], {
    nullable: true
  })
  create?: MovieCreateWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutCategoriesInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
