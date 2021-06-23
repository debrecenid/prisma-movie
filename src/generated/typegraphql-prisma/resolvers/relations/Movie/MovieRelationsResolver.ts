import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { Movie } from "../../../models/Movie";
import { Person } from "../../../models/Person";
import { MovieActorsArgs } from "./args/MovieActorsArgs";
import { MovieCategoriesArgs } from "./args/MovieCategoriesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class MovieRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Category], {
    nullable: false
  })
  async categories(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieCategoriesArgs): Promise<Category[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).categories(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Person], {
    nullable: false
  })
  async actors(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieActorsArgs): Promise<Person[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).actors(args);
  }
}
