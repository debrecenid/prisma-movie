import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { Movie } from "../../../models/Movie";
import { CategoryMoviesArgs } from "./args/CategoryMoviesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoryMoviesArgs): Promise<Movie[]> {
    return getPrismaFromContext(ctx).category.findUnique({
      where: {
        id: category.id,
      },
    }).movies(args);
  }
}
