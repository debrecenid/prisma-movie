import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonOrderByInput } from "../../../inputs/PersonOrderByInput";
import { PersonScalarWhereWithAggregatesInput } from "../../../inputs/PersonScalarWhereWithAggregatesInput";
import { PersonWhereInput } from "../../../inputs/PersonWhereInput";
import { PersonScalarFieldEnum } from "../../../../enums/PersonScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPersonArgs {
  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  where?: PersonWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PersonOrderByInput], {
    nullable: true
  })
  orderBy?: PersonOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "name" | "born" | "died">;

  @TypeGraphQL.Field(_type => PersonScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PersonScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
