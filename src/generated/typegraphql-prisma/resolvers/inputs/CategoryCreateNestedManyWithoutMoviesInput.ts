import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutMoviesInput } from "../inputs/CategoryCreateOrConnectWithoutMoviesInput";
import { CategoryCreateWithoutMoviesInput } from "../inputs/CategoryCreateWithoutMoviesInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CategoryCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;
}
