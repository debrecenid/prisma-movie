import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CategoryScalarWhereInput {
  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  AND?: CategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  OR?: CategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  NOT?: CategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
