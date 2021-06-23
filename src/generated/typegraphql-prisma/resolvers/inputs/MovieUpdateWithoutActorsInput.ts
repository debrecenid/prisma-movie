import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateManyWithoutMoviesInput } from "../inputs/CategoryUpdateManyWithoutMoviesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateWithoutActorsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutMoviesInput, {
    nullable: true
  })
  categories?: CategoryUpdateManyWithoutMoviesInput | undefined;
}
