import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedManyWithoutMoviesInput } from "../inputs/CategoryCreateNestedManyWithoutMoviesInput";
import { PersonCreateNestedManyWithoutMoviesInput } from "../inputs/PersonCreateNestedManyWithoutMoviesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  categories?: CategoryCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  actors?: PersonCreateNestedManyWithoutMoviesInput | undefined;
}
