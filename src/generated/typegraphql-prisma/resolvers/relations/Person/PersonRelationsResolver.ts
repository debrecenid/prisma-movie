import * as TypeGraphQL from "type-graphql";
import { Movie } from "../../../models/Movie";
import { Person } from "../../../models/Person";
import { PersonMoviesArgs } from "./args/PersonMoviesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class PersonRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonMoviesArgs): Promise<Movie[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).movies(args);
  }
}
