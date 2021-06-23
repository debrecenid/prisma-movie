import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutActorsInput } from "../inputs/MovieCreateNestedManyWithoutActorsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  born!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  died!: Date;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutActorsInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutActorsInput | undefined;
}
