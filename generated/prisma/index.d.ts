
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profiles
 * 
 */
export type Profiles = $Result.DefaultSelection<Prisma.$ProfilesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Subjects
 * 
 */
export type Subjects = $Result.DefaultSelection<Prisma.$SubjectsPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model UsersProfilesSchools
 * 
 */
export type UsersProfilesSchools = $Result.DefaultSelection<Prisma.$UsersProfilesSchoolsPayload>
/**
 * Model Classes
 * 
 */
export type Classes = $Result.DefaultSelection<Prisma.$ClassesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profiles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profiles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profiles`: Exposes CRUD operations for the **Profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.ProfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subjects`: Exposes CRUD operations for the **Subjects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subjects.findMany()
    * ```
    */
  get subjects(): Prisma.SubjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersProfilesSchools`: Exposes CRUD operations for the **UsersProfilesSchools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersProfilesSchools
    * const usersProfilesSchools = await prisma.usersProfilesSchools.findMany()
    * ```
    */
  get usersProfilesSchools(): Prisma.UsersProfilesSchoolsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classes`: Exposes CRUD operations for the **Classes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classes.findMany()
    * ```
    */
  get classes(): Prisma.ClassesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profiles: 'Profiles',
    Users: 'Users',
    Subjects: 'Subjects',
    School: 'School',
    UsersProfilesSchools: 'UsersProfilesSchools',
    Classes: 'Classes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profiles" | "users" | "subjects" | "school" | "usersProfilesSchools" | "classes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profiles: {
        payload: Prisma.$ProfilesPayload<ExtArgs>
        fields: Prisma.ProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findFirst: {
            args: Prisma.ProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findMany: {
            args: Prisma.ProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          create: {
            args: Prisma.ProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          createMany: {
            args: Prisma.ProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          delete: {
            args: Prisma.ProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          update: {
            args: Prisma.ProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          deleteMany: {
            args: Prisma.ProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          upsert: {
            args: Prisma.ProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.ProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Subjects: {
        payload: Prisma.$SubjectsPayload<ExtArgs>
        fields: Prisma.SubjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          findFirst: {
            args: Prisma.SubjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          findMany: {
            args: Prisma.SubjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>[]
          }
          create: {
            args: Prisma.SubjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          createMany: {
            args: Prisma.SubjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>[]
          }
          delete: {
            args: Prisma.SubjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          update: {
            args: Prisma.SubjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          deleteMany: {
            args: Prisma.SubjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>[]
          }
          upsert: {
            args: Prisma.SubjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          aggregate: {
            args: Prisma.SubjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjects>
          }
          groupBy: {
            args: Prisma.SubjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectsCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectsCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      UsersProfilesSchools: {
        payload: Prisma.$UsersProfilesSchoolsPayload<ExtArgs>
        fields: Prisma.UsersProfilesSchoolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersProfilesSchoolsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersProfilesSchoolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersProfilesSchoolsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersProfilesSchoolsPayload>
          }
          findFirst: {
            args: Prisma.UsersProfilesSchoolsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersProfilesSchoolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersProfilesSchoolsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersProfilesSchoolsPayload>
          }
          findMany: {
            args: Prisma.UsersProfilesSchoolsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersProfilesSchoolsPayload>[]
          }
          create: {
            args: Prisma.UsersProfilesSchoolsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersProfilesSchoolsPayload>
          }
          createMany: {
            args: Prisma.UsersProfilesSchoolsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersProfilesSchoolsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersProfilesSchoolsPayload>[]
          }
          delete: {
            args: Prisma.UsersProfilesSchoolsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersProfilesSchoolsPayload>
          }
          update: {
            args: Prisma.UsersProfilesSchoolsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersProfilesSchoolsPayload>
          }
          deleteMany: {
            args: Prisma.UsersProfilesSchoolsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersProfilesSchoolsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersProfilesSchoolsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersProfilesSchoolsPayload>[]
          }
          upsert: {
            args: Prisma.UsersProfilesSchoolsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersProfilesSchoolsPayload>
          }
          aggregate: {
            args: Prisma.UsersProfilesSchoolsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersProfilesSchools>
          }
          groupBy: {
            args: Prisma.UsersProfilesSchoolsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersProfilesSchoolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersProfilesSchoolsCountArgs<ExtArgs>
            result: $Utils.Optional<UsersProfilesSchoolsCountAggregateOutputType> | number
          }
        }
      }
      Classes: {
        payload: Prisma.$ClassesPayload<ExtArgs>
        fields: Prisma.ClassesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          findFirst: {
            args: Prisma.ClassesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          findMany: {
            args: Prisma.ClassesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>[]
          }
          create: {
            args: Prisma.ClassesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          createMany: {
            args: Prisma.ClassesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>[]
          }
          delete: {
            args: Prisma.ClassesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          update: {
            args: Prisma.ClassesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          deleteMany: {
            args: Prisma.ClassesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>[]
          }
          upsert: {
            args: Prisma.ClassesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          aggregate: {
            args: Prisma.ClassesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasses>
          }
          groupBy: {
            args: Prisma.ClassesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassesCountArgs<ExtArgs>
            result: $Utils.Optional<ClassesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    profiles?: ProfilesOmit
    users?: UsersOmit
    subjects?: SubjectsOmit
    school?: SchoolOmit
    usersProfilesSchools?: UsersProfilesSchoolsOmit
    classes?: ClassesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfilesCountOutputType
   */

  export type ProfilesCountOutputType = {
    upsProfile: number
    classProfile: number
  }

  export type ProfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upsProfile?: boolean | ProfilesCountOutputTypeCountUpsProfileArgs
    classProfile?: boolean | ProfilesCountOutputTypeCountClassProfileArgs
  }

  // Custom InputTypes
  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilesCountOutputType
     */
    select?: ProfilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeCountUpsProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersProfilesSchoolsWhereInput
  }

  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeCountClassProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    upsUser: number
    approver: number
    classCreator: number
    classRegistrar: number
    classApprover: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upsUser?: boolean | UsersCountOutputTypeCountUpsUserArgs
    approver?: boolean | UsersCountOutputTypeCountApproverArgs
    classCreator?: boolean | UsersCountOutputTypeCountClassCreatorArgs
    classRegistrar?: boolean | UsersCountOutputTypeCountClassRegistrarArgs
    classApprover?: boolean | UsersCountOutputTypeCountClassApproverArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUpsUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersProfilesSchoolsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountApproverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersProfilesSchoolsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountClassCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountClassRegistrarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountClassApproverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassesWhereInput
  }


  /**
   * Count Type SubjectsCountOutputType
   */

  export type SubjectsCountOutputType = {
    classSubject: number
  }

  export type SubjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classSubject?: boolean | SubjectsCountOutputTypeCountClassSubjectArgs
  }

  // Custom InputTypes
  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectsCountOutputType
     */
    select?: SubjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeCountClassSubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassesWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    upsSchool: number
    classSchool: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upsSchool?: boolean | SchoolCountOutputTypeCountUpsSchoolArgs
    classSchool?: boolean | SchoolCountOutputTypeCountClassSchoolArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountUpsSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersProfilesSchoolsWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountClassSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    id: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    id?: true
  }

  export type ProfilesSumAggregateInputType = {
    id?: true
  }

  export type ProfilesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to aggregate.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type ProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilesWhereInput
    orderBy?: ProfilesOrderByWithAggregationInput | ProfilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: ProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _avg?: ProfilesAvgAggregateInputType
    _sum?: ProfilesSumAggregateInputType
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends ProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type ProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    upsProfile?: boolean | Profiles$upsProfileArgs<ExtArgs>
    classProfile?: boolean | Profiles$classProfileArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type ProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["profiles"]>
  export type ProfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upsProfile?: boolean | Profiles$upsProfileArgs<ExtArgs>
    classProfile?: boolean | Profiles$classProfileArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profiles"
    objects: {
      upsProfile: Prisma.$UsersProfilesSchoolsPayload<ExtArgs>[]
      classProfile: Prisma.$ClassesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type ProfilesGetPayload<S extends boolean | null | undefined | ProfilesDefaultArgs> = $Result.GetResult<Prisma.$ProfilesPayload, S>

  type ProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface ProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profiles'], meta: { name: 'Profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {ProfilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilesFindUniqueArgs>(args: SelectSubset<T, ProfilesFindUniqueArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilesFindFirstArgs>(args?: SelectSubset<T, ProfilesFindFirstArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfilesFindManyArgs>(args?: SelectSubset<T, ProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {ProfilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends ProfilesCreateArgs>(args: SelectSubset<T, ProfilesCreateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilesCreateManyArgs>(args?: SelectSubset<T, ProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profiles.
     * @param {ProfilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends ProfilesDeleteArgs>(args: SelectSubset<T, ProfilesDeleteArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {ProfilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilesUpdateArgs>(args: SelectSubset<T, ProfilesUpdateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilesDeleteManyArgs>(args?: SelectSubset<T, ProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilesUpdateManyArgs>(args: SelectSubset<T, ProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfilesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profiles.
     * @param {ProfilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends ProfilesUpsertArgs>(args: SelectSubset<T, ProfilesUpsertArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfilesCountArgs>(
      args?: Subset<T, ProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilesGroupByArgs['orderBy'] }
        : { orderBy?: ProfilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profiles model
   */
  readonly fields: ProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    upsProfile<T extends Profiles$upsProfileArgs<ExtArgs> = {}>(args?: Subset<T, Profiles$upsProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classProfile<T extends Profiles$classProfileArgs<ExtArgs> = {}>(args?: Subset<T, Profiles$classProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profiles model
   */
  interface ProfilesFieldRefs {
    readonly id: FieldRef<"Profiles", 'Int'>
    readonly name: FieldRef<"Profiles", 'String'>
    readonly createdAt: FieldRef<"Profiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profiles findUnique
   */
  export type ProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findUniqueOrThrow
   */
  export type ProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findFirst
   */
  export type ProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findFirstOrThrow
   */
  export type ProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findMany
   */
  export type ProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles create
   */
  export type ProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Profiles.
     */
    data: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
  }

  /**
   * Profiles createMany
   */
  export type ProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profiles createManyAndReturn
   */
  export type ProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profiles update
   */
  export type ProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Profiles.
     */
    data: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
    /**
     * Choose, which Profiles to update.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles updateMany
   */
  export type ProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profiles updateManyAndReturn
   */
  export type ProfilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profiles upsert
   */
  export type ProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Profiles to update in case it exists.
     */
    where: ProfilesWhereUniqueInput
    /**
     * In case the Profiles found by the `where` argument doesn't exist, create a new Profiles with this data.
     */
    create: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
    /**
     * In case the Profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
  }

  /**
   * Profiles delete
   */
  export type ProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter which Profiles to delete.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles deleteMany
   */
  export type ProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profiles.upsProfile
   */
  export type Profiles$upsProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    where?: UsersProfilesSchoolsWhereInput
    orderBy?: UsersProfilesSchoolsOrderByWithRelationInput | UsersProfilesSchoolsOrderByWithRelationInput[]
    cursor?: UsersProfilesSchoolsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersProfilesSchoolsScalarFieldEnum | UsersProfilesSchoolsScalarFieldEnum[]
  }

  /**
   * Profiles.classProfile
   */
  export type Profiles$classProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    where?: ClassesWhereInput
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    cursor?: ClassesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * Profiles without action
   */
  export type ProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    password: string
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    createdAt?: boolean
    upsUser?: boolean | Users$upsUserArgs<ExtArgs>
    approver?: boolean | Users$approverArgs<ExtArgs>
    classCreator?: boolean | Users$classCreatorArgs<ExtArgs>
    classRegistrar?: boolean | Users$classRegistrarArgs<ExtArgs>
    classApprover?: boolean | Users$classApproverArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "createdAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upsUser?: boolean | Users$upsUserArgs<ExtArgs>
    approver?: boolean | Users$approverArgs<ExtArgs>
    classCreator?: boolean | Users$classCreatorArgs<ExtArgs>
    classRegistrar?: boolean | Users$classRegistrarArgs<ExtArgs>
    classApprover?: boolean | Users$classApproverArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      upsUser: Prisma.$UsersProfilesSchoolsPayload<ExtArgs>[]
      approver: Prisma.$UsersProfilesSchoolsPayload<ExtArgs>[]
      classCreator: Prisma.$ClassesPayload<ExtArgs>[]
      classRegistrar: Prisma.$ClassesPayload<ExtArgs>[]
      classApprover: Prisma.$ClassesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    upsUser<T extends Users$upsUserArgs<ExtArgs> = {}>(args?: Subset<T, Users$upsUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approver<T extends Users$approverArgs<ExtArgs> = {}>(args?: Subset<T, Users$approverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classCreator<T extends Users$classCreatorArgs<ExtArgs> = {}>(args?: Subset<T, Users$classCreatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classRegistrar<T extends Users$classRegistrarArgs<ExtArgs> = {}>(args?: Subset<T, Users$classRegistrarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classApprover<T extends Users$classApproverArgs<ExtArgs> = {}>(args?: Subset<T, Users$classApproverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.upsUser
   */
  export type Users$upsUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    where?: UsersProfilesSchoolsWhereInput
    orderBy?: UsersProfilesSchoolsOrderByWithRelationInput | UsersProfilesSchoolsOrderByWithRelationInput[]
    cursor?: UsersProfilesSchoolsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersProfilesSchoolsScalarFieldEnum | UsersProfilesSchoolsScalarFieldEnum[]
  }

  /**
   * Users.approver
   */
  export type Users$approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    where?: UsersProfilesSchoolsWhereInput
    orderBy?: UsersProfilesSchoolsOrderByWithRelationInput | UsersProfilesSchoolsOrderByWithRelationInput[]
    cursor?: UsersProfilesSchoolsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersProfilesSchoolsScalarFieldEnum | UsersProfilesSchoolsScalarFieldEnum[]
  }

  /**
   * Users.classCreator
   */
  export type Users$classCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    where?: ClassesWhereInput
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    cursor?: ClassesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * Users.classRegistrar
   */
  export type Users$classRegistrarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    where?: ClassesWhereInput
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    cursor?: ClassesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * Users.classApprover
   */
  export type Users$classApproverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    where?: ClassesWhereInput
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    cursor?: ClassesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Subjects
   */

  export type AggregateSubjects = {
    _count: SubjectsCountAggregateOutputType | null
    _avg: SubjectsAvgAggregateOutputType | null
    _sum: SubjectsSumAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  export type SubjectsAvgAggregateOutputType = {
    id: number | null
  }

  export type SubjectsSumAggregateOutputType = {
    id: number | null
  }

  export type SubjectsMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type SubjectsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type SubjectsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type SubjectsAvgAggregateInputType = {
    id?: true
  }

  export type SubjectsSumAggregateInputType = {
    id?: true
  }

  export type SubjectsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SubjectsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SubjectsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type SubjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to aggregate.
     */
    where?: SubjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectsOrderByWithRelationInput | SubjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectsMaxAggregateInputType
  }

  export type GetSubjectsAggregateType<T extends SubjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjects[P]>
      : GetScalarType<T[P], AggregateSubjects[P]>
  }




  export type SubjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectsWhereInput
    orderBy?: SubjectsOrderByWithAggregationInput | SubjectsOrderByWithAggregationInput[]
    by: SubjectsScalarFieldEnum[] | SubjectsScalarFieldEnum
    having?: SubjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectsCountAggregateInputType | true
    _avg?: SubjectsAvgAggregateInputType
    _sum?: SubjectsSumAggregateInputType
    _min?: SubjectsMinAggregateInputType
    _max?: SubjectsMaxAggregateInputType
  }

  export type SubjectsGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: SubjectsCountAggregateOutputType | null
    _avg: SubjectsAvgAggregateOutputType | null
    _sum: SubjectsSumAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  type GetSubjectsGroupByPayload<T extends SubjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
        }
      >
    >


  export type SubjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    classSubject?: boolean | Subjects$classSubjectArgs<ExtArgs>
    _count?: boolean | SubjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjects"]>

  export type SubjectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["subjects"]>

  export type SubjectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["subjects"]>

  export type SubjectsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type SubjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["subjects"]>
  export type SubjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classSubject?: boolean | Subjects$classSubjectArgs<ExtArgs>
    _count?: boolean | SubjectsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subjects"
    objects: {
      classSubject: Prisma.$ClassesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["subjects"]>
    composites: {}
  }

  type SubjectsGetPayload<S extends boolean | null | undefined | SubjectsDefaultArgs> = $Result.GetResult<Prisma.$SubjectsPayload, S>

  type SubjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectsCountAggregateInputType | true
    }

  export interface SubjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subjects'], meta: { name: 'Subjects' } }
    /**
     * Find zero or one Subjects that matches the filter.
     * @param {SubjectsFindUniqueArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectsFindUniqueArgs>(args: SelectSubset<T, SubjectsFindUniqueArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subjects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectsFindUniqueOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsFindFirstArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectsFindFirstArgs>(args?: SelectSubset<T, SubjectsFindFirstArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subjects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsFindFirstOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subjects.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subjects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectsWithIdOnly = await prisma.subjects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectsFindManyArgs>(args?: SelectSubset<T, SubjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subjects.
     * @param {SubjectsCreateArgs} args - Arguments to create a Subjects.
     * @example
     * // Create one Subjects
     * const Subjects = await prisma.subjects.create({
     *   data: {
     *     // ... data to create a Subjects
     *   }
     * })
     * 
     */
    create<T extends SubjectsCreateArgs>(args: SelectSubset<T, SubjectsCreateArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectsCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subjects = await prisma.subjects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectsCreateManyArgs>(args?: SelectSubset<T, SubjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectsCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subjects = await prisma.subjects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectsWithIdOnly = await prisma.subjects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectsCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subjects.
     * @param {SubjectsDeleteArgs} args - Arguments to delete one Subjects.
     * @example
     * // Delete one Subjects
     * const Subjects = await prisma.subjects.delete({
     *   where: {
     *     // ... filter to delete one Subjects
     *   }
     * })
     * 
     */
    delete<T extends SubjectsDeleteArgs>(args: SelectSubset<T, SubjectsDeleteArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subjects.
     * @param {SubjectsUpdateArgs} args - Arguments to update one Subjects.
     * @example
     * // Update one Subjects
     * const subjects = await prisma.subjects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectsUpdateArgs>(args: SelectSubset<T, SubjectsUpdateArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectsDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subjects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectsDeleteManyArgs>(args?: SelectSubset<T, SubjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subjects = await prisma.subjects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectsUpdateManyArgs>(args: SelectSubset<T, SubjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectsUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subjects = await prisma.subjects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectsWithIdOnly = await prisma.subjects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectsUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subjects.
     * @param {SubjectsUpsertArgs} args - Arguments to update or create a Subjects.
     * @example
     * // Update or create a Subjects
     * const subjects = await prisma.subjects.upsert({
     *   create: {
     *     // ... data to create a Subjects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subjects we want to update
     *   }
     * })
     */
    upsert<T extends SubjectsUpsertArgs>(args: SelectSubset<T, SubjectsUpsertArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subjects.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectsCountArgs>(
      args?: Subset<T, SubjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectsAggregateArgs>(args: Subset<T, SubjectsAggregateArgs>): Prisma.PrismaPromise<GetSubjectsAggregateType<T>>

    /**
     * Group by Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectsGroupByArgs['orderBy'] }
        : { orderBy?: SubjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subjects model
   */
  readonly fields: SubjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subjects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classSubject<T extends Subjects$classSubjectArgs<ExtArgs> = {}>(args?: Subset<T, Subjects$classSubjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subjects model
   */
  interface SubjectsFieldRefs {
    readonly id: FieldRef<"Subjects", 'Int'>
    readonly name: FieldRef<"Subjects", 'String'>
    readonly createdAt: FieldRef<"Subjects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subjects findUnique
   */
  export type SubjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where: SubjectsWhereUniqueInput
  }

  /**
   * Subjects findUniqueOrThrow
   */
  export type SubjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where: SubjectsWhereUniqueInput
  }

  /**
   * Subjects findFirst
   */
  export type SubjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectsOrderByWithRelationInput | SubjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * Subjects findFirstOrThrow
   */
  export type SubjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectsOrderByWithRelationInput | SubjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * Subjects findMany
   */
  export type SubjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectsOrderByWithRelationInput | SubjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * Subjects create
   */
  export type SubjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Subjects.
     */
    data: XOR<SubjectsCreateInput, SubjectsUncheckedCreateInput>
  }

  /**
   * Subjects createMany
   */
  export type SubjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectsCreateManyInput | SubjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subjects createManyAndReturn
   */
  export type SubjectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectsCreateManyInput | SubjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subjects update
   */
  export type SubjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Subjects.
     */
    data: XOR<SubjectsUpdateInput, SubjectsUncheckedUpdateInput>
    /**
     * Choose, which Subjects to update.
     */
    where: SubjectsWhereUniqueInput
  }

  /**
   * Subjects updateMany
   */
  export type SubjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectsUpdateManyMutationInput, SubjectsUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectsWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subjects updateManyAndReturn
   */
  export type SubjectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectsUpdateManyMutationInput, SubjectsUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectsWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subjects upsert
   */
  export type SubjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Subjects to update in case it exists.
     */
    where: SubjectsWhereUniqueInput
    /**
     * In case the Subjects found by the `where` argument doesn't exist, create a new Subjects with this data.
     */
    create: XOR<SubjectsCreateInput, SubjectsUncheckedCreateInput>
    /**
     * In case the Subjects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectsUpdateInput, SubjectsUncheckedUpdateInput>
  }

  /**
   * Subjects delete
   */
  export type SubjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter which Subjects to delete.
     */
    where: SubjectsWhereUniqueInput
  }

  /**
   * Subjects deleteMany
   */
  export type SubjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectsWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subjects.classSubject
   */
  export type Subjects$classSubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    where?: ClassesWhereInput
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    cursor?: ClassesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * Subjects without action
   */
  export type SubjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    id: number | null
  }

  export type SchoolSumAggregateOutputType = {
    id: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    id?: true
  }

  export type SchoolSumAggregateInputType = {
    id?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    upsSchool?: boolean | School$upsSchoolArgs<ExtArgs>
    classSchool?: boolean | School$classSchoolArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upsSchool?: boolean | School$upsSchoolArgs<ExtArgs>
    classSchool?: boolean | School$classSchoolArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      upsSchool: Prisma.$UsersProfilesSchoolsPayload<ExtArgs>[]
      classSchool: Prisma.$ClassesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    upsSchool<T extends School$upsSchoolArgs<ExtArgs> = {}>(args?: Subset<T, School$upsSchoolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classSchool<T extends School$classSchoolArgs<ExtArgs> = {}>(args?: Subset<T, School$classSchoolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'Int'>
    readonly name: FieldRef<"School", 'String'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.upsSchool
   */
  export type School$upsSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    where?: UsersProfilesSchoolsWhereInput
    orderBy?: UsersProfilesSchoolsOrderByWithRelationInput | UsersProfilesSchoolsOrderByWithRelationInput[]
    cursor?: UsersProfilesSchoolsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersProfilesSchoolsScalarFieldEnum | UsersProfilesSchoolsScalarFieldEnum[]
  }

  /**
   * School.classSchool
   */
  export type School$classSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    where?: ClassesWhereInput
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    cursor?: ClassesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model UsersProfilesSchools
   */

  export type AggregateUsersProfilesSchools = {
    _count: UsersProfilesSchoolsCountAggregateOutputType | null
    _avg: UsersProfilesSchoolsAvgAggregateOutputType | null
    _sum: UsersProfilesSchoolsSumAggregateOutputType | null
    _min: UsersProfilesSchoolsMinAggregateOutputType | null
    _max: UsersProfilesSchoolsMaxAggregateOutputType | null
  }

  export type UsersProfilesSchoolsAvgAggregateOutputType = {
    schoolId: number | null
    userId: number | null
    profileId: number | null
    approvedById: number | null
  }

  export type UsersProfilesSchoolsSumAggregateOutputType = {
    schoolId: number | null
    userId: number | null
    profileId: number | null
    approvedById: number | null
  }

  export type UsersProfilesSchoolsMinAggregateOutputType = {
    schoolId: number | null
    userId: number | null
    profileId: number | null
    createdAt: Date | null
    approvedAt: Date | null
    approvedById: number | null
  }

  export type UsersProfilesSchoolsMaxAggregateOutputType = {
    schoolId: number | null
    userId: number | null
    profileId: number | null
    createdAt: Date | null
    approvedAt: Date | null
    approvedById: number | null
  }

  export type UsersProfilesSchoolsCountAggregateOutputType = {
    schoolId: number
    userId: number
    profileId: number
    createdAt: number
    approvedAt: number
    approvedById: number
    _all: number
  }


  export type UsersProfilesSchoolsAvgAggregateInputType = {
    schoolId?: true
    userId?: true
    profileId?: true
    approvedById?: true
  }

  export type UsersProfilesSchoolsSumAggregateInputType = {
    schoolId?: true
    userId?: true
    profileId?: true
    approvedById?: true
  }

  export type UsersProfilesSchoolsMinAggregateInputType = {
    schoolId?: true
    userId?: true
    profileId?: true
    createdAt?: true
    approvedAt?: true
    approvedById?: true
  }

  export type UsersProfilesSchoolsMaxAggregateInputType = {
    schoolId?: true
    userId?: true
    profileId?: true
    createdAt?: true
    approvedAt?: true
    approvedById?: true
  }

  export type UsersProfilesSchoolsCountAggregateInputType = {
    schoolId?: true
    userId?: true
    profileId?: true
    createdAt?: true
    approvedAt?: true
    approvedById?: true
    _all?: true
  }

  export type UsersProfilesSchoolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersProfilesSchools to aggregate.
     */
    where?: UsersProfilesSchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersProfilesSchools to fetch.
     */
    orderBy?: UsersProfilesSchoolsOrderByWithRelationInput | UsersProfilesSchoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersProfilesSchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersProfilesSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersProfilesSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersProfilesSchools
    **/
    _count?: true | UsersProfilesSchoolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersProfilesSchoolsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersProfilesSchoolsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersProfilesSchoolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersProfilesSchoolsMaxAggregateInputType
  }

  export type GetUsersProfilesSchoolsAggregateType<T extends UsersProfilesSchoolsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersProfilesSchools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersProfilesSchools[P]>
      : GetScalarType<T[P], AggregateUsersProfilesSchools[P]>
  }




  export type UsersProfilesSchoolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersProfilesSchoolsWhereInput
    orderBy?: UsersProfilesSchoolsOrderByWithAggregationInput | UsersProfilesSchoolsOrderByWithAggregationInput[]
    by: UsersProfilesSchoolsScalarFieldEnum[] | UsersProfilesSchoolsScalarFieldEnum
    having?: UsersProfilesSchoolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersProfilesSchoolsCountAggregateInputType | true
    _avg?: UsersProfilesSchoolsAvgAggregateInputType
    _sum?: UsersProfilesSchoolsSumAggregateInputType
    _min?: UsersProfilesSchoolsMinAggregateInputType
    _max?: UsersProfilesSchoolsMaxAggregateInputType
  }

  export type UsersProfilesSchoolsGroupByOutputType = {
    schoolId: number
    userId: number
    profileId: number
    createdAt: Date
    approvedAt: Date | null
    approvedById: number | null
    _count: UsersProfilesSchoolsCountAggregateOutputType | null
    _avg: UsersProfilesSchoolsAvgAggregateOutputType | null
    _sum: UsersProfilesSchoolsSumAggregateOutputType | null
    _min: UsersProfilesSchoolsMinAggregateOutputType | null
    _max: UsersProfilesSchoolsMaxAggregateOutputType | null
  }

  type GetUsersProfilesSchoolsGroupByPayload<T extends UsersProfilesSchoolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersProfilesSchoolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersProfilesSchoolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersProfilesSchoolsGroupByOutputType[P]>
            : GetScalarType<T[P], UsersProfilesSchoolsGroupByOutputType[P]>
        }
      >
    >


  export type UsersProfilesSchoolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    schoolId?: boolean
    userId?: boolean
    profileId?: boolean
    createdAt?: boolean
    approvedAt?: boolean
    approvedById?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersProfilesSchools$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["usersProfilesSchools"]>

  export type UsersProfilesSchoolsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    schoolId?: boolean
    userId?: boolean
    profileId?: boolean
    createdAt?: boolean
    approvedAt?: boolean
    approvedById?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersProfilesSchools$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["usersProfilesSchools"]>

  export type UsersProfilesSchoolsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    schoolId?: boolean
    userId?: boolean
    profileId?: boolean
    createdAt?: boolean
    approvedAt?: boolean
    approvedById?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersProfilesSchools$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["usersProfilesSchools"]>

  export type UsersProfilesSchoolsSelectScalar = {
    schoolId?: boolean
    userId?: boolean
    profileId?: boolean
    createdAt?: boolean
    approvedAt?: boolean
    approvedById?: boolean
  }

  export type UsersProfilesSchoolsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"schoolId" | "userId" | "profileId" | "createdAt" | "approvedAt" | "approvedById", ExtArgs["result"]["usersProfilesSchools"]>
  export type UsersProfilesSchoolsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersProfilesSchools$approvedByArgs<ExtArgs>
  }
  export type UsersProfilesSchoolsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersProfilesSchools$approvedByArgs<ExtArgs>
  }
  export type UsersProfilesSchoolsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersProfilesSchools$approvedByArgs<ExtArgs>
  }

  export type $UsersProfilesSchoolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersProfilesSchools"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
      profile: Prisma.$ProfilesPayload<ExtArgs>
      approvedBy: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      schoolId: number
      userId: number
      profileId: number
      createdAt: Date
      approvedAt: Date | null
      approvedById: number | null
    }, ExtArgs["result"]["usersProfilesSchools"]>
    composites: {}
  }

  type UsersProfilesSchoolsGetPayload<S extends boolean | null | undefined | UsersProfilesSchoolsDefaultArgs> = $Result.GetResult<Prisma.$UsersProfilesSchoolsPayload, S>

  type UsersProfilesSchoolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersProfilesSchoolsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersProfilesSchoolsCountAggregateInputType | true
    }

  export interface UsersProfilesSchoolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersProfilesSchools'], meta: { name: 'UsersProfilesSchools' } }
    /**
     * Find zero or one UsersProfilesSchools that matches the filter.
     * @param {UsersProfilesSchoolsFindUniqueArgs} args - Arguments to find a UsersProfilesSchools
     * @example
     * // Get one UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersProfilesSchoolsFindUniqueArgs>(args: SelectSubset<T, UsersProfilesSchoolsFindUniqueArgs<ExtArgs>>): Prisma__UsersProfilesSchoolsClient<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsersProfilesSchools that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersProfilesSchoolsFindUniqueOrThrowArgs} args - Arguments to find a UsersProfilesSchools
     * @example
     * // Get one UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersProfilesSchoolsFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersProfilesSchoolsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersProfilesSchoolsClient<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersProfilesSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProfilesSchoolsFindFirstArgs} args - Arguments to find a UsersProfilesSchools
     * @example
     * // Get one UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersProfilesSchoolsFindFirstArgs>(args?: SelectSubset<T, UsersProfilesSchoolsFindFirstArgs<ExtArgs>>): Prisma__UsersProfilesSchoolsClient<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersProfilesSchools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProfilesSchoolsFindFirstOrThrowArgs} args - Arguments to find a UsersProfilesSchools
     * @example
     * // Get one UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersProfilesSchoolsFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersProfilesSchoolsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersProfilesSchoolsClient<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsersProfilesSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProfilesSchoolsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.findMany()
     * 
     * // Get first 10 UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.findMany({ take: 10 })
     * 
     * // Only select the `schoolId`
     * const usersProfilesSchoolsWithSchoolIdOnly = await prisma.usersProfilesSchools.findMany({ select: { schoolId: true } })
     * 
     */
    findMany<T extends UsersProfilesSchoolsFindManyArgs>(args?: SelectSubset<T, UsersProfilesSchoolsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsersProfilesSchools.
     * @param {UsersProfilesSchoolsCreateArgs} args - Arguments to create a UsersProfilesSchools.
     * @example
     * // Create one UsersProfilesSchools
     * const UsersProfilesSchools = await prisma.usersProfilesSchools.create({
     *   data: {
     *     // ... data to create a UsersProfilesSchools
     *   }
     * })
     * 
     */
    create<T extends UsersProfilesSchoolsCreateArgs>(args: SelectSubset<T, UsersProfilesSchoolsCreateArgs<ExtArgs>>): Prisma__UsersProfilesSchoolsClient<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsersProfilesSchools.
     * @param {UsersProfilesSchoolsCreateManyArgs} args - Arguments to create many UsersProfilesSchools.
     * @example
     * // Create many UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersProfilesSchoolsCreateManyArgs>(args?: SelectSubset<T, UsersProfilesSchoolsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsersProfilesSchools and returns the data saved in the database.
     * @param {UsersProfilesSchoolsCreateManyAndReturnArgs} args - Arguments to create many UsersProfilesSchools.
     * @example
     * // Create many UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsersProfilesSchools and only return the `schoolId`
     * const usersProfilesSchoolsWithSchoolIdOnly = await prisma.usersProfilesSchools.createManyAndReturn({
     *   select: { schoolId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersProfilesSchoolsCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersProfilesSchoolsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsersProfilesSchools.
     * @param {UsersProfilesSchoolsDeleteArgs} args - Arguments to delete one UsersProfilesSchools.
     * @example
     * // Delete one UsersProfilesSchools
     * const UsersProfilesSchools = await prisma.usersProfilesSchools.delete({
     *   where: {
     *     // ... filter to delete one UsersProfilesSchools
     *   }
     * })
     * 
     */
    delete<T extends UsersProfilesSchoolsDeleteArgs>(args: SelectSubset<T, UsersProfilesSchoolsDeleteArgs<ExtArgs>>): Prisma__UsersProfilesSchoolsClient<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsersProfilesSchools.
     * @param {UsersProfilesSchoolsUpdateArgs} args - Arguments to update one UsersProfilesSchools.
     * @example
     * // Update one UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersProfilesSchoolsUpdateArgs>(args: SelectSubset<T, UsersProfilesSchoolsUpdateArgs<ExtArgs>>): Prisma__UsersProfilesSchoolsClient<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsersProfilesSchools.
     * @param {UsersProfilesSchoolsDeleteManyArgs} args - Arguments to filter UsersProfilesSchools to delete.
     * @example
     * // Delete a few UsersProfilesSchools
     * const { count } = await prisma.usersProfilesSchools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersProfilesSchoolsDeleteManyArgs>(args?: SelectSubset<T, UsersProfilesSchoolsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersProfilesSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProfilesSchoolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersProfilesSchoolsUpdateManyArgs>(args: SelectSubset<T, UsersProfilesSchoolsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersProfilesSchools and returns the data updated in the database.
     * @param {UsersProfilesSchoolsUpdateManyAndReturnArgs} args - Arguments to update many UsersProfilesSchools.
     * @example
     * // Update many UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsersProfilesSchools and only return the `schoolId`
     * const usersProfilesSchoolsWithSchoolIdOnly = await prisma.usersProfilesSchools.updateManyAndReturn({
     *   select: { schoolId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersProfilesSchoolsUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersProfilesSchoolsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsersProfilesSchools.
     * @param {UsersProfilesSchoolsUpsertArgs} args - Arguments to update or create a UsersProfilesSchools.
     * @example
     * // Update or create a UsersProfilesSchools
     * const usersProfilesSchools = await prisma.usersProfilesSchools.upsert({
     *   create: {
     *     // ... data to create a UsersProfilesSchools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersProfilesSchools we want to update
     *   }
     * })
     */
    upsert<T extends UsersProfilesSchoolsUpsertArgs>(args: SelectSubset<T, UsersProfilesSchoolsUpsertArgs<ExtArgs>>): Prisma__UsersProfilesSchoolsClient<$Result.GetResult<Prisma.$UsersProfilesSchoolsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsersProfilesSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProfilesSchoolsCountArgs} args - Arguments to filter UsersProfilesSchools to count.
     * @example
     * // Count the number of UsersProfilesSchools
     * const count = await prisma.usersProfilesSchools.count({
     *   where: {
     *     // ... the filter for the UsersProfilesSchools we want to count
     *   }
     * })
    **/
    count<T extends UsersProfilesSchoolsCountArgs>(
      args?: Subset<T, UsersProfilesSchoolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersProfilesSchoolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersProfilesSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProfilesSchoolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersProfilesSchoolsAggregateArgs>(args: Subset<T, UsersProfilesSchoolsAggregateArgs>): Prisma.PrismaPromise<GetUsersProfilesSchoolsAggregateType<T>>

    /**
     * Group by UsersProfilesSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProfilesSchoolsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersProfilesSchoolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersProfilesSchoolsGroupByArgs['orderBy'] }
        : { orderBy?: UsersProfilesSchoolsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersProfilesSchoolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersProfilesSchoolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersProfilesSchools model
   */
  readonly fields: UsersProfilesSchoolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersProfilesSchools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersProfilesSchoolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfilesDefaultArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends UsersProfilesSchools$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, UsersProfilesSchools$approvedByArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsersProfilesSchools model
   */
  interface UsersProfilesSchoolsFieldRefs {
    readonly schoolId: FieldRef<"UsersProfilesSchools", 'Int'>
    readonly userId: FieldRef<"UsersProfilesSchools", 'Int'>
    readonly profileId: FieldRef<"UsersProfilesSchools", 'Int'>
    readonly createdAt: FieldRef<"UsersProfilesSchools", 'DateTime'>
    readonly approvedAt: FieldRef<"UsersProfilesSchools", 'DateTime'>
    readonly approvedById: FieldRef<"UsersProfilesSchools", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsersProfilesSchools findUnique
   */
  export type UsersProfilesSchoolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    /**
     * Filter, which UsersProfilesSchools to fetch.
     */
    where: UsersProfilesSchoolsWhereUniqueInput
  }

  /**
   * UsersProfilesSchools findUniqueOrThrow
   */
  export type UsersProfilesSchoolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    /**
     * Filter, which UsersProfilesSchools to fetch.
     */
    where: UsersProfilesSchoolsWhereUniqueInput
  }

  /**
   * UsersProfilesSchools findFirst
   */
  export type UsersProfilesSchoolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    /**
     * Filter, which UsersProfilesSchools to fetch.
     */
    where?: UsersProfilesSchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersProfilesSchools to fetch.
     */
    orderBy?: UsersProfilesSchoolsOrderByWithRelationInput | UsersProfilesSchoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersProfilesSchools.
     */
    cursor?: UsersProfilesSchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersProfilesSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersProfilesSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersProfilesSchools.
     */
    distinct?: UsersProfilesSchoolsScalarFieldEnum | UsersProfilesSchoolsScalarFieldEnum[]
  }

  /**
   * UsersProfilesSchools findFirstOrThrow
   */
  export type UsersProfilesSchoolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    /**
     * Filter, which UsersProfilesSchools to fetch.
     */
    where?: UsersProfilesSchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersProfilesSchools to fetch.
     */
    orderBy?: UsersProfilesSchoolsOrderByWithRelationInput | UsersProfilesSchoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersProfilesSchools.
     */
    cursor?: UsersProfilesSchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersProfilesSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersProfilesSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersProfilesSchools.
     */
    distinct?: UsersProfilesSchoolsScalarFieldEnum | UsersProfilesSchoolsScalarFieldEnum[]
  }

  /**
   * UsersProfilesSchools findMany
   */
  export type UsersProfilesSchoolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    /**
     * Filter, which UsersProfilesSchools to fetch.
     */
    where?: UsersProfilesSchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersProfilesSchools to fetch.
     */
    orderBy?: UsersProfilesSchoolsOrderByWithRelationInput | UsersProfilesSchoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersProfilesSchools.
     */
    cursor?: UsersProfilesSchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersProfilesSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersProfilesSchools.
     */
    skip?: number
    distinct?: UsersProfilesSchoolsScalarFieldEnum | UsersProfilesSchoolsScalarFieldEnum[]
  }

  /**
   * UsersProfilesSchools create
   */
  export type UsersProfilesSchoolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersProfilesSchools.
     */
    data: XOR<UsersProfilesSchoolsCreateInput, UsersProfilesSchoolsUncheckedCreateInput>
  }

  /**
   * UsersProfilesSchools createMany
   */
  export type UsersProfilesSchoolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersProfilesSchools.
     */
    data: UsersProfilesSchoolsCreateManyInput | UsersProfilesSchoolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersProfilesSchools createManyAndReturn
   */
  export type UsersProfilesSchoolsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * The data used to create many UsersProfilesSchools.
     */
    data: UsersProfilesSchoolsCreateManyInput | UsersProfilesSchoolsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsersProfilesSchools update
   */
  export type UsersProfilesSchoolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersProfilesSchools.
     */
    data: XOR<UsersProfilesSchoolsUpdateInput, UsersProfilesSchoolsUncheckedUpdateInput>
    /**
     * Choose, which UsersProfilesSchools to update.
     */
    where: UsersProfilesSchoolsWhereUniqueInput
  }

  /**
   * UsersProfilesSchools updateMany
   */
  export type UsersProfilesSchoolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersProfilesSchools.
     */
    data: XOR<UsersProfilesSchoolsUpdateManyMutationInput, UsersProfilesSchoolsUncheckedUpdateManyInput>
    /**
     * Filter which UsersProfilesSchools to update
     */
    where?: UsersProfilesSchoolsWhereInput
    /**
     * Limit how many UsersProfilesSchools to update.
     */
    limit?: number
  }

  /**
   * UsersProfilesSchools updateManyAndReturn
   */
  export type UsersProfilesSchoolsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * The data used to update UsersProfilesSchools.
     */
    data: XOR<UsersProfilesSchoolsUpdateManyMutationInput, UsersProfilesSchoolsUncheckedUpdateManyInput>
    /**
     * Filter which UsersProfilesSchools to update
     */
    where?: UsersProfilesSchoolsWhereInput
    /**
     * Limit how many UsersProfilesSchools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsersProfilesSchools upsert
   */
  export type UsersProfilesSchoolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersProfilesSchools to update in case it exists.
     */
    where: UsersProfilesSchoolsWhereUniqueInput
    /**
     * In case the UsersProfilesSchools found by the `where` argument doesn't exist, create a new UsersProfilesSchools with this data.
     */
    create: XOR<UsersProfilesSchoolsCreateInput, UsersProfilesSchoolsUncheckedCreateInput>
    /**
     * In case the UsersProfilesSchools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersProfilesSchoolsUpdateInput, UsersProfilesSchoolsUncheckedUpdateInput>
  }

  /**
   * UsersProfilesSchools delete
   */
  export type UsersProfilesSchoolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
    /**
     * Filter which UsersProfilesSchools to delete.
     */
    where: UsersProfilesSchoolsWhereUniqueInput
  }

  /**
   * UsersProfilesSchools deleteMany
   */
  export type UsersProfilesSchoolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersProfilesSchools to delete
     */
    where?: UsersProfilesSchoolsWhereInput
    /**
     * Limit how many UsersProfilesSchools to delete.
     */
    limit?: number
  }

  /**
   * UsersProfilesSchools.approvedBy
   */
  export type UsersProfilesSchools$approvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * UsersProfilesSchools without action
   */
  export type UsersProfilesSchoolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProfilesSchools
     */
    select?: UsersProfilesSchoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersProfilesSchools
     */
    omit?: UsersProfilesSchoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersProfilesSchoolsInclude<ExtArgs> | null
  }


  /**
   * Model Classes
   */

  export type AggregateClasses = {
    _count: ClassesCountAggregateOutputType | null
    _avg: ClassesAvgAggregateOutputType | null
    _sum: ClassesSumAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  export type ClassesAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
    subjectId: number | null
    createdByd: number | null
    registredById: number | null
    approvedById: number | null
    profileId: number | null
  }

  export type ClassesSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
    subjectId: number | null
    createdByd: number | null
    registredById: number | null
    approvedById: number | null
    profileId: number | null
  }

  export type ClassesMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    subjectId: number | null
    createdByd: number | null
    registredById: number | null
    approvedById: number | null
    profileId: number | null
    createdAt: Date | null
    finishedAt: Date | null
    statededAt: Date | null
    approvedAt: Date | null
  }

  export type ClassesMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    subjectId: number | null
    createdByd: number | null
    registredById: number | null
    approvedById: number | null
    profileId: number | null
    createdAt: Date | null
    finishedAt: Date | null
    statededAt: Date | null
    approvedAt: Date | null
  }

  export type ClassesCountAggregateOutputType = {
    id: number
    schoolId: number
    subjectId: number
    createdByd: number
    registredById: number
    approvedById: number
    profileId: number
    createdAt: number
    finishedAt: number
    statededAt: number
    approvedAt: number
    _all: number
  }


  export type ClassesAvgAggregateInputType = {
    id?: true
    schoolId?: true
    subjectId?: true
    createdByd?: true
    registredById?: true
    approvedById?: true
    profileId?: true
  }

  export type ClassesSumAggregateInputType = {
    id?: true
    schoolId?: true
    subjectId?: true
    createdByd?: true
    registredById?: true
    approvedById?: true
    profileId?: true
  }

  export type ClassesMinAggregateInputType = {
    id?: true
    schoolId?: true
    subjectId?: true
    createdByd?: true
    registredById?: true
    approvedById?: true
    profileId?: true
    createdAt?: true
    finishedAt?: true
    statededAt?: true
    approvedAt?: true
  }

  export type ClassesMaxAggregateInputType = {
    id?: true
    schoolId?: true
    subjectId?: true
    createdByd?: true
    registredById?: true
    approvedById?: true
    profileId?: true
    createdAt?: true
    finishedAt?: true
    statededAt?: true
    approvedAt?: true
  }

  export type ClassesCountAggregateInputType = {
    id?: true
    schoolId?: true
    subjectId?: true
    createdByd?: true
    registredById?: true
    approvedById?: true
    profileId?: true
    createdAt?: true
    finishedAt?: true
    statededAt?: true
    approvedAt?: true
    _all?: true
  }

  export type ClassesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to aggregate.
     */
    where?: ClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassesMaxAggregateInputType
  }

  export type GetClassesAggregateType<T extends ClassesAggregateArgs> = {
        [P in keyof T & keyof AggregateClasses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasses[P]>
      : GetScalarType<T[P], AggregateClasses[P]>
  }




  export type ClassesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassesWhereInput
    orderBy?: ClassesOrderByWithAggregationInput | ClassesOrderByWithAggregationInput[]
    by: ClassesScalarFieldEnum[] | ClassesScalarFieldEnum
    having?: ClassesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassesCountAggregateInputType | true
    _avg?: ClassesAvgAggregateInputType
    _sum?: ClassesSumAggregateInputType
    _min?: ClassesMinAggregateInputType
    _max?: ClassesMaxAggregateInputType
  }

  export type ClassesGroupByOutputType = {
    id: number
    schoolId: number
    subjectId: number
    createdByd: number
    registredById: number
    approvedById: number
    profileId: number
    createdAt: Date
    finishedAt: Date | null
    statededAt: Date | null
    approvedAt: Date | null
    _count: ClassesCountAggregateOutputType | null
    _avg: ClassesAvgAggregateOutputType | null
    _sum: ClassesSumAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  type GetClassesGroupByPayload<T extends ClassesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassesGroupByOutputType[P]>
            : GetScalarType<T[P], ClassesGroupByOutputType[P]>
        }
      >
    >


  export type ClassesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    subjectId?: boolean
    createdByd?: boolean
    registredById?: boolean
    approvedById?: boolean
    profileId?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    statededAt?: boolean
    approvedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    subject?: boolean | SubjectsDefaultArgs<ExtArgs>
    createdBy?: boolean | UsersDefaultArgs<ExtArgs>
    registredBy?: boolean | UsersDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classes"]>

  export type ClassesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    subjectId?: boolean
    createdByd?: boolean
    registredById?: boolean
    approvedById?: boolean
    profileId?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    statededAt?: boolean
    approvedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    subject?: boolean | SubjectsDefaultArgs<ExtArgs>
    createdBy?: boolean | UsersDefaultArgs<ExtArgs>
    registredBy?: boolean | UsersDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classes"]>

  export type ClassesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    subjectId?: boolean
    createdByd?: boolean
    registredById?: boolean
    approvedById?: boolean
    profileId?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    statededAt?: boolean
    approvedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    subject?: boolean | SubjectsDefaultArgs<ExtArgs>
    createdBy?: boolean | UsersDefaultArgs<ExtArgs>
    registredBy?: boolean | UsersDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classes"]>

  export type ClassesSelectScalar = {
    id?: boolean
    schoolId?: boolean
    subjectId?: boolean
    createdByd?: boolean
    registredById?: boolean
    approvedById?: boolean
    profileId?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    statededAt?: boolean
    approvedAt?: boolean
  }

  export type ClassesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "subjectId" | "createdByd" | "registredById" | "approvedById" | "profileId" | "createdAt" | "finishedAt" | "statededAt" | "approvedAt", ExtArgs["result"]["classes"]>
  export type ClassesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    subject?: boolean | SubjectsDefaultArgs<ExtArgs>
    createdBy?: boolean | UsersDefaultArgs<ExtArgs>
    registredBy?: boolean | UsersDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }
  export type ClassesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    subject?: boolean | SubjectsDefaultArgs<ExtArgs>
    createdBy?: boolean | UsersDefaultArgs<ExtArgs>
    registredBy?: boolean | UsersDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }
  export type ClassesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    subject?: boolean | SubjectsDefaultArgs<ExtArgs>
    createdBy?: boolean | UsersDefaultArgs<ExtArgs>
    registredBy?: boolean | UsersDefaultArgs<ExtArgs>
    approvedBy?: boolean | UsersDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }

  export type $ClassesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classes"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      subject: Prisma.$SubjectsPayload<ExtArgs>
      createdBy: Prisma.$UsersPayload<ExtArgs>
      registredBy: Prisma.$UsersPayload<ExtArgs>
      approvedBy: Prisma.$UsersPayload<ExtArgs>
      profile: Prisma.$ProfilesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      subjectId: number
      createdByd: number
      registredById: number
      approvedById: number
      profileId: number
      createdAt: Date
      finishedAt: Date | null
      statededAt: Date | null
      approvedAt: Date | null
    }, ExtArgs["result"]["classes"]>
    composites: {}
  }

  type ClassesGetPayload<S extends boolean | null | undefined | ClassesDefaultArgs> = $Result.GetResult<Prisma.$ClassesPayload, S>

  type ClassesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassesCountAggregateInputType | true
    }

  export interface ClassesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classes'], meta: { name: 'Classes' } }
    /**
     * Find zero or one Classes that matches the filter.
     * @param {ClassesFindUniqueArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassesFindUniqueArgs>(args: SelectSubset<T, ClassesFindUniqueArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassesFindUniqueOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassesFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesFindFirstArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassesFindFirstArgs>(args?: SelectSubset<T, ClassesFindFirstArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesFindFirstOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassesFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classes.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classesWithIdOnly = await prisma.classes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassesFindManyArgs>(args?: SelectSubset<T, ClassesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classes.
     * @param {ClassesCreateArgs} args - Arguments to create a Classes.
     * @example
     * // Create one Classes
     * const Classes = await prisma.classes.create({
     *   data: {
     *     // ... data to create a Classes
     *   }
     * })
     * 
     */
    create<T extends ClassesCreateArgs>(args: SelectSubset<T, ClassesCreateArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassesCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassesCreateManyArgs>(args?: SelectSubset<T, ClassesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassesCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classesWithIdOnly = await prisma.classes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassesCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classes.
     * @param {ClassesDeleteArgs} args - Arguments to delete one Classes.
     * @example
     * // Delete one Classes
     * const Classes = await prisma.classes.delete({
     *   where: {
     *     // ... filter to delete one Classes
     *   }
     * })
     * 
     */
    delete<T extends ClassesDeleteArgs>(args: SelectSubset<T, ClassesDeleteArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classes.
     * @param {ClassesUpdateArgs} args - Arguments to update one Classes.
     * @example
     * // Update one Classes
     * const classes = await prisma.classes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassesUpdateArgs>(args: SelectSubset<T, ClassesUpdateArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassesDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassesDeleteManyArgs>(args?: SelectSubset<T, ClassesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassesUpdateManyArgs>(args: SelectSubset<T, ClassesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassesUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classesWithIdOnly = await prisma.classes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassesUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classes.
     * @param {ClassesUpsertArgs} args - Arguments to update or create a Classes.
     * @example
     * // Update or create a Classes
     * const classes = await prisma.classes.upsert({
     *   create: {
     *     // ... data to create a Classes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classes we want to update
     *   }
     * })
     */
    upsert<T extends ClassesUpsertArgs>(args: SelectSubset<T, ClassesUpsertArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classes.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassesCountArgs>(
      args?: Subset<T, ClassesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassesAggregateArgs>(args: Subset<T, ClassesAggregateArgs>): Prisma.PrismaPromise<GetClassesAggregateType<T>>

    /**
     * Group by Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassesGroupByArgs['orderBy'] }
        : { orderBy?: ClassesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classes model
   */
  readonly fields: ClassesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectsDefaultArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registredBy<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfilesDefaultArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Classes model
   */
  interface ClassesFieldRefs {
    readonly id: FieldRef<"Classes", 'Int'>
    readonly schoolId: FieldRef<"Classes", 'Int'>
    readonly subjectId: FieldRef<"Classes", 'Int'>
    readonly createdByd: FieldRef<"Classes", 'Int'>
    readonly registredById: FieldRef<"Classes", 'Int'>
    readonly approvedById: FieldRef<"Classes", 'Int'>
    readonly profileId: FieldRef<"Classes", 'Int'>
    readonly createdAt: FieldRef<"Classes", 'DateTime'>
    readonly finishedAt: FieldRef<"Classes", 'DateTime'>
    readonly statededAt: FieldRef<"Classes", 'DateTime'>
    readonly approvedAt: FieldRef<"Classes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Classes findUnique
   */
  export type ClassesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where: ClassesWhereUniqueInput
  }

  /**
   * Classes findUniqueOrThrow
   */
  export type ClassesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where: ClassesWhereUniqueInput
  }

  /**
   * Classes findFirst
   */
  export type ClassesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * Classes findFirstOrThrow
   */
  export type ClassesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * Classes findMany
   */
  export type ClassesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * Classes create
   */
  export type ClassesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * The data needed to create a Classes.
     */
    data: XOR<ClassesCreateInput, ClassesUncheckedCreateInput>
  }

  /**
   * Classes createMany
   */
  export type ClassesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassesCreateManyInput | ClassesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classes createManyAndReturn
   */
  export type ClassesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassesCreateManyInput | ClassesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classes update
   */
  export type ClassesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * The data needed to update a Classes.
     */
    data: XOR<ClassesUpdateInput, ClassesUncheckedUpdateInput>
    /**
     * Choose, which Classes to update.
     */
    where: ClassesWhereUniqueInput
  }

  /**
   * Classes updateMany
   */
  export type ClassesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassesWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Classes updateManyAndReturn
   */
  export type ClassesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassesWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classes upsert
   */
  export type ClassesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * The filter to search for the Classes to update in case it exists.
     */
    where: ClassesWhereUniqueInput
    /**
     * In case the Classes found by the `where` argument doesn't exist, create a new Classes with this data.
     */
    create: XOR<ClassesCreateInput, ClassesUncheckedCreateInput>
    /**
     * In case the Classes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassesUpdateInput, ClassesUncheckedUpdateInput>
  }

  /**
   * Classes delete
   */
  export type ClassesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter which Classes to delete.
     */
    where: ClassesWhereUniqueInput
  }

  /**
   * Classes deleteMany
   */
  export type ClassesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassesWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Classes without action
   */
  export type ClassesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SubjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type SubjectsScalarFieldEnum = (typeof SubjectsScalarFieldEnum)[keyof typeof SubjectsScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const UsersProfilesSchoolsScalarFieldEnum: {
    schoolId: 'schoolId',
    userId: 'userId',
    profileId: 'profileId',
    createdAt: 'createdAt',
    approvedAt: 'approvedAt',
    approvedById: 'approvedById'
  };

  export type UsersProfilesSchoolsScalarFieldEnum = (typeof UsersProfilesSchoolsScalarFieldEnum)[keyof typeof UsersProfilesSchoolsScalarFieldEnum]


  export const ClassesScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    subjectId: 'subjectId',
    createdByd: 'createdByd',
    registredById: 'registredById',
    approvedById: 'approvedById',
    profileId: 'profileId',
    createdAt: 'createdAt',
    finishedAt: 'finishedAt',
    statededAt: 'statededAt',
    approvedAt: 'approvedAt'
  };

  export type ClassesScalarFieldEnum = (typeof ClassesScalarFieldEnum)[keyof typeof ClassesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfilesWhereInput = {
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    id?: IntFilter<"Profiles"> | number
    name?: StringFilter<"Profiles"> | string
    createdAt?: DateTimeFilter<"Profiles"> | Date | string
    upsProfile?: UsersProfilesSchoolsListRelationFilter
    classProfile?: ClassesListRelationFilter
  }

  export type ProfilesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    upsProfile?: UsersProfilesSchoolsOrderByRelationAggregateInput
    classProfile?: ClassesOrderByRelationAggregateInput
  }

  export type ProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    name?: StringFilter<"Profiles"> | string
    createdAt?: DateTimeFilter<"Profiles"> | Date | string
    upsProfile?: UsersProfilesSchoolsListRelationFilter
    classProfile?: ClassesListRelationFilter
  }, "id">

  export type ProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: ProfilesCountOrderByAggregateInput
    _avg?: ProfilesAvgOrderByAggregateInput
    _max?: ProfilesMaxOrderByAggregateInput
    _min?: ProfilesMinOrderByAggregateInput
    _sum?: ProfilesSumOrderByAggregateInput
  }

  export type ProfilesScalarWhereWithAggregatesInput = {
    AND?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    OR?: ProfilesScalarWhereWithAggregatesInput[]
    NOT?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profiles"> | number
    name?: StringWithAggregatesFilter<"Profiles"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profiles"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    upsUser?: UsersProfilesSchoolsListRelationFilter
    approver?: UsersProfilesSchoolsListRelationFilter
    classCreator?: ClassesListRelationFilter
    classRegistrar?: ClassesListRelationFilter
    classApprover?: ClassesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    upsUser?: UsersProfilesSchoolsOrderByRelationAggregateInput
    approver?: UsersProfilesSchoolsOrderByRelationAggregateInput
    classCreator?: ClassesOrderByRelationAggregateInput
    classRegistrar?: ClassesOrderByRelationAggregateInput
    classApprover?: ClassesOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    upsUser?: UsersProfilesSchoolsListRelationFilter
    approver?: UsersProfilesSchoolsListRelationFilter
    classCreator?: ClassesListRelationFilter
    classRegistrar?: ClassesListRelationFilter
    classApprover?: ClassesListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type SubjectsWhereInput = {
    AND?: SubjectsWhereInput | SubjectsWhereInput[]
    OR?: SubjectsWhereInput[]
    NOT?: SubjectsWhereInput | SubjectsWhereInput[]
    id?: IntFilter<"Subjects"> | number
    name?: StringFilter<"Subjects"> | string
    createdAt?: DateTimeFilter<"Subjects"> | Date | string
    classSubject?: ClassesListRelationFilter
  }

  export type SubjectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    classSubject?: ClassesOrderByRelationAggregateInput
  }

  export type SubjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubjectsWhereInput | SubjectsWhereInput[]
    OR?: SubjectsWhereInput[]
    NOT?: SubjectsWhereInput | SubjectsWhereInput[]
    name?: StringFilter<"Subjects"> | string
    createdAt?: DateTimeFilter<"Subjects"> | Date | string
    classSubject?: ClassesListRelationFilter
  }, "id">

  export type SubjectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: SubjectsCountOrderByAggregateInput
    _avg?: SubjectsAvgOrderByAggregateInput
    _max?: SubjectsMaxOrderByAggregateInput
    _min?: SubjectsMinOrderByAggregateInput
    _sum?: SubjectsSumOrderByAggregateInput
  }

  export type SubjectsScalarWhereWithAggregatesInput = {
    AND?: SubjectsScalarWhereWithAggregatesInput | SubjectsScalarWhereWithAggregatesInput[]
    OR?: SubjectsScalarWhereWithAggregatesInput[]
    NOT?: SubjectsScalarWhereWithAggregatesInput | SubjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subjects"> | number
    name?: StringWithAggregatesFilter<"Subjects"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subjects"> | Date | string
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: IntFilter<"School"> | number
    name?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    upsSchool?: UsersProfilesSchoolsListRelationFilter
    classSchool?: ClassesListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    upsSchool?: UsersProfilesSchoolsOrderByRelationAggregateInput
    classSchool?: ClassesOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    upsSchool?: UsersProfilesSchoolsListRelationFilter
    classSchool?: ClassesListRelationFilter
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"School"> | number
    name?: StringWithAggregatesFilter<"School"> | string
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type UsersProfilesSchoolsWhereInput = {
    AND?: UsersProfilesSchoolsWhereInput | UsersProfilesSchoolsWhereInput[]
    OR?: UsersProfilesSchoolsWhereInput[]
    NOT?: UsersProfilesSchoolsWhereInput | UsersProfilesSchoolsWhereInput[]
    schoolId?: IntFilter<"UsersProfilesSchools"> | number
    userId?: IntFilter<"UsersProfilesSchools"> | number
    profileId?: IntFilter<"UsersProfilesSchools"> | number
    createdAt?: DateTimeFilter<"UsersProfilesSchools"> | Date | string
    approvedAt?: DateTimeNullableFilter<"UsersProfilesSchools"> | Date | string | null
    approvedById?: IntNullableFilter<"UsersProfilesSchools"> | number | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    profile?: XOR<ProfilesScalarRelationFilter, ProfilesWhereInput>
    approvedBy?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type UsersProfilesSchoolsOrderByWithRelationInput = {
    schoolId?: SortOrder
    userId?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    profile?: ProfilesOrderByWithRelationInput
    approvedBy?: UsersOrderByWithRelationInput
  }

  export type UsersProfilesSchoolsWhereUniqueInput = Prisma.AtLeast<{
    userId_profileId_schoolId?: UsersProfilesSchoolsUserIdProfileIdSchoolIdCompoundUniqueInput
    AND?: UsersProfilesSchoolsWhereInput | UsersProfilesSchoolsWhereInput[]
    OR?: UsersProfilesSchoolsWhereInput[]
    NOT?: UsersProfilesSchoolsWhereInput | UsersProfilesSchoolsWhereInput[]
    schoolId?: IntFilter<"UsersProfilesSchools"> | number
    userId?: IntFilter<"UsersProfilesSchools"> | number
    profileId?: IntFilter<"UsersProfilesSchools"> | number
    createdAt?: DateTimeFilter<"UsersProfilesSchools"> | Date | string
    approvedAt?: DateTimeNullableFilter<"UsersProfilesSchools"> | Date | string | null
    approvedById?: IntNullableFilter<"UsersProfilesSchools"> | number | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    profile?: XOR<ProfilesScalarRelationFilter, ProfilesWhereInput>
    approvedBy?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "userId_profileId_schoolId">

  export type UsersProfilesSchoolsOrderByWithAggregationInput = {
    schoolId?: SortOrder
    userId?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    _count?: UsersProfilesSchoolsCountOrderByAggregateInput
    _avg?: UsersProfilesSchoolsAvgOrderByAggregateInput
    _max?: UsersProfilesSchoolsMaxOrderByAggregateInput
    _min?: UsersProfilesSchoolsMinOrderByAggregateInput
    _sum?: UsersProfilesSchoolsSumOrderByAggregateInput
  }

  export type UsersProfilesSchoolsScalarWhereWithAggregatesInput = {
    AND?: UsersProfilesSchoolsScalarWhereWithAggregatesInput | UsersProfilesSchoolsScalarWhereWithAggregatesInput[]
    OR?: UsersProfilesSchoolsScalarWhereWithAggregatesInput[]
    NOT?: UsersProfilesSchoolsScalarWhereWithAggregatesInput | UsersProfilesSchoolsScalarWhereWithAggregatesInput[]
    schoolId?: IntWithAggregatesFilter<"UsersProfilesSchools"> | number
    userId?: IntWithAggregatesFilter<"UsersProfilesSchools"> | number
    profileId?: IntWithAggregatesFilter<"UsersProfilesSchools"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UsersProfilesSchools"> | Date | string
    approvedAt?: DateTimeNullableWithAggregatesFilter<"UsersProfilesSchools"> | Date | string | null
    approvedById?: IntNullableWithAggregatesFilter<"UsersProfilesSchools"> | number | null
  }

  export type ClassesWhereInput = {
    AND?: ClassesWhereInput | ClassesWhereInput[]
    OR?: ClassesWhereInput[]
    NOT?: ClassesWhereInput | ClassesWhereInput[]
    id?: IntFilter<"Classes"> | number
    schoolId?: IntFilter<"Classes"> | number
    subjectId?: IntFilter<"Classes"> | number
    createdByd?: IntFilter<"Classes"> | number
    registredById?: IntFilter<"Classes"> | number
    approvedById?: IntFilter<"Classes"> | number
    profileId?: IntFilter<"Classes"> | number
    createdAt?: DateTimeFilter<"Classes"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Classes"> | Date | string | null
    statededAt?: DateTimeNullableFilter<"Classes"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"Classes"> | Date | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    subject?: XOR<SubjectsScalarRelationFilter, SubjectsWhereInput>
    createdBy?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    registredBy?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    approvedBy?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    profile?: XOR<ProfilesScalarRelationFilter, ProfilesWhereInput>
  }

  export type ClassesOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    subjectId?: SortOrder
    createdByd?: SortOrder
    registredById?: SortOrder
    approvedById?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    statededAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
    subject?: SubjectsOrderByWithRelationInput
    createdBy?: UsersOrderByWithRelationInput
    registredBy?: UsersOrderByWithRelationInput
    approvedBy?: UsersOrderByWithRelationInput
    profile?: ProfilesOrderByWithRelationInput
  }

  export type ClassesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassesWhereInput | ClassesWhereInput[]
    OR?: ClassesWhereInput[]
    NOT?: ClassesWhereInput | ClassesWhereInput[]
    schoolId?: IntFilter<"Classes"> | number
    subjectId?: IntFilter<"Classes"> | number
    createdByd?: IntFilter<"Classes"> | number
    registredById?: IntFilter<"Classes"> | number
    approvedById?: IntFilter<"Classes"> | number
    profileId?: IntFilter<"Classes"> | number
    createdAt?: DateTimeFilter<"Classes"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Classes"> | Date | string | null
    statededAt?: DateTimeNullableFilter<"Classes"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"Classes"> | Date | string | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    subject?: XOR<SubjectsScalarRelationFilter, SubjectsWhereInput>
    createdBy?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    registredBy?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    approvedBy?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    profile?: XOR<ProfilesScalarRelationFilter, ProfilesWhereInput>
  }, "id">

  export type ClassesOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    subjectId?: SortOrder
    createdByd?: SortOrder
    registredById?: SortOrder
    approvedById?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    statededAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    _count?: ClassesCountOrderByAggregateInput
    _avg?: ClassesAvgOrderByAggregateInput
    _max?: ClassesMaxOrderByAggregateInput
    _min?: ClassesMinOrderByAggregateInput
    _sum?: ClassesSumOrderByAggregateInput
  }

  export type ClassesScalarWhereWithAggregatesInput = {
    AND?: ClassesScalarWhereWithAggregatesInput | ClassesScalarWhereWithAggregatesInput[]
    OR?: ClassesScalarWhereWithAggregatesInput[]
    NOT?: ClassesScalarWhereWithAggregatesInput | ClassesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Classes"> | number
    schoolId?: IntWithAggregatesFilter<"Classes"> | number
    subjectId?: IntWithAggregatesFilter<"Classes"> | number
    createdByd?: IntWithAggregatesFilter<"Classes"> | number
    registredById?: IntWithAggregatesFilter<"Classes"> | number
    approvedById?: IntWithAggregatesFilter<"Classes"> | number
    profileId?: IntWithAggregatesFilter<"Classes"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Classes"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Classes"> | Date | string | null
    statededAt?: DateTimeNullableWithAggregatesFilter<"Classes"> | Date | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Classes"> | Date | string | null
  }

  export type ProfilesCreateInput = {
    name: string
    createdAt?: Date | string
    upsProfile?: UsersProfilesSchoolsCreateNestedManyWithoutProfileInput
    classProfile?: ClassesCreateNestedManyWithoutProfileInput
  }

  export type ProfilesUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    upsProfile?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutProfileInput
    classProfile?: ClassesUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfilesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsProfile?: UsersProfilesSchoolsUpdateManyWithoutProfileNestedInput
    classProfile?: ClassesUpdateManyWithoutProfileNestedInput
  }

  export type ProfilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsProfile?: UsersProfilesSchoolsUncheckedUpdateManyWithoutProfileNestedInput
    classProfile?: ClassesUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfilesCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type ProfilesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    upsUser?: UsersProfilesSchoolsCreateNestedManyWithoutUserInput
    approver?: UsersProfilesSchoolsCreateNestedManyWithoutApprovedByInput
    classCreator?: ClassesCreateNestedManyWithoutCreatedByInput
    classRegistrar?: ClassesCreateNestedManyWithoutRegistredByInput
    classApprover?: ClassesCreateNestedManyWithoutApprovedByInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    upsUser?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutUserInput
    approver?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutApprovedByInput
    classCreator?: ClassesUncheckedCreateNestedManyWithoutCreatedByInput
    classRegistrar?: ClassesUncheckedCreateNestedManyWithoutRegistredByInput
    classApprover?: ClassesUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsUser?: UsersProfilesSchoolsUpdateManyWithoutUserNestedInput
    approver?: UsersProfilesSchoolsUpdateManyWithoutApprovedByNestedInput
    classCreator?: ClassesUpdateManyWithoutCreatedByNestedInput
    classRegistrar?: ClassesUpdateManyWithoutRegistredByNestedInput
    classApprover?: ClassesUpdateManyWithoutApprovedByNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsUser?: UsersProfilesSchoolsUncheckedUpdateManyWithoutUserNestedInput
    approver?: UsersProfilesSchoolsUncheckedUpdateManyWithoutApprovedByNestedInput
    classCreator?: ClassesUncheckedUpdateManyWithoutCreatedByNestedInput
    classRegistrar?: ClassesUncheckedUpdateManyWithoutRegistredByNestedInput
    classApprover?: ClassesUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectsCreateInput = {
    name: string
    createdAt?: Date | string
    classSubject?: ClassesCreateNestedManyWithoutSubjectInput
  }

  export type SubjectsUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    classSubject?: ClassesUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSubject?: ClassesUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSubject?: ClassesUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectsCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type SubjectsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateInput = {
    name: string
    createdAt?: Date | string
    upsSchool?: UsersProfilesSchoolsCreateNestedManyWithoutSchoolInput
    classSchool?: ClassesCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    upsSchool?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutSchoolInput
    classSchool?: ClassesUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsSchool?: UsersProfilesSchoolsUpdateManyWithoutSchoolNestedInput
    classSchool?: ClassesUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsSchool?: UsersProfilesSchoolsUncheckedUpdateManyWithoutSchoolNestedInput
    classSchool?: ClassesUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersProfilesSchoolsCreateInput = {
    createdAt?: Date | string
    approvedAt?: Date | string | null
    school: SchoolCreateNestedOneWithoutUpsSchoolInput
    user: UsersCreateNestedOneWithoutUpsUserInput
    profile: ProfilesCreateNestedOneWithoutUpsProfileInput
    approvedBy?: UsersCreateNestedOneWithoutApproverInput
  }

  export type UsersProfilesSchoolsUncheckedCreateInput = {
    schoolId: number
    userId: number
    profileId: number
    createdAt?: Date | string
    approvedAt?: Date | string | null
    approvedById?: number | null
  }

  export type UsersProfilesSchoolsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutUpsSchoolNestedInput
    user?: UsersUpdateOneRequiredWithoutUpsUserNestedInput
    profile?: ProfilesUpdateOneRequiredWithoutUpsProfileNestedInput
    approvedBy?: UsersUpdateOneWithoutApproverNestedInput
  }

  export type UsersProfilesSchoolsUncheckedUpdateInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersProfilesSchoolsCreateManyInput = {
    schoolId: number
    userId: number
    profileId: number
    createdAt?: Date | string
    approvedAt?: Date | string | null
    approvedById?: number | null
  }

  export type UsersProfilesSchoolsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersProfilesSchoolsUncheckedUpdateManyInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassesCreateInput = {
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
    school: SchoolCreateNestedOneWithoutClassSchoolInput
    subject: SubjectsCreateNestedOneWithoutClassSubjectInput
    createdBy: UsersCreateNestedOneWithoutClassCreatorInput
    registredBy: UsersCreateNestedOneWithoutClassRegistrarInput
    approvedBy: UsersCreateNestedOneWithoutClassApproverInput
    profile: ProfilesCreateNestedOneWithoutClassProfileInput
  }

  export type ClassesUncheckedCreateInput = {
    id?: number
    schoolId: number
    subjectId: number
    createdByd: number
    registredById: number
    approvedById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type ClassesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutClassSchoolNestedInput
    subject?: SubjectsUpdateOneRequiredWithoutClassSubjectNestedInput
    createdBy?: UsersUpdateOneRequiredWithoutClassCreatorNestedInput
    registredBy?: UsersUpdateOneRequiredWithoutClassRegistrarNestedInput
    approvedBy?: UsersUpdateOneRequiredWithoutClassApproverNestedInput
    profile?: ProfilesUpdateOneRequiredWithoutClassProfileNestedInput
  }

  export type ClassesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesCreateManyInput = {
    id?: number
    schoolId: number
    subjectId: number
    createdByd: number
    registredById: number
    approvedById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type ClassesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersProfilesSchoolsListRelationFilter = {
    every?: UsersProfilesSchoolsWhereInput
    some?: UsersProfilesSchoolsWhereInput
    none?: UsersProfilesSchoolsWhereInput
  }

  export type ClassesListRelationFilter = {
    every?: ClassesWhereInput
    some?: ClassesWhereInput
    none?: ClassesWhereInput
  }

  export type UsersProfilesSchoolsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfilesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfilesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ProfilesScalarRelationFilter = {
    is?: ProfilesWhereInput
    isNot?: ProfilesWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersProfilesSchoolsUserIdProfileIdSchoolIdCompoundUniqueInput = {
    userId: number
    profileId: number
    schoolId: number
  }

  export type UsersProfilesSchoolsCountOrderByAggregateInput = {
    schoolId?: SortOrder
    userId?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrder
    approvedById?: SortOrder
  }

  export type UsersProfilesSchoolsAvgOrderByAggregateInput = {
    schoolId?: SortOrder
    userId?: SortOrder
    profileId?: SortOrder
    approvedById?: SortOrder
  }

  export type UsersProfilesSchoolsMaxOrderByAggregateInput = {
    schoolId?: SortOrder
    userId?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrder
    approvedById?: SortOrder
  }

  export type UsersProfilesSchoolsMinOrderByAggregateInput = {
    schoolId?: SortOrder
    userId?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrder
    approvedById?: SortOrder
  }

  export type UsersProfilesSchoolsSumOrderByAggregateInput = {
    schoolId?: SortOrder
    userId?: SortOrder
    profileId?: SortOrder
    approvedById?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SubjectsScalarRelationFilter = {
    is?: SubjectsWhereInput
    isNot?: SubjectsWhereInput
  }

  export type ClassesCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    subjectId?: SortOrder
    createdByd?: SortOrder
    registredById?: SortOrder
    approvedById?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
    statededAt?: SortOrder
    approvedAt?: SortOrder
  }

  export type ClassesAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    subjectId?: SortOrder
    createdByd?: SortOrder
    registredById?: SortOrder
    approvedById?: SortOrder
    profileId?: SortOrder
  }

  export type ClassesMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    subjectId?: SortOrder
    createdByd?: SortOrder
    registredById?: SortOrder
    approvedById?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
    statededAt?: SortOrder
    approvedAt?: SortOrder
  }

  export type ClassesMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    subjectId?: SortOrder
    createdByd?: SortOrder
    registredById?: SortOrder
    approvedById?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
    statededAt?: SortOrder
    approvedAt?: SortOrder
  }

  export type ClassesSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    subjectId?: SortOrder
    createdByd?: SortOrder
    registredById?: SortOrder
    approvedById?: SortOrder
    profileId?: SortOrder
  }

  export type UsersProfilesSchoolsCreateNestedManyWithoutProfileInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutProfileInput, UsersProfilesSchoolsUncheckedCreateWithoutProfileInput> | UsersProfilesSchoolsCreateWithoutProfileInput[] | UsersProfilesSchoolsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutProfileInput | UsersProfilesSchoolsCreateOrConnectWithoutProfileInput[]
    createMany?: UsersProfilesSchoolsCreateManyProfileInputEnvelope
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
  }

  export type ClassesCreateNestedManyWithoutProfileInput = {
    create?: XOR<ClassesCreateWithoutProfileInput, ClassesUncheckedCreateWithoutProfileInput> | ClassesCreateWithoutProfileInput[] | ClassesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutProfileInput | ClassesCreateOrConnectWithoutProfileInput[]
    createMany?: ClassesCreateManyProfileInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type UsersProfilesSchoolsUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutProfileInput, UsersProfilesSchoolsUncheckedCreateWithoutProfileInput> | UsersProfilesSchoolsCreateWithoutProfileInput[] | UsersProfilesSchoolsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutProfileInput | UsersProfilesSchoolsCreateOrConnectWithoutProfileInput[]
    createMany?: UsersProfilesSchoolsCreateManyProfileInputEnvelope
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
  }

  export type ClassesUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ClassesCreateWithoutProfileInput, ClassesUncheckedCreateWithoutProfileInput> | ClassesCreateWithoutProfileInput[] | ClassesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutProfileInput | ClassesCreateOrConnectWithoutProfileInput[]
    createMany?: ClassesCreateManyProfileInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersProfilesSchoolsUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutProfileInput, UsersProfilesSchoolsUncheckedCreateWithoutProfileInput> | UsersProfilesSchoolsCreateWithoutProfileInput[] | UsersProfilesSchoolsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutProfileInput | UsersProfilesSchoolsCreateOrConnectWithoutProfileInput[]
    upsert?: UsersProfilesSchoolsUpsertWithWhereUniqueWithoutProfileInput | UsersProfilesSchoolsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UsersProfilesSchoolsCreateManyProfileInputEnvelope
    set?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    disconnect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    delete?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    update?: UsersProfilesSchoolsUpdateWithWhereUniqueWithoutProfileInput | UsersProfilesSchoolsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UsersProfilesSchoolsUpdateManyWithWhereWithoutProfileInput | UsersProfilesSchoolsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UsersProfilesSchoolsScalarWhereInput | UsersProfilesSchoolsScalarWhereInput[]
  }

  export type ClassesUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ClassesCreateWithoutProfileInput, ClassesUncheckedCreateWithoutProfileInput> | ClassesCreateWithoutProfileInput[] | ClassesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutProfileInput | ClassesCreateOrConnectWithoutProfileInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutProfileInput | ClassesUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ClassesCreateManyProfileInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutProfileInput | ClassesUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutProfileInput | ClassesUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersProfilesSchoolsUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutProfileInput, UsersProfilesSchoolsUncheckedCreateWithoutProfileInput> | UsersProfilesSchoolsCreateWithoutProfileInput[] | UsersProfilesSchoolsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutProfileInput | UsersProfilesSchoolsCreateOrConnectWithoutProfileInput[]
    upsert?: UsersProfilesSchoolsUpsertWithWhereUniqueWithoutProfileInput | UsersProfilesSchoolsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UsersProfilesSchoolsCreateManyProfileInputEnvelope
    set?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    disconnect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    delete?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    update?: UsersProfilesSchoolsUpdateWithWhereUniqueWithoutProfileInput | UsersProfilesSchoolsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UsersProfilesSchoolsUpdateManyWithWhereWithoutProfileInput | UsersProfilesSchoolsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UsersProfilesSchoolsScalarWhereInput | UsersProfilesSchoolsScalarWhereInput[]
  }

  export type ClassesUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ClassesCreateWithoutProfileInput, ClassesUncheckedCreateWithoutProfileInput> | ClassesCreateWithoutProfileInput[] | ClassesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutProfileInput | ClassesCreateOrConnectWithoutProfileInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutProfileInput | ClassesUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ClassesCreateManyProfileInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutProfileInput | ClassesUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutProfileInput | ClassesUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type UsersProfilesSchoolsCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutUserInput, UsersProfilesSchoolsUncheckedCreateWithoutUserInput> | UsersProfilesSchoolsCreateWithoutUserInput[] | UsersProfilesSchoolsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutUserInput | UsersProfilesSchoolsCreateOrConnectWithoutUserInput[]
    createMany?: UsersProfilesSchoolsCreateManyUserInputEnvelope
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
  }

  export type UsersProfilesSchoolsCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutApprovedByInput, UsersProfilesSchoolsUncheckedCreateWithoutApprovedByInput> | UsersProfilesSchoolsCreateWithoutApprovedByInput[] | UsersProfilesSchoolsUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutApprovedByInput | UsersProfilesSchoolsCreateOrConnectWithoutApprovedByInput[]
    createMany?: UsersProfilesSchoolsCreateManyApprovedByInputEnvelope
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
  }

  export type ClassesCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClassesCreateWithoutCreatedByInput, ClassesUncheckedCreateWithoutCreatedByInput> | ClassesCreateWithoutCreatedByInput[] | ClassesUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutCreatedByInput | ClassesCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClassesCreateManyCreatedByInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type ClassesCreateNestedManyWithoutRegistredByInput = {
    create?: XOR<ClassesCreateWithoutRegistredByInput, ClassesUncheckedCreateWithoutRegistredByInput> | ClassesCreateWithoutRegistredByInput[] | ClassesUncheckedCreateWithoutRegistredByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutRegistredByInput | ClassesCreateOrConnectWithoutRegistredByInput[]
    createMany?: ClassesCreateManyRegistredByInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type ClassesCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<ClassesCreateWithoutApprovedByInput, ClassesUncheckedCreateWithoutApprovedByInput> | ClassesCreateWithoutApprovedByInput[] | ClassesUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutApprovedByInput | ClassesCreateOrConnectWithoutApprovedByInput[]
    createMany?: ClassesCreateManyApprovedByInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type UsersProfilesSchoolsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutUserInput, UsersProfilesSchoolsUncheckedCreateWithoutUserInput> | UsersProfilesSchoolsCreateWithoutUserInput[] | UsersProfilesSchoolsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutUserInput | UsersProfilesSchoolsCreateOrConnectWithoutUserInput[]
    createMany?: UsersProfilesSchoolsCreateManyUserInputEnvelope
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
  }

  export type UsersProfilesSchoolsUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutApprovedByInput, UsersProfilesSchoolsUncheckedCreateWithoutApprovedByInput> | UsersProfilesSchoolsCreateWithoutApprovedByInput[] | UsersProfilesSchoolsUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutApprovedByInput | UsersProfilesSchoolsCreateOrConnectWithoutApprovedByInput[]
    createMany?: UsersProfilesSchoolsCreateManyApprovedByInputEnvelope
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
  }

  export type ClassesUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClassesCreateWithoutCreatedByInput, ClassesUncheckedCreateWithoutCreatedByInput> | ClassesCreateWithoutCreatedByInput[] | ClassesUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutCreatedByInput | ClassesCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClassesCreateManyCreatedByInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type ClassesUncheckedCreateNestedManyWithoutRegistredByInput = {
    create?: XOR<ClassesCreateWithoutRegistredByInput, ClassesUncheckedCreateWithoutRegistredByInput> | ClassesCreateWithoutRegistredByInput[] | ClassesUncheckedCreateWithoutRegistredByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutRegistredByInput | ClassesCreateOrConnectWithoutRegistredByInput[]
    createMany?: ClassesCreateManyRegistredByInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type ClassesUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<ClassesCreateWithoutApprovedByInput, ClassesUncheckedCreateWithoutApprovedByInput> | ClassesCreateWithoutApprovedByInput[] | ClassesUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutApprovedByInput | ClassesCreateOrConnectWithoutApprovedByInput[]
    createMany?: ClassesCreateManyApprovedByInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type UsersProfilesSchoolsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutUserInput, UsersProfilesSchoolsUncheckedCreateWithoutUserInput> | UsersProfilesSchoolsCreateWithoutUserInput[] | UsersProfilesSchoolsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutUserInput | UsersProfilesSchoolsCreateOrConnectWithoutUserInput[]
    upsert?: UsersProfilesSchoolsUpsertWithWhereUniqueWithoutUserInput | UsersProfilesSchoolsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersProfilesSchoolsCreateManyUserInputEnvelope
    set?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    disconnect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    delete?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    update?: UsersProfilesSchoolsUpdateWithWhereUniqueWithoutUserInput | UsersProfilesSchoolsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersProfilesSchoolsUpdateManyWithWhereWithoutUserInput | UsersProfilesSchoolsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersProfilesSchoolsScalarWhereInput | UsersProfilesSchoolsScalarWhereInput[]
  }

  export type UsersProfilesSchoolsUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutApprovedByInput, UsersProfilesSchoolsUncheckedCreateWithoutApprovedByInput> | UsersProfilesSchoolsCreateWithoutApprovedByInput[] | UsersProfilesSchoolsUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutApprovedByInput | UsersProfilesSchoolsCreateOrConnectWithoutApprovedByInput[]
    upsert?: UsersProfilesSchoolsUpsertWithWhereUniqueWithoutApprovedByInput | UsersProfilesSchoolsUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: UsersProfilesSchoolsCreateManyApprovedByInputEnvelope
    set?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    disconnect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    delete?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    update?: UsersProfilesSchoolsUpdateWithWhereUniqueWithoutApprovedByInput | UsersProfilesSchoolsUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: UsersProfilesSchoolsUpdateManyWithWhereWithoutApprovedByInput | UsersProfilesSchoolsUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: UsersProfilesSchoolsScalarWhereInput | UsersProfilesSchoolsScalarWhereInput[]
  }

  export type ClassesUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClassesCreateWithoutCreatedByInput, ClassesUncheckedCreateWithoutCreatedByInput> | ClassesCreateWithoutCreatedByInput[] | ClassesUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutCreatedByInput | ClassesCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutCreatedByInput | ClassesUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClassesCreateManyCreatedByInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutCreatedByInput | ClassesUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutCreatedByInput | ClassesUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type ClassesUpdateManyWithoutRegistredByNestedInput = {
    create?: XOR<ClassesCreateWithoutRegistredByInput, ClassesUncheckedCreateWithoutRegistredByInput> | ClassesCreateWithoutRegistredByInput[] | ClassesUncheckedCreateWithoutRegistredByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutRegistredByInput | ClassesCreateOrConnectWithoutRegistredByInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutRegistredByInput | ClassesUpsertWithWhereUniqueWithoutRegistredByInput[]
    createMany?: ClassesCreateManyRegistredByInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutRegistredByInput | ClassesUpdateWithWhereUniqueWithoutRegistredByInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutRegistredByInput | ClassesUpdateManyWithWhereWithoutRegistredByInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type ClassesUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<ClassesCreateWithoutApprovedByInput, ClassesUncheckedCreateWithoutApprovedByInput> | ClassesCreateWithoutApprovedByInput[] | ClassesUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutApprovedByInput | ClassesCreateOrConnectWithoutApprovedByInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutApprovedByInput | ClassesUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: ClassesCreateManyApprovedByInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutApprovedByInput | ClassesUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutApprovedByInput | ClassesUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type UsersProfilesSchoolsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutUserInput, UsersProfilesSchoolsUncheckedCreateWithoutUserInput> | UsersProfilesSchoolsCreateWithoutUserInput[] | UsersProfilesSchoolsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutUserInput | UsersProfilesSchoolsCreateOrConnectWithoutUserInput[]
    upsert?: UsersProfilesSchoolsUpsertWithWhereUniqueWithoutUserInput | UsersProfilesSchoolsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersProfilesSchoolsCreateManyUserInputEnvelope
    set?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    disconnect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    delete?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    update?: UsersProfilesSchoolsUpdateWithWhereUniqueWithoutUserInput | UsersProfilesSchoolsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersProfilesSchoolsUpdateManyWithWhereWithoutUserInput | UsersProfilesSchoolsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersProfilesSchoolsScalarWhereInput | UsersProfilesSchoolsScalarWhereInput[]
  }

  export type UsersProfilesSchoolsUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutApprovedByInput, UsersProfilesSchoolsUncheckedCreateWithoutApprovedByInput> | UsersProfilesSchoolsCreateWithoutApprovedByInput[] | UsersProfilesSchoolsUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutApprovedByInput | UsersProfilesSchoolsCreateOrConnectWithoutApprovedByInput[]
    upsert?: UsersProfilesSchoolsUpsertWithWhereUniqueWithoutApprovedByInput | UsersProfilesSchoolsUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: UsersProfilesSchoolsCreateManyApprovedByInputEnvelope
    set?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    disconnect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    delete?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    update?: UsersProfilesSchoolsUpdateWithWhereUniqueWithoutApprovedByInput | UsersProfilesSchoolsUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: UsersProfilesSchoolsUpdateManyWithWhereWithoutApprovedByInput | UsersProfilesSchoolsUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: UsersProfilesSchoolsScalarWhereInput | UsersProfilesSchoolsScalarWhereInput[]
  }

  export type ClassesUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClassesCreateWithoutCreatedByInput, ClassesUncheckedCreateWithoutCreatedByInput> | ClassesCreateWithoutCreatedByInput[] | ClassesUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutCreatedByInput | ClassesCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutCreatedByInput | ClassesUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClassesCreateManyCreatedByInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutCreatedByInput | ClassesUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutCreatedByInput | ClassesUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type ClassesUncheckedUpdateManyWithoutRegistredByNestedInput = {
    create?: XOR<ClassesCreateWithoutRegistredByInput, ClassesUncheckedCreateWithoutRegistredByInput> | ClassesCreateWithoutRegistredByInput[] | ClassesUncheckedCreateWithoutRegistredByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutRegistredByInput | ClassesCreateOrConnectWithoutRegistredByInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutRegistredByInput | ClassesUpsertWithWhereUniqueWithoutRegistredByInput[]
    createMany?: ClassesCreateManyRegistredByInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutRegistredByInput | ClassesUpdateWithWhereUniqueWithoutRegistredByInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutRegistredByInput | ClassesUpdateManyWithWhereWithoutRegistredByInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type ClassesUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<ClassesCreateWithoutApprovedByInput, ClassesUncheckedCreateWithoutApprovedByInput> | ClassesCreateWithoutApprovedByInput[] | ClassesUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutApprovedByInput | ClassesCreateOrConnectWithoutApprovedByInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutApprovedByInput | ClassesUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: ClassesCreateManyApprovedByInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutApprovedByInput | ClassesUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutApprovedByInput | ClassesUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type ClassesCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ClassesCreateWithoutSubjectInput, ClassesUncheckedCreateWithoutSubjectInput> | ClassesCreateWithoutSubjectInput[] | ClassesUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutSubjectInput | ClassesCreateOrConnectWithoutSubjectInput[]
    createMany?: ClassesCreateManySubjectInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type ClassesUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ClassesCreateWithoutSubjectInput, ClassesUncheckedCreateWithoutSubjectInput> | ClassesCreateWithoutSubjectInput[] | ClassesUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutSubjectInput | ClassesCreateOrConnectWithoutSubjectInput[]
    createMany?: ClassesCreateManySubjectInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type ClassesUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ClassesCreateWithoutSubjectInput, ClassesUncheckedCreateWithoutSubjectInput> | ClassesCreateWithoutSubjectInput[] | ClassesUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutSubjectInput | ClassesCreateOrConnectWithoutSubjectInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutSubjectInput | ClassesUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ClassesCreateManySubjectInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutSubjectInput | ClassesUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutSubjectInput | ClassesUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type ClassesUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ClassesCreateWithoutSubjectInput, ClassesUncheckedCreateWithoutSubjectInput> | ClassesCreateWithoutSubjectInput[] | ClassesUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutSubjectInput | ClassesCreateOrConnectWithoutSubjectInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutSubjectInput | ClassesUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ClassesCreateManySubjectInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutSubjectInput | ClassesUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutSubjectInput | ClassesUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type UsersProfilesSchoolsCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutSchoolInput, UsersProfilesSchoolsUncheckedCreateWithoutSchoolInput> | UsersProfilesSchoolsCreateWithoutSchoolInput[] | UsersProfilesSchoolsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutSchoolInput | UsersProfilesSchoolsCreateOrConnectWithoutSchoolInput[]
    createMany?: UsersProfilesSchoolsCreateManySchoolInputEnvelope
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
  }

  export type ClassesCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ClassesCreateWithoutSchoolInput, ClassesUncheckedCreateWithoutSchoolInput> | ClassesCreateWithoutSchoolInput[] | ClassesUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutSchoolInput | ClassesCreateOrConnectWithoutSchoolInput[]
    createMany?: ClassesCreateManySchoolInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type UsersProfilesSchoolsUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutSchoolInput, UsersProfilesSchoolsUncheckedCreateWithoutSchoolInput> | UsersProfilesSchoolsCreateWithoutSchoolInput[] | UsersProfilesSchoolsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutSchoolInput | UsersProfilesSchoolsCreateOrConnectWithoutSchoolInput[]
    createMany?: UsersProfilesSchoolsCreateManySchoolInputEnvelope
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
  }

  export type ClassesUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ClassesCreateWithoutSchoolInput, ClassesUncheckedCreateWithoutSchoolInput> | ClassesCreateWithoutSchoolInput[] | ClassesUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutSchoolInput | ClassesCreateOrConnectWithoutSchoolInput[]
    createMany?: ClassesCreateManySchoolInputEnvelope
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
  }

  export type UsersProfilesSchoolsUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutSchoolInput, UsersProfilesSchoolsUncheckedCreateWithoutSchoolInput> | UsersProfilesSchoolsCreateWithoutSchoolInput[] | UsersProfilesSchoolsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutSchoolInput | UsersProfilesSchoolsCreateOrConnectWithoutSchoolInput[]
    upsert?: UsersProfilesSchoolsUpsertWithWhereUniqueWithoutSchoolInput | UsersProfilesSchoolsUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: UsersProfilesSchoolsCreateManySchoolInputEnvelope
    set?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    disconnect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    delete?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    update?: UsersProfilesSchoolsUpdateWithWhereUniqueWithoutSchoolInput | UsersProfilesSchoolsUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: UsersProfilesSchoolsUpdateManyWithWhereWithoutSchoolInput | UsersProfilesSchoolsUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: UsersProfilesSchoolsScalarWhereInput | UsersProfilesSchoolsScalarWhereInput[]
  }

  export type ClassesUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ClassesCreateWithoutSchoolInput, ClassesUncheckedCreateWithoutSchoolInput> | ClassesCreateWithoutSchoolInput[] | ClassesUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutSchoolInput | ClassesCreateOrConnectWithoutSchoolInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutSchoolInput | ClassesUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ClassesCreateManySchoolInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutSchoolInput | ClassesUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutSchoolInput | ClassesUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type UsersProfilesSchoolsUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UsersProfilesSchoolsCreateWithoutSchoolInput, UsersProfilesSchoolsUncheckedCreateWithoutSchoolInput> | UsersProfilesSchoolsCreateWithoutSchoolInput[] | UsersProfilesSchoolsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UsersProfilesSchoolsCreateOrConnectWithoutSchoolInput | UsersProfilesSchoolsCreateOrConnectWithoutSchoolInput[]
    upsert?: UsersProfilesSchoolsUpsertWithWhereUniqueWithoutSchoolInput | UsersProfilesSchoolsUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: UsersProfilesSchoolsCreateManySchoolInputEnvelope
    set?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    disconnect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    delete?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    connect?: UsersProfilesSchoolsWhereUniqueInput | UsersProfilesSchoolsWhereUniqueInput[]
    update?: UsersProfilesSchoolsUpdateWithWhereUniqueWithoutSchoolInput | UsersProfilesSchoolsUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: UsersProfilesSchoolsUpdateManyWithWhereWithoutSchoolInput | UsersProfilesSchoolsUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: UsersProfilesSchoolsScalarWhereInput | UsersProfilesSchoolsScalarWhereInput[]
  }

  export type ClassesUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ClassesCreateWithoutSchoolInput, ClassesUncheckedCreateWithoutSchoolInput> | ClassesCreateWithoutSchoolInput[] | ClassesUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ClassesCreateOrConnectWithoutSchoolInput | ClassesCreateOrConnectWithoutSchoolInput[]
    upsert?: ClassesUpsertWithWhereUniqueWithoutSchoolInput | ClassesUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ClassesCreateManySchoolInputEnvelope
    set?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    disconnect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    delete?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    connect?: ClassesWhereUniqueInput | ClassesWhereUniqueInput[]
    update?: ClassesUpdateWithWhereUniqueWithoutSchoolInput | ClassesUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ClassesUpdateManyWithWhereWithoutSchoolInput | ClassesUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutUpsSchoolInput = {
    create?: XOR<SchoolCreateWithoutUpsSchoolInput, SchoolUncheckedCreateWithoutUpsSchoolInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUpsSchoolInput
    connect?: SchoolWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutUpsUserInput = {
    create?: XOR<UsersCreateWithoutUpsUserInput, UsersUncheckedCreateWithoutUpsUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUpsUserInput
    connect?: UsersWhereUniqueInput
  }

  export type ProfilesCreateNestedOneWithoutUpsProfileInput = {
    create?: XOR<ProfilesCreateWithoutUpsProfileInput, ProfilesUncheckedCreateWithoutUpsProfileInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUpsProfileInput
    connect?: ProfilesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutApproverInput = {
    create?: XOR<UsersCreateWithoutApproverInput, UsersUncheckedCreateWithoutApproverInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApproverInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SchoolUpdateOneRequiredWithoutUpsSchoolNestedInput = {
    create?: XOR<SchoolCreateWithoutUpsSchoolInput, SchoolUncheckedCreateWithoutUpsSchoolInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUpsSchoolInput
    upsert?: SchoolUpsertWithoutUpsSchoolInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutUpsSchoolInput, SchoolUpdateWithoutUpsSchoolInput>, SchoolUncheckedUpdateWithoutUpsSchoolInput>
  }

  export type UsersUpdateOneRequiredWithoutUpsUserNestedInput = {
    create?: XOR<UsersCreateWithoutUpsUserInput, UsersUncheckedCreateWithoutUpsUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUpsUserInput
    upsert?: UsersUpsertWithoutUpsUserInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUpsUserInput, UsersUpdateWithoutUpsUserInput>, UsersUncheckedUpdateWithoutUpsUserInput>
  }

  export type ProfilesUpdateOneRequiredWithoutUpsProfileNestedInput = {
    create?: XOR<ProfilesCreateWithoutUpsProfileInput, ProfilesUncheckedCreateWithoutUpsProfileInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUpsProfileInput
    upsert?: ProfilesUpsertWithoutUpsProfileInput
    connect?: ProfilesWhereUniqueInput
    update?: XOR<XOR<ProfilesUpdateToOneWithWhereWithoutUpsProfileInput, ProfilesUpdateWithoutUpsProfileInput>, ProfilesUncheckedUpdateWithoutUpsProfileInput>
  }

  export type UsersUpdateOneWithoutApproverNestedInput = {
    create?: XOR<UsersCreateWithoutApproverInput, UsersUncheckedCreateWithoutApproverInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApproverInput
    upsert?: UsersUpsertWithoutApproverInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutApproverInput, UsersUpdateWithoutApproverInput>, UsersUncheckedUpdateWithoutApproverInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SchoolCreateNestedOneWithoutClassSchoolInput = {
    create?: XOR<SchoolCreateWithoutClassSchoolInput, SchoolUncheckedCreateWithoutClassSchoolInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutClassSchoolInput
    connect?: SchoolWhereUniqueInput
  }

  export type SubjectsCreateNestedOneWithoutClassSubjectInput = {
    create?: XOR<SubjectsCreateWithoutClassSubjectInput, SubjectsUncheckedCreateWithoutClassSubjectInput>
    connectOrCreate?: SubjectsCreateOrConnectWithoutClassSubjectInput
    connect?: SubjectsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutClassCreatorInput = {
    create?: XOR<UsersCreateWithoutClassCreatorInput, UsersUncheckedCreateWithoutClassCreatorInput>
    connectOrCreate?: UsersCreateOrConnectWithoutClassCreatorInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutClassRegistrarInput = {
    create?: XOR<UsersCreateWithoutClassRegistrarInput, UsersUncheckedCreateWithoutClassRegistrarInput>
    connectOrCreate?: UsersCreateOrConnectWithoutClassRegistrarInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutClassApproverInput = {
    create?: XOR<UsersCreateWithoutClassApproverInput, UsersUncheckedCreateWithoutClassApproverInput>
    connectOrCreate?: UsersCreateOrConnectWithoutClassApproverInput
    connect?: UsersWhereUniqueInput
  }

  export type ProfilesCreateNestedOneWithoutClassProfileInput = {
    create?: XOR<ProfilesCreateWithoutClassProfileInput, ProfilesUncheckedCreateWithoutClassProfileInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutClassProfileInput
    connect?: ProfilesWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutClassSchoolNestedInput = {
    create?: XOR<SchoolCreateWithoutClassSchoolInput, SchoolUncheckedCreateWithoutClassSchoolInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutClassSchoolInput
    upsert?: SchoolUpsertWithoutClassSchoolInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutClassSchoolInput, SchoolUpdateWithoutClassSchoolInput>, SchoolUncheckedUpdateWithoutClassSchoolInput>
  }

  export type SubjectsUpdateOneRequiredWithoutClassSubjectNestedInput = {
    create?: XOR<SubjectsCreateWithoutClassSubjectInput, SubjectsUncheckedCreateWithoutClassSubjectInput>
    connectOrCreate?: SubjectsCreateOrConnectWithoutClassSubjectInput
    upsert?: SubjectsUpsertWithoutClassSubjectInput
    connect?: SubjectsWhereUniqueInput
    update?: XOR<XOR<SubjectsUpdateToOneWithWhereWithoutClassSubjectInput, SubjectsUpdateWithoutClassSubjectInput>, SubjectsUncheckedUpdateWithoutClassSubjectInput>
  }

  export type UsersUpdateOneRequiredWithoutClassCreatorNestedInput = {
    create?: XOR<UsersCreateWithoutClassCreatorInput, UsersUncheckedCreateWithoutClassCreatorInput>
    connectOrCreate?: UsersCreateOrConnectWithoutClassCreatorInput
    upsert?: UsersUpsertWithoutClassCreatorInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutClassCreatorInput, UsersUpdateWithoutClassCreatorInput>, UsersUncheckedUpdateWithoutClassCreatorInput>
  }

  export type UsersUpdateOneRequiredWithoutClassRegistrarNestedInput = {
    create?: XOR<UsersCreateWithoutClassRegistrarInput, UsersUncheckedCreateWithoutClassRegistrarInput>
    connectOrCreate?: UsersCreateOrConnectWithoutClassRegistrarInput
    upsert?: UsersUpsertWithoutClassRegistrarInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutClassRegistrarInput, UsersUpdateWithoutClassRegistrarInput>, UsersUncheckedUpdateWithoutClassRegistrarInput>
  }

  export type UsersUpdateOneRequiredWithoutClassApproverNestedInput = {
    create?: XOR<UsersCreateWithoutClassApproverInput, UsersUncheckedCreateWithoutClassApproverInput>
    connectOrCreate?: UsersCreateOrConnectWithoutClassApproverInput
    upsert?: UsersUpsertWithoutClassApproverInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutClassApproverInput, UsersUpdateWithoutClassApproverInput>, UsersUncheckedUpdateWithoutClassApproverInput>
  }

  export type ProfilesUpdateOneRequiredWithoutClassProfileNestedInput = {
    create?: XOR<ProfilesCreateWithoutClassProfileInput, ProfilesUncheckedCreateWithoutClassProfileInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutClassProfileInput
    upsert?: ProfilesUpsertWithoutClassProfileInput
    connect?: ProfilesWhereUniqueInput
    update?: XOR<XOR<ProfilesUpdateToOneWithWhereWithoutClassProfileInput, ProfilesUpdateWithoutClassProfileInput>, ProfilesUncheckedUpdateWithoutClassProfileInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UsersProfilesSchoolsCreateWithoutProfileInput = {
    createdAt?: Date | string
    approvedAt?: Date | string | null
    school: SchoolCreateNestedOneWithoutUpsSchoolInput
    user: UsersCreateNestedOneWithoutUpsUserInput
    approvedBy?: UsersCreateNestedOneWithoutApproverInput
  }

  export type UsersProfilesSchoolsUncheckedCreateWithoutProfileInput = {
    schoolId: number
    userId: number
    createdAt?: Date | string
    approvedAt?: Date | string | null
    approvedById?: number | null
  }

  export type UsersProfilesSchoolsCreateOrConnectWithoutProfileInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    create: XOR<UsersProfilesSchoolsCreateWithoutProfileInput, UsersProfilesSchoolsUncheckedCreateWithoutProfileInput>
  }

  export type UsersProfilesSchoolsCreateManyProfileInputEnvelope = {
    data: UsersProfilesSchoolsCreateManyProfileInput | UsersProfilesSchoolsCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type ClassesCreateWithoutProfileInput = {
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
    school: SchoolCreateNestedOneWithoutClassSchoolInput
    subject: SubjectsCreateNestedOneWithoutClassSubjectInput
    createdBy: UsersCreateNestedOneWithoutClassCreatorInput
    registredBy: UsersCreateNestedOneWithoutClassRegistrarInput
    approvedBy: UsersCreateNestedOneWithoutClassApproverInput
  }

  export type ClassesUncheckedCreateWithoutProfileInput = {
    id?: number
    schoolId: number
    subjectId: number
    createdByd: number
    registredById: number
    approvedById: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type ClassesCreateOrConnectWithoutProfileInput = {
    where: ClassesWhereUniqueInput
    create: XOR<ClassesCreateWithoutProfileInput, ClassesUncheckedCreateWithoutProfileInput>
  }

  export type ClassesCreateManyProfileInputEnvelope = {
    data: ClassesCreateManyProfileInput | ClassesCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UsersProfilesSchoolsUpsertWithWhereUniqueWithoutProfileInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    update: XOR<UsersProfilesSchoolsUpdateWithoutProfileInput, UsersProfilesSchoolsUncheckedUpdateWithoutProfileInput>
    create: XOR<UsersProfilesSchoolsCreateWithoutProfileInput, UsersProfilesSchoolsUncheckedCreateWithoutProfileInput>
  }

  export type UsersProfilesSchoolsUpdateWithWhereUniqueWithoutProfileInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    data: XOR<UsersProfilesSchoolsUpdateWithoutProfileInput, UsersProfilesSchoolsUncheckedUpdateWithoutProfileInput>
  }

  export type UsersProfilesSchoolsUpdateManyWithWhereWithoutProfileInput = {
    where: UsersProfilesSchoolsScalarWhereInput
    data: XOR<UsersProfilesSchoolsUpdateManyMutationInput, UsersProfilesSchoolsUncheckedUpdateManyWithoutProfileInput>
  }

  export type UsersProfilesSchoolsScalarWhereInput = {
    AND?: UsersProfilesSchoolsScalarWhereInput | UsersProfilesSchoolsScalarWhereInput[]
    OR?: UsersProfilesSchoolsScalarWhereInput[]
    NOT?: UsersProfilesSchoolsScalarWhereInput | UsersProfilesSchoolsScalarWhereInput[]
    schoolId?: IntFilter<"UsersProfilesSchools"> | number
    userId?: IntFilter<"UsersProfilesSchools"> | number
    profileId?: IntFilter<"UsersProfilesSchools"> | number
    createdAt?: DateTimeFilter<"UsersProfilesSchools"> | Date | string
    approvedAt?: DateTimeNullableFilter<"UsersProfilesSchools"> | Date | string | null
    approvedById?: IntNullableFilter<"UsersProfilesSchools"> | number | null
  }

  export type ClassesUpsertWithWhereUniqueWithoutProfileInput = {
    where: ClassesWhereUniqueInput
    update: XOR<ClassesUpdateWithoutProfileInput, ClassesUncheckedUpdateWithoutProfileInput>
    create: XOR<ClassesCreateWithoutProfileInput, ClassesUncheckedCreateWithoutProfileInput>
  }

  export type ClassesUpdateWithWhereUniqueWithoutProfileInput = {
    where: ClassesWhereUniqueInput
    data: XOR<ClassesUpdateWithoutProfileInput, ClassesUncheckedUpdateWithoutProfileInput>
  }

  export type ClassesUpdateManyWithWhereWithoutProfileInput = {
    where: ClassesScalarWhereInput
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyWithoutProfileInput>
  }

  export type ClassesScalarWhereInput = {
    AND?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
    OR?: ClassesScalarWhereInput[]
    NOT?: ClassesScalarWhereInput | ClassesScalarWhereInput[]
    id?: IntFilter<"Classes"> | number
    schoolId?: IntFilter<"Classes"> | number
    subjectId?: IntFilter<"Classes"> | number
    createdByd?: IntFilter<"Classes"> | number
    registredById?: IntFilter<"Classes"> | number
    approvedById?: IntFilter<"Classes"> | number
    profileId?: IntFilter<"Classes"> | number
    createdAt?: DateTimeFilter<"Classes"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Classes"> | Date | string | null
    statededAt?: DateTimeNullableFilter<"Classes"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"Classes"> | Date | string | null
  }

  export type UsersProfilesSchoolsCreateWithoutUserInput = {
    createdAt?: Date | string
    approvedAt?: Date | string | null
    school: SchoolCreateNestedOneWithoutUpsSchoolInput
    profile: ProfilesCreateNestedOneWithoutUpsProfileInput
    approvedBy?: UsersCreateNestedOneWithoutApproverInput
  }

  export type UsersProfilesSchoolsUncheckedCreateWithoutUserInput = {
    schoolId: number
    profileId: number
    createdAt?: Date | string
    approvedAt?: Date | string | null
    approvedById?: number | null
  }

  export type UsersProfilesSchoolsCreateOrConnectWithoutUserInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    create: XOR<UsersProfilesSchoolsCreateWithoutUserInput, UsersProfilesSchoolsUncheckedCreateWithoutUserInput>
  }

  export type UsersProfilesSchoolsCreateManyUserInputEnvelope = {
    data: UsersProfilesSchoolsCreateManyUserInput | UsersProfilesSchoolsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UsersProfilesSchoolsCreateWithoutApprovedByInput = {
    createdAt?: Date | string
    approvedAt?: Date | string | null
    school: SchoolCreateNestedOneWithoutUpsSchoolInput
    user: UsersCreateNestedOneWithoutUpsUserInput
    profile: ProfilesCreateNestedOneWithoutUpsProfileInput
  }

  export type UsersProfilesSchoolsUncheckedCreateWithoutApprovedByInput = {
    schoolId: number
    userId: number
    profileId: number
    createdAt?: Date | string
    approvedAt?: Date | string | null
  }

  export type UsersProfilesSchoolsCreateOrConnectWithoutApprovedByInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    create: XOR<UsersProfilesSchoolsCreateWithoutApprovedByInput, UsersProfilesSchoolsUncheckedCreateWithoutApprovedByInput>
  }

  export type UsersProfilesSchoolsCreateManyApprovedByInputEnvelope = {
    data: UsersProfilesSchoolsCreateManyApprovedByInput | UsersProfilesSchoolsCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type ClassesCreateWithoutCreatedByInput = {
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
    school: SchoolCreateNestedOneWithoutClassSchoolInput
    subject: SubjectsCreateNestedOneWithoutClassSubjectInput
    registredBy: UsersCreateNestedOneWithoutClassRegistrarInput
    approvedBy: UsersCreateNestedOneWithoutClassApproverInput
    profile: ProfilesCreateNestedOneWithoutClassProfileInput
  }

  export type ClassesUncheckedCreateWithoutCreatedByInput = {
    id?: number
    schoolId: number
    subjectId: number
    registredById: number
    approvedById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type ClassesCreateOrConnectWithoutCreatedByInput = {
    where: ClassesWhereUniqueInput
    create: XOR<ClassesCreateWithoutCreatedByInput, ClassesUncheckedCreateWithoutCreatedByInput>
  }

  export type ClassesCreateManyCreatedByInputEnvelope = {
    data: ClassesCreateManyCreatedByInput | ClassesCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ClassesCreateWithoutRegistredByInput = {
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
    school: SchoolCreateNestedOneWithoutClassSchoolInput
    subject: SubjectsCreateNestedOneWithoutClassSubjectInput
    createdBy: UsersCreateNestedOneWithoutClassCreatorInput
    approvedBy: UsersCreateNestedOneWithoutClassApproverInput
    profile: ProfilesCreateNestedOneWithoutClassProfileInput
  }

  export type ClassesUncheckedCreateWithoutRegistredByInput = {
    id?: number
    schoolId: number
    subjectId: number
    createdByd: number
    approvedById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type ClassesCreateOrConnectWithoutRegistredByInput = {
    where: ClassesWhereUniqueInput
    create: XOR<ClassesCreateWithoutRegistredByInput, ClassesUncheckedCreateWithoutRegistredByInput>
  }

  export type ClassesCreateManyRegistredByInputEnvelope = {
    data: ClassesCreateManyRegistredByInput | ClassesCreateManyRegistredByInput[]
    skipDuplicates?: boolean
  }

  export type ClassesCreateWithoutApprovedByInput = {
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
    school: SchoolCreateNestedOneWithoutClassSchoolInput
    subject: SubjectsCreateNestedOneWithoutClassSubjectInput
    createdBy: UsersCreateNestedOneWithoutClassCreatorInput
    registredBy: UsersCreateNestedOneWithoutClassRegistrarInput
    profile: ProfilesCreateNestedOneWithoutClassProfileInput
  }

  export type ClassesUncheckedCreateWithoutApprovedByInput = {
    id?: number
    schoolId: number
    subjectId: number
    createdByd: number
    registredById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type ClassesCreateOrConnectWithoutApprovedByInput = {
    where: ClassesWhereUniqueInput
    create: XOR<ClassesCreateWithoutApprovedByInput, ClassesUncheckedCreateWithoutApprovedByInput>
  }

  export type ClassesCreateManyApprovedByInputEnvelope = {
    data: ClassesCreateManyApprovedByInput | ClassesCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type UsersProfilesSchoolsUpsertWithWhereUniqueWithoutUserInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    update: XOR<UsersProfilesSchoolsUpdateWithoutUserInput, UsersProfilesSchoolsUncheckedUpdateWithoutUserInput>
    create: XOR<UsersProfilesSchoolsCreateWithoutUserInput, UsersProfilesSchoolsUncheckedCreateWithoutUserInput>
  }

  export type UsersProfilesSchoolsUpdateWithWhereUniqueWithoutUserInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    data: XOR<UsersProfilesSchoolsUpdateWithoutUserInput, UsersProfilesSchoolsUncheckedUpdateWithoutUserInput>
  }

  export type UsersProfilesSchoolsUpdateManyWithWhereWithoutUserInput = {
    where: UsersProfilesSchoolsScalarWhereInput
    data: XOR<UsersProfilesSchoolsUpdateManyMutationInput, UsersProfilesSchoolsUncheckedUpdateManyWithoutUserInput>
  }

  export type UsersProfilesSchoolsUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    update: XOR<UsersProfilesSchoolsUpdateWithoutApprovedByInput, UsersProfilesSchoolsUncheckedUpdateWithoutApprovedByInput>
    create: XOR<UsersProfilesSchoolsCreateWithoutApprovedByInput, UsersProfilesSchoolsUncheckedCreateWithoutApprovedByInput>
  }

  export type UsersProfilesSchoolsUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    data: XOR<UsersProfilesSchoolsUpdateWithoutApprovedByInput, UsersProfilesSchoolsUncheckedUpdateWithoutApprovedByInput>
  }

  export type UsersProfilesSchoolsUpdateManyWithWhereWithoutApprovedByInput = {
    where: UsersProfilesSchoolsScalarWhereInput
    data: XOR<UsersProfilesSchoolsUpdateManyMutationInput, UsersProfilesSchoolsUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type ClassesUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ClassesWhereUniqueInput
    update: XOR<ClassesUpdateWithoutCreatedByInput, ClassesUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ClassesCreateWithoutCreatedByInput, ClassesUncheckedCreateWithoutCreatedByInput>
  }

  export type ClassesUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ClassesWhereUniqueInput
    data: XOR<ClassesUpdateWithoutCreatedByInput, ClassesUncheckedUpdateWithoutCreatedByInput>
  }

  export type ClassesUpdateManyWithWhereWithoutCreatedByInput = {
    where: ClassesScalarWhereInput
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ClassesUpsertWithWhereUniqueWithoutRegistredByInput = {
    where: ClassesWhereUniqueInput
    update: XOR<ClassesUpdateWithoutRegistredByInput, ClassesUncheckedUpdateWithoutRegistredByInput>
    create: XOR<ClassesCreateWithoutRegistredByInput, ClassesUncheckedCreateWithoutRegistredByInput>
  }

  export type ClassesUpdateWithWhereUniqueWithoutRegistredByInput = {
    where: ClassesWhereUniqueInput
    data: XOR<ClassesUpdateWithoutRegistredByInput, ClassesUncheckedUpdateWithoutRegistredByInput>
  }

  export type ClassesUpdateManyWithWhereWithoutRegistredByInput = {
    where: ClassesScalarWhereInput
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyWithoutRegistredByInput>
  }

  export type ClassesUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: ClassesWhereUniqueInput
    update: XOR<ClassesUpdateWithoutApprovedByInput, ClassesUncheckedUpdateWithoutApprovedByInput>
    create: XOR<ClassesCreateWithoutApprovedByInput, ClassesUncheckedCreateWithoutApprovedByInput>
  }

  export type ClassesUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: ClassesWhereUniqueInput
    data: XOR<ClassesUpdateWithoutApprovedByInput, ClassesUncheckedUpdateWithoutApprovedByInput>
  }

  export type ClassesUpdateManyWithWhereWithoutApprovedByInput = {
    where: ClassesScalarWhereInput
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type ClassesCreateWithoutSubjectInput = {
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
    school: SchoolCreateNestedOneWithoutClassSchoolInput
    createdBy: UsersCreateNestedOneWithoutClassCreatorInput
    registredBy: UsersCreateNestedOneWithoutClassRegistrarInput
    approvedBy: UsersCreateNestedOneWithoutClassApproverInput
    profile: ProfilesCreateNestedOneWithoutClassProfileInput
  }

  export type ClassesUncheckedCreateWithoutSubjectInput = {
    id?: number
    schoolId: number
    createdByd: number
    registredById: number
    approvedById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type ClassesCreateOrConnectWithoutSubjectInput = {
    where: ClassesWhereUniqueInput
    create: XOR<ClassesCreateWithoutSubjectInput, ClassesUncheckedCreateWithoutSubjectInput>
  }

  export type ClassesCreateManySubjectInputEnvelope = {
    data: ClassesCreateManySubjectInput | ClassesCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type ClassesUpsertWithWhereUniqueWithoutSubjectInput = {
    where: ClassesWhereUniqueInput
    update: XOR<ClassesUpdateWithoutSubjectInput, ClassesUncheckedUpdateWithoutSubjectInput>
    create: XOR<ClassesCreateWithoutSubjectInput, ClassesUncheckedCreateWithoutSubjectInput>
  }

  export type ClassesUpdateWithWhereUniqueWithoutSubjectInput = {
    where: ClassesWhereUniqueInput
    data: XOR<ClassesUpdateWithoutSubjectInput, ClassesUncheckedUpdateWithoutSubjectInput>
  }

  export type ClassesUpdateManyWithWhereWithoutSubjectInput = {
    where: ClassesScalarWhereInput
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyWithoutSubjectInput>
  }

  export type UsersProfilesSchoolsCreateWithoutSchoolInput = {
    createdAt?: Date | string
    approvedAt?: Date | string | null
    user: UsersCreateNestedOneWithoutUpsUserInput
    profile: ProfilesCreateNestedOneWithoutUpsProfileInput
    approvedBy?: UsersCreateNestedOneWithoutApproverInput
  }

  export type UsersProfilesSchoolsUncheckedCreateWithoutSchoolInput = {
    userId: number
    profileId: number
    createdAt?: Date | string
    approvedAt?: Date | string | null
    approvedById?: number | null
  }

  export type UsersProfilesSchoolsCreateOrConnectWithoutSchoolInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    create: XOR<UsersProfilesSchoolsCreateWithoutSchoolInput, UsersProfilesSchoolsUncheckedCreateWithoutSchoolInput>
  }

  export type UsersProfilesSchoolsCreateManySchoolInputEnvelope = {
    data: UsersProfilesSchoolsCreateManySchoolInput | UsersProfilesSchoolsCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type ClassesCreateWithoutSchoolInput = {
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
    subject: SubjectsCreateNestedOneWithoutClassSubjectInput
    createdBy: UsersCreateNestedOneWithoutClassCreatorInput
    registredBy: UsersCreateNestedOneWithoutClassRegistrarInput
    approvedBy: UsersCreateNestedOneWithoutClassApproverInput
    profile: ProfilesCreateNestedOneWithoutClassProfileInput
  }

  export type ClassesUncheckedCreateWithoutSchoolInput = {
    id?: number
    subjectId: number
    createdByd: number
    registredById: number
    approvedById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type ClassesCreateOrConnectWithoutSchoolInput = {
    where: ClassesWhereUniqueInput
    create: XOR<ClassesCreateWithoutSchoolInput, ClassesUncheckedCreateWithoutSchoolInput>
  }

  export type ClassesCreateManySchoolInputEnvelope = {
    data: ClassesCreateManySchoolInput | ClassesCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type UsersProfilesSchoolsUpsertWithWhereUniqueWithoutSchoolInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    update: XOR<UsersProfilesSchoolsUpdateWithoutSchoolInput, UsersProfilesSchoolsUncheckedUpdateWithoutSchoolInput>
    create: XOR<UsersProfilesSchoolsCreateWithoutSchoolInput, UsersProfilesSchoolsUncheckedCreateWithoutSchoolInput>
  }

  export type UsersProfilesSchoolsUpdateWithWhereUniqueWithoutSchoolInput = {
    where: UsersProfilesSchoolsWhereUniqueInput
    data: XOR<UsersProfilesSchoolsUpdateWithoutSchoolInput, UsersProfilesSchoolsUncheckedUpdateWithoutSchoolInput>
  }

  export type UsersProfilesSchoolsUpdateManyWithWhereWithoutSchoolInput = {
    where: UsersProfilesSchoolsScalarWhereInput
    data: XOR<UsersProfilesSchoolsUpdateManyMutationInput, UsersProfilesSchoolsUncheckedUpdateManyWithoutSchoolInput>
  }

  export type ClassesUpsertWithWhereUniqueWithoutSchoolInput = {
    where: ClassesWhereUniqueInput
    update: XOR<ClassesUpdateWithoutSchoolInput, ClassesUncheckedUpdateWithoutSchoolInput>
    create: XOR<ClassesCreateWithoutSchoolInput, ClassesUncheckedCreateWithoutSchoolInput>
  }

  export type ClassesUpdateWithWhereUniqueWithoutSchoolInput = {
    where: ClassesWhereUniqueInput
    data: XOR<ClassesUpdateWithoutSchoolInput, ClassesUncheckedUpdateWithoutSchoolInput>
  }

  export type ClassesUpdateManyWithWhereWithoutSchoolInput = {
    where: ClassesScalarWhereInput
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SchoolCreateWithoutUpsSchoolInput = {
    name: string
    createdAt?: Date | string
    classSchool?: ClassesCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutUpsSchoolInput = {
    id?: number
    name: string
    createdAt?: Date | string
    classSchool?: ClassesUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutUpsSchoolInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutUpsSchoolInput, SchoolUncheckedCreateWithoutUpsSchoolInput>
  }

  export type UsersCreateWithoutUpsUserInput = {
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    approver?: UsersProfilesSchoolsCreateNestedManyWithoutApprovedByInput
    classCreator?: ClassesCreateNestedManyWithoutCreatedByInput
    classRegistrar?: ClassesCreateNestedManyWithoutRegistredByInput
    classApprover?: ClassesCreateNestedManyWithoutApprovedByInput
  }

  export type UsersUncheckedCreateWithoutUpsUserInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    approver?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutApprovedByInput
    classCreator?: ClassesUncheckedCreateNestedManyWithoutCreatedByInput
    classRegistrar?: ClassesUncheckedCreateNestedManyWithoutRegistredByInput
    classApprover?: ClassesUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UsersCreateOrConnectWithoutUpsUserInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUpsUserInput, UsersUncheckedCreateWithoutUpsUserInput>
  }

  export type ProfilesCreateWithoutUpsProfileInput = {
    name: string
    createdAt?: Date | string
    classProfile?: ClassesCreateNestedManyWithoutProfileInput
  }

  export type ProfilesUncheckedCreateWithoutUpsProfileInput = {
    id?: number
    name: string
    createdAt?: Date | string
    classProfile?: ClassesUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfilesCreateOrConnectWithoutUpsProfileInput = {
    where: ProfilesWhereUniqueInput
    create: XOR<ProfilesCreateWithoutUpsProfileInput, ProfilesUncheckedCreateWithoutUpsProfileInput>
  }

  export type UsersCreateWithoutApproverInput = {
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    upsUser?: UsersProfilesSchoolsCreateNestedManyWithoutUserInput
    classCreator?: ClassesCreateNestedManyWithoutCreatedByInput
    classRegistrar?: ClassesCreateNestedManyWithoutRegistredByInput
    classApprover?: ClassesCreateNestedManyWithoutApprovedByInput
  }

  export type UsersUncheckedCreateWithoutApproverInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    upsUser?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutUserInput
    classCreator?: ClassesUncheckedCreateNestedManyWithoutCreatedByInput
    classRegistrar?: ClassesUncheckedCreateNestedManyWithoutRegistredByInput
    classApprover?: ClassesUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UsersCreateOrConnectWithoutApproverInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutApproverInput, UsersUncheckedCreateWithoutApproverInput>
  }

  export type SchoolUpsertWithoutUpsSchoolInput = {
    update: XOR<SchoolUpdateWithoutUpsSchoolInput, SchoolUncheckedUpdateWithoutUpsSchoolInput>
    create: XOR<SchoolCreateWithoutUpsSchoolInput, SchoolUncheckedCreateWithoutUpsSchoolInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutUpsSchoolInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutUpsSchoolInput, SchoolUncheckedUpdateWithoutUpsSchoolInput>
  }

  export type SchoolUpdateWithoutUpsSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSchool?: ClassesUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutUpsSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSchool?: ClassesUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UsersUpsertWithoutUpsUserInput = {
    update: XOR<UsersUpdateWithoutUpsUserInput, UsersUncheckedUpdateWithoutUpsUserInput>
    create: XOR<UsersCreateWithoutUpsUserInput, UsersUncheckedCreateWithoutUpsUserInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUpsUserInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUpsUserInput, UsersUncheckedUpdateWithoutUpsUserInput>
  }

  export type UsersUpdateWithoutUpsUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approver?: UsersProfilesSchoolsUpdateManyWithoutApprovedByNestedInput
    classCreator?: ClassesUpdateManyWithoutCreatedByNestedInput
    classRegistrar?: ClassesUpdateManyWithoutRegistredByNestedInput
    classApprover?: ClassesUpdateManyWithoutApprovedByNestedInput
  }

  export type UsersUncheckedUpdateWithoutUpsUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approver?: UsersProfilesSchoolsUncheckedUpdateManyWithoutApprovedByNestedInput
    classCreator?: ClassesUncheckedUpdateManyWithoutCreatedByNestedInput
    classRegistrar?: ClassesUncheckedUpdateManyWithoutRegistredByNestedInput
    classApprover?: ClassesUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type ProfilesUpsertWithoutUpsProfileInput = {
    update: XOR<ProfilesUpdateWithoutUpsProfileInput, ProfilesUncheckedUpdateWithoutUpsProfileInput>
    create: XOR<ProfilesCreateWithoutUpsProfileInput, ProfilesUncheckedCreateWithoutUpsProfileInput>
    where?: ProfilesWhereInput
  }

  export type ProfilesUpdateToOneWithWhereWithoutUpsProfileInput = {
    where?: ProfilesWhereInput
    data: XOR<ProfilesUpdateWithoutUpsProfileInput, ProfilesUncheckedUpdateWithoutUpsProfileInput>
  }

  export type ProfilesUpdateWithoutUpsProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classProfile?: ClassesUpdateManyWithoutProfileNestedInput
  }

  export type ProfilesUncheckedUpdateWithoutUpsProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classProfile?: ClassesUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UsersUpsertWithoutApproverInput = {
    update: XOR<UsersUpdateWithoutApproverInput, UsersUncheckedUpdateWithoutApproverInput>
    create: XOR<UsersCreateWithoutApproverInput, UsersUncheckedCreateWithoutApproverInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutApproverInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutApproverInput, UsersUncheckedUpdateWithoutApproverInput>
  }

  export type UsersUpdateWithoutApproverInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsUser?: UsersProfilesSchoolsUpdateManyWithoutUserNestedInput
    classCreator?: ClassesUpdateManyWithoutCreatedByNestedInput
    classRegistrar?: ClassesUpdateManyWithoutRegistredByNestedInput
    classApprover?: ClassesUpdateManyWithoutApprovedByNestedInput
  }

  export type UsersUncheckedUpdateWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsUser?: UsersProfilesSchoolsUncheckedUpdateManyWithoutUserNestedInput
    classCreator?: ClassesUncheckedUpdateManyWithoutCreatedByNestedInput
    classRegistrar?: ClassesUncheckedUpdateManyWithoutRegistredByNestedInput
    classApprover?: ClassesUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type SchoolCreateWithoutClassSchoolInput = {
    name: string
    createdAt?: Date | string
    upsSchool?: UsersProfilesSchoolsCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutClassSchoolInput = {
    id?: number
    name: string
    createdAt?: Date | string
    upsSchool?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutClassSchoolInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutClassSchoolInput, SchoolUncheckedCreateWithoutClassSchoolInput>
  }

  export type SubjectsCreateWithoutClassSubjectInput = {
    name: string
    createdAt?: Date | string
  }

  export type SubjectsUncheckedCreateWithoutClassSubjectInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type SubjectsCreateOrConnectWithoutClassSubjectInput = {
    where: SubjectsWhereUniqueInput
    create: XOR<SubjectsCreateWithoutClassSubjectInput, SubjectsUncheckedCreateWithoutClassSubjectInput>
  }

  export type UsersCreateWithoutClassCreatorInput = {
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    upsUser?: UsersProfilesSchoolsCreateNestedManyWithoutUserInput
    approver?: UsersProfilesSchoolsCreateNestedManyWithoutApprovedByInput
    classRegistrar?: ClassesCreateNestedManyWithoutRegistredByInput
    classApprover?: ClassesCreateNestedManyWithoutApprovedByInput
  }

  export type UsersUncheckedCreateWithoutClassCreatorInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    upsUser?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutUserInput
    approver?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutApprovedByInput
    classRegistrar?: ClassesUncheckedCreateNestedManyWithoutRegistredByInput
    classApprover?: ClassesUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UsersCreateOrConnectWithoutClassCreatorInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutClassCreatorInput, UsersUncheckedCreateWithoutClassCreatorInput>
  }

  export type UsersCreateWithoutClassRegistrarInput = {
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    upsUser?: UsersProfilesSchoolsCreateNestedManyWithoutUserInput
    approver?: UsersProfilesSchoolsCreateNestedManyWithoutApprovedByInput
    classCreator?: ClassesCreateNestedManyWithoutCreatedByInput
    classApprover?: ClassesCreateNestedManyWithoutApprovedByInput
  }

  export type UsersUncheckedCreateWithoutClassRegistrarInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    upsUser?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutUserInput
    approver?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutApprovedByInput
    classCreator?: ClassesUncheckedCreateNestedManyWithoutCreatedByInput
    classApprover?: ClassesUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UsersCreateOrConnectWithoutClassRegistrarInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutClassRegistrarInput, UsersUncheckedCreateWithoutClassRegistrarInput>
  }

  export type UsersCreateWithoutClassApproverInput = {
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    upsUser?: UsersProfilesSchoolsCreateNestedManyWithoutUserInput
    approver?: UsersProfilesSchoolsCreateNestedManyWithoutApprovedByInput
    classCreator?: ClassesCreateNestedManyWithoutCreatedByInput
    classRegistrar?: ClassesCreateNestedManyWithoutRegistredByInput
  }

  export type UsersUncheckedCreateWithoutClassApproverInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    upsUser?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutUserInput
    approver?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutApprovedByInput
    classCreator?: ClassesUncheckedCreateNestedManyWithoutCreatedByInput
    classRegistrar?: ClassesUncheckedCreateNestedManyWithoutRegistredByInput
  }

  export type UsersCreateOrConnectWithoutClassApproverInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutClassApproverInput, UsersUncheckedCreateWithoutClassApproverInput>
  }

  export type ProfilesCreateWithoutClassProfileInput = {
    name: string
    createdAt?: Date | string
    upsProfile?: UsersProfilesSchoolsCreateNestedManyWithoutProfileInput
  }

  export type ProfilesUncheckedCreateWithoutClassProfileInput = {
    id?: number
    name: string
    createdAt?: Date | string
    upsProfile?: UsersProfilesSchoolsUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfilesCreateOrConnectWithoutClassProfileInput = {
    where: ProfilesWhereUniqueInput
    create: XOR<ProfilesCreateWithoutClassProfileInput, ProfilesUncheckedCreateWithoutClassProfileInput>
  }

  export type SchoolUpsertWithoutClassSchoolInput = {
    update: XOR<SchoolUpdateWithoutClassSchoolInput, SchoolUncheckedUpdateWithoutClassSchoolInput>
    create: XOR<SchoolCreateWithoutClassSchoolInput, SchoolUncheckedCreateWithoutClassSchoolInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutClassSchoolInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutClassSchoolInput, SchoolUncheckedUpdateWithoutClassSchoolInput>
  }

  export type SchoolUpdateWithoutClassSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsSchool?: UsersProfilesSchoolsUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutClassSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsSchool?: UsersProfilesSchoolsUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SubjectsUpsertWithoutClassSubjectInput = {
    update: XOR<SubjectsUpdateWithoutClassSubjectInput, SubjectsUncheckedUpdateWithoutClassSubjectInput>
    create: XOR<SubjectsCreateWithoutClassSubjectInput, SubjectsUncheckedCreateWithoutClassSubjectInput>
    where?: SubjectsWhereInput
  }

  export type SubjectsUpdateToOneWithWhereWithoutClassSubjectInput = {
    where?: SubjectsWhereInput
    data: XOR<SubjectsUpdateWithoutClassSubjectInput, SubjectsUncheckedUpdateWithoutClassSubjectInput>
  }

  export type SubjectsUpdateWithoutClassSubjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectsUncheckedUpdateWithoutClassSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpsertWithoutClassCreatorInput = {
    update: XOR<UsersUpdateWithoutClassCreatorInput, UsersUncheckedUpdateWithoutClassCreatorInput>
    create: XOR<UsersCreateWithoutClassCreatorInput, UsersUncheckedCreateWithoutClassCreatorInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutClassCreatorInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutClassCreatorInput, UsersUncheckedUpdateWithoutClassCreatorInput>
  }

  export type UsersUpdateWithoutClassCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsUser?: UsersProfilesSchoolsUpdateManyWithoutUserNestedInput
    approver?: UsersProfilesSchoolsUpdateManyWithoutApprovedByNestedInput
    classRegistrar?: ClassesUpdateManyWithoutRegistredByNestedInput
    classApprover?: ClassesUpdateManyWithoutApprovedByNestedInput
  }

  export type UsersUncheckedUpdateWithoutClassCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsUser?: UsersProfilesSchoolsUncheckedUpdateManyWithoutUserNestedInput
    approver?: UsersProfilesSchoolsUncheckedUpdateManyWithoutApprovedByNestedInput
    classRegistrar?: ClassesUncheckedUpdateManyWithoutRegistredByNestedInput
    classApprover?: ClassesUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UsersUpsertWithoutClassRegistrarInput = {
    update: XOR<UsersUpdateWithoutClassRegistrarInput, UsersUncheckedUpdateWithoutClassRegistrarInput>
    create: XOR<UsersCreateWithoutClassRegistrarInput, UsersUncheckedCreateWithoutClassRegistrarInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutClassRegistrarInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutClassRegistrarInput, UsersUncheckedUpdateWithoutClassRegistrarInput>
  }

  export type UsersUpdateWithoutClassRegistrarInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsUser?: UsersProfilesSchoolsUpdateManyWithoutUserNestedInput
    approver?: UsersProfilesSchoolsUpdateManyWithoutApprovedByNestedInput
    classCreator?: ClassesUpdateManyWithoutCreatedByNestedInput
    classApprover?: ClassesUpdateManyWithoutApprovedByNestedInput
  }

  export type UsersUncheckedUpdateWithoutClassRegistrarInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsUser?: UsersProfilesSchoolsUncheckedUpdateManyWithoutUserNestedInput
    approver?: UsersProfilesSchoolsUncheckedUpdateManyWithoutApprovedByNestedInput
    classCreator?: ClassesUncheckedUpdateManyWithoutCreatedByNestedInput
    classApprover?: ClassesUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UsersUpsertWithoutClassApproverInput = {
    update: XOR<UsersUpdateWithoutClassApproverInput, UsersUncheckedUpdateWithoutClassApproverInput>
    create: XOR<UsersCreateWithoutClassApproverInput, UsersUncheckedCreateWithoutClassApproverInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutClassApproverInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutClassApproverInput, UsersUncheckedUpdateWithoutClassApproverInput>
  }

  export type UsersUpdateWithoutClassApproverInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsUser?: UsersProfilesSchoolsUpdateManyWithoutUserNestedInput
    approver?: UsersProfilesSchoolsUpdateManyWithoutApprovedByNestedInput
    classCreator?: ClassesUpdateManyWithoutCreatedByNestedInput
    classRegistrar?: ClassesUpdateManyWithoutRegistredByNestedInput
  }

  export type UsersUncheckedUpdateWithoutClassApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsUser?: UsersProfilesSchoolsUncheckedUpdateManyWithoutUserNestedInput
    approver?: UsersProfilesSchoolsUncheckedUpdateManyWithoutApprovedByNestedInput
    classCreator?: ClassesUncheckedUpdateManyWithoutCreatedByNestedInput
    classRegistrar?: ClassesUncheckedUpdateManyWithoutRegistredByNestedInput
  }

  export type ProfilesUpsertWithoutClassProfileInput = {
    update: XOR<ProfilesUpdateWithoutClassProfileInput, ProfilesUncheckedUpdateWithoutClassProfileInput>
    create: XOR<ProfilesCreateWithoutClassProfileInput, ProfilesUncheckedCreateWithoutClassProfileInput>
    where?: ProfilesWhereInput
  }

  export type ProfilesUpdateToOneWithWhereWithoutClassProfileInput = {
    where?: ProfilesWhereInput
    data: XOR<ProfilesUpdateWithoutClassProfileInput, ProfilesUncheckedUpdateWithoutClassProfileInput>
  }

  export type ProfilesUpdateWithoutClassProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsProfile?: UsersProfilesSchoolsUpdateManyWithoutProfileNestedInput
  }

  export type ProfilesUncheckedUpdateWithoutClassProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upsProfile?: UsersProfilesSchoolsUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UsersProfilesSchoolsCreateManyProfileInput = {
    schoolId: number
    userId: number
    createdAt?: Date | string
    approvedAt?: Date | string | null
    approvedById?: number | null
  }

  export type ClassesCreateManyProfileInput = {
    id?: number
    schoolId: number
    subjectId: number
    createdByd: number
    registredById: number
    approvedById: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type UsersProfilesSchoolsUpdateWithoutProfileInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutUpsSchoolNestedInput
    user?: UsersUpdateOneRequiredWithoutUpsUserNestedInput
    approvedBy?: UsersUpdateOneWithoutApproverNestedInput
  }

  export type UsersProfilesSchoolsUncheckedUpdateWithoutProfileInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersProfilesSchoolsUncheckedUpdateManyWithoutProfileInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassesUpdateWithoutProfileInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutClassSchoolNestedInput
    subject?: SubjectsUpdateOneRequiredWithoutClassSubjectNestedInput
    createdBy?: UsersUpdateOneRequiredWithoutClassCreatorNestedInput
    registredBy?: UsersUpdateOneRequiredWithoutClassRegistrarNestedInput
    approvedBy?: UsersUpdateOneRequiredWithoutClassApproverNestedInput
  }

  export type ClassesUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesUncheckedUpdateManyWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersProfilesSchoolsCreateManyUserInput = {
    schoolId: number
    profileId: number
    createdAt?: Date | string
    approvedAt?: Date | string | null
    approvedById?: number | null
  }

  export type UsersProfilesSchoolsCreateManyApprovedByInput = {
    schoolId: number
    userId: number
    profileId: number
    createdAt?: Date | string
    approvedAt?: Date | string | null
  }

  export type ClassesCreateManyCreatedByInput = {
    id?: number
    schoolId: number
    subjectId: number
    registredById: number
    approvedById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type ClassesCreateManyRegistredByInput = {
    id?: number
    schoolId: number
    subjectId: number
    createdByd: number
    approvedById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type ClassesCreateManyApprovedByInput = {
    id?: number
    schoolId: number
    subjectId: number
    createdByd: number
    registredById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type UsersProfilesSchoolsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutUpsSchoolNestedInput
    profile?: ProfilesUpdateOneRequiredWithoutUpsProfileNestedInput
    approvedBy?: UsersUpdateOneWithoutApproverNestedInput
  }

  export type UsersProfilesSchoolsUncheckedUpdateWithoutUserInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersProfilesSchoolsUncheckedUpdateManyWithoutUserInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersProfilesSchoolsUpdateWithoutApprovedByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutUpsSchoolNestedInput
    user?: UsersUpdateOneRequiredWithoutUpsUserNestedInput
    profile?: ProfilesUpdateOneRequiredWithoutUpsProfileNestedInput
  }

  export type UsersProfilesSchoolsUncheckedUpdateWithoutApprovedByInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersProfilesSchoolsUncheckedUpdateManyWithoutApprovedByInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesUpdateWithoutCreatedByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutClassSchoolNestedInput
    subject?: SubjectsUpdateOneRequiredWithoutClassSubjectNestedInput
    registredBy?: UsersUpdateOneRequiredWithoutClassRegistrarNestedInput
    approvedBy?: UsersUpdateOneRequiredWithoutClassApproverNestedInput
    profile?: ProfilesUpdateOneRequiredWithoutClassProfileNestedInput
  }

  export type ClassesUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesUpdateWithoutRegistredByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutClassSchoolNestedInput
    subject?: SubjectsUpdateOneRequiredWithoutClassSubjectNestedInput
    createdBy?: UsersUpdateOneRequiredWithoutClassCreatorNestedInput
    approvedBy?: UsersUpdateOneRequiredWithoutClassApproverNestedInput
    profile?: ProfilesUpdateOneRequiredWithoutClassProfileNestedInput
  }

  export type ClassesUncheckedUpdateWithoutRegistredByInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesUncheckedUpdateManyWithoutRegistredByInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesUpdateWithoutApprovedByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutClassSchoolNestedInput
    subject?: SubjectsUpdateOneRequiredWithoutClassSubjectNestedInput
    createdBy?: UsersUpdateOneRequiredWithoutClassCreatorNestedInput
    registredBy?: UsersUpdateOneRequiredWithoutClassRegistrarNestedInput
    profile?: ProfilesUpdateOneRequiredWithoutClassProfileNestedInput
  }

  export type ClassesUncheckedUpdateWithoutApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesUncheckedUpdateManyWithoutApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesCreateManySubjectInput = {
    id?: number
    schoolId: number
    createdByd: number
    registredById: number
    approvedById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type ClassesUpdateWithoutSubjectInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutClassSchoolNestedInput
    createdBy?: UsersUpdateOneRequiredWithoutClassCreatorNestedInput
    registredBy?: UsersUpdateOneRequiredWithoutClassRegistrarNestedInput
    approvedBy?: UsersUpdateOneRequiredWithoutClassApproverNestedInput
    profile?: ProfilesUpdateOneRequiredWithoutClassProfileNestedInput
  }

  export type ClassesUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersProfilesSchoolsCreateManySchoolInput = {
    userId: number
    profileId: number
    createdAt?: Date | string
    approvedAt?: Date | string | null
    approvedById?: number | null
  }

  export type ClassesCreateManySchoolInput = {
    id?: number
    subjectId: number
    createdByd: number
    registredById: number
    approvedById: number
    profileId: number
    createdAt?: Date | string
    finishedAt?: Date | string | null
    statededAt?: Date | string | null
    approvedAt?: Date | string | null
  }

  export type UsersProfilesSchoolsUpdateWithoutSchoolInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutUpsUserNestedInput
    profile?: ProfilesUpdateOneRequiredWithoutUpsProfileNestedInput
    approvedBy?: UsersUpdateOneWithoutApproverNestedInput
  }

  export type UsersProfilesSchoolsUncheckedUpdateWithoutSchoolInput = {
    userId?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersProfilesSchoolsUncheckedUpdateManyWithoutSchoolInput = {
    userId?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassesUpdateWithoutSchoolInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject?: SubjectsUpdateOneRequiredWithoutClassSubjectNestedInput
    createdBy?: UsersUpdateOneRequiredWithoutClassCreatorNestedInput
    registredBy?: UsersUpdateOneRequiredWithoutClassRegistrarNestedInput
    approvedBy?: UsersUpdateOneRequiredWithoutClassApproverNestedInput
    profile?: ProfilesUpdateOneRequiredWithoutClassProfileNestedInput
  }

  export type ClassesUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassesUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdByd?: IntFieldUpdateOperationsInput | number
    registredById?: IntFieldUpdateOperationsInput | number
    approvedById?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statededAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}