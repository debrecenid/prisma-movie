import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutCategoriesInput } from "../inputs/MovieCreateOrConnectWithoutCategoriesInput";
import { MovieCreateWithoutCategoriesInput } from "../inputs/MovieCreateWithoutCategoriesInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutCategoriesInput } from "../inputs/MovieUpdateManyWithWhereWithoutCategoriesInput";
import { MovieUpdateWithWhereUniqueWithoutCategoriesInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutCategoriesInput";
import { MovieUpsertWithWhereUniqueWithoutCategoriesInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutCategoriesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateManyWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutCategoriesInput], {
    nullable: true
  })
  create?: MovieCreateWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutCategoriesInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutCategoriesInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  set?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutCategoriesInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutCategoriesInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
