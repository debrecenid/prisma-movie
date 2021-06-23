import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Person: crudResolvers.PersonCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  Movie: crudResolvers.MovieCrudResolver
};
const relationResolversMap = {
  Person: relationResolvers.PersonRelationsResolver,
  Category: relationResolvers.CategoryRelationsResolver,
  Movie: relationResolvers.MovieRelationsResolver
};
const actionResolversMap = {
  Person: {
    person: actionResolvers.FindUniquePersonResolver,
    findFirstPerson: actionResolvers.FindFirstPersonResolver,
    people: actionResolvers.FindManyPersonResolver,
    createPerson: actionResolvers.CreatePersonResolver,
    deletePerson: actionResolvers.DeletePersonResolver,
    updatePerson: actionResolvers.UpdatePersonResolver,
    deleteManyPerson: actionResolvers.DeleteManyPersonResolver,
    updateManyPerson: actionResolvers.UpdateManyPersonResolver,
    upsertPerson: actionResolvers.UpsertPersonResolver,
    aggregatePerson: actionResolvers.AggregatePersonResolver,
    groupByPerson: actionResolvers.GroupByPersonResolver
  },
  Category: {
    category: actionResolvers.FindUniqueCategoryResolver,
    findFirstCategory: actionResolvers.FindFirstCategoryResolver,
    categories: actionResolvers.FindManyCategoryResolver,
    createCategory: actionResolvers.CreateCategoryResolver,
    deleteCategory: actionResolvers.DeleteCategoryResolver,
    updateCategory: actionResolvers.UpdateCategoryResolver,
    deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
    updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
    upsertCategory: actionResolvers.UpsertCategoryResolver,
    aggregateCategory: actionResolvers.AggregateCategoryResolver,
    groupByCategory: actionResolvers.GroupByCategoryResolver
  },
  Movie: {
    movie: actionResolvers.FindUniqueMovieResolver,
    findFirstMovie: actionResolvers.FindFirstMovieResolver,
    movies: actionResolvers.FindManyMovieResolver,
    createMovie: actionResolvers.CreateMovieResolver,
    deleteMovie: actionResolvers.DeleteMovieResolver,
    updateMovie: actionResolvers.UpdateMovieResolver,
    deleteManyMovie: actionResolvers.DeleteManyMovieResolver,
    updateManyMovie: actionResolvers.UpdateManyMovieResolver,
    upsertMovie: actionResolvers.UpsertMovieResolver,
    aggregateMovie: actionResolvers.AggregateMovieResolver,
    groupByMovie: actionResolvers.GroupByMovieResolver
  }
};
const resolversInfo = {
  Person: ["person", "findFirstPerson", "people", "createPerson", "deletePerson", "updatePerson", "deleteManyPerson", "updateManyPerson", "upsertPerson", "aggregatePerson", "groupByPerson"],
  Category: ["category", "findFirstCategory", "categories", "createCategory", "deleteCategory", "updateCategory", "deleteManyCategory", "updateManyCategory", "upsertCategory", "aggregateCategory", "groupByCategory"],
  Movie: ["movie", "findFirstMovie", "movies", "createMovie", "deleteMovie", "updateMovie", "deleteManyMovie", "updateManyMovie", "upsertMovie", "aggregateMovie", "groupByMovie"]
};
const relationResolversInfo = {
  Person: ["movies"],
  Category: ["movies"],
  Movie: ["categories", "actors"]
};
const modelsInfo = {
  Person: ["id", "createdAt", "name", "born", "died"],
  Category: ["id", "name"],
  Movie: ["id", "title"]
};
const inputsInfo = {
  PersonWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "born", "died", "movies"],
  PersonOrderByInput: ["id", "createdAt", "name", "born", "died"],
  PersonWhereUniqueInput: ["id"],
  PersonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "born", "died"],
  CategoryWhereInput: ["AND", "OR", "NOT", "id", "name", "movies"],
  CategoryOrderByInput: ["id", "name"],
  CategoryWhereUniqueInput: ["id"],
  CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  MovieWhereInput: ["AND", "OR", "NOT", "id", "title", "categories", "actors"],
  MovieOrderByInput: ["id", "title"],
  MovieWhereUniqueInput: ["id"],
  MovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title"],
  PersonCreateInput: ["createdAt", "name", "born", "died", "movies"],
  PersonUpdateInput: ["createdAt", "name", "born", "died", "movies"],
  PersonUpdateManyMutationInput: ["createdAt", "name", "born", "died"],
  CategoryCreateInput: ["name", "movies"],
  CategoryUpdateInput: ["name", "movies"],
  CategoryUpdateManyMutationInput: ["name"],
  MovieCreateInput: ["title", "categories", "actors"],
  MovieUpdateInput: ["title", "categories", "actors"],
  MovieUpdateManyMutationInput: ["title"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  MovieListRelationFilter: ["every", "some", "none"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  CategoryListRelationFilter: ["every", "some", "none"],
  PersonListRelationFilter: ["every", "some", "none"],
  MovieCreateNestedManyWithoutActorsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  MovieUpdateManyWithoutActorsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  MovieCreateNestedManyWithoutCategoriesInput: ["create", "connectOrCreate", "connect"],
  MovieUpdateManyWithoutCategoriesInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CategoryCreateNestedManyWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  PersonCreateNestedManyWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  CategoryUpdateManyWithoutMoviesInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PersonUpdateManyWithoutMoviesInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  MovieCreateWithoutActorsInput: ["title", "categories"],
  MovieCreateOrConnectWithoutActorsInput: ["where", "create"],
  MovieUpsertWithWhereUniqueWithoutActorsInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutActorsInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutActorsInput: ["where", "data"],
  MovieScalarWhereInput: ["AND", "OR", "NOT", "id", "title"],
  MovieCreateWithoutCategoriesInput: ["title", "actors"],
  MovieCreateOrConnectWithoutCategoriesInput: ["where", "create"],
  MovieUpsertWithWhereUniqueWithoutCategoriesInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutCategoriesInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutCategoriesInput: ["where", "data"],
  CategoryCreateWithoutMoviesInput: ["name"],
  CategoryCreateOrConnectWithoutMoviesInput: ["where", "create"],
  PersonCreateWithoutMoviesInput: ["createdAt", "name", "born", "died"],
  PersonCreateOrConnectWithoutMoviesInput: ["where", "create"],
  CategoryUpsertWithWhereUniqueWithoutMoviesInput: ["where", "update", "create"],
  CategoryUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  CategoryUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
  CategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
  PersonUpsertWithWhereUniqueWithoutMoviesInput: ["where", "update", "create"],
  PersonUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  PersonUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
  PersonScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "born", "died"],
  MovieUpdateWithoutActorsInput: ["title", "categories"],
  MovieUpdateWithoutCategoriesInput: ["title", "actors"],
  CategoryUpdateWithoutMoviesInput: ["name"],
  PersonUpdateWithoutMoviesInput: ["createdAt", "name", "born", "died"]
};
const outputsInfo = {
  AggregatePerson: ["_count", "_avg", "_sum", "_min", "_max"],
  PersonGroupBy: ["id", "createdAt", "name", "born", "died", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategory: ["_count", "_avg", "_sum", "_min", "_max"],
  CategoryGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovie: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieGroupBy: ["id", "title", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PersonCountAggregate: ["id", "createdAt", "name", "born", "died", "_all"],
  PersonAvgAggregate: ["id"],
  PersonSumAggregate: ["id"],
  PersonMinAggregate: ["id", "createdAt", "name", "born", "died"],
  PersonMaxAggregate: ["id", "createdAt", "name", "born", "died"],
  CategoryCountAggregate: ["id", "name", "_all"],
  CategoryAvgAggregate: ["id"],
  CategorySumAggregate: ["id"],
  CategoryMinAggregate: ["id", "name"],
  CategoryMaxAggregate: ["id", "name"],
  MovieCountAggregate: ["id", "title", "_all"],
  MovieAvgAggregate: ["id"],
  MovieSumAggregate: ["id"],
  MovieMinAggregate: ["id", "title"],
  MovieMaxAggregate: ["id", "title"]
};
const argsInfo = {
  FindUniquePersonArgs: ["where"],
  FindFirstPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePersonArgs: ["data"],
  DeletePersonArgs: ["where"],
  UpdatePersonArgs: ["data", "where"],
  DeleteManyPersonArgs: ["where"],
  UpdateManyPersonArgs: ["data", "where"],
  UpsertPersonArgs: ["where", "create", "update"],
  AggregatePersonArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPersonArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCategoryArgs: ["where"],
  FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCategoryArgs: ["data"],
  DeleteCategoryArgs: ["where"],
  UpdateCategoryArgs: ["data", "where"],
  DeleteManyCategoryArgs: ["where"],
  UpdateManyCategoryArgs: ["data", "where"],
  UpsertCategoryArgs: ["where", "create", "update"],
  AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueMovieArgs: ["where"],
  FindFirstMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMovieArgs: ["data"],
  DeleteMovieArgs: ["where"],
  UpdateMovieArgs: ["data", "where"],
  DeleteManyMovieArgs: ["where"],
  UpdateManyMovieArgs: ["data", "where"],
  UpsertMovieArgs: ["where", "create", "update"],
  AggregateMovieArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMovieArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







