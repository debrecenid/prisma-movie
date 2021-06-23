import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutMoviesInput } from "../inputs/CategoryCreateOrConnectWithoutMoviesInput";
import { CategoryCreateWithoutMoviesInput } from "../inputs/CategoryCreateWithoutMoviesInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutMoviesInput } from "../inputs/CategoryUpdateManyWithWhereWithoutMoviesInput";
import { CategoryUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutMoviesInput";
import { CategoryUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutMoviesInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CategoryUpdateManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  set?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  update?: CategoryUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutMoviesInput], {
    nullable: true
  })
  updateMany?: CategoryUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;
}
