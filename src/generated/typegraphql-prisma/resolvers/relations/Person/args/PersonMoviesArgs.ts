import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieOrderByInput } from "../../../inputs/MovieOrderByInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
import { MovieScalarFieldEnum } from "../../../../enums/MovieScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PersonMoviesArgs {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieOrderByInput], {
    nullable: true
  })
  orderBy?: MovieOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title"> | undefined;
}
