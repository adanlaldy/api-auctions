
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
 * Model Likes
 * 
 */
export type Likes = $Result.DefaultSelection<Prisma.$LikesPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>
/**
 * Model Conversations
 * 
 */
export type Conversations = $Result.DefaultSelection<Prisma.$ConversationsPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>
/**
 * Model Purchases
 * 
 */
export type Purchases = $Result.DefaultSelection<Prisma.$PurchasesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Auction
 * 
 */
export type Auction = $Result.DefaultSelection<Prisma.$AuctionPayload>
/**
 * Model Picture
 * 
 */
export type Picture = $Result.DefaultSelection<Prisma.$PicturePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Likes
 * const likes = await prisma.likes.findMany()
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
   * // Fetch zero or more Likes
   * const likes = await prisma.likes.findMany()
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
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.LikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **Conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.ConversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchases`: Exposes CRUD operations for the **Purchases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchases.findMany()
    * ```
    */
  get purchases(): Prisma.PurchasesDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auction`: Exposes CRUD operations for the **Auction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auctions
    * const auctions = await prisma.auction.findMany()
    * ```
    */
  get auction(): Prisma.AuctionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.picture`: Exposes CRUD operations for the **Picture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pictures
    * const pictures = await prisma.picture.findMany()
    * ```
    */
  get picture(): Prisma.PictureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Likes: 'Likes',
    Messages: 'Messages',
    Conversations: 'Conversations',
    Notifications: 'Notifications',
    Purchases: 'Purchases',
    Users: 'Users',
    File: 'File',
    Auction: 'Auction',
    Picture: 'Picture',
    Tag: 'Tag',
    State: 'State'
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
      modelProps: "likes" | "messages" | "conversations" | "notifications" | "purchases" | "users" | "file" | "auction" | "picture" | "tag" | "state"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Likes: {
        payload: Prisma.$LikesPayload<ExtArgs>
        fields: Prisma.LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findFirst: {
            args: Prisma.LikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findMany: {
            args: Prisma.LikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          create: {
            args: Prisma.LikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          createMany: {
            args: Prisma.LikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          delete: {
            args: Prisma.LikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          update: {
            args: Prisma.LikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          deleteMany: {
            args: Prisma.LikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          upsert: {
            args: Prisma.LikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.LikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      Conversations: {
        payload: Prisma.$ConversationsPayload<ExtArgs>
        fields: Prisma.ConversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          findFirst: {
            args: Prisma.ConversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          findMany: {
            args: Prisma.ConversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>[]
          }
          create: {
            args: Prisma.ConversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          createMany: {
            args: Prisma.ConversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>[]
          }
          delete: {
            args: Prisma.ConversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          update: {
            args: Prisma.ConversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          deleteMany: {
            args: Prisma.ConversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>[]
          }
          upsert: {
            args: Prisma.ConversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.ConversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      Purchases: {
        payload: Prisma.$PurchasesPayload<ExtArgs>
        fields: Prisma.PurchasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          findFirst: {
            args: Prisma.PurchasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          findMany: {
            args: Prisma.PurchasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>[]
          }
          create: {
            args: Prisma.PurchasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          createMany: {
            args: Prisma.PurchasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>[]
          }
          delete: {
            args: Prisma.PurchasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          update: {
            args: Prisma.PurchasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          deleteMany: {
            args: Prisma.PurchasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>[]
          }
          upsert: {
            args: Prisma.PurchasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          aggregate: {
            args: Prisma.PurchasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchases>
          }
          groupBy: {
            args: Prisma.PurchasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchasesCountArgs<ExtArgs>
            result: $Utils.Optional<PurchasesCountAggregateOutputType> | number
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
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Auction: {
        payload: Prisma.$AuctionPayload<ExtArgs>
        fields: Prisma.AuctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findFirst: {
            args: Prisma.AuctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findMany: {
            args: Prisma.AuctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          create: {
            args: Prisma.AuctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          createMany: {
            args: Prisma.AuctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuctionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          delete: {
            args: Prisma.AuctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          update: {
            args: Prisma.AuctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          deleteMany: {
            args: Prisma.AuctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuctionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          upsert: {
            args: Prisma.AuctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          aggregate: {
            args: Prisma.AuctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuction>
          }
          groupBy: {
            args: Prisma.AuctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuctionCountArgs<ExtArgs>
            result: $Utils.Optional<AuctionCountAggregateOutputType> | number
          }
        }
      }
      Picture: {
        payload: Prisma.$PicturePayload<ExtArgs>
        fields: Prisma.PictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PictureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PictureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findFirst: {
            args: Prisma.PictureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PictureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findMany: {
            args: Prisma.PictureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          create: {
            args: Prisma.PictureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          createMany: {
            args: Prisma.PictureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PictureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          delete: {
            args: Prisma.PictureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          update: {
            args: Prisma.PictureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          deleteMany: {
            args: Prisma.PictureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PictureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PictureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          upsert: {
            args: Prisma.PictureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          aggregate: {
            args: Prisma.PictureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePicture>
          }
          groupBy: {
            args: Prisma.PictureGroupByArgs<ExtArgs>
            result: $Utils.Optional<PictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PictureCountArgs<ExtArgs>
            result: $Utils.Optional<PictureCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>
            result: $Utils.Optional<StateCountAggregateOutputType> | number
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
    likes?: LikesOmit
    messages?: MessagesOmit
    conversations?: ConversationsOmit
    notifications?: NotificationsOmit
    purchases?: PurchasesOmit
    users?: UsersOmit
    file?: FileOmit
    auction?: AuctionOmit
    picture?: PictureOmit
    tag?: TagOmit
    state?: StateOmit
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
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    message: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | ConversationsCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes
  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    buyer: number
    seller: number
    user1: number
    user2: number
    likes: number
    notifications: number
    purchases: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UsersCountOutputTypeCountBuyerArgs
    seller?: boolean | UsersCountOutputTypeCountSellerArgs
    user1?: boolean | UsersCountOutputTypeCountUser1Args
    user2?: boolean | UsersCountOutputTypeCountUser2Args
    likes?: boolean | UsersCountOutputTypeCountLikesArgs
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
    purchases?: boolean | UsersCountOutputTypeCountPurchasesArgs
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
  export type UsersCountOutputTypeCountBuyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasesWhereInput
  }


  /**
   * Count Type FileCountOutputType
   */

  export type FileCountOutputType = {
    auctions: number
  }

  export type FileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auctions?: boolean | FileCountOutputTypeCountAuctionsArgs
  }

  // Custom InputTypes
  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: FileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountAuctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
  }


  /**
   * Count Type AuctionCountOutputType
   */

  export type AuctionCountOutputType = {
    likes: number
    notifications: number
    pictures: number
    purchases: number
  }

  export type AuctionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | AuctionCountOutputTypeCountLikesArgs
    notifications?: boolean | AuctionCountOutputTypeCountNotificationsArgs
    pictures?: boolean | AuctionCountOutputTypeCountPicturesArgs
    purchases?: boolean | AuctionCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionCountOutputType
     */
    select?: AuctionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
  }

  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasesWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    auctions: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auctions?: boolean | TagCountOutputTypeCountAuctionsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountAuctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
  }


  /**
   * Count Type StateCountOutputType
   */

  export type StateCountOutputType = {
    auctions: number
  }

  export type StateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auctions?: boolean | StateCountOutputTypeCountAuctionsArgs
  }

  // Custom InputTypes
  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountAuctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    auction_id: number | null
  }

  export type LikesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    auction_id: number | null
  }

  export type LikesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    auction_id: number | null
  }

  export type LikesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    auction_id: number | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    user_id: number
    auction_id: number
    _all: number
  }


  export type LikesAvgAggregateInputType = {
    id?: true
    user_id?: true
    auction_id?: true
  }

  export type LikesSumAggregateInputType = {
    id?: true
    user_id?: true
    auction_id?: true
  }

  export type LikesMinAggregateInputType = {
    id?: true
    user_id?: true
    auction_id?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    user_id?: true
    auction_id?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    user_id?: true
    auction_id?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to aggregate.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type LikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithAggregationInput | LikesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _avg?: LikesAvgAggregateInputType
    _sum?: LikesSumAggregateInputType
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: number
    user_id: number
    auction_id: number
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type LikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    auction_id?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    auction_id?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    auction_id?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectScalar = {
    id?: boolean
    user_id?: boolean
    auction_id?: boolean
  }

  export type LikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "auction_id", ExtArgs["result"]["likes"]>
  export type LikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $LikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Likes"
    objects: {
      auction: Prisma.$AuctionPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      auction_id: number
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type LikesGetPayload<S extends boolean | null | undefined | LikesDefaultArgs> = $Result.GetResult<Prisma.$LikesPayload, S>

  type LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface LikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Likes'], meta: { name: 'Likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikesFindUniqueArgs>(args: SelectSubset<T, LikesFindUniqueArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikesFindUniqueOrThrowArgs>(args: SelectSubset<T, LikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikesFindFirstArgs>(args?: SelectSubset<T, LikesFindFirstArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikesFindFirstOrThrowArgs>(args?: SelectSubset<T, LikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikesFindManyArgs>(args?: SelectSubset<T, LikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends LikesCreateArgs>(args: SelectSubset<T, LikesCreateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikesCreateManyArgs>(args?: SelectSubset<T, LikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikesCreateManyAndReturnArgs>(args?: SelectSubset<T, LikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends LikesDeleteArgs>(args: SelectSubset<T, LikesDeleteArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikesUpdateArgs>(args: SelectSubset<T, LikesUpdateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikesDeleteManyArgs>(args?: SelectSubset<T, LikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikesUpdateManyArgs>(args: SelectSubset<T, LikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikesUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikesUpdateManyAndReturnArgs>(args: SelectSubset<T, LikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends LikesUpsertArgs>(args: SelectSubset<T, LikesUpsertArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
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
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Likes model
   */
  readonly fields: LikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auction<T extends AuctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuctionDefaultArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Likes model
   */
  interface LikesFieldRefs {
    readonly id: FieldRef<"Likes", 'Int'>
    readonly user_id: FieldRef<"Likes", 'Int'>
    readonly auction_id: FieldRef<"Likes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findUniqueOrThrow
   */
  export type LikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findFirstOrThrow
   */
  export type LikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findMany
   */
  export type LikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes create
   */
  export type LikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Likes.
     */
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }

  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Likes createManyAndReturn
   */
  export type LikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes update
   */
  export type LikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Likes.
     */
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Likes updateManyAndReturn
   */
  export type LikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes upsert
   */
  export type LikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Likes to update in case it exists.
     */
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     */
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }

  /**
   * Likes delete
   */
  export type LikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter which Likes to delete.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Likes without action
   */
  export type LikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    conversation_id: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    conversation_id: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    message: string | null
    conversation_id: number | null
    created_at: Date | null
    is_read: boolean | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    message: string | null
    conversation_id: number | null
    created_at: Date | null
    is_read: boolean | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    message: number
    conversation_id: number
    created_at: number
    is_read: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    conversation_id?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    conversation_id?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    message?: true
    conversation_id?: true
    created_at?: true
    is_read?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    message?: true
    conversation_id?: true
    created_at?: true
    is_read?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    message?: true
    conversation_id?: true
    created_at?: true
    is_read?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    message: string
    conversation_id: number
    created_at: Date
    is_read: boolean
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    conversation_id?: boolean
    created_at?: boolean
    is_read?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    conversation_id?: boolean
    created_at?: boolean
    is_read?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    conversation_id?: boolean
    created_at?: boolean
    is_read?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectScalar = {
    id?: boolean
    message?: boolean
    conversation_id?: boolean
    created_at?: boolean
    is_read?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "conversation_id" | "created_at" | "is_read", ExtArgs["result"]["messages"]>
  export type MessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {
      conversation: Prisma.$ConversationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      conversation_id: number
      created_at: Date
      is_read: boolean
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
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
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationsDefaultArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly id: FieldRef<"Messages", 'Int'>
    readonly message: FieldRef<"Messages", 'String'>
    readonly conversation_id: FieldRef<"Messages", 'Int'>
    readonly created_at: FieldRef<"Messages", 'DateTime'>
    readonly is_read: FieldRef<"Messages", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages updateManyAndReturn
   */
  export type MessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
  }


  /**
   * Model Conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _avg: ConversationsAvgAggregateOutputType | null
    _sum: ConversationsSumAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsAvgAggregateOutputType = {
    id: number | null
    user1_id: number | null
    user2_id: number | null
  }

  export type ConversationsSumAggregateOutputType = {
    id: number | null
    user1_id: number | null
    user2_id: number | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: number | null
    last_message_at: Date | null
    created_at: Date | null
    user1_id: number | null
    user2_id: number | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: number | null
    last_message_at: Date | null
    created_at: Date | null
    user1_id: number | null
    user2_id: number | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    last_message_at: number
    created_at: number
    user1_id: number
    user2_id: number
    _all: number
  }


  export type ConversationsAvgAggregateInputType = {
    id?: true
    user1_id?: true
    user2_id?: true
  }

  export type ConversationsSumAggregateInputType = {
    id?: true
    user1_id?: true
    user2_id?: true
  }

  export type ConversationsMinAggregateInputType = {
    id?: true
    last_message_at?: true
    created_at?: true
    user1_id?: true
    user2_id?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    last_message_at?: true
    created_at?: true
    user1_id?: true
    user2_id?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    last_message_at?: true
    created_at?: true
    user1_id?: true
    user2_id?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to aggregate.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type ConversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithAggregationInput | ConversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: ConversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _avg?: ConversationsAvgAggregateInputType
    _sum?: ConversationsSumAggregateInputType
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    id: number
    last_message_at: Date | null
    created_at: Date
    user1_id: number
    user2_id: number
    _count: ConversationsCountAggregateOutputType | null
    _avg: ConversationsAvgAggregateOutputType | null
    _sum: ConversationsSumAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends ConversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type ConversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    last_message_at?: boolean
    created_at?: boolean
    user1_id?: boolean
    user2_id?: boolean
    user1?: boolean | UsersDefaultArgs<ExtArgs>
    user2?: boolean | UsersDefaultArgs<ExtArgs>
    message?: boolean | Conversations$messageArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type ConversationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    last_message_at?: boolean
    created_at?: boolean
    user1_id?: boolean
    user2_id?: boolean
    user1?: boolean | UsersDefaultArgs<ExtArgs>
    user2?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type ConversationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    last_message_at?: boolean
    created_at?: boolean
    user1_id?: boolean
    user2_id?: boolean
    user1?: boolean | UsersDefaultArgs<ExtArgs>
    user2?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type ConversationsSelectScalar = {
    id?: boolean
    last_message_at?: boolean
    created_at?: boolean
    user1_id?: boolean
    user2_id?: boolean
  }

  export type ConversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "last_message_at" | "created_at" | "user1_id" | "user2_id", ExtArgs["result"]["conversations"]>
  export type ConversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UsersDefaultArgs<ExtArgs>
    user2?: boolean | UsersDefaultArgs<ExtArgs>
    message?: boolean | Conversations$messageArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UsersDefaultArgs<ExtArgs>
    user2?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ConversationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UsersDefaultArgs<ExtArgs>
    user2?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ConversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversations"
    objects: {
      user1: Prisma.$UsersPayload<ExtArgs>
      user2: Prisma.$UsersPayload<ExtArgs>
      message: Prisma.$MessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      last_message_at: Date | null
      created_at: Date
      user1_id: number
      user2_id: number
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }

  type ConversationsGetPayload<S extends boolean | null | undefined | ConversationsDefaultArgs> = $Result.GetResult<Prisma.$ConversationsPayload, S>

  type ConversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface ConversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversations'], meta: { name: 'Conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {ConversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationsFindUniqueArgs>(args: SelectSubset<T, ConversationsFindUniqueArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationsFindFirstArgs>(args?: SelectSubset<T, ConversationsFindFirstArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationsFindManyArgs>(args?: SelectSubset<T, ConversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversations.
     * @param {ConversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
     */
    create<T extends ConversationsCreateArgs>(args: SelectSubset<T, ConversationsCreateArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationsCreateManyArgs>(args?: SelectSubset<T, ConversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationsCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationsCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversations.
     * @param {ConversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
     */
    delete<T extends ConversationsDeleteArgs>(args: SelectSubset<T, ConversationsDeleteArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversations.
     * @param {ConversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationsUpdateArgs>(args: SelectSubset<T, ConversationsUpdateArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationsDeleteManyArgs>(args?: SelectSubset<T, ConversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationsUpdateManyArgs>(args: SelectSubset<T, ConversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationsUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversationsUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversations.
     * @param {ConversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends ConversationsUpsertArgs>(args: SelectSubset<T, ConversationsUpsertArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationsCountArgs>(
      args?: Subset<T, ConversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsGroupByArgs} args - Group by arguments.
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
      T extends ConversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationsGroupByArgs['orderBy'] }
        : { orderBy?: ConversationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversations model
   */
  readonly fields: ConversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    message<T extends Conversations$messageArgs<ExtArgs> = {}>(args?: Subset<T, Conversations$messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversations model
   */
  interface ConversationsFieldRefs {
    readonly id: FieldRef<"Conversations", 'Int'>
    readonly last_message_at: FieldRef<"Conversations", 'DateTime'>
    readonly created_at: FieldRef<"Conversations", 'DateTime'>
    readonly user1_id: FieldRef<"Conversations", 'Int'>
    readonly user2_id: FieldRef<"Conversations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Conversations findUnique
   */
  export type ConversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations findUniqueOrThrow
   */
  export type ConversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations findFirst
   */
  export type ConversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations findFirstOrThrow
   */
  export type ConversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations findMany
   */
  export type ConversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations create
   */
  export type ConversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversations.
     */
    data: XOR<ConversationsCreateInput, ConversationsUncheckedCreateInput>
  }

  /**
   * Conversations createMany
   */
  export type ConversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationsCreateManyInput | ConversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversations createManyAndReturn
   */
  export type ConversationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationsCreateManyInput | ConversationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversations update
   */
  export type ConversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversations.
     */
    data: XOR<ConversationsUpdateInput, ConversationsUncheckedUpdateInput>
    /**
     * Choose, which Conversations to update.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations updateMany
   */
  export type ConversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationsWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversations updateManyAndReturn
   */
  export type ConversationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationsWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversations upsert
   */
  export type ConversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversations to update in case it exists.
     */
    where: ConversationsWhereUniqueInput
    /**
     * In case the Conversations found by the `where` argument doesn't exist, create a new Conversations with this data.
     */
    create: XOR<ConversationsCreateInput, ConversationsUncheckedCreateInput>
    /**
     * In case the Conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationsUpdateInput, ConversationsUncheckedUpdateInput>
  }

  /**
   * Conversations delete
   */
  export type ConversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter which Conversations to delete.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations deleteMany
   */
  export type ConversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationsWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversations.message
   */
  export type Conversations$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Conversations without action
   */
  export type ConversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    auction_id: number | null
    message_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    auction_id: number | null
    message_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    content: string | null
    is_read: boolean | null
    created_at: Date | null
    user_id: number | null
    auction_id: number | null
    message_id: number | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    is_read: boolean | null
    created_at: Date | null
    user_id: number | null
    auction_id: number | null
    message_id: number | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    content: number
    is_read: number
    created_at: number
    user_id: number
    auction_id: number
    message_id: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    user_id?: true
    auction_id?: true
    message_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    user_id?: true
    auction_id?: true
    message_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    content?: true
    is_read?: true
    created_at?: true
    user_id?: true
    auction_id?: true
    message_id?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    content?: true
    is_read?: true
    created_at?: true
    user_id?: true
    auction_id?: true
    message_id?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    content?: true
    is_read?: true
    created_at?: true
    user_id?: true
    auction_id?: true
    message_id?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    content: string
    is_read: boolean
    created_at: Date
    user_id: number
    auction_id: number
    message_id: number | null
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    is_read?: boolean
    created_at?: boolean
    user_id?: boolean
    auction_id?: boolean
    message_id?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    is_read?: boolean
    created_at?: boolean
    user_id?: boolean
    auction_id?: boolean
    message_id?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    is_read?: boolean
    created_at?: boolean
    user_id?: boolean
    auction_id?: boolean
    message_id?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectScalar = {
    id?: boolean
    content?: boolean
    is_read?: boolean
    created_at?: boolean
    user_id?: boolean
    auction_id?: boolean
    message_id?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "is_read" | "created_at" | "user_id" | "auction_id" | "message_id", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      auction: Prisma.$AuctionPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      is_read: boolean
      created_at: Date
      user_id: number
      auction_id: number
      message_id: number | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
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
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auction<T extends AuctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuctionDefaultArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly id: FieldRef<"Notifications", 'Int'>
    readonly content: FieldRef<"Notifications", 'String'>
    readonly is_read: FieldRef<"Notifications", 'Boolean'>
    readonly created_at: FieldRef<"Notifications", 'DateTime'>
    readonly user_id: FieldRef<"Notifications", 'Int'>
    readonly auction_id: FieldRef<"Notifications", 'Int'>
    readonly message_id: FieldRef<"Notifications", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications createManyAndReturn
   */
  export type NotificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications updateManyAndReturn
   */
  export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Model Purchases
   */

  export type AggregatePurchases = {
    _count: PurchasesCountAggregateOutputType | null
    _avg: PurchasesAvgAggregateOutputType | null
    _sum: PurchasesSumAggregateOutputType | null
    _min: PurchasesMinAggregateOutputType | null
    _max: PurchasesMaxAggregateOutputType | null
  }

  export type PurchasesAvgAggregateOutputType = {
    id: number | null
    final_price: number | null
    auction_id: number | null
    user_id: number | null
  }

  export type PurchasesSumAggregateOutputType = {
    id: number | null
    final_price: number | null
    auction_id: number | null
    user_id: number | null
  }

  export type PurchasesMinAggregateOutputType = {
    id: number | null
    purchase_date: Date | null
    final_price: number | null
    auction_id: number | null
    user_id: number | null
  }

  export type PurchasesMaxAggregateOutputType = {
    id: number | null
    purchase_date: Date | null
    final_price: number | null
    auction_id: number | null
    user_id: number | null
  }

  export type PurchasesCountAggregateOutputType = {
    id: number
    purchase_date: number
    final_price: number
    auction_id: number
    user_id: number
    _all: number
  }


  export type PurchasesAvgAggregateInputType = {
    id?: true
    final_price?: true
    auction_id?: true
    user_id?: true
  }

  export type PurchasesSumAggregateInputType = {
    id?: true
    final_price?: true
    auction_id?: true
    user_id?: true
  }

  export type PurchasesMinAggregateInputType = {
    id?: true
    purchase_date?: true
    final_price?: true
    auction_id?: true
    user_id?: true
  }

  export type PurchasesMaxAggregateInputType = {
    id?: true
    purchase_date?: true
    final_price?: true
    auction_id?: true
    user_id?: true
  }

  export type PurchasesCountAggregateInputType = {
    id?: true
    purchase_date?: true
    final_price?: true
    auction_id?: true
    user_id?: true
    _all?: true
  }

  export type PurchasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to aggregate.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchasesMaxAggregateInputType
  }

  export type GetPurchasesAggregateType<T extends PurchasesAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchases[P]>
      : GetScalarType<T[P], AggregatePurchases[P]>
  }




  export type PurchasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasesWhereInput
    orderBy?: PurchasesOrderByWithAggregationInput | PurchasesOrderByWithAggregationInput[]
    by: PurchasesScalarFieldEnum[] | PurchasesScalarFieldEnum
    having?: PurchasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchasesCountAggregateInputType | true
    _avg?: PurchasesAvgAggregateInputType
    _sum?: PurchasesSumAggregateInputType
    _min?: PurchasesMinAggregateInputType
    _max?: PurchasesMaxAggregateInputType
  }

  export type PurchasesGroupByOutputType = {
    id: number
    purchase_date: Date
    final_price: number
    auction_id: number
    user_id: number
    _count: PurchasesCountAggregateOutputType | null
    _avg: PurchasesAvgAggregateOutputType | null
    _sum: PurchasesSumAggregateOutputType | null
    _min: PurchasesMinAggregateOutputType | null
    _max: PurchasesMaxAggregateOutputType | null
  }

  type GetPurchasesGroupByPayload<T extends PurchasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchasesGroupByOutputType[P]>
            : GetScalarType<T[P], PurchasesGroupByOutputType[P]>
        }
      >
    >


  export type PurchasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchase_date?: boolean
    final_price?: boolean
    auction_id?: boolean
    user_id?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type PurchasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchase_date?: boolean
    final_price?: boolean
    auction_id?: boolean
    user_id?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type PurchasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchase_date?: boolean
    final_price?: boolean
    auction_id?: boolean
    user_id?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type PurchasesSelectScalar = {
    id?: boolean
    purchase_date?: boolean
    final_price?: boolean
    auction_id?: boolean
    user_id?: boolean
  }

  export type PurchasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purchase_date" | "final_price" | "auction_id" | "user_id", ExtArgs["result"]["purchases"]>
  export type PurchasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PurchasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PurchasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PurchasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchases"
    objects: {
      auction: Prisma.$AuctionPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      purchase_date: Date
      final_price: number
      auction_id: number
      user_id: number
    }, ExtArgs["result"]["purchases"]>
    composites: {}
  }

  type PurchasesGetPayload<S extends boolean | null | undefined | PurchasesDefaultArgs> = $Result.GetResult<Prisma.$PurchasesPayload, S>

  type PurchasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchasesCountAggregateInputType | true
    }

  export interface PurchasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchases'], meta: { name: 'Purchases' } }
    /**
     * Find zero or one Purchases that matches the filter.
     * @param {PurchasesFindUniqueArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchasesFindUniqueArgs>(args: SelectSubset<T, PurchasesFindUniqueArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchasesFindUniqueOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchasesFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindFirstArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchasesFindFirstArgs>(args?: SelectSubset<T, PurchasesFindFirstArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindFirstOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchasesFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchases.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchases.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchasesWithIdOnly = await prisma.purchases.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchasesFindManyArgs>(args?: SelectSubset<T, PurchasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchases.
     * @param {PurchasesCreateArgs} args - Arguments to create a Purchases.
     * @example
     * // Create one Purchases
     * const Purchases = await prisma.purchases.create({
     *   data: {
     *     // ... data to create a Purchases
     *   }
     * })
     * 
     */
    create<T extends PurchasesCreateArgs>(args: SelectSubset<T, PurchasesCreateArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchasesCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchasesCreateManyArgs>(args?: SelectSubset<T, PurchasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchasesCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchasesWithIdOnly = await prisma.purchases.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchasesCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchases.
     * @param {PurchasesDeleteArgs} args - Arguments to delete one Purchases.
     * @example
     * // Delete one Purchases
     * const Purchases = await prisma.purchases.delete({
     *   where: {
     *     // ... filter to delete one Purchases
     *   }
     * })
     * 
     */
    delete<T extends PurchasesDeleteArgs>(args: SelectSubset<T, PurchasesDeleteArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchases.
     * @param {PurchasesUpdateArgs} args - Arguments to update one Purchases.
     * @example
     * // Update one Purchases
     * const purchases = await prisma.purchases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchasesUpdateArgs>(args: SelectSubset<T, PurchasesUpdateArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchasesDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchasesDeleteManyArgs>(args?: SelectSubset<T, PurchasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchasesUpdateManyArgs>(args: SelectSubset<T, PurchasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchasesUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchasesWithIdOnly = await prisma.purchases.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchasesUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchases.
     * @param {PurchasesUpsertArgs} args - Arguments to update or create a Purchases.
     * @example
     * // Update or create a Purchases
     * const purchases = await prisma.purchases.upsert({
     *   create: {
     *     // ... data to create a Purchases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchases we want to update
     *   }
     * })
     */
    upsert<T extends PurchasesUpsertArgs>(args: SelectSubset<T, PurchasesUpsertArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchases.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchasesCountArgs>(
      args?: Subset<T, PurchasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchasesAggregateArgs>(args: Subset<T, PurchasesAggregateArgs>): Prisma.PrismaPromise<GetPurchasesAggregateType<T>>

    /**
     * Group by Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesGroupByArgs} args - Group by arguments.
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
      T extends PurchasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchasesGroupByArgs['orderBy'] }
        : { orderBy?: PurchasesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchases model
   */
  readonly fields: PurchasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auction<T extends AuctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuctionDefaultArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Purchases model
   */
  interface PurchasesFieldRefs {
    readonly id: FieldRef<"Purchases", 'Int'>
    readonly purchase_date: FieldRef<"Purchases", 'DateTime'>
    readonly final_price: FieldRef<"Purchases", 'Float'>
    readonly auction_id: FieldRef<"Purchases", 'Int'>
    readonly user_id: FieldRef<"Purchases", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Purchases findUnique
   */
  export type PurchasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases findUniqueOrThrow
   */
  export type PurchasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases findFirst
   */
  export type PurchasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * Purchases findFirstOrThrow
   */
  export type PurchasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * Purchases findMany
   */
  export type PurchasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * Purchases create
   */
  export type PurchasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchases.
     */
    data: XOR<PurchasesCreateInput, PurchasesUncheckedCreateInput>
  }

  /**
   * Purchases createMany
   */
  export type PurchasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchasesCreateManyInput | PurchasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchases createManyAndReturn
   */
  export type PurchasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchasesCreateManyInput | PurchasesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchases update
   */
  export type PurchasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchases.
     */
    data: XOR<PurchasesUpdateInput, PurchasesUncheckedUpdateInput>
    /**
     * Choose, which Purchases to update.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases updateMany
   */
  export type PurchasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchasesUpdateManyMutationInput, PurchasesUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchasesWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchases updateManyAndReturn
   */
  export type PurchasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchasesUpdateManyMutationInput, PurchasesUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchasesWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchases upsert
   */
  export type PurchasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchases to update in case it exists.
     */
    where: PurchasesWhereUniqueInput
    /**
     * In case the Purchases found by the `where` argument doesn't exist, create a new Purchases with this data.
     */
    create: XOR<PurchasesCreateInput, PurchasesUncheckedCreateInput>
    /**
     * In case the Purchases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchasesUpdateInput, PurchasesUncheckedUpdateInput>
  }

  /**
   * Purchases delete
   */
  export type PurchasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter which Purchases to delete.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases deleteMany
   */
  export type PurchasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchasesWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchases without action
   */
  export type PurchasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
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
    balance: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    balance: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    birth_date: Date | null
    email: string | null
    password: string | null
    picture: string | null
    balance: number | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    birth_date: Date | null
    email: string | null
    password: string | null
    picture: string | null
    balance: number | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    birth_date: number
    email: number
    password: number
    picture: number
    balance: number
    role: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    balance?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    balance?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    email?: true
    password?: true
    picture?: true
    balance?: true
    role?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    email?: true
    password?: true
    picture?: true
    balance?: true
    role?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    email?: true
    password?: true
    picture?: true
    balance?: true
    role?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
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
    first_name: string
    last_name: string
    birth_date: Date
    email: string
    password: string
    picture: string | null
    balance: number
    role: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
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
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    balance?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    buyer?: boolean | Users$buyerArgs<ExtArgs>
    seller?: boolean | Users$sellerArgs<ExtArgs>
    user1?: boolean | Users$user1Args<ExtArgs>
    user2?: boolean | Users$user2Args<ExtArgs>
    likes?: boolean | Users$likesArgs<ExtArgs>
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    purchases?: boolean | Users$purchasesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    balance?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    balance?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    balance?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "birth_date" | "email" | "password" | "picture" | "balance" | "role" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | Users$buyerArgs<ExtArgs>
    seller?: boolean | Users$sellerArgs<ExtArgs>
    user1?: boolean | Users$user1Args<ExtArgs>
    user2?: boolean | Users$user2Args<ExtArgs>
    likes?: boolean | Users$likesArgs<ExtArgs>
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    purchases?: boolean | Users$purchasesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      buyer: Prisma.$AuctionPayload<ExtArgs>[]
      seller: Prisma.$AuctionPayload<ExtArgs>[]
      user1: Prisma.$ConversationsPayload<ExtArgs>[]
      user2: Prisma.$ConversationsPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      purchases: Prisma.$PurchasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      birth_date: Date
      email: string
      password: string
      picture: string | null
      balance: number
      role: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
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
    buyer<T extends Users$buyerArgs<ExtArgs> = {}>(args?: Subset<T, Users$buyerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seller<T extends Users$sellerArgs<ExtArgs> = {}>(args?: Subset<T, Users$sellerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user1<T extends Users$user1Args<ExtArgs> = {}>(args?: Subset<T, Users$user1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user2<T extends Users$user2Args<ExtArgs> = {}>(args?: Subset<T, Users$user2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Users$likesArgs<ExtArgs> = {}>(args?: Subset<T, Users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends Users$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Users$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly first_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly birth_date: FieldRef<"Users", 'DateTime'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly picture: FieldRef<"Users", 'String'>
    readonly balance: FieldRef<"Users", 'Float'>
    readonly role: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
    readonly deleted_at: FieldRef<"Users", 'DateTime'>
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
   * Users.buyer
   */
  export type Users$buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    cursor?: AuctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Users.seller
   */
  export type Users$sellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    cursor?: AuctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Users.user1
   */
  export type Users$user1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    cursor?: ConversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Users.user2
   */
  export type Users$user2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    cursor?: ConversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Users.likes
   */
  export type Users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Users.notifications
   */
  export type Users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Users.purchases
   */
  export type Users$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    where?: PurchasesWhereInput
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    cursor?: PurchasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
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
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    content: string | null
    contentType: string | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    content: string | null
    contentType: string | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    content: number
    contentType: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    content?: true
    contentType?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    content?: true
    contentType?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    content?: true
    contentType?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    content: string
    contentType: string
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    contentType?: boolean
    auctions?: boolean | File$auctionsArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    contentType?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    contentType?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    content?: boolean
    contentType?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "contentType", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auctions?: boolean | File$auctionsArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      auctions: Prisma.$AuctionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      contentType: string
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auctions<T extends File$auctionsArgs<ExtArgs> = {}>(args?: Subset<T, File$auctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly content: FieldRef<"File", 'String'>
    readonly contentType: FieldRef<"File", 'String'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File.auctions
   */
  export type File$auctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    cursor?: AuctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Auction
   */

  export type AggregateAuction = {
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  export type AuctionAvgAggregateOutputType = {
    id: number | null
    fileId: number | null
    initialPrice: number | null
    actualBidPrice: number | null
    tagId: number | null
    sellerId: number | null
    buyerId: number | null
    stateId: number | null
  }

  export type AuctionSumAggregateOutputType = {
    id: number | null
    fileId: number | null
    initialPrice: number | null
    actualBidPrice: number | null
    tagId: number | null
    sellerId: number | null
    buyerId: number | null
    stateId: number | null
  }

  export type AuctionMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    fileId: number | null
    initialPrice: number | null
    actualBidPrice: number | null
    startBidDate: Date | null
    endBidDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    tagId: number | null
    sellerId: number | null
    buyerId: number | null
    stateId: number | null
  }

  export type AuctionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    fileId: number | null
    initialPrice: number | null
    actualBidPrice: number | null
    startBidDate: Date | null
    endBidDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    tagId: number | null
    sellerId: number | null
    buyerId: number | null
    stateId: number | null
  }

  export type AuctionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: number
    endBidDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    tagId: number
    sellerId: number
    buyerId: number
    stateId: number
    _all: number
  }


  export type AuctionAvgAggregateInputType = {
    id?: true
    fileId?: true
    initialPrice?: true
    actualBidPrice?: true
    tagId?: true
    sellerId?: true
    buyerId?: true
    stateId?: true
  }

  export type AuctionSumAggregateInputType = {
    id?: true
    fileId?: true
    initialPrice?: true
    actualBidPrice?: true
    tagId?: true
    sellerId?: true
    buyerId?: true
    stateId?: true
  }

  export type AuctionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileId?: true
    initialPrice?: true
    actualBidPrice?: true
    startBidDate?: true
    endBidDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    tagId?: true
    sellerId?: true
    buyerId?: true
    stateId?: true
  }

  export type AuctionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileId?: true
    initialPrice?: true
    actualBidPrice?: true
    startBidDate?: true
    endBidDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    tagId?: true
    sellerId?: true
    buyerId?: true
    stateId?: true
  }

  export type AuctionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileId?: true
    initialPrice?: true
    actualBidPrice?: true
    startBidDate?: true
    endBidDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    tagId?: true
    sellerId?: true
    buyerId?: true
    stateId?: true
    _all?: true
  }

  export type AuctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auction to aggregate.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auctions
    **/
    _count?: true | AuctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuctionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuctionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuctionMaxAggregateInputType
  }

  export type GetAuctionAggregateType<T extends AuctionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuction[P]>
      : GetScalarType<T[P], AggregateAuction[P]>
  }




  export type AuctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithAggregationInput | AuctionOrderByWithAggregationInput[]
    by: AuctionScalarFieldEnum[] | AuctionScalarFieldEnum
    having?: AuctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuctionCountAggregateInputType | true
    _avg?: AuctionAvgAggregateInputType
    _sum?: AuctionSumAggregateInputType
    _min?: AuctionMinAggregateInputType
    _max?: AuctionMaxAggregateInputType
  }

  export type AuctionGroupByOutputType = {
    id: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date
    endBidDate: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    tagId: number
    sellerId: number
    buyerId: number | null
    stateId: number
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  type GetAuctionGroupByPayload<T extends AuctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuctionGroupByOutputType[P]>
            : GetScalarType<T[P], AuctionGroupByOutputType[P]>
        }
      >
    >


  export type AuctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    fileId?: boolean
    initialPrice?: boolean
    actualBidPrice?: boolean
    startBidDate?: boolean
    endBidDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    tagId?: boolean
    sellerId?: boolean
    buyerId?: boolean
    stateId?: boolean
    buyer?: boolean | Auction$buyerArgs<ExtArgs>
    file?: boolean | FileDefaultArgs<ExtArgs>
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    likes?: boolean | Auction$likesArgs<ExtArgs>
    notifications?: boolean | Auction$notificationsArgs<ExtArgs>
    pictures?: boolean | Auction$picturesArgs<ExtArgs>
    purchases?: boolean | Auction$purchasesArgs<ExtArgs>
    _count?: boolean | AuctionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    fileId?: boolean
    initialPrice?: boolean
    actualBidPrice?: boolean
    startBidDate?: boolean
    endBidDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    tagId?: boolean
    sellerId?: boolean
    buyerId?: boolean
    stateId?: boolean
    buyer?: boolean | Auction$buyerArgs<ExtArgs>
    file?: boolean | FileDefaultArgs<ExtArgs>
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    fileId?: boolean
    initialPrice?: boolean
    actualBidPrice?: boolean
    startBidDate?: boolean
    endBidDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    tagId?: boolean
    sellerId?: boolean
    buyerId?: boolean
    stateId?: boolean
    buyer?: boolean | Auction$buyerArgs<ExtArgs>
    file?: boolean | FileDefaultArgs<ExtArgs>
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    fileId?: boolean
    initialPrice?: boolean
    actualBidPrice?: boolean
    startBidDate?: boolean
    endBidDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    tagId?: boolean
    sellerId?: boolean
    buyerId?: boolean
    stateId?: boolean
  }

  export type AuctionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "fileId" | "initialPrice" | "actualBidPrice" | "startBidDate" | "endBidDate" | "createdAt" | "updatedAt" | "deletedAt" | "tagId" | "sellerId" | "buyerId" | "stateId", ExtArgs["result"]["auction"]>
  export type AuctionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | Auction$buyerArgs<ExtArgs>
    file?: boolean | FileDefaultArgs<ExtArgs>
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    likes?: boolean | Auction$likesArgs<ExtArgs>
    notifications?: boolean | Auction$notificationsArgs<ExtArgs>
    pictures?: boolean | Auction$picturesArgs<ExtArgs>
    purchases?: boolean | Auction$purchasesArgs<ExtArgs>
    _count?: boolean | AuctionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuctionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | Auction$buyerArgs<ExtArgs>
    file?: boolean | FileDefaultArgs<ExtArgs>
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type AuctionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | Auction$buyerArgs<ExtArgs>
    file?: boolean | FileDefaultArgs<ExtArgs>
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $AuctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auction"
    objects: {
      buyer: Prisma.$UsersPayload<ExtArgs> | null
      file: Prisma.$FilePayload<ExtArgs>
      seller: Prisma.$UsersPayload<ExtArgs>
      state: Prisma.$StatePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
      likes: Prisma.$LikesPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      pictures: Prisma.$PicturePayload<ExtArgs>[]
      purchases: Prisma.$PurchasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      fileId: number
      initialPrice: number
      actualBidPrice: number
      startBidDate: Date
      endBidDate: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      tagId: number
      sellerId: number
      buyerId: number | null
      stateId: number
    }, ExtArgs["result"]["auction"]>
    composites: {}
  }

  type AuctionGetPayload<S extends boolean | null | undefined | AuctionDefaultArgs> = $Result.GetResult<Prisma.$AuctionPayload, S>

  type AuctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuctionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuctionCountAggregateInputType | true
    }

  export interface AuctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auction'], meta: { name: 'Auction' } }
    /**
     * Find zero or one Auction that matches the filter.
     * @param {AuctionFindUniqueArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuctionFindUniqueArgs>(args: SelectSubset<T, AuctionFindUniqueArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuctionFindUniqueOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuctionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuctionFindFirstArgs>(args?: SelectSubset<T, AuctionFindFirstArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuctionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auctions
     * const auctions = await prisma.auction.findMany()
     * 
     * // Get first 10 Auctions
     * const auctions = await prisma.auction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auctionWithIdOnly = await prisma.auction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuctionFindManyArgs>(args?: SelectSubset<T, AuctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auction.
     * @param {AuctionCreateArgs} args - Arguments to create a Auction.
     * @example
     * // Create one Auction
     * const Auction = await prisma.auction.create({
     *   data: {
     *     // ... data to create a Auction
     *   }
     * })
     * 
     */
    create<T extends AuctionCreateArgs>(args: SelectSubset<T, AuctionCreateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auctions.
     * @param {AuctionCreateManyArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuctionCreateManyArgs>(args?: SelectSubset<T, AuctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auctions and returns the data saved in the database.
     * @param {AuctionCreateManyAndReturnArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auctions and only return the `id`
     * const auctionWithIdOnly = await prisma.auction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuctionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auction.
     * @param {AuctionDeleteArgs} args - Arguments to delete one Auction.
     * @example
     * // Delete one Auction
     * const Auction = await prisma.auction.delete({
     *   where: {
     *     // ... filter to delete one Auction
     *   }
     * })
     * 
     */
    delete<T extends AuctionDeleteArgs>(args: SelectSubset<T, AuctionDeleteArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auction.
     * @param {AuctionUpdateArgs} args - Arguments to update one Auction.
     * @example
     * // Update one Auction
     * const auction = await prisma.auction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuctionUpdateArgs>(args: SelectSubset<T, AuctionUpdateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auctions.
     * @param {AuctionDeleteManyArgs} args - Arguments to filter Auctions to delete.
     * @example
     * // Delete a few Auctions
     * const { count } = await prisma.auction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuctionDeleteManyArgs>(args?: SelectSubset<T, AuctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auctions
     * const auction = await prisma.auction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuctionUpdateManyArgs>(args: SelectSubset<T, AuctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctions and returns the data updated in the database.
     * @param {AuctionUpdateManyAndReturnArgs} args - Arguments to update many Auctions.
     * @example
     * // Update many Auctions
     * const auction = await prisma.auction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auctions and only return the `id`
     * const auctionWithIdOnly = await prisma.auction.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuctionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuctionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auction.
     * @param {AuctionUpsertArgs} args - Arguments to update or create a Auction.
     * @example
     * // Update or create a Auction
     * const auction = await prisma.auction.upsert({
     *   create: {
     *     // ... data to create a Auction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auction we want to update
     *   }
     * })
     */
    upsert<T extends AuctionUpsertArgs>(args: SelectSubset<T, AuctionUpsertArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionCountArgs} args - Arguments to filter Auctions to count.
     * @example
     * // Count the number of Auctions
     * const count = await prisma.auction.count({
     *   where: {
     *     // ... the filter for the Auctions we want to count
     *   }
     * })
    **/
    count<T extends AuctionCountArgs>(
      args?: Subset<T, AuctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuctionAggregateArgs>(args: Subset<T, AuctionAggregateArgs>): Prisma.PrismaPromise<GetAuctionAggregateType<T>>

    /**
     * Group by Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionGroupByArgs} args - Group by arguments.
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
      T extends AuctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuctionGroupByArgs['orderBy'] }
        : { orderBy?: AuctionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auction model
   */
  readonly fields: AuctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends Auction$buyerArgs<ExtArgs> = {}>(args?: Subset<T, Auction$buyerArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    file<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    state<T extends StateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateDefaultArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends Auction$likesArgs<ExtArgs> = {}>(args?: Subset<T, Auction$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Auction$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Auction$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pictures<T extends Auction$picturesArgs<ExtArgs> = {}>(args?: Subset<T, Auction$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends Auction$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Auction$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Auction model
   */
  interface AuctionFieldRefs {
    readonly id: FieldRef<"Auction", 'Int'>
    readonly title: FieldRef<"Auction", 'String'>
    readonly description: FieldRef<"Auction", 'String'>
    readonly fileId: FieldRef<"Auction", 'Int'>
    readonly initialPrice: FieldRef<"Auction", 'Float'>
    readonly actualBidPrice: FieldRef<"Auction", 'Float'>
    readonly startBidDate: FieldRef<"Auction", 'DateTime'>
    readonly endBidDate: FieldRef<"Auction", 'DateTime'>
    readonly createdAt: FieldRef<"Auction", 'DateTime'>
    readonly updatedAt: FieldRef<"Auction", 'DateTime'>
    readonly deletedAt: FieldRef<"Auction", 'DateTime'>
    readonly tagId: FieldRef<"Auction", 'Int'>
    readonly sellerId: FieldRef<"Auction", 'Int'>
    readonly buyerId: FieldRef<"Auction", 'Int'>
    readonly stateId: FieldRef<"Auction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Auction findUnique
   */
  export type AuctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findUniqueOrThrow
   */
  export type AuctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findFirst
   */
  export type AuctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findFirstOrThrow
   */
  export type AuctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findMany
   */
  export type AuctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auctions to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction create
   */
  export type AuctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to create a Auction.
     */
    data: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
  }

  /**
   * Auction createMany
   */
  export type AuctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auctions.
     */
    data: AuctionCreateManyInput | AuctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auction createManyAndReturn
   */
  export type AuctionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * The data used to create many Auctions.
     */
    data: AuctionCreateManyInput | AuctionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auction update
   */
  export type AuctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to update a Auction.
     */
    data: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
    /**
     * Choose, which Auction to update.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction updateMany
   */
  export type AuctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auctions.
     */
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyInput>
    /**
     * Filter which Auctions to update
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to update.
     */
    limit?: number
  }

  /**
   * Auction updateManyAndReturn
   */
  export type AuctionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * The data used to update Auctions.
     */
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyInput>
    /**
     * Filter which Auctions to update
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auction upsert
   */
  export type AuctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The filter to search for the Auction to update in case it exists.
     */
    where: AuctionWhereUniqueInput
    /**
     * In case the Auction found by the `where` argument doesn't exist, create a new Auction with this data.
     */
    create: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
    /**
     * In case the Auction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
  }

  /**
   * Auction delete
   */
  export type AuctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter which Auction to delete.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction deleteMany
   */
  export type AuctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auctions to delete
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to delete.
     */
    limit?: number
  }

  /**
   * Auction.buyer
   */
  export type Auction$buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Auction.likes
   */
  export type Auction$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Auction.notifications
   */
  export type Auction$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Auction.pictures
   */
  export type Auction$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    cursor?: PictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Auction.purchases
   */
  export type Auction$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    where?: PurchasesWhereInput
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    cursor?: PurchasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * Auction without action
   */
  export type AuctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
  }


  /**
   * Model Picture
   */

  export type AggregatePicture = {
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  export type PictureAvgAggregateOutputType = {
    id: number | null
    auctionId: number | null
  }

  export type PictureSumAggregateOutputType = {
    id: number | null
    auctionId: number | null
  }

  export type PictureMinAggregateOutputType = {
    id: number | null
    path: string | null
    auctionId: number | null
  }

  export type PictureMaxAggregateOutputType = {
    id: number | null
    path: string | null
    auctionId: number | null
  }

  export type PictureCountAggregateOutputType = {
    id: number
    path: number
    auctionId: number
    _all: number
  }


  export type PictureAvgAggregateInputType = {
    id?: true
    auctionId?: true
  }

  export type PictureSumAggregateInputType = {
    id?: true
    auctionId?: true
  }

  export type PictureMinAggregateInputType = {
    id?: true
    path?: true
    auctionId?: true
  }

  export type PictureMaxAggregateInputType = {
    id?: true
    path?: true
    auctionId?: true
  }

  export type PictureCountAggregateInputType = {
    id?: true
    path?: true
    auctionId?: true
    _all?: true
  }

  export type PictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Picture to aggregate.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pictures
    **/
    _count?: true | PictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PictureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PictureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PictureMaxAggregateInputType
  }

  export type GetPictureAggregateType<T extends PictureAggregateArgs> = {
        [P in keyof T & keyof AggregatePicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicture[P]>
      : GetScalarType<T[P], AggregatePicture[P]>
  }




  export type PictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithAggregationInput | PictureOrderByWithAggregationInput[]
    by: PictureScalarFieldEnum[] | PictureScalarFieldEnum
    having?: PictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PictureCountAggregateInputType | true
    _avg?: PictureAvgAggregateInputType
    _sum?: PictureSumAggregateInputType
    _min?: PictureMinAggregateInputType
    _max?: PictureMaxAggregateInputType
  }

  export type PictureGroupByOutputType = {
    id: number
    path: string
    auctionId: number
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  type GetPictureGroupByPayload<T extends PictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PictureGroupByOutputType[P]>
            : GetScalarType<T[P], PictureGroupByOutputType[P]>
        }
      >
    >


  export type PictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    auctionId?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    auctionId?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    auctionId?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectScalar = {
    id?: boolean
    path?: boolean
    auctionId?: boolean
  }

  export type PictureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "auctionId", ExtArgs["result"]["picture"]>
  export type PictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }
  export type PictureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }
  export type PictureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }

  export type $PicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Picture"
    objects: {
      auction: Prisma.$AuctionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      path: string
      auctionId: number
    }, ExtArgs["result"]["picture"]>
    composites: {}
  }

  type PictureGetPayload<S extends boolean | null | undefined | PictureDefaultArgs> = $Result.GetResult<Prisma.$PicturePayload, S>

  type PictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PictureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PictureCountAggregateInputType | true
    }

  export interface PictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Picture'], meta: { name: 'Picture' } }
    /**
     * Find zero or one Picture that matches the filter.
     * @param {PictureFindUniqueArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PictureFindUniqueArgs>(args: SelectSubset<T, PictureFindUniqueArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Picture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PictureFindUniqueOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PictureFindUniqueOrThrowArgs>(args: SelectSubset<T, PictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PictureFindFirstArgs>(args?: SelectSubset<T, PictureFindFirstArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PictureFindFirstOrThrowArgs>(args?: SelectSubset<T, PictureFindFirstOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pictures
     * const pictures = await prisma.picture.findMany()
     * 
     * // Get first 10 Pictures
     * const pictures = await prisma.picture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pictureWithIdOnly = await prisma.picture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PictureFindManyArgs>(args?: SelectSubset<T, PictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Picture.
     * @param {PictureCreateArgs} args - Arguments to create a Picture.
     * @example
     * // Create one Picture
     * const Picture = await prisma.picture.create({
     *   data: {
     *     // ... data to create a Picture
     *   }
     * })
     * 
     */
    create<T extends PictureCreateArgs>(args: SelectSubset<T, PictureCreateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pictures.
     * @param {PictureCreateManyArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PictureCreateManyArgs>(args?: SelectSubset<T, PictureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pictures and returns the data saved in the database.
     * @param {PictureCreateManyAndReturnArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PictureCreateManyAndReturnArgs>(args?: SelectSubset<T, PictureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Picture.
     * @param {PictureDeleteArgs} args - Arguments to delete one Picture.
     * @example
     * // Delete one Picture
     * const Picture = await prisma.picture.delete({
     *   where: {
     *     // ... filter to delete one Picture
     *   }
     * })
     * 
     */
    delete<T extends PictureDeleteArgs>(args: SelectSubset<T, PictureDeleteArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Picture.
     * @param {PictureUpdateArgs} args - Arguments to update one Picture.
     * @example
     * // Update one Picture
     * const picture = await prisma.picture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PictureUpdateArgs>(args: SelectSubset<T, PictureUpdateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pictures.
     * @param {PictureDeleteManyArgs} args - Arguments to filter Pictures to delete.
     * @example
     * // Delete a few Pictures
     * const { count } = await prisma.picture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PictureDeleteManyArgs>(args?: SelectSubset<T, PictureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PictureUpdateManyArgs>(args: SelectSubset<T, PictureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures and returns the data updated in the database.
     * @param {PictureUpdateManyAndReturnArgs} args - Arguments to update many Pictures.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.updateManyAndReturn({
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
    updateManyAndReturn<T extends PictureUpdateManyAndReturnArgs>(args: SelectSubset<T, PictureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Picture.
     * @param {PictureUpsertArgs} args - Arguments to update or create a Picture.
     * @example
     * // Update or create a Picture
     * const picture = await prisma.picture.upsert({
     *   create: {
     *     // ... data to create a Picture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picture we want to update
     *   }
     * })
     */
    upsert<T extends PictureUpsertArgs>(args: SelectSubset<T, PictureUpsertArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureCountArgs} args - Arguments to filter Pictures to count.
     * @example
     * // Count the number of Pictures
     * const count = await prisma.picture.count({
     *   where: {
     *     // ... the filter for the Pictures we want to count
     *   }
     * })
    **/
    count<T extends PictureCountArgs>(
      args?: Subset<T, PictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PictureAggregateArgs>(args: Subset<T, PictureAggregateArgs>): Prisma.PrismaPromise<GetPictureAggregateType<T>>

    /**
     * Group by Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureGroupByArgs} args - Group by arguments.
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
      T extends PictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PictureGroupByArgs['orderBy'] }
        : { orderBy?: PictureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Picture model
   */
  readonly fields: PictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Picture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auction<T extends AuctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuctionDefaultArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Picture model
   */
  interface PictureFieldRefs {
    readonly id: FieldRef<"Picture", 'Int'>
    readonly path: FieldRef<"Picture", 'String'>
    readonly auctionId: FieldRef<"Picture", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Picture findUnique
   */
  export type PictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findUniqueOrThrow
   */
  export type PictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findFirst
   */
  export type PictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findFirstOrThrow
   */
  export type PictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findMany
   */
  export type PictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture create
   */
  export type PictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to create a Picture.
     */
    data: XOR<PictureCreateInput, PictureUncheckedCreateInput>
  }

  /**
   * Picture createMany
   */
  export type PictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Picture createManyAndReturn
   */
  export type PictureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Picture update
   */
  export type PictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to update a Picture.
     */
    data: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
    /**
     * Choose, which Picture to update.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture updateMany
   */
  export type PictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to update.
     */
    limit?: number
  }

  /**
   * Picture updateManyAndReturn
   */
  export type PictureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Picture upsert
   */
  export type PictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The filter to search for the Picture to update in case it exists.
     */
    where: PictureWhereUniqueInput
    /**
     * In case the Picture found by the `where` argument doesn't exist, create a new Picture with this data.
     */
    create: XOR<PictureCreateInput, PictureUncheckedCreateInput>
    /**
     * In case the Picture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
  }

  /**
   * Picture delete
   */
  export type PictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter which Picture to delete.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture deleteMany
   */
  export type PictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pictures to delete
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to delete.
     */
    limit?: number
  }

  /**
   * Picture without action
   */
  export type PictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    auctions?: boolean | Tag$auctionsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auctions?: boolean | Tag$auctionsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      auctions: Prisma.$AuctionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auctions<T extends Tag$auctionsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$auctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.auctions
   */
  export type Tag$auctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    cursor?: AuctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateAvgAggregateOutputType = {
    id: number | null
  }

  export type StateSumAggregateOutputType = {
    id: number | null
  }

  export type StateMinAggregateOutputType = {
    id: number | null
    stateType: string | null
  }

  export type StateMaxAggregateOutputType = {
    id: number | null
    stateType: string | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    stateType: number
    _all: number
  }


  export type StateAvgAggregateInputType = {
    id?: true
  }

  export type StateSumAggregateInputType = {
    id?: true
  }

  export type StateMinAggregateInputType = {
    id?: true
    stateType?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    stateType?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    stateType?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _avg?: StateAvgAggregateInputType
    _sum?: StateSumAggregateInputType
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: number
    stateType: string
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stateType?: boolean
    auctions?: boolean | State$auctionsArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>

  export type StateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stateType?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stateType?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectScalar = {
    id?: boolean
    stateType?: boolean
  }

  export type StateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stateType", ExtArgs["result"]["state"]>
  export type StateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auctions?: boolean | State$auctionsArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {
      auctions: Prisma.$AuctionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stateType: string
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateFindManyArgs>(args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
     */
    create<T extends StateCreateArgs>(args: SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateCreateManyArgs>(args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many States and returns the data saved in the database.
     * @param {StateCreateManyAndReturnArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many States and only return the `id`
     * const stateWithIdOnly = await prisma.state.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateCreateManyAndReturnArgs>(args?: SelectSubset<T, StateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
     */
    delete<T extends StateDeleteArgs>(args: SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateUpdateArgs>(args: SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateUpdateManyArgs>(args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States and returns the data updated in the database.
     * @param {StateUpdateManyAndReturnArgs} args - Arguments to update many States.
     * @example
     * // Update many States
     * const state = await prisma.state.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more States and only return the `id`
     * const stateWithIdOnly = await prisma.state.updateManyAndReturn({
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
    updateManyAndReturn<T extends StateUpdateManyAndReturnArgs>(args: SelectSubset<T, StateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
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
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auctions<T extends State$auctionsArgs<ExtArgs> = {}>(args?: Subset<T, State$auctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the State model
   */
  interface StateFieldRefs {
    readonly id: FieldRef<"State", 'Int'>
    readonly stateType: FieldRef<"State", 'String'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State createManyAndReturn
   */
  export type StateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State updateManyAndReturn
   */
  export type StateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
    /**
     * Limit how many States to delete.
     */
    limit?: number
  }

  /**
   * State.auctions
   */
  export type State$auctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    cursor?: AuctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
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


  export const LikesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    auction_id: 'auction_id'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    message: 'message',
    conversation_id: 'conversation_id',
    created_at: 'created_at',
    is_read: 'is_read'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    last_message_at: 'last_message_at',
    created_at: 'created_at',
    user1_id: 'user1_id',
    user2_id: 'user2_id'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    is_read: 'is_read',
    created_at: 'created_at',
    user_id: 'user_id',
    auction_id: 'auction_id',
    message_id: 'message_id'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const PurchasesScalarFieldEnum: {
    id: 'id',
    purchase_date: 'purchase_date',
    final_price: 'final_price',
    auction_id: 'auction_id',
    user_id: 'user_id'
  };

  export type PurchasesScalarFieldEnum = (typeof PurchasesScalarFieldEnum)[keyof typeof PurchasesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    birth_date: 'birth_date',
    email: 'email',
    password: 'password',
    picture: 'picture',
    balance: 'balance',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    content: 'content',
    contentType: 'contentType'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const AuctionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    fileId: 'fileId',
    initialPrice: 'initialPrice',
    actualBidPrice: 'actualBidPrice',
    startBidDate: 'startBidDate',
    endBidDate: 'endBidDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    tagId: 'tagId',
    sellerId: 'sellerId',
    buyerId: 'buyerId',
    stateId: 'stateId'
  };

  export type AuctionScalarFieldEnum = (typeof AuctionScalarFieldEnum)[keyof typeof AuctionScalarFieldEnum]


  export const PictureScalarFieldEnum: {
    id: 'id',
    path: 'path',
    auctionId: 'auctionId'
  };

  export type PictureScalarFieldEnum = (typeof PictureScalarFieldEnum)[keyof typeof PictureScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const StateScalarFieldEnum: {
    id: 'id',
    stateType: 'stateType'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type LikesWhereInput = {
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    id?: IntFilter<"Likes"> | number
    user_id?: IntFilter<"Likes"> | number
    auction_id?: IntFilter<"Likes"> | number
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type LikesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
    auction?: AuctionOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type LikesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    user_id?: IntFilter<"Likes"> | number
    auction_id?: IntFilter<"Likes"> | number
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type LikesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
    _count?: LikesCountOrderByAggregateInput
    _avg?: LikesAvgOrderByAggregateInput
    _max?: LikesMaxOrderByAggregateInput
    _min?: LikesMinOrderByAggregateInput
    _sum?: LikesSumOrderByAggregateInput
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    OR?: LikesScalarWhereWithAggregatesInput[]
    NOT?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Likes"> | number
    user_id?: IntWithAggregatesFilter<"Likes"> | number
    auction_id?: IntWithAggregatesFilter<"Likes"> | number
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    id?: IntFilter<"Messages"> | number
    message?: StringFilter<"Messages"> | string
    conversation_id?: IntFilter<"Messages"> | number
    created_at?: DateTimeFilter<"Messages"> | Date | string
    is_read?: BoolFilter<"Messages"> | boolean
    conversation?: XOR<ConversationsScalarRelationFilter, ConversationsWhereInput>
  }

  export type MessagesOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    conversation_id?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
    conversation?: ConversationsOrderByWithRelationInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    message?: StringFilter<"Messages"> | string
    conversation_id?: IntFilter<"Messages"> | number
    created_at?: DateTimeFilter<"Messages"> | Date | string
    is_read?: BoolFilter<"Messages"> | boolean
    conversation?: XOR<ConversationsScalarRelationFilter, ConversationsWhereInput>
  }, "id">

  export type MessagesOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    conversation_id?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _avg?: MessagesAvgOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
    _sum?: MessagesSumOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Messages"> | number
    message?: StringWithAggregatesFilter<"Messages"> | string
    conversation_id?: IntWithAggregatesFilter<"Messages"> | number
    created_at?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    is_read?: BoolWithAggregatesFilter<"Messages"> | boolean
  }

  export type ConversationsWhereInput = {
    AND?: ConversationsWhereInput | ConversationsWhereInput[]
    OR?: ConversationsWhereInput[]
    NOT?: ConversationsWhereInput | ConversationsWhereInput[]
    id?: IntFilter<"Conversations"> | number
    last_message_at?: DateTimeNullableFilter<"Conversations"> | Date | string | null
    created_at?: DateTimeFilter<"Conversations"> | Date | string
    user1_id?: IntFilter<"Conversations"> | number
    user2_id?: IntFilter<"Conversations"> | number
    user1?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    user2?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    message?: MessagesListRelationFilter
  }

  export type ConversationsOrderByWithRelationInput = {
    id?: SortOrder
    last_message_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    user1?: UsersOrderByWithRelationInput
    user2?: UsersOrderByWithRelationInput
    message?: MessagesOrderByRelationAggregateInput
  }

  export type ConversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversationsWhereInput | ConversationsWhereInput[]
    OR?: ConversationsWhereInput[]
    NOT?: ConversationsWhereInput | ConversationsWhereInput[]
    last_message_at?: DateTimeNullableFilter<"Conversations"> | Date | string | null
    created_at?: DateTimeFilter<"Conversations"> | Date | string
    user1_id?: IntFilter<"Conversations"> | number
    user2_id?: IntFilter<"Conversations"> | number
    user1?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    user2?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    message?: MessagesListRelationFilter
  }, "id">

  export type ConversationsOrderByWithAggregationInput = {
    id?: SortOrder
    last_message_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    _count?: ConversationsCountOrderByAggregateInput
    _avg?: ConversationsAvgOrderByAggregateInput
    _max?: ConversationsMaxOrderByAggregateInput
    _min?: ConversationsMinOrderByAggregateInput
    _sum?: ConversationsSumOrderByAggregateInput
  }

  export type ConversationsScalarWhereWithAggregatesInput = {
    AND?: ConversationsScalarWhereWithAggregatesInput | ConversationsScalarWhereWithAggregatesInput[]
    OR?: ConversationsScalarWhereWithAggregatesInput[]
    NOT?: ConversationsScalarWhereWithAggregatesInput | ConversationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversations"> | number
    last_message_at?: DateTimeNullableWithAggregatesFilter<"Conversations"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Conversations"> | Date | string
    user1_id?: IntWithAggregatesFilter<"Conversations"> | number
    user2_id?: IntWithAggregatesFilter<"Conversations"> | number
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    id?: IntFilter<"Notifications"> | number
    content?: StringFilter<"Notifications"> | string
    is_read?: BoolFilter<"Notifications"> | boolean
    created_at?: DateTimeFilter<"Notifications"> | Date | string
    user_id?: IntFilter<"Notifications"> | number
    auction_id?: IntFilter<"Notifications"> | number
    message_id?: IntNullableFilter<"Notifications"> | number | null
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type NotificationsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
    message_id?: SortOrderInput | SortOrder
    auction?: AuctionOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    content?: StringFilter<"Notifications"> | string
    is_read?: BoolFilter<"Notifications"> | boolean
    created_at?: DateTimeFilter<"Notifications"> | Date | string
    user_id?: IntFilter<"Notifications"> | number
    auction_id?: IntFilter<"Notifications"> | number
    message_id?: IntNullableFilter<"Notifications"> | number | null
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type NotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
    message_id?: SortOrderInput | SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _avg?: NotificationsAvgOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
    _sum?: NotificationsSumOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notifications"> | number
    content?: StringWithAggregatesFilter<"Notifications"> | string
    is_read?: BoolWithAggregatesFilter<"Notifications"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
    user_id?: IntWithAggregatesFilter<"Notifications"> | number
    auction_id?: IntWithAggregatesFilter<"Notifications"> | number
    message_id?: IntNullableWithAggregatesFilter<"Notifications"> | number | null
  }

  export type PurchasesWhereInput = {
    AND?: PurchasesWhereInput | PurchasesWhereInput[]
    OR?: PurchasesWhereInput[]
    NOT?: PurchasesWhereInput | PurchasesWhereInput[]
    id?: IntFilter<"Purchases"> | number
    purchase_date?: DateTimeFilter<"Purchases"> | Date | string
    final_price?: FloatFilter<"Purchases"> | number
    auction_id?: IntFilter<"Purchases"> | number
    user_id?: IntFilter<"Purchases"> | number
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type PurchasesOrderByWithRelationInput = {
    id?: SortOrder
    purchase_date?: SortOrder
    final_price?: SortOrder
    auction_id?: SortOrder
    user_id?: SortOrder
    auction?: AuctionOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type PurchasesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchasesWhereInput | PurchasesWhereInput[]
    OR?: PurchasesWhereInput[]
    NOT?: PurchasesWhereInput | PurchasesWhereInput[]
    purchase_date?: DateTimeFilter<"Purchases"> | Date | string
    final_price?: FloatFilter<"Purchases"> | number
    auction_id?: IntFilter<"Purchases"> | number
    user_id?: IntFilter<"Purchases"> | number
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type PurchasesOrderByWithAggregationInput = {
    id?: SortOrder
    purchase_date?: SortOrder
    final_price?: SortOrder
    auction_id?: SortOrder
    user_id?: SortOrder
    _count?: PurchasesCountOrderByAggregateInput
    _avg?: PurchasesAvgOrderByAggregateInput
    _max?: PurchasesMaxOrderByAggregateInput
    _min?: PurchasesMinOrderByAggregateInput
    _sum?: PurchasesSumOrderByAggregateInput
  }

  export type PurchasesScalarWhereWithAggregatesInput = {
    AND?: PurchasesScalarWhereWithAggregatesInput | PurchasesScalarWhereWithAggregatesInput[]
    OR?: PurchasesScalarWhereWithAggregatesInput[]
    NOT?: PurchasesScalarWhereWithAggregatesInput | PurchasesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Purchases"> | number
    purchase_date?: DateTimeWithAggregatesFilter<"Purchases"> | Date | string
    final_price?: FloatWithAggregatesFilter<"Purchases"> | number
    auction_id?: IntWithAggregatesFilter<"Purchases"> | number
    user_id?: IntWithAggregatesFilter<"Purchases"> | number
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    birth_date?: DateTimeFilter<"Users"> | Date | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    picture?: StringNullableFilter<"Users"> | string | null
    balance?: FloatFilter<"Users"> | number
    role?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    buyer?: AuctionListRelationFilter
    seller?: AuctionListRelationFilter
    user1?: ConversationsListRelationFilter
    user2?: ConversationsListRelationFilter
    likes?: LikesListRelationFilter
    notifications?: NotificationsListRelationFilter
    purchases?: PurchasesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrderInput | SortOrder
    balance?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    buyer?: AuctionOrderByRelationAggregateInput
    seller?: AuctionOrderByRelationAggregateInput
    user1?: ConversationsOrderByRelationAggregateInput
    user2?: ConversationsOrderByRelationAggregateInput
    likes?: LikesOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
    purchases?: PurchasesOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    birth_date?: DateTimeFilter<"Users"> | Date | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    picture?: StringNullableFilter<"Users"> | string | null
    balance?: FloatFilter<"Users"> | number
    role?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    buyer?: AuctionListRelationFilter
    seller?: AuctionListRelationFilter
    user1?: ConversationsListRelationFilter
    user2?: ConversationsListRelationFilter
    likes?: LikesListRelationFilter
    notifications?: NotificationsListRelationFilter
    purchases?: PurchasesListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrderInput | SortOrder
    balance?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
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
    first_name?: StringWithAggregatesFilter<"Users"> | string
    last_name?: StringWithAggregatesFilter<"Users"> | string
    birth_date?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    picture?: StringNullableWithAggregatesFilter<"Users"> | string | null
    balance?: FloatWithAggregatesFilter<"Users"> | number
    role?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: IntFilter<"File"> | number
    content?: StringFilter<"File"> | string
    contentType?: StringFilter<"File"> | string
    auctions?: AuctionListRelationFilter
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    auctions?: AuctionOrderByRelationAggregateInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    content?: StringFilter<"File"> | string
    contentType?: StringFilter<"File"> | string
    auctions?: AuctionListRelationFilter
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"File"> | number
    content?: StringWithAggregatesFilter<"File"> | string
    contentType?: StringWithAggregatesFilter<"File"> | string
  }

  export type AuctionWhereInput = {
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    id?: IntFilter<"Auction"> | number
    title?: StringFilter<"Auction"> | string
    description?: StringFilter<"Auction"> | string
    fileId?: IntFilter<"Auction"> | number
    initialPrice?: FloatFilter<"Auction"> | number
    actualBidPrice?: FloatFilter<"Auction"> | number
    startBidDate?: DateTimeFilter<"Auction"> | Date | string
    endBidDate?: DateTimeNullableFilter<"Auction"> | Date | string | null
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    updatedAt?: DateTimeFilter<"Auction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Auction"> | Date | string | null
    tagId?: IntFilter<"Auction"> | number
    sellerId?: IntFilter<"Auction"> | number
    buyerId?: IntNullableFilter<"Auction"> | number | null
    stateId?: IntFilter<"Auction"> | number
    buyer?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    file?: XOR<FileScalarRelationFilter, FileWhereInput>
    seller?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    likes?: LikesListRelationFilter
    notifications?: NotificationsListRelationFilter
    pictures?: PictureListRelationFilter
    purchases?: PurchasesListRelationFilter
  }

  export type AuctionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileId?: SortOrder
    initialPrice?: SortOrder
    actualBidPrice?: SortOrder
    startBidDate?: SortOrder
    endBidDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    tagId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrderInput | SortOrder
    stateId?: SortOrder
    buyer?: UsersOrderByWithRelationInput
    file?: FileOrderByWithRelationInput
    seller?: UsersOrderByWithRelationInput
    state?: StateOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
    likes?: LikesOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
    pictures?: PictureOrderByRelationAggregateInput
    purchases?: PurchasesOrderByRelationAggregateInput
  }

  export type AuctionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    title?: StringFilter<"Auction"> | string
    description?: StringFilter<"Auction"> | string
    fileId?: IntFilter<"Auction"> | number
    initialPrice?: FloatFilter<"Auction"> | number
    actualBidPrice?: FloatFilter<"Auction"> | number
    startBidDate?: DateTimeFilter<"Auction"> | Date | string
    endBidDate?: DateTimeNullableFilter<"Auction"> | Date | string | null
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    updatedAt?: DateTimeFilter<"Auction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Auction"> | Date | string | null
    tagId?: IntFilter<"Auction"> | number
    sellerId?: IntFilter<"Auction"> | number
    buyerId?: IntNullableFilter<"Auction"> | number | null
    stateId?: IntFilter<"Auction"> | number
    buyer?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    file?: XOR<FileScalarRelationFilter, FileWhereInput>
    seller?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    likes?: LikesListRelationFilter
    notifications?: NotificationsListRelationFilter
    pictures?: PictureListRelationFilter
    purchases?: PurchasesListRelationFilter
  }, "id">

  export type AuctionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileId?: SortOrder
    initialPrice?: SortOrder
    actualBidPrice?: SortOrder
    startBidDate?: SortOrder
    endBidDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    tagId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrderInput | SortOrder
    stateId?: SortOrder
    _count?: AuctionCountOrderByAggregateInput
    _avg?: AuctionAvgOrderByAggregateInput
    _max?: AuctionMaxOrderByAggregateInput
    _min?: AuctionMinOrderByAggregateInput
    _sum?: AuctionSumOrderByAggregateInput
  }

  export type AuctionScalarWhereWithAggregatesInput = {
    AND?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    OR?: AuctionScalarWhereWithAggregatesInput[]
    NOT?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Auction"> | number
    title?: StringWithAggregatesFilter<"Auction"> | string
    description?: StringWithAggregatesFilter<"Auction"> | string
    fileId?: IntWithAggregatesFilter<"Auction"> | number
    initialPrice?: FloatWithAggregatesFilter<"Auction"> | number
    actualBidPrice?: FloatWithAggregatesFilter<"Auction"> | number
    startBidDate?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    endBidDate?: DateTimeNullableWithAggregatesFilter<"Auction"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Auction"> | Date | string | null
    tagId?: IntWithAggregatesFilter<"Auction"> | number
    sellerId?: IntWithAggregatesFilter<"Auction"> | number
    buyerId?: IntNullableWithAggregatesFilter<"Auction"> | number | null
    stateId?: IntWithAggregatesFilter<"Auction"> | number
  }

  export type PictureWhereInput = {
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    id?: IntFilter<"Picture"> | number
    path?: StringFilter<"Picture"> | string
    auctionId?: IntFilter<"Picture"> | number
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
  }

  export type PictureOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    auctionId?: SortOrder
    auction?: AuctionOrderByWithRelationInput
  }

  export type PictureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    path?: StringFilter<"Picture"> | string
    auctionId?: IntFilter<"Picture"> | number
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
  }, "id">

  export type PictureOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    auctionId?: SortOrder
    _count?: PictureCountOrderByAggregateInput
    _avg?: PictureAvgOrderByAggregateInput
    _max?: PictureMaxOrderByAggregateInput
    _min?: PictureMinOrderByAggregateInput
    _sum?: PictureSumOrderByAggregateInput
  }

  export type PictureScalarWhereWithAggregatesInput = {
    AND?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    OR?: PictureScalarWhereWithAggregatesInput[]
    NOT?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Picture"> | number
    path?: StringWithAggregatesFilter<"Picture"> | string
    auctionId?: IntWithAggregatesFilter<"Picture"> | number
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    auctions?: AuctionListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    auctions?: AuctionOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    auctions?: AuctionListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    id?: IntFilter<"State"> | number
    stateType?: StringFilter<"State"> | string
    auctions?: AuctionListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    stateType?: SortOrder
    auctions?: AuctionOrderByRelationAggregateInput
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    stateType?: string
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    auctions?: AuctionListRelationFilter
  }, "id" | "stateType">

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    stateType?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _avg?: StateAvgOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
    _sum?: StateSumOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"State"> | number
    stateType?: StringWithAggregatesFilter<"State"> | string
  }

  export type LikesCreateInput = {
    auction: AuctionCreateNestedOneWithoutLikesInput
    user: UsersCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateInput = {
    id?: number
    user_id: number
    auction_id: number
  }

  export type LikesUpdateInput = {
    auction?: AuctionUpdateOneRequiredWithoutLikesNestedInput
    user?: UsersUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    auction_id?: IntFieldUpdateOperationsInput | number
  }

  export type LikesCreateManyInput = {
    id?: number
    user_id: number
    auction_id: number
  }

  export type LikesUpdateManyMutationInput = {

  }

  export type LikesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    auction_id?: IntFieldUpdateOperationsInput | number
  }

  export type MessagesCreateInput = {
    message: string
    created_at?: Date | string
    is_read?: boolean
    conversation: ConversationsCreateNestedOneWithoutMessageInput
  }

  export type MessagesUncheckedCreateInput = {
    id?: number
    message: string
    conversation_id: number
    created_at?: Date | string
    is_read?: boolean
  }

  export type MessagesUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    conversation?: ConversationsUpdateOneRequiredWithoutMessageNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    conversation_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessagesCreateManyInput = {
    id?: number
    message: string
    conversation_id: number
    created_at?: Date | string
    is_read?: boolean
  }

  export type MessagesUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    conversation_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConversationsCreateInput = {
    last_message_at?: Date | string | null
    created_at?: Date | string
    user1: UsersCreateNestedOneWithoutUser1Input
    user2: UsersCreateNestedOneWithoutUser2Input
    message?: MessagesCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateInput = {
    id?: number
    last_message_at?: Date | string | null
    created_at?: Date | string
    user1_id: number
    user2_id: number
    message?: MessagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUpdateInput = {
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UsersUpdateOneRequiredWithoutUser1NestedInput
    user2?: UsersUpdateOneRequiredWithoutUser2NestedInput
    message?: MessagesUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user1_id?: IntFieldUpdateOperationsInput | number
    user2_id?: IntFieldUpdateOperationsInput | number
    message?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsCreateManyInput = {
    id?: number
    last_message_at?: Date | string | null
    created_at?: Date | string
    user1_id: number
    user2_id: number
  }

  export type ConversationsUpdateManyMutationInput = {
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user1_id?: IntFieldUpdateOperationsInput | number
    user2_id?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationsCreateInput = {
    content: string
    is_read?: boolean
    created_at?: Date | string
    message_id?: number | null
    auction: AuctionCreateNestedOneWithoutNotificationsInput
    user: UsersCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    user_id: number
    auction_id: number
    message_id?: number | null
  }

  export type NotificationsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    message_id?: NullableIntFieldUpdateOperationsInput | number | null
    auction?: AuctionUpdateOneRequiredWithoutNotificationsNestedInput
    user?: UsersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    auction_id?: IntFieldUpdateOperationsInput | number
    message_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationsCreateManyInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    user_id: number
    auction_id: number
    message_id?: number | null
  }

  export type NotificationsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    message_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    auction_id?: IntFieldUpdateOperationsInput | number
    message_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PurchasesCreateInput = {
    purchase_date?: Date | string
    final_price: number
    auction: AuctionCreateNestedOneWithoutPurchasesInput
    user: UsersCreateNestedOneWithoutPurchasesInput
  }

  export type PurchasesUncheckedCreateInput = {
    id?: number
    purchase_date?: Date | string
    final_price: number
    auction_id: number
    user_id: number
  }

  export type PurchasesUpdateInput = {
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    final_price?: FloatFieldUpdateOperationsInput | number
    auction?: AuctionUpdateOneRequiredWithoutPurchasesNestedInput
    user?: UsersUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchasesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    final_price?: FloatFieldUpdateOperationsInput | number
    auction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PurchasesCreateManyInput = {
    id?: number
    purchase_date?: Date | string
    final_price: number
    auction_id: number
    user_id: number
  }

  export type PurchasesUpdateManyMutationInput = {
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    final_price?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchasesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    final_price?: FloatFieldUpdateOperationsInput | number
    auction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type UsersCreateInput = {
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionCreateNestedManyWithoutBuyerInput
    seller?: AuctionCreateNestedManyWithoutSellerInput
    user1?: ConversationsCreateNestedManyWithoutUser1Input
    user2?: ConversationsCreateNestedManyWithoutUser2Input
    likes?: LikesCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    purchases?: PurchasesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionUncheckedCreateNestedManyWithoutBuyerInput
    seller?: AuctionUncheckedCreateNestedManyWithoutSellerInput
    user1?: ConversationsUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationsUncheckedCreateNestedManyWithoutUser2Input
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUpdateManyWithoutUser2NestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUncheckedUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUncheckedUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUncheckedUpdateManyWithoutUser2NestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
  }

  export type UsersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileCreateInput = {
    content: string
    contentType: string
    auctions?: AuctionCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    content: string
    contentType: string
    auctions?: AuctionUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    auctions?: AuctionUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    auctions?: AuctionUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileCreateManyInput = {
    id?: number
    content: string
    contentType: string
  }

  export type FileUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
  }

  export type AuctionCreateInput = {
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buyer?: UsersCreateNestedOneWithoutBuyerInput
    file: FileCreateNestedOneWithoutAuctionsInput
    seller: UsersCreateNestedOneWithoutSellerInput
    state: StateCreateNestedOneWithoutAuctionsInput
    tag: TagCreateNestedOneWithoutAuctionsInput
    likes?: LikesCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsCreateNestedManyWithoutAuctionInput
    pictures?: PictureCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    buyerId?: number | null
    stateId: number
    likes?: LikesUncheckedCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutAuctionInput
    pictures?: PictureUncheckedCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: UsersUpdateOneWithoutBuyerNestedInput
    file?: FileUpdateOneRequiredWithoutAuctionsNestedInput
    seller?: UsersUpdateOneRequiredWithoutSellerNestedInput
    state?: StateUpdateOneRequiredWithoutAuctionsNestedInput
    tag?: TagUpdateOneRequiredWithoutAuctionsNestedInput
    likes?: LikesUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
    likes?: LikesUncheckedUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionCreateManyInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    buyerId?: number | null
    stateId: number
  }

  export type AuctionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuctionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
  }

  export type PictureCreateInput = {
    path: string
    auction: AuctionCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateInput = {
    id?: number
    path: string
    auctionId: number
  }

  export type PictureUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    auction?: AuctionUpdateOneRequiredWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    auctionId?: IntFieldUpdateOperationsInput | number
  }

  export type PictureCreateManyInput = {
    id?: number
    path: string
    auctionId: number
  }

  export type PictureUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    auctionId?: IntFieldUpdateOperationsInput | number
  }

  export type TagCreateInput = {
    name: string
    auctions?: AuctionCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    auctions?: AuctionUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    auctions?: AuctionUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    auctions?: AuctionUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateCreateInput = {
    stateType: string
    auctions?: AuctionCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateInput = {
    id?: number
    stateType: string
    auctions?: AuctionUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateUpdateInput = {
    stateType?: StringFieldUpdateOperationsInput | string
    auctions?: AuctionUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stateType?: StringFieldUpdateOperationsInput | string
    auctions?: AuctionUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateCreateManyInput = {
    id?: number
    stateType: string
  }

  export type StateUpdateManyMutationInput = {
    stateType?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stateType?: StringFieldUpdateOperationsInput | string
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

  export type AuctionScalarRelationFilter = {
    is?: AuctionWhereInput
    isNot?: AuctionWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type LikesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
  }

  export type LikesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
  }

  export type LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
  }

  export type LikesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
  }

  export type LikesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ConversationsScalarRelationFilter = {
    is?: ConversationsWhereInput
    isNot?: ConversationsWhereInput
  }

  export type MessagesCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    conversation_id?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type MessagesAvgOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    conversation_id?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    conversation_id?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type MessagesSumOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MessagesListRelationFilter = {
    every?: MessagesWhereInput
    some?: MessagesWhereInput
    none?: MessagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationsCountOrderByAggregateInput = {
    id?: SortOrder
    last_message_at?: SortOrder
    created_at?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
  }

  export type ConversationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
  }

  export type ConversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    last_message_at?: SortOrder
    created_at?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
  }

  export type ConversationsMinOrderByAggregateInput = {
    id?: SortOrder
    last_message_at?: SortOrder
    created_at?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
  }

  export type ConversationsSumOrderByAggregateInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
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

  export type NotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
    message_id?: SortOrder
  }

  export type NotificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
    message_id?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
    message_id?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
    message_id?: SortOrder
  }

  export type NotificationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    auction_id?: SortOrder
    message_id?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PurchasesCountOrderByAggregateInput = {
    id?: SortOrder
    purchase_date?: SortOrder
    final_price?: SortOrder
    auction_id?: SortOrder
    user_id?: SortOrder
  }

  export type PurchasesAvgOrderByAggregateInput = {
    id?: SortOrder
    final_price?: SortOrder
    auction_id?: SortOrder
    user_id?: SortOrder
  }

  export type PurchasesMaxOrderByAggregateInput = {
    id?: SortOrder
    purchase_date?: SortOrder
    final_price?: SortOrder
    auction_id?: SortOrder
    user_id?: SortOrder
  }

  export type PurchasesMinOrderByAggregateInput = {
    id?: SortOrder
    purchase_date?: SortOrder
    final_price?: SortOrder
    auction_id?: SortOrder
    user_id?: SortOrder
  }

  export type PurchasesSumOrderByAggregateInput = {
    id?: SortOrder
    final_price?: SortOrder
    auction_id?: SortOrder
    user_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AuctionListRelationFilter = {
    every?: AuctionWhereInput
    some?: AuctionWhereInput
    none?: AuctionWhereInput
  }

  export type ConversationsListRelationFilter = {
    every?: ConversationsWhereInput
    some?: ConversationsWhereInput
    none?: ConversationsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput
    some?: LikesWhereInput
    none?: LikesWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type PurchasesListRelationFilter = {
    every?: PurchasesWhereInput
    some?: PurchasesWhereInput
    none?: PurchasesWhereInput
  }

  export type AuctionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    balance?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    balance?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    balance?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type FileScalarRelationFilter = {
    is?: FileWhereInput
    isNot?: FileWhereInput
  }

  export type StateScalarRelationFilter = {
    is?: StateWhereInput
    isNot?: StateWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type PictureListRelationFilter = {
    every?: PictureWhereInput
    some?: PictureWhereInput
    none?: PictureWhereInput
  }

  export type PictureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuctionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileId?: SortOrder
    initialPrice?: SortOrder
    actualBidPrice?: SortOrder
    startBidDate?: SortOrder
    endBidDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    tagId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    stateId?: SortOrder
  }

  export type AuctionAvgOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    initialPrice?: SortOrder
    actualBidPrice?: SortOrder
    tagId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    stateId?: SortOrder
  }

  export type AuctionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileId?: SortOrder
    initialPrice?: SortOrder
    actualBidPrice?: SortOrder
    startBidDate?: SortOrder
    endBidDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    tagId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    stateId?: SortOrder
  }

  export type AuctionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileId?: SortOrder
    initialPrice?: SortOrder
    actualBidPrice?: SortOrder
    startBidDate?: SortOrder
    endBidDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    tagId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    stateId?: SortOrder
  }

  export type AuctionSumOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    initialPrice?: SortOrder
    actualBidPrice?: SortOrder
    tagId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    stateId?: SortOrder
  }

  export type PictureCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    auctionId?: SortOrder
  }

  export type PictureAvgOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
  }

  export type PictureMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    auctionId?: SortOrder
  }

  export type PictureMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    auctionId?: SortOrder
  }

  export type PictureSumOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    stateType?: SortOrder
  }

  export type StateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    stateType?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    stateType?: SortOrder
  }

  export type StateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuctionCreateNestedOneWithoutLikesInput = {
    create?: XOR<AuctionCreateWithoutLikesInput, AuctionUncheckedCreateWithoutLikesInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutLikesInput
    connect?: AuctionWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutLikesInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput
    connect?: UsersWhereUniqueInput
  }

  export type AuctionUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<AuctionCreateWithoutLikesInput, AuctionUncheckedCreateWithoutLikesInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutLikesInput
    upsert?: AuctionUpsertWithoutLikesInput
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutLikesInput, AuctionUpdateWithoutLikesInput>, AuctionUncheckedUpdateWithoutLikesInput>
  }

  export type UsersUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput
    upsert?: UsersUpsertWithoutLikesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLikesInput, UsersUpdateWithoutLikesInput>, UsersUncheckedUpdateWithoutLikesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConversationsCreateNestedOneWithoutMessageInput = {
    create?: XOR<ConversationsCreateWithoutMessageInput, ConversationsUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessageInput
    connect?: ConversationsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ConversationsUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<ConversationsCreateWithoutMessageInput, ConversationsUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessageInput
    upsert?: ConversationsUpsertWithoutMessageInput
    connect?: ConversationsWhereUniqueInput
    update?: XOR<XOR<ConversationsUpdateToOneWithWhereWithoutMessageInput, ConversationsUpdateWithoutMessageInput>, ConversationsUncheckedUpdateWithoutMessageInput>
  }

  export type UsersCreateNestedOneWithoutUser1Input = {
    create?: XOR<UsersCreateWithoutUser1Input, UsersUncheckedCreateWithoutUser1Input>
    connectOrCreate?: UsersCreateOrConnectWithoutUser1Input
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutUser2Input = {
    create?: XOR<UsersCreateWithoutUser2Input, UsersUncheckedCreateWithoutUser2Input>
    connectOrCreate?: UsersCreateOrConnectWithoutUser2Input
    connect?: UsersWhereUniqueInput
  }

  export type MessagesCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneRequiredWithoutUser1NestedInput = {
    create?: XOR<UsersCreateWithoutUser1Input, UsersUncheckedCreateWithoutUser1Input>
    connectOrCreate?: UsersCreateOrConnectWithoutUser1Input
    upsert?: UsersUpsertWithoutUser1Input
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUser1Input, UsersUpdateWithoutUser1Input>, UsersUncheckedUpdateWithoutUser1Input>
  }

  export type UsersUpdateOneRequiredWithoutUser2NestedInput = {
    create?: XOR<UsersCreateWithoutUser2Input, UsersUncheckedCreateWithoutUser2Input>
    connectOrCreate?: UsersCreateOrConnectWithoutUser2Input
    upsert?: UsersUpsertWithoutUser2Input
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUser2Input, UsersUpdateWithoutUser2Input>, UsersUncheckedUpdateWithoutUser2Input>
  }

  export type MessagesUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutConversationInput | MessagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutConversationInput | MessagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutConversationInput | MessagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutConversationInput | MessagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutConversationInput | MessagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutConversationInput | MessagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type AuctionCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<AuctionCreateWithoutNotificationsInput, AuctionUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutNotificationsInput
    connect?: AuctionWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuctionUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<AuctionCreateWithoutNotificationsInput, AuctionUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutNotificationsInput
    upsert?: AuctionUpsertWithoutNotificationsInput
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutNotificationsInput, AuctionUpdateWithoutNotificationsInput>, AuctionUncheckedUpdateWithoutNotificationsInput>
  }

  export type UsersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    upsert?: UsersUpsertWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNotificationsInput, UsersUpdateWithoutNotificationsInput>, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type AuctionCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<AuctionCreateWithoutPurchasesInput, AuctionUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutPurchasesInput
    connect?: AuctionWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UsersCreateWithoutPurchasesInput, UsersUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPurchasesInput
    connect?: UsersWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuctionUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<AuctionCreateWithoutPurchasesInput, AuctionUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutPurchasesInput
    upsert?: AuctionUpsertWithoutPurchasesInput
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutPurchasesInput, AuctionUpdateWithoutPurchasesInput>, AuctionUncheckedUpdateWithoutPurchasesInput>
  }

  export type UsersUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UsersCreateWithoutPurchasesInput, UsersUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPurchasesInput
    upsert?: UsersUpsertWithoutPurchasesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPurchasesInput, UsersUpdateWithoutPurchasesInput>, UsersUncheckedUpdateWithoutPurchasesInput>
  }

  export type AuctionCreateNestedManyWithoutBuyerInput = {
    create?: XOR<AuctionCreateWithoutBuyerInput, AuctionUncheckedCreateWithoutBuyerInput> | AuctionCreateWithoutBuyerInput[] | AuctionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutBuyerInput | AuctionCreateOrConnectWithoutBuyerInput[]
    createMany?: AuctionCreateManyBuyerInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type AuctionCreateNestedManyWithoutSellerInput = {
    create?: XOR<AuctionCreateWithoutSellerInput, AuctionUncheckedCreateWithoutSellerInput> | AuctionCreateWithoutSellerInput[] | AuctionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutSellerInput | AuctionCreateOrConnectWithoutSellerInput[]
    createMany?: AuctionCreateManySellerInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type ConversationsCreateNestedManyWithoutUser1Input = {
    create?: XOR<ConversationsCreateWithoutUser1Input, ConversationsUncheckedCreateWithoutUser1Input> | ConversationsCreateWithoutUser1Input[] | ConversationsUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUser1Input | ConversationsCreateOrConnectWithoutUser1Input[]
    createMany?: ConversationsCreateManyUser1InputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type ConversationsCreateNestedManyWithoutUser2Input = {
    create?: XOR<ConversationsCreateWithoutUser2Input, ConversationsUncheckedCreateWithoutUser2Input> | ConversationsCreateWithoutUser2Input[] | ConversationsUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUser2Input | ConversationsCreateOrConnectWithoutUser2Input[]
    createMany?: ConversationsCreateManyUser2InputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PurchasesCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchasesCreateWithoutUserInput, PurchasesUncheckedCreateWithoutUserInput> | PurchasesCreateWithoutUserInput[] | PurchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutUserInput | PurchasesCreateOrConnectWithoutUserInput[]
    createMany?: PurchasesCreateManyUserInputEnvelope
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
  }

  export type AuctionUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<AuctionCreateWithoutBuyerInput, AuctionUncheckedCreateWithoutBuyerInput> | AuctionCreateWithoutBuyerInput[] | AuctionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutBuyerInput | AuctionCreateOrConnectWithoutBuyerInput[]
    createMany?: AuctionCreateManyBuyerInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type AuctionUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<AuctionCreateWithoutSellerInput, AuctionUncheckedCreateWithoutSellerInput> | AuctionCreateWithoutSellerInput[] | AuctionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutSellerInput | AuctionCreateOrConnectWithoutSellerInput[]
    createMany?: AuctionCreateManySellerInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type ConversationsUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<ConversationsCreateWithoutUser1Input, ConversationsUncheckedCreateWithoutUser1Input> | ConversationsCreateWithoutUser1Input[] | ConversationsUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUser1Input | ConversationsCreateOrConnectWithoutUser1Input[]
    createMany?: ConversationsCreateManyUser1InputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type ConversationsUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<ConversationsCreateWithoutUser2Input, ConversationsUncheckedCreateWithoutUser2Input> | ConversationsCreateWithoutUser2Input[] | ConversationsUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUser2Input | ConversationsCreateOrConnectWithoutUser2Input[]
    createMany?: ConversationsCreateManyUser2InputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PurchasesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchasesCreateWithoutUserInput, PurchasesUncheckedCreateWithoutUserInput> | PurchasesCreateWithoutUserInput[] | PurchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutUserInput | PurchasesCreateOrConnectWithoutUserInput[]
    createMany?: PurchasesCreateManyUserInputEnvelope
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AuctionUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<AuctionCreateWithoutBuyerInput, AuctionUncheckedCreateWithoutBuyerInput> | AuctionCreateWithoutBuyerInput[] | AuctionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutBuyerInput | AuctionCreateOrConnectWithoutBuyerInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutBuyerInput | AuctionUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: AuctionCreateManyBuyerInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutBuyerInput | AuctionUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutBuyerInput | AuctionUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type AuctionUpdateManyWithoutSellerNestedInput = {
    create?: XOR<AuctionCreateWithoutSellerInput, AuctionUncheckedCreateWithoutSellerInput> | AuctionCreateWithoutSellerInput[] | AuctionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutSellerInput | AuctionCreateOrConnectWithoutSellerInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutSellerInput | AuctionUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: AuctionCreateManySellerInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutSellerInput | AuctionUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutSellerInput | AuctionUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type ConversationsUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ConversationsCreateWithoutUser1Input, ConversationsUncheckedCreateWithoutUser1Input> | ConversationsCreateWithoutUser1Input[] | ConversationsUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUser1Input | ConversationsCreateOrConnectWithoutUser1Input[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutUser1Input | ConversationsUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ConversationsCreateManyUser1InputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutUser1Input | ConversationsUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutUser1Input | ConversationsUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type ConversationsUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ConversationsCreateWithoutUser2Input, ConversationsUncheckedCreateWithoutUser2Input> | ConversationsCreateWithoutUser2Input[] | ConversationsUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUser2Input | ConversationsCreateOrConnectWithoutUser2Input[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutUser2Input | ConversationsUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ConversationsCreateManyUser2InputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutUser2Input | ConversationsUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutUser2Input | ConversationsUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PurchasesUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchasesCreateWithoutUserInput, PurchasesUncheckedCreateWithoutUserInput> | PurchasesCreateWithoutUserInput[] | PurchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutUserInput | PurchasesCreateOrConnectWithoutUserInput[]
    upsert?: PurchasesUpsertWithWhereUniqueWithoutUserInput | PurchasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchasesCreateManyUserInputEnvelope
    set?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    disconnect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    delete?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    update?: PurchasesUpdateWithWhereUniqueWithoutUserInput | PurchasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchasesUpdateManyWithWhereWithoutUserInput | PurchasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchasesScalarWhereInput | PurchasesScalarWhereInput[]
  }

  export type AuctionUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<AuctionCreateWithoutBuyerInput, AuctionUncheckedCreateWithoutBuyerInput> | AuctionCreateWithoutBuyerInput[] | AuctionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutBuyerInput | AuctionCreateOrConnectWithoutBuyerInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutBuyerInput | AuctionUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: AuctionCreateManyBuyerInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutBuyerInput | AuctionUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutBuyerInput | AuctionUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type AuctionUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<AuctionCreateWithoutSellerInput, AuctionUncheckedCreateWithoutSellerInput> | AuctionCreateWithoutSellerInput[] | AuctionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutSellerInput | AuctionCreateOrConnectWithoutSellerInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutSellerInput | AuctionUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: AuctionCreateManySellerInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutSellerInput | AuctionUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutSellerInput | AuctionUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type ConversationsUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ConversationsCreateWithoutUser1Input, ConversationsUncheckedCreateWithoutUser1Input> | ConversationsCreateWithoutUser1Input[] | ConversationsUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUser1Input | ConversationsCreateOrConnectWithoutUser1Input[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutUser1Input | ConversationsUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ConversationsCreateManyUser1InputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutUser1Input | ConversationsUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutUser1Input | ConversationsUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type ConversationsUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ConversationsCreateWithoutUser2Input, ConversationsUncheckedCreateWithoutUser2Input> | ConversationsCreateWithoutUser2Input[] | ConversationsUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutUser2Input | ConversationsCreateOrConnectWithoutUser2Input[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutUser2Input | ConversationsUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ConversationsCreateManyUser2InputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutUser2Input | ConversationsUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutUser2Input | ConversationsUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PurchasesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchasesCreateWithoutUserInput, PurchasesUncheckedCreateWithoutUserInput> | PurchasesCreateWithoutUserInput[] | PurchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutUserInput | PurchasesCreateOrConnectWithoutUserInput[]
    upsert?: PurchasesUpsertWithWhereUniqueWithoutUserInput | PurchasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchasesCreateManyUserInputEnvelope
    set?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    disconnect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    delete?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    update?: PurchasesUpdateWithWhereUniqueWithoutUserInput | PurchasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchasesUpdateManyWithWhereWithoutUserInput | PurchasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchasesScalarWhereInput | PurchasesScalarWhereInput[]
  }

  export type AuctionCreateNestedManyWithoutFileInput = {
    create?: XOR<AuctionCreateWithoutFileInput, AuctionUncheckedCreateWithoutFileInput> | AuctionCreateWithoutFileInput[] | AuctionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutFileInput | AuctionCreateOrConnectWithoutFileInput[]
    createMany?: AuctionCreateManyFileInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type AuctionUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<AuctionCreateWithoutFileInput, AuctionUncheckedCreateWithoutFileInput> | AuctionCreateWithoutFileInput[] | AuctionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutFileInput | AuctionCreateOrConnectWithoutFileInput[]
    createMany?: AuctionCreateManyFileInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type AuctionUpdateManyWithoutFileNestedInput = {
    create?: XOR<AuctionCreateWithoutFileInput, AuctionUncheckedCreateWithoutFileInput> | AuctionCreateWithoutFileInput[] | AuctionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutFileInput | AuctionCreateOrConnectWithoutFileInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutFileInput | AuctionUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: AuctionCreateManyFileInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutFileInput | AuctionUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutFileInput | AuctionUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type AuctionUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<AuctionCreateWithoutFileInput, AuctionUncheckedCreateWithoutFileInput> | AuctionCreateWithoutFileInput[] | AuctionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutFileInput | AuctionCreateOrConnectWithoutFileInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutFileInput | AuctionUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: AuctionCreateManyFileInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutFileInput | AuctionUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutFileInput | AuctionUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutBuyerInput = {
    create?: XOR<UsersCreateWithoutBuyerInput, UsersUncheckedCreateWithoutBuyerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBuyerInput
    connect?: UsersWhereUniqueInput
  }

  export type FileCreateNestedOneWithoutAuctionsInput = {
    create?: XOR<FileCreateWithoutAuctionsInput, FileUncheckedCreateWithoutAuctionsInput>
    connectOrCreate?: FileCreateOrConnectWithoutAuctionsInput
    connect?: FileWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutSellerInput = {
    create?: XOR<UsersCreateWithoutSellerInput, UsersUncheckedCreateWithoutSellerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSellerInput
    connect?: UsersWhereUniqueInput
  }

  export type StateCreateNestedOneWithoutAuctionsInput = {
    create?: XOR<StateCreateWithoutAuctionsInput, StateUncheckedCreateWithoutAuctionsInput>
    connectOrCreate?: StateCreateOrConnectWithoutAuctionsInput
    connect?: StateWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutAuctionsInput = {
    create?: XOR<TagCreateWithoutAuctionsInput, TagUncheckedCreateWithoutAuctionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutAuctionsInput
    connect?: TagWhereUniqueInput
  }

  export type LikesCreateNestedManyWithoutAuctionInput = {
    create?: XOR<LikesCreateWithoutAuctionInput, LikesUncheckedCreateWithoutAuctionInput> | LikesCreateWithoutAuctionInput[] | LikesUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutAuctionInput | LikesCreateOrConnectWithoutAuctionInput[]
    createMany?: LikesCreateManyAuctionInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutAuctionInput = {
    create?: XOR<NotificationsCreateWithoutAuctionInput, NotificationsUncheckedCreateWithoutAuctionInput> | NotificationsCreateWithoutAuctionInput[] | NotificationsUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutAuctionInput | NotificationsCreateOrConnectWithoutAuctionInput[]
    createMany?: NotificationsCreateManyAuctionInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PictureCreateNestedManyWithoutAuctionInput = {
    create?: XOR<PictureCreateWithoutAuctionInput, PictureUncheckedCreateWithoutAuctionInput> | PictureCreateWithoutAuctionInput[] | PictureUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAuctionInput | PictureCreateOrConnectWithoutAuctionInput[]
    createMany?: PictureCreateManyAuctionInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type PurchasesCreateNestedManyWithoutAuctionInput = {
    create?: XOR<PurchasesCreateWithoutAuctionInput, PurchasesUncheckedCreateWithoutAuctionInput> | PurchasesCreateWithoutAuctionInput[] | PurchasesUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutAuctionInput | PurchasesCreateOrConnectWithoutAuctionInput[]
    createMany?: PurchasesCreateManyAuctionInputEnvelope
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutAuctionInput = {
    create?: XOR<LikesCreateWithoutAuctionInput, LikesUncheckedCreateWithoutAuctionInput> | LikesCreateWithoutAuctionInput[] | LikesUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutAuctionInput | LikesCreateOrConnectWithoutAuctionInput[]
    createMany?: LikesCreateManyAuctionInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutAuctionInput = {
    create?: XOR<NotificationsCreateWithoutAuctionInput, NotificationsUncheckedCreateWithoutAuctionInput> | NotificationsCreateWithoutAuctionInput[] | NotificationsUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutAuctionInput | NotificationsCreateOrConnectWithoutAuctionInput[]
    createMany?: NotificationsCreateManyAuctionInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PictureUncheckedCreateNestedManyWithoutAuctionInput = {
    create?: XOR<PictureCreateWithoutAuctionInput, PictureUncheckedCreateWithoutAuctionInput> | PictureCreateWithoutAuctionInput[] | PictureUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAuctionInput | PictureCreateOrConnectWithoutAuctionInput[]
    createMany?: PictureCreateManyAuctionInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type PurchasesUncheckedCreateNestedManyWithoutAuctionInput = {
    create?: XOR<PurchasesCreateWithoutAuctionInput, PurchasesUncheckedCreateWithoutAuctionInput> | PurchasesCreateWithoutAuctionInput[] | PurchasesUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutAuctionInput | PurchasesCreateOrConnectWithoutAuctionInput[]
    createMany?: PurchasesCreateManyAuctionInputEnvelope
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
  }

  export type UsersUpdateOneWithoutBuyerNestedInput = {
    create?: XOR<UsersCreateWithoutBuyerInput, UsersUncheckedCreateWithoutBuyerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBuyerInput
    upsert?: UsersUpsertWithoutBuyerInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBuyerInput, UsersUpdateWithoutBuyerInput>, UsersUncheckedUpdateWithoutBuyerInput>
  }

  export type FileUpdateOneRequiredWithoutAuctionsNestedInput = {
    create?: XOR<FileCreateWithoutAuctionsInput, FileUncheckedCreateWithoutAuctionsInput>
    connectOrCreate?: FileCreateOrConnectWithoutAuctionsInput
    upsert?: FileUpsertWithoutAuctionsInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutAuctionsInput, FileUpdateWithoutAuctionsInput>, FileUncheckedUpdateWithoutAuctionsInput>
  }

  export type UsersUpdateOneRequiredWithoutSellerNestedInput = {
    create?: XOR<UsersCreateWithoutSellerInput, UsersUncheckedCreateWithoutSellerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSellerInput
    upsert?: UsersUpsertWithoutSellerInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSellerInput, UsersUpdateWithoutSellerInput>, UsersUncheckedUpdateWithoutSellerInput>
  }

  export type StateUpdateOneRequiredWithoutAuctionsNestedInput = {
    create?: XOR<StateCreateWithoutAuctionsInput, StateUncheckedCreateWithoutAuctionsInput>
    connectOrCreate?: StateCreateOrConnectWithoutAuctionsInput
    upsert?: StateUpsertWithoutAuctionsInput
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutAuctionsInput, StateUpdateWithoutAuctionsInput>, StateUncheckedUpdateWithoutAuctionsInput>
  }

  export type TagUpdateOneRequiredWithoutAuctionsNestedInput = {
    create?: XOR<TagCreateWithoutAuctionsInput, TagUncheckedCreateWithoutAuctionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutAuctionsInput
    upsert?: TagUpsertWithoutAuctionsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutAuctionsInput, TagUpdateWithoutAuctionsInput>, TagUncheckedUpdateWithoutAuctionsInput>
  }

  export type LikesUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<LikesCreateWithoutAuctionInput, LikesUncheckedCreateWithoutAuctionInput> | LikesCreateWithoutAuctionInput[] | LikesUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutAuctionInput | LikesCreateOrConnectWithoutAuctionInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutAuctionInput | LikesUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: LikesCreateManyAuctionInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutAuctionInput | LikesUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutAuctionInput | LikesUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<NotificationsCreateWithoutAuctionInput, NotificationsUncheckedCreateWithoutAuctionInput> | NotificationsCreateWithoutAuctionInput[] | NotificationsUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutAuctionInput | NotificationsCreateOrConnectWithoutAuctionInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutAuctionInput | NotificationsUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: NotificationsCreateManyAuctionInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutAuctionInput | NotificationsUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutAuctionInput | NotificationsUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PictureUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<PictureCreateWithoutAuctionInput, PictureUncheckedCreateWithoutAuctionInput> | PictureCreateWithoutAuctionInput[] | PictureUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAuctionInput | PictureCreateOrConnectWithoutAuctionInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutAuctionInput | PictureUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: PictureCreateManyAuctionInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutAuctionInput | PictureUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutAuctionInput | PictureUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type PurchasesUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<PurchasesCreateWithoutAuctionInput, PurchasesUncheckedCreateWithoutAuctionInput> | PurchasesCreateWithoutAuctionInput[] | PurchasesUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutAuctionInput | PurchasesCreateOrConnectWithoutAuctionInput[]
    upsert?: PurchasesUpsertWithWhereUniqueWithoutAuctionInput | PurchasesUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: PurchasesCreateManyAuctionInputEnvelope
    set?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    disconnect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    delete?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    update?: PurchasesUpdateWithWhereUniqueWithoutAuctionInput | PurchasesUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: PurchasesUpdateManyWithWhereWithoutAuctionInput | PurchasesUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: PurchasesScalarWhereInput | PurchasesScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<LikesCreateWithoutAuctionInput, LikesUncheckedCreateWithoutAuctionInput> | LikesCreateWithoutAuctionInput[] | LikesUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutAuctionInput | LikesCreateOrConnectWithoutAuctionInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutAuctionInput | LikesUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: LikesCreateManyAuctionInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutAuctionInput | LikesUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutAuctionInput | LikesUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<NotificationsCreateWithoutAuctionInput, NotificationsUncheckedCreateWithoutAuctionInput> | NotificationsCreateWithoutAuctionInput[] | NotificationsUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutAuctionInput | NotificationsCreateOrConnectWithoutAuctionInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutAuctionInput | NotificationsUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: NotificationsCreateManyAuctionInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutAuctionInput | NotificationsUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutAuctionInput | NotificationsUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PictureUncheckedUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<PictureCreateWithoutAuctionInput, PictureUncheckedCreateWithoutAuctionInput> | PictureCreateWithoutAuctionInput[] | PictureUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAuctionInput | PictureCreateOrConnectWithoutAuctionInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutAuctionInput | PictureUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: PictureCreateManyAuctionInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutAuctionInput | PictureUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutAuctionInput | PictureUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type PurchasesUncheckedUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<PurchasesCreateWithoutAuctionInput, PurchasesUncheckedCreateWithoutAuctionInput> | PurchasesCreateWithoutAuctionInput[] | PurchasesUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutAuctionInput | PurchasesCreateOrConnectWithoutAuctionInput[]
    upsert?: PurchasesUpsertWithWhereUniqueWithoutAuctionInput | PurchasesUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: PurchasesCreateManyAuctionInputEnvelope
    set?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    disconnect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    delete?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    update?: PurchasesUpdateWithWhereUniqueWithoutAuctionInput | PurchasesUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: PurchasesUpdateManyWithWhereWithoutAuctionInput | PurchasesUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: PurchasesScalarWhereInput | PurchasesScalarWhereInput[]
  }

  export type AuctionCreateNestedOneWithoutPicturesInput = {
    create?: XOR<AuctionCreateWithoutPicturesInput, AuctionUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutPicturesInput
    connect?: AuctionWhereUniqueInput
  }

  export type AuctionUpdateOneRequiredWithoutPicturesNestedInput = {
    create?: XOR<AuctionCreateWithoutPicturesInput, AuctionUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutPicturesInput
    upsert?: AuctionUpsertWithoutPicturesInput
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutPicturesInput, AuctionUpdateWithoutPicturesInput>, AuctionUncheckedUpdateWithoutPicturesInput>
  }

  export type AuctionCreateNestedManyWithoutTagInput = {
    create?: XOR<AuctionCreateWithoutTagInput, AuctionUncheckedCreateWithoutTagInput> | AuctionCreateWithoutTagInput[] | AuctionUncheckedCreateWithoutTagInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutTagInput | AuctionCreateOrConnectWithoutTagInput[]
    createMany?: AuctionCreateManyTagInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type AuctionUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<AuctionCreateWithoutTagInput, AuctionUncheckedCreateWithoutTagInput> | AuctionCreateWithoutTagInput[] | AuctionUncheckedCreateWithoutTagInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutTagInput | AuctionCreateOrConnectWithoutTagInput[]
    createMany?: AuctionCreateManyTagInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type AuctionUpdateManyWithoutTagNestedInput = {
    create?: XOR<AuctionCreateWithoutTagInput, AuctionUncheckedCreateWithoutTagInput> | AuctionCreateWithoutTagInput[] | AuctionUncheckedCreateWithoutTagInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutTagInput | AuctionCreateOrConnectWithoutTagInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutTagInput | AuctionUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: AuctionCreateManyTagInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutTagInput | AuctionUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutTagInput | AuctionUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type AuctionUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<AuctionCreateWithoutTagInput, AuctionUncheckedCreateWithoutTagInput> | AuctionCreateWithoutTagInput[] | AuctionUncheckedCreateWithoutTagInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutTagInput | AuctionCreateOrConnectWithoutTagInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutTagInput | AuctionUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: AuctionCreateManyTagInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutTagInput | AuctionUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutTagInput | AuctionUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type AuctionCreateNestedManyWithoutStateInput = {
    create?: XOR<AuctionCreateWithoutStateInput, AuctionUncheckedCreateWithoutStateInput> | AuctionCreateWithoutStateInput[] | AuctionUncheckedCreateWithoutStateInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutStateInput | AuctionCreateOrConnectWithoutStateInput[]
    createMany?: AuctionCreateManyStateInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type AuctionUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<AuctionCreateWithoutStateInput, AuctionUncheckedCreateWithoutStateInput> | AuctionCreateWithoutStateInput[] | AuctionUncheckedCreateWithoutStateInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutStateInput | AuctionCreateOrConnectWithoutStateInput[]
    createMany?: AuctionCreateManyStateInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type AuctionUpdateManyWithoutStateNestedInput = {
    create?: XOR<AuctionCreateWithoutStateInput, AuctionUncheckedCreateWithoutStateInput> | AuctionCreateWithoutStateInput[] | AuctionUncheckedCreateWithoutStateInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutStateInput | AuctionCreateOrConnectWithoutStateInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutStateInput | AuctionUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: AuctionCreateManyStateInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutStateInput | AuctionUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutStateInput | AuctionUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type AuctionUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<AuctionCreateWithoutStateInput, AuctionUncheckedCreateWithoutStateInput> | AuctionCreateWithoutStateInput[] | AuctionUncheckedCreateWithoutStateInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutStateInput | AuctionCreateOrConnectWithoutStateInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutStateInput | AuctionUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: AuctionCreateManyStateInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutStateInput | AuctionUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutStateInput | AuctionUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AuctionCreateWithoutLikesInput = {
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buyer?: UsersCreateNestedOneWithoutBuyerInput
    file: FileCreateNestedOneWithoutAuctionsInput
    seller: UsersCreateNestedOneWithoutSellerInput
    state: StateCreateNestedOneWithoutAuctionsInput
    tag: TagCreateNestedOneWithoutAuctionsInput
    notifications?: NotificationsCreateNestedManyWithoutAuctionInput
    pictures?: PictureCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutLikesInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    buyerId?: number | null
    stateId: number
    notifications?: NotificationsUncheckedCreateNestedManyWithoutAuctionInput
    pictures?: PictureUncheckedCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutLikesInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutLikesInput, AuctionUncheckedCreateWithoutLikesInput>
  }

  export type UsersCreateWithoutLikesInput = {
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionCreateNestedManyWithoutBuyerInput
    seller?: AuctionCreateNestedManyWithoutSellerInput
    user1?: ConversationsCreateNestedManyWithoutUser1Input
    user2?: ConversationsCreateNestedManyWithoutUser2Input
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    purchases?: PurchasesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLikesInput = {
    id?: number
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionUncheckedCreateNestedManyWithoutBuyerInput
    seller?: AuctionUncheckedCreateNestedManyWithoutSellerInput
    user1?: ConversationsUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationsUncheckedCreateNestedManyWithoutUser2Input
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutLikesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
  }

  export type AuctionUpsertWithoutLikesInput = {
    update: XOR<AuctionUpdateWithoutLikesInput, AuctionUncheckedUpdateWithoutLikesInput>
    create: XOR<AuctionCreateWithoutLikesInput, AuctionUncheckedCreateWithoutLikesInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutLikesInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutLikesInput, AuctionUncheckedUpdateWithoutLikesInput>
  }

  export type AuctionUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: UsersUpdateOneWithoutBuyerNestedInput
    file?: FileUpdateOneRequiredWithoutAuctionsNestedInput
    seller?: UsersUpdateOneRequiredWithoutSellerNestedInput
    state?: StateUpdateOneRequiredWithoutAuctionsNestedInput
    tag?: TagUpdateOneRequiredWithoutAuctionsNestedInput
    notifications?: NotificationsUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
    notifications?: NotificationsUncheckedUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type UsersUpsertWithoutLikesInput = {
    update: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLikesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
  }

  export type UsersUpdateWithoutLikesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUpdateManyWithoutUser2NestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUncheckedUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUncheckedUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUncheckedUpdateManyWithoutUser2NestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConversationsCreateWithoutMessageInput = {
    last_message_at?: Date | string | null
    created_at?: Date | string
    user1: UsersCreateNestedOneWithoutUser1Input
    user2: UsersCreateNestedOneWithoutUser2Input
  }

  export type ConversationsUncheckedCreateWithoutMessageInput = {
    id?: number
    last_message_at?: Date | string | null
    created_at?: Date | string
    user1_id: number
    user2_id: number
  }

  export type ConversationsCreateOrConnectWithoutMessageInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutMessageInput, ConversationsUncheckedCreateWithoutMessageInput>
  }

  export type ConversationsUpsertWithoutMessageInput = {
    update: XOR<ConversationsUpdateWithoutMessageInput, ConversationsUncheckedUpdateWithoutMessageInput>
    create: XOR<ConversationsCreateWithoutMessageInput, ConversationsUncheckedCreateWithoutMessageInput>
    where?: ConversationsWhereInput
  }

  export type ConversationsUpdateToOneWithWhereWithoutMessageInput = {
    where?: ConversationsWhereInput
    data: XOR<ConversationsUpdateWithoutMessageInput, ConversationsUncheckedUpdateWithoutMessageInput>
  }

  export type ConversationsUpdateWithoutMessageInput = {
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UsersUpdateOneRequiredWithoutUser1NestedInput
    user2?: UsersUpdateOneRequiredWithoutUser2NestedInput
  }

  export type ConversationsUncheckedUpdateWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user1_id?: IntFieldUpdateOperationsInput | number
    user2_id?: IntFieldUpdateOperationsInput | number
  }

  export type UsersCreateWithoutUser1Input = {
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionCreateNestedManyWithoutBuyerInput
    seller?: AuctionCreateNestedManyWithoutSellerInput
    user2?: ConversationsCreateNestedManyWithoutUser2Input
    likes?: LikesCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    purchases?: PurchasesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUser1Input = {
    id?: number
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionUncheckedCreateNestedManyWithoutBuyerInput
    seller?: AuctionUncheckedCreateNestedManyWithoutSellerInput
    user2?: ConversationsUncheckedCreateNestedManyWithoutUser2Input
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUser1Input = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUser1Input, UsersUncheckedCreateWithoutUser1Input>
  }

  export type UsersCreateWithoutUser2Input = {
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionCreateNestedManyWithoutBuyerInput
    seller?: AuctionCreateNestedManyWithoutSellerInput
    user1?: ConversationsCreateNestedManyWithoutUser1Input
    likes?: LikesCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    purchases?: PurchasesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUser2Input = {
    id?: number
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionUncheckedCreateNestedManyWithoutBuyerInput
    seller?: AuctionUncheckedCreateNestedManyWithoutSellerInput
    user1?: ConversationsUncheckedCreateNestedManyWithoutUser1Input
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUser2Input = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUser2Input, UsersUncheckedCreateWithoutUser2Input>
  }

  export type MessagesCreateWithoutConversationInput = {
    message: string
    created_at?: Date | string
    is_read?: boolean
  }

  export type MessagesUncheckedCreateWithoutConversationInput = {
    id?: number
    message: string
    created_at?: Date | string
    is_read?: boolean
  }

  export type MessagesCreateOrConnectWithoutConversationInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput>
  }

  export type MessagesCreateManyConversationInputEnvelope = {
    data: MessagesCreateManyConversationInput | MessagesCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutUser1Input = {
    update: XOR<UsersUpdateWithoutUser1Input, UsersUncheckedUpdateWithoutUser1Input>
    create: XOR<UsersCreateWithoutUser1Input, UsersUncheckedCreateWithoutUser1Input>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUser1Input = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUser1Input, UsersUncheckedUpdateWithoutUser1Input>
  }

  export type UsersUpdateWithoutUser1Input = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUpdateManyWithoutSellerNestedInput
    user2?: ConversationsUpdateManyWithoutUser2NestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUser1Input = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUncheckedUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUncheckedUpdateManyWithoutSellerNestedInput
    user2?: ConversationsUncheckedUpdateManyWithoutUser2NestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUpsertWithoutUser2Input = {
    update: XOR<UsersUpdateWithoutUser2Input, UsersUncheckedUpdateWithoutUser2Input>
    create: XOR<UsersCreateWithoutUser2Input, UsersUncheckedCreateWithoutUser2Input>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUser2Input = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUser2Input, UsersUncheckedUpdateWithoutUser2Input>
  }

  export type UsersUpdateWithoutUser2Input = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUpdateManyWithoutUser1NestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUser2Input = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUncheckedUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUncheckedUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUncheckedUpdateManyWithoutUser1NestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessagesUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutConversationInput, MessagesUncheckedUpdateWithoutConversationInput>
    create: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutConversationInput, MessagesUncheckedUpdateWithoutConversationInput>
  }

  export type MessagesUpdateManyWithWhereWithoutConversationInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessagesScalarWhereInput = {
    AND?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    OR?: MessagesScalarWhereInput[]
    NOT?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    id?: IntFilter<"Messages"> | number
    message?: StringFilter<"Messages"> | string
    conversation_id?: IntFilter<"Messages"> | number
    created_at?: DateTimeFilter<"Messages"> | Date | string
    is_read?: BoolFilter<"Messages"> | boolean
  }

  export type AuctionCreateWithoutNotificationsInput = {
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buyer?: UsersCreateNestedOneWithoutBuyerInput
    file: FileCreateNestedOneWithoutAuctionsInput
    seller: UsersCreateNestedOneWithoutSellerInput
    state: StateCreateNestedOneWithoutAuctionsInput
    tag: TagCreateNestedOneWithoutAuctionsInput
    likes?: LikesCreateNestedManyWithoutAuctionInput
    pictures?: PictureCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutNotificationsInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    buyerId?: number | null
    stateId: number
    likes?: LikesUncheckedCreateNestedManyWithoutAuctionInput
    pictures?: PictureUncheckedCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutNotificationsInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutNotificationsInput, AuctionUncheckedCreateWithoutNotificationsInput>
  }

  export type UsersCreateWithoutNotificationsInput = {
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionCreateNestedManyWithoutBuyerInput
    seller?: AuctionCreateNestedManyWithoutSellerInput
    user1?: ConversationsCreateNestedManyWithoutUser1Input
    user2?: ConversationsCreateNestedManyWithoutUser2Input
    likes?: LikesCreateNestedManyWithoutUserInput
    purchases?: PurchasesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutNotificationsInput = {
    id?: number
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionUncheckedCreateNestedManyWithoutBuyerInput
    seller?: AuctionUncheckedCreateNestedManyWithoutSellerInput
    user1?: ConversationsUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationsUncheckedCreateNestedManyWithoutUser2Input
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutNotificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
  }

  export type AuctionUpsertWithoutNotificationsInput = {
    update: XOR<AuctionUpdateWithoutNotificationsInput, AuctionUncheckedUpdateWithoutNotificationsInput>
    create: XOR<AuctionCreateWithoutNotificationsInput, AuctionUncheckedCreateWithoutNotificationsInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutNotificationsInput, AuctionUncheckedUpdateWithoutNotificationsInput>
  }

  export type AuctionUpdateWithoutNotificationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: UsersUpdateOneWithoutBuyerNestedInput
    file?: FileUpdateOneRequiredWithoutAuctionsNestedInput
    seller?: UsersUpdateOneRequiredWithoutSellerNestedInput
    state?: StateUpdateOneRequiredWithoutAuctionsNestedInput
    tag?: TagUpdateOneRequiredWithoutAuctionsNestedInput
    likes?: LikesUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
    likes?: LikesUncheckedUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type UsersUpsertWithoutNotificationsInput = {
    update: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type UsersUpdateWithoutNotificationsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUpdateManyWithoutUser2NestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUncheckedUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUncheckedUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUncheckedUpdateManyWithoutUser2NestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuctionCreateWithoutPurchasesInput = {
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buyer?: UsersCreateNestedOneWithoutBuyerInput
    file: FileCreateNestedOneWithoutAuctionsInput
    seller: UsersCreateNestedOneWithoutSellerInput
    state: StateCreateNestedOneWithoutAuctionsInput
    tag: TagCreateNestedOneWithoutAuctionsInput
    likes?: LikesCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsCreateNestedManyWithoutAuctionInput
    pictures?: PictureCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutPurchasesInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    buyerId?: number | null
    stateId: number
    likes?: LikesUncheckedCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutAuctionInput
    pictures?: PictureUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutPurchasesInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutPurchasesInput, AuctionUncheckedCreateWithoutPurchasesInput>
  }

  export type UsersCreateWithoutPurchasesInput = {
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionCreateNestedManyWithoutBuyerInput
    seller?: AuctionCreateNestedManyWithoutSellerInput
    user1?: ConversationsCreateNestedManyWithoutUser1Input
    user2?: ConversationsCreateNestedManyWithoutUser2Input
    likes?: LikesCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPurchasesInput = {
    id?: number
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionUncheckedCreateNestedManyWithoutBuyerInput
    seller?: AuctionUncheckedCreateNestedManyWithoutSellerInput
    user1?: ConversationsUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationsUncheckedCreateNestedManyWithoutUser2Input
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPurchasesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPurchasesInput, UsersUncheckedCreateWithoutPurchasesInput>
  }

  export type AuctionUpsertWithoutPurchasesInput = {
    update: XOR<AuctionUpdateWithoutPurchasesInput, AuctionUncheckedUpdateWithoutPurchasesInput>
    create: XOR<AuctionCreateWithoutPurchasesInput, AuctionUncheckedCreateWithoutPurchasesInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutPurchasesInput, AuctionUncheckedUpdateWithoutPurchasesInput>
  }

  export type AuctionUpdateWithoutPurchasesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: UsersUpdateOneWithoutBuyerNestedInput
    file?: FileUpdateOneRequiredWithoutAuctionsNestedInput
    seller?: UsersUpdateOneRequiredWithoutSellerNestedInput
    state?: StateUpdateOneRequiredWithoutAuctionsNestedInput
    tag?: TagUpdateOneRequiredWithoutAuctionsNestedInput
    likes?: LikesUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
    likes?: LikesUncheckedUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type UsersUpsertWithoutPurchasesInput = {
    update: XOR<UsersUpdateWithoutPurchasesInput, UsersUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UsersCreateWithoutPurchasesInput, UsersUncheckedCreateWithoutPurchasesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPurchasesInput, UsersUncheckedUpdateWithoutPurchasesInput>
  }

  export type UsersUpdateWithoutPurchasesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUpdateManyWithoutUser2NestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUncheckedUpdateManyWithoutBuyerNestedInput
    seller?: AuctionUncheckedUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUncheckedUpdateManyWithoutUser2NestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuctionCreateWithoutBuyerInput = {
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    file: FileCreateNestedOneWithoutAuctionsInput
    seller: UsersCreateNestedOneWithoutSellerInput
    state: StateCreateNestedOneWithoutAuctionsInput
    tag: TagCreateNestedOneWithoutAuctionsInput
    likes?: LikesCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsCreateNestedManyWithoutAuctionInput
    pictures?: PictureCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutBuyerInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    stateId: number
    likes?: LikesUncheckedCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutAuctionInput
    pictures?: PictureUncheckedCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutBuyerInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutBuyerInput, AuctionUncheckedCreateWithoutBuyerInput>
  }

  export type AuctionCreateManyBuyerInputEnvelope = {
    data: AuctionCreateManyBuyerInput | AuctionCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type AuctionCreateWithoutSellerInput = {
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buyer?: UsersCreateNestedOneWithoutBuyerInput
    file: FileCreateNestedOneWithoutAuctionsInput
    state: StateCreateNestedOneWithoutAuctionsInput
    tag: TagCreateNestedOneWithoutAuctionsInput
    likes?: LikesCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsCreateNestedManyWithoutAuctionInput
    pictures?: PictureCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutSellerInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    buyerId?: number | null
    stateId: number
    likes?: LikesUncheckedCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutAuctionInput
    pictures?: PictureUncheckedCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutSellerInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutSellerInput, AuctionUncheckedCreateWithoutSellerInput>
  }

  export type AuctionCreateManySellerInputEnvelope = {
    data: AuctionCreateManySellerInput | AuctionCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type ConversationsCreateWithoutUser1Input = {
    last_message_at?: Date | string | null
    created_at?: Date | string
    user2: UsersCreateNestedOneWithoutUser2Input
    message?: MessagesCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutUser1Input = {
    id?: number
    last_message_at?: Date | string | null
    created_at?: Date | string
    user2_id: number
    message?: MessagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateOrConnectWithoutUser1Input = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutUser1Input, ConversationsUncheckedCreateWithoutUser1Input>
  }

  export type ConversationsCreateManyUser1InputEnvelope = {
    data: ConversationsCreateManyUser1Input | ConversationsCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type ConversationsCreateWithoutUser2Input = {
    last_message_at?: Date | string | null
    created_at?: Date | string
    user1: UsersCreateNestedOneWithoutUser1Input
    message?: MessagesCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutUser2Input = {
    id?: number
    last_message_at?: Date | string | null
    created_at?: Date | string
    user1_id: number
    message?: MessagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateOrConnectWithoutUser2Input = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutUser2Input, ConversationsUncheckedCreateWithoutUser2Input>
  }

  export type ConversationsCreateManyUser2InputEnvelope = {
    data: ConversationsCreateManyUser2Input | ConversationsCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutUserInput = {
    auction: AuctionCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutUserInput = {
    id?: number
    auction_id: number
  }

  export type LikesCreateOrConnectWithoutUserInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesCreateManyUserInputEnvelope = {
    data: LikesCreateManyUserInput | LikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutUserInput = {
    content: string
    is_read?: boolean
    created_at?: Date | string
    message_id?: number | null
    auction: AuctionCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    auction_id: number
    message_id?: number | null
  }

  export type NotificationsCreateOrConnectWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsCreateManyUserInputEnvelope = {
    data: NotificationsCreateManyUserInput | NotificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchasesCreateWithoutUserInput = {
    purchase_date?: Date | string
    final_price: number
    auction: AuctionCreateNestedOneWithoutPurchasesInput
  }

  export type PurchasesUncheckedCreateWithoutUserInput = {
    id?: number
    purchase_date?: Date | string
    final_price: number
    auction_id: number
  }

  export type PurchasesCreateOrConnectWithoutUserInput = {
    where: PurchasesWhereUniqueInput
    create: XOR<PurchasesCreateWithoutUserInput, PurchasesUncheckedCreateWithoutUserInput>
  }

  export type PurchasesCreateManyUserInputEnvelope = {
    data: PurchasesCreateManyUserInput | PurchasesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuctionUpsertWithWhereUniqueWithoutBuyerInput = {
    where: AuctionWhereUniqueInput
    update: XOR<AuctionUpdateWithoutBuyerInput, AuctionUncheckedUpdateWithoutBuyerInput>
    create: XOR<AuctionCreateWithoutBuyerInput, AuctionUncheckedCreateWithoutBuyerInput>
  }

  export type AuctionUpdateWithWhereUniqueWithoutBuyerInput = {
    where: AuctionWhereUniqueInput
    data: XOR<AuctionUpdateWithoutBuyerInput, AuctionUncheckedUpdateWithoutBuyerInput>
  }

  export type AuctionUpdateManyWithWhereWithoutBuyerInput = {
    where: AuctionScalarWhereInput
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyWithoutBuyerInput>
  }

  export type AuctionScalarWhereInput = {
    AND?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
    OR?: AuctionScalarWhereInput[]
    NOT?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
    id?: IntFilter<"Auction"> | number
    title?: StringFilter<"Auction"> | string
    description?: StringFilter<"Auction"> | string
    fileId?: IntFilter<"Auction"> | number
    initialPrice?: FloatFilter<"Auction"> | number
    actualBidPrice?: FloatFilter<"Auction"> | number
    startBidDate?: DateTimeFilter<"Auction"> | Date | string
    endBidDate?: DateTimeNullableFilter<"Auction"> | Date | string | null
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    updatedAt?: DateTimeFilter<"Auction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Auction"> | Date | string | null
    tagId?: IntFilter<"Auction"> | number
    sellerId?: IntFilter<"Auction"> | number
    buyerId?: IntNullableFilter<"Auction"> | number | null
    stateId?: IntFilter<"Auction"> | number
  }

  export type AuctionUpsertWithWhereUniqueWithoutSellerInput = {
    where: AuctionWhereUniqueInput
    update: XOR<AuctionUpdateWithoutSellerInput, AuctionUncheckedUpdateWithoutSellerInput>
    create: XOR<AuctionCreateWithoutSellerInput, AuctionUncheckedCreateWithoutSellerInput>
  }

  export type AuctionUpdateWithWhereUniqueWithoutSellerInput = {
    where: AuctionWhereUniqueInput
    data: XOR<AuctionUpdateWithoutSellerInput, AuctionUncheckedUpdateWithoutSellerInput>
  }

  export type AuctionUpdateManyWithWhereWithoutSellerInput = {
    where: AuctionScalarWhereInput
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyWithoutSellerInput>
  }

  export type ConversationsUpsertWithWhereUniqueWithoutUser1Input = {
    where: ConversationsWhereUniqueInput
    update: XOR<ConversationsUpdateWithoutUser1Input, ConversationsUncheckedUpdateWithoutUser1Input>
    create: XOR<ConversationsCreateWithoutUser1Input, ConversationsUncheckedCreateWithoutUser1Input>
  }

  export type ConversationsUpdateWithWhereUniqueWithoutUser1Input = {
    where: ConversationsWhereUniqueInput
    data: XOR<ConversationsUpdateWithoutUser1Input, ConversationsUncheckedUpdateWithoutUser1Input>
  }

  export type ConversationsUpdateManyWithWhereWithoutUser1Input = {
    where: ConversationsScalarWhereInput
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyWithoutUser1Input>
  }

  export type ConversationsScalarWhereInput = {
    AND?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
    OR?: ConversationsScalarWhereInput[]
    NOT?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
    id?: IntFilter<"Conversations"> | number
    last_message_at?: DateTimeNullableFilter<"Conversations"> | Date | string | null
    created_at?: DateTimeFilter<"Conversations"> | Date | string
    user1_id?: IntFilter<"Conversations"> | number
    user2_id?: IntFilter<"Conversations"> | number
  }

  export type ConversationsUpsertWithWhereUniqueWithoutUser2Input = {
    where: ConversationsWhereUniqueInput
    update: XOR<ConversationsUpdateWithoutUser2Input, ConversationsUncheckedUpdateWithoutUser2Input>
    create: XOR<ConversationsCreateWithoutUser2Input, ConversationsUncheckedCreateWithoutUser2Input>
  }

  export type ConversationsUpdateWithWhereUniqueWithoutUser2Input = {
    where: ConversationsWhereUniqueInput
    data: XOR<ConversationsUpdateWithoutUser2Input, ConversationsUncheckedUpdateWithoutUser2Input>
  }

  export type ConversationsUpdateManyWithWhereWithoutUser2Input = {
    where: ConversationsScalarWhereInput
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyWithoutUser2Input>
  }

  export type LikesUpsertWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
  }

  export type LikesUpdateManyWithWhereWithoutUserInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutUserInput>
  }

  export type LikesScalarWhereInput = {
    AND?: LikesScalarWhereInput | LikesScalarWhereInput[]
    OR?: LikesScalarWhereInput[]
    NOT?: LikesScalarWhereInput | LikesScalarWhereInput[]
    id?: IntFilter<"Likes"> | number
    user_id?: IntFilter<"Likes"> | number
    auction_id?: IntFilter<"Likes"> | number
  }

  export type NotificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutUserInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    id?: IntFilter<"Notifications"> | number
    content?: StringFilter<"Notifications"> | string
    is_read?: BoolFilter<"Notifications"> | boolean
    created_at?: DateTimeFilter<"Notifications"> | Date | string
    user_id?: IntFilter<"Notifications"> | number
    auction_id?: IntFilter<"Notifications"> | number
    message_id?: IntNullableFilter<"Notifications"> | number | null
  }

  export type PurchasesUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchasesWhereUniqueInput
    update: XOR<PurchasesUpdateWithoutUserInput, PurchasesUncheckedUpdateWithoutUserInput>
    create: XOR<PurchasesCreateWithoutUserInput, PurchasesUncheckedCreateWithoutUserInput>
  }

  export type PurchasesUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchasesWhereUniqueInput
    data: XOR<PurchasesUpdateWithoutUserInput, PurchasesUncheckedUpdateWithoutUserInput>
  }

  export type PurchasesUpdateManyWithWhereWithoutUserInput = {
    where: PurchasesScalarWhereInput
    data: XOR<PurchasesUpdateManyMutationInput, PurchasesUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchasesScalarWhereInput = {
    AND?: PurchasesScalarWhereInput | PurchasesScalarWhereInput[]
    OR?: PurchasesScalarWhereInput[]
    NOT?: PurchasesScalarWhereInput | PurchasesScalarWhereInput[]
    id?: IntFilter<"Purchases"> | number
    purchase_date?: DateTimeFilter<"Purchases"> | Date | string
    final_price?: FloatFilter<"Purchases"> | number
    auction_id?: IntFilter<"Purchases"> | number
    user_id?: IntFilter<"Purchases"> | number
  }

  export type AuctionCreateWithoutFileInput = {
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buyer?: UsersCreateNestedOneWithoutBuyerInput
    seller: UsersCreateNestedOneWithoutSellerInput
    state: StateCreateNestedOneWithoutAuctionsInput
    tag: TagCreateNestedOneWithoutAuctionsInput
    likes?: LikesCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsCreateNestedManyWithoutAuctionInput
    pictures?: PictureCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutFileInput = {
    id?: number
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    buyerId?: number | null
    stateId: number
    likes?: LikesUncheckedCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutAuctionInput
    pictures?: PictureUncheckedCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutFileInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutFileInput, AuctionUncheckedCreateWithoutFileInput>
  }

  export type AuctionCreateManyFileInputEnvelope = {
    data: AuctionCreateManyFileInput | AuctionCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type AuctionUpsertWithWhereUniqueWithoutFileInput = {
    where: AuctionWhereUniqueInput
    update: XOR<AuctionUpdateWithoutFileInput, AuctionUncheckedUpdateWithoutFileInput>
    create: XOR<AuctionCreateWithoutFileInput, AuctionUncheckedCreateWithoutFileInput>
  }

  export type AuctionUpdateWithWhereUniqueWithoutFileInput = {
    where: AuctionWhereUniqueInput
    data: XOR<AuctionUpdateWithoutFileInput, AuctionUncheckedUpdateWithoutFileInput>
  }

  export type AuctionUpdateManyWithWhereWithoutFileInput = {
    where: AuctionScalarWhereInput
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyWithoutFileInput>
  }

  export type UsersCreateWithoutBuyerInput = {
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    seller?: AuctionCreateNestedManyWithoutSellerInput
    user1?: ConversationsCreateNestedManyWithoutUser1Input
    user2?: ConversationsCreateNestedManyWithoutUser2Input
    likes?: LikesCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    purchases?: PurchasesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutBuyerInput = {
    id?: number
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    seller?: AuctionUncheckedCreateNestedManyWithoutSellerInput
    user1?: ConversationsUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationsUncheckedCreateNestedManyWithoutUser2Input
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutBuyerInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBuyerInput, UsersUncheckedCreateWithoutBuyerInput>
  }

  export type FileCreateWithoutAuctionsInput = {
    content: string
    contentType: string
  }

  export type FileUncheckedCreateWithoutAuctionsInput = {
    id?: number
    content: string
    contentType: string
  }

  export type FileCreateOrConnectWithoutAuctionsInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutAuctionsInput, FileUncheckedCreateWithoutAuctionsInput>
  }

  export type UsersCreateWithoutSellerInput = {
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionCreateNestedManyWithoutBuyerInput
    user1?: ConversationsCreateNestedManyWithoutUser1Input
    user2?: ConversationsCreateNestedManyWithoutUser2Input
    likes?: LikesCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    purchases?: PurchasesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSellerInput = {
    id?: number
    first_name: string
    last_name: string
    birth_date: Date | string
    email: string
    password: string
    picture?: string | null
    balance: number
    role: string
    created_at?: Date | string
    updated_at: Date | string
    deleted_at?: Date | string | null
    buyer?: AuctionUncheckedCreateNestedManyWithoutBuyerInput
    user1?: ConversationsUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationsUncheckedCreateNestedManyWithoutUser2Input
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSellerInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSellerInput, UsersUncheckedCreateWithoutSellerInput>
  }

  export type StateCreateWithoutAuctionsInput = {
    stateType: string
  }

  export type StateUncheckedCreateWithoutAuctionsInput = {
    id?: number
    stateType: string
  }

  export type StateCreateOrConnectWithoutAuctionsInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutAuctionsInput, StateUncheckedCreateWithoutAuctionsInput>
  }

  export type TagCreateWithoutAuctionsInput = {
    name: string
  }

  export type TagUncheckedCreateWithoutAuctionsInput = {
    id?: number
    name: string
  }

  export type TagCreateOrConnectWithoutAuctionsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutAuctionsInput, TagUncheckedCreateWithoutAuctionsInput>
  }

  export type LikesCreateWithoutAuctionInput = {
    user: UsersCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutAuctionInput = {
    id?: number
    user_id: number
  }

  export type LikesCreateOrConnectWithoutAuctionInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutAuctionInput, LikesUncheckedCreateWithoutAuctionInput>
  }

  export type LikesCreateManyAuctionInputEnvelope = {
    data: LikesCreateManyAuctionInput | LikesCreateManyAuctionInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutAuctionInput = {
    content: string
    is_read?: boolean
    created_at?: Date | string
    message_id?: number | null
    user: UsersCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateWithoutAuctionInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    user_id: number
    message_id?: number | null
  }

  export type NotificationsCreateOrConnectWithoutAuctionInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutAuctionInput, NotificationsUncheckedCreateWithoutAuctionInput>
  }

  export type NotificationsCreateManyAuctionInputEnvelope = {
    data: NotificationsCreateManyAuctionInput | NotificationsCreateManyAuctionInput[]
    skipDuplicates?: boolean
  }

  export type PictureCreateWithoutAuctionInput = {
    path: string
  }

  export type PictureUncheckedCreateWithoutAuctionInput = {
    id?: number
    path: string
  }

  export type PictureCreateOrConnectWithoutAuctionInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutAuctionInput, PictureUncheckedCreateWithoutAuctionInput>
  }

  export type PictureCreateManyAuctionInputEnvelope = {
    data: PictureCreateManyAuctionInput | PictureCreateManyAuctionInput[]
    skipDuplicates?: boolean
  }

  export type PurchasesCreateWithoutAuctionInput = {
    purchase_date?: Date | string
    final_price: number
    user: UsersCreateNestedOneWithoutPurchasesInput
  }

  export type PurchasesUncheckedCreateWithoutAuctionInput = {
    id?: number
    purchase_date?: Date | string
    final_price: number
    user_id: number
  }

  export type PurchasesCreateOrConnectWithoutAuctionInput = {
    where: PurchasesWhereUniqueInput
    create: XOR<PurchasesCreateWithoutAuctionInput, PurchasesUncheckedCreateWithoutAuctionInput>
  }

  export type PurchasesCreateManyAuctionInputEnvelope = {
    data: PurchasesCreateManyAuctionInput | PurchasesCreateManyAuctionInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutBuyerInput = {
    update: XOR<UsersUpdateWithoutBuyerInput, UsersUncheckedUpdateWithoutBuyerInput>
    create: XOR<UsersCreateWithoutBuyerInput, UsersUncheckedCreateWithoutBuyerInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBuyerInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBuyerInput, UsersUncheckedUpdateWithoutBuyerInput>
  }

  export type UsersUpdateWithoutBuyerInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seller?: AuctionUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUpdateManyWithoutUser2NestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seller?: AuctionUncheckedUpdateManyWithoutSellerNestedInput
    user1?: ConversationsUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUncheckedUpdateManyWithoutUser2NestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FileUpsertWithoutAuctionsInput = {
    update: XOR<FileUpdateWithoutAuctionsInput, FileUncheckedUpdateWithoutAuctionsInput>
    create: XOR<FileCreateWithoutAuctionsInput, FileUncheckedCreateWithoutAuctionsInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutAuctionsInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutAuctionsInput, FileUncheckedUpdateWithoutAuctionsInput>
  }

  export type FileUpdateWithoutAuctionsInput = {
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
  }

  export type FileUncheckedUpdateWithoutAuctionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUpsertWithoutSellerInput = {
    update: XOR<UsersUpdateWithoutSellerInput, UsersUncheckedUpdateWithoutSellerInput>
    create: XOR<UsersCreateWithoutSellerInput, UsersUncheckedCreateWithoutSellerInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSellerInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSellerInput, UsersUncheckedUpdateWithoutSellerInput>
  }

  export type UsersUpdateWithoutSellerInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUpdateManyWithoutBuyerNestedInput
    user1?: ConversationsUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUpdateManyWithoutUser2NestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: AuctionUncheckedUpdateManyWithoutBuyerNestedInput
    user1?: ConversationsUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationsUncheckedUpdateManyWithoutUser2NestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StateUpsertWithoutAuctionsInput = {
    update: XOR<StateUpdateWithoutAuctionsInput, StateUncheckedUpdateWithoutAuctionsInput>
    create: XOR<StateCreateWithoutAuctionsInput, StateUncheckedCreateWithoutAuctionsInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutAuctionsInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutAuctionsInput, StateUncheckedUpdateWithoutAuctionsInput>
  }

  export type StateUpdateWithoutAuctionsInput = {
    stateType?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateWithoutAuctionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    stateType?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpsertWithoutAuctionsInput = {
    update: XOR<TagUpdateWithoutAuctionsInput, TagUncheckedUpdateWithoutAuctionsInput>
    create: XOR<TagCreateWithoutAuctionsInput, TagUncheckedCreateWithoutAuctionsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutAuctionsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutAuctionsInput, TagUncheckedUpdateWithoutAuctionsInput>
  }

  export type TagUpdateWithoutAuctionsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutAuctionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LikesUpsertWithWhereUniqueWithoutAuctionInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutAuctionInput, LikesUncheckedUpdateWithoutAuctionInput>
    create: XOR<LikesCreateWithoutAuctionInput, LikesUncheckedCreateWithoutAuctionInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutAuctionInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutAuctionInput, LikesUncheckedUpdateWithoutAuctionInput>
  }

  export type LikesUpdateManyWithWhereWithoutAuctionInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutAuctionInput>
  }

  export type NotificationsUpsertWithWhereUniqueWithoutAuctionInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutAuctionInput, NotificationsUncheckedUpdateWithoutAuctionInput>
    create: XOR<NotificationsCreateWithoutAuctionInput, NotificationsUncheckedCreateWithoutAuctionInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutAuctionInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutAuctionInput, NotificationsUncheckedUpdateWithoutAuctionInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutAuctionInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutAuctionInput>
  }

  export type PictureUpsertWithWhereUniqueWithoutAuctionInput = {
    where: PictureWhereUniqueInput
    update: XOR<PictureUpdateWithoutAuctionInput, PictureUncheckedUpdateWithoutAuctionInput>
    create: XOR<PictureCreateWithoutAuctionInput, PictureUncheckedCreateWithoutAuctionInput>
  }

  export type PictureUpdateWithWhereUniqueWithoutAuctionInput = {
    where: PictureWhereUniqueInput
    data: XOR<PictureUpdateWithoutAuctionInput, PictureUncheckedUpdateWithoutAuctionInput>
  }

  export type PictureUpdateManyWithWhereWithoutAuctionInput = {
    where: PictureScalarWhereInput
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyWithoutAuctionInput>
  }

  export type PictureScalarWhereInput = {
    AND?: PictureScalarWhereInput | PictureScalarWhereInput[]
    OR?: PictureScalarWhereInput[]
    NOT?: PictureScalarWhereInput | PictureScalarWhereInput[]
    id?: IntFilter<"Picture"> | number
    path?: StringFilter<"Picture"> | string
    auctionId?: IntFilter<"Picture"> | number
  }

  export type PurchasesUpsertWithWhereUniqueWithoutAuctionInput = {
    where: PurchasesWhereUniqueInput
    update: XOR<PurchasesUpdateWithoutAuctionInput, PurchasesUncheckedUpdateWithoutAuctionInput>
    create: XOR<PurchasesCreateWithoutAuctionInput, PurchasesUncheckedCreateWithoutAuctionInput>
  }

  export type PurchasesUpdateWithWhereUniqueWithoutAuctionInput = {
    where: PurchasesWhereUniqueInput
    data: XOR<PurchasesUpdateWithoutAuctionInput, PurchasesUncheckedUpdateWithoutAuctionInput>
  }

  export type PurchasesUpdateManyWithWhereWithoutAuctionInput = {
    where: PurchasesScalarWhereInput
    data: XOR<PurchasesUpdateManyMutationInput, PurchasesUncheckedUpdateManyWithoutAuctionInput>
  }

  export type AuctionCreateWithoutPicturesInput = {
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buyer?: UsersCreateNestedOneWithoutBuyerInput
    file: FileCreateNestedOneWithoutAuctionsInput
    seller: UsersCreateNestedOneWithoutSellerInput
    state: StateCreateNestedOneWithoutAuctionsInput
    tag: TagCreateNestedOneWithoutAuctionsInput
    likes?: LikesCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutPicturesInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    buyerId?: number | null
    stateId: number
    likes?: LikesUncheckedCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutPicturesInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutPicturesInput, AuctionUncheckedCreateWithoutPicturesInput>
  }

  export type AuctionUpsertWithoutPicturesInput = {
    update: XOR<AuctionUpdateWithoutPicturesInput, AuctionUncheckedUpdateWithoutPicturesInput>
    create: XOR<AuctionCreateWithoutPicturesInput, AuctionUncheckedCreateWithoutPicturesInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutPicturesInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutPicturesInput, AuctionUncheckedUpdateWithoutPicturesInput>
  }

  export type AuctionUpdateWithoutPicturesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: UsersUpdateOneWithoutBuyerNestedInput
    file?: FileUpdateOneRequiredWithoutAuctionsNestedInput
    seller?: UsersUpdateOneRequiredWithoutSellerNestedInput
    state?: StateUpdateOneRequiredWithoutAuctionsNestedInput
    tag?: TagUpdateOneRequiredWithoutAuctionsNestedInput
    likes?: LikesUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutPicturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
    likes?: LikesUncheckedUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionCreateWithoutTagInput = {
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buyer?: UsersCreateNestedOneWithoutBuyerInput
    file: FileCreateNestedOneWithoutAuctionsInput
    seller: UsersCreateNestedOneWithoutSellerInput
    state: StateCreateNestedOneWithoutAuctionsInput
    likes?: LikesCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsCreateNestedManyWithoutAuctionInput
    pictures?: PictureCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutTagInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sellerId: number
    buyerId?: number | null
    stateId: number
    likes?: LikesUncheckedCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutAuctionInput
    pictures?: PictureUncheckedCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutTagInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutTagInput, AuctionUncheckedCreateWithoutTagInput>
  }

  export type AuctionCreateManyTagInputEnvelope = {
    data: AuctionCreateManyTagInput | AuctionCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type AuctionUpsertWithWhereUniqueWithoutTagInput = {
    where: AuctionWhereUniqueInput
    update: XOR<AuctionUpdateWithoutTagInput, AuctionUncheckedUpdateWithoutTagInput>
    create: XOR<AuctionCreateWithoutTagInput, AuctionUncheckedCreateWithoutTagInput>
  }

  export type AuctionUpdateWithWhereUniqueWithoutTagInput = {
    where: AuctionWhereUniqueInput
    data: XOR<AuctionUpdateWithoutTagInput, AuctionUncheckedUpdateWithoutTagInput>
  }

  export type AuctionUpdateManyWithWhereWithoutTagInput = {
    where: AuctionScalarWhereInput
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyWithoutTagInput>
  }

  export type AuctionCreateWithoutStateInput = {
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buyer?: UsersCreateNestedOneWithoutBuyerInput
    file: FileCreateNestedOneWithoutAuctionsInput
    seller: UsersCreateNestedOneWithoutSellerInput
    tag: TagCreateNestedOneWithoutAuctionsInput
    likes?: LikesCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsCreateNestedManyWithoutAuctionInput
    pictures?: PictureCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutStateInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    buyerId?: number | null
    likes?: LikesUncheckedCreateNestedManyWithoutAuctionInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutAuctionInput
    pictures?: PictureUncheckedCreateNestedManyWithoutAuctionInput
    purchases?: PurchasesUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutStateInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutStateInput, AuctionUncheckedCreateWithoutStateInput>
  }

  export type AuctionCreateManyStateInputEnvelope = {
    data: AuctionCreateManyStateInput | AuctionCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type AuctionUpsertWithWhereUniqueWithoutStateInput = {
    where: AuctionWhereUniqueInput
    update: XOR<AuctionUpdateWithoutStateInput, AuctionUncheckedUpdateWithoutStateInput>
    create: XOR<AuctionCreateWithoutStateInput, AuctionUncheckedCreateWithoutStateInput>
  }

  export type AuctionUpdateWithWhereUniqueWithoutStateInput = {
    where: AuctionWhereUniqueInput
    data: XOR<AuctionUpdateWithoutStateInput, AuctionUncheckedUpdateWithoutStateInput>
  }

  export type AuctionUpdateManyWithWhereWithoutStateInput = {
    where: AuctionScalarWhereInput
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyWithoutStateInput>
  }

  export type MessagesCreateManyConversationInput = {
    id?: number
    message: string
    created_at?: Date | string
    is_read?: boolean
  }

  export type MessagesUpdateWithoutConversationInput = {
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessagesUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessagesUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuctionCreateManyBuyerInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    stateId: number
  }

  export type AuctionCreateManySellerInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    buyerId?: number | null
    stateId: number
  }

  export type ConversationsCreateManyUser1Input = {
    id?: number
    last_message_at?: Date | string | null
    created_at?: Date | string
    user2_id: number
  }

  export type ConversationsCreateManyUser2Input = {
    id?: number
    last_message_at?: Date | string | null
    created_at?: Date | string
    user1_id: number
  }

  export type LikesCreateManyUserInput = {
    id?: number
    auction_id: number
  }

  export type NotificationsCreateManyUserInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    auction_id: number
    message_id?: number | null
  }

  export type PurchasesCreateManyUserInput = {
    id?: number
    purchase_date?: Date | string
    final_price: number
    auction_id: number
  }

  export type AuctionUpdateWithoutBuyerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file?: FileUpdateOneRequiredWithoutAuctionsNestedInput
    seller?: UsersUpdateOneRequiredWithoutSellerNestedInput
    state?: StateUpdateOneRequiredWithoutAuctionsNestedInput
    tag?: TagUpdateOneRequiredWithoutAuctionsNestedInput
    likes?: LikesUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    stateId?: IntFieldUpdateOperationsInput | number
    likes?: LikesUncheckedUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    stateId?: IntFieldUpdateOperationsInput | number
  }

  export type AuctionUpdateWithoutSellerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: UsersUpdateOneWithoutBuyerNestedInput
    file?: FileUpdateOneRequiredWithoutAuctionsNestedInput
    state?: StateUpdateOneRequiredWithoutAuctionsNestedInput
    tag?: TagUpdateOneRequiredWithoutAuctionsNestedInput
    likes?: LikesUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
    likes?: LikesUncheckedUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateManyWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversationsUpdateWithoutUser1Input = {
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user2?: UsersUpdateOneRequiredWithoutUser2NestedInput
    message?: MessagesUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutUser1Input = {
    id?: IntFieldUpdateOperationsInput | number
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user2_id?: IntFieldUpdateOperationsInput | number
    message?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateManyWithoutUser1Input = {
    id?: IntFieldUpdateOperationsInput | number
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user2_id?: IntFieldUpdateOperationsInput | number
  }

  export type ConversationsUpdateWithoutUser2Input = {
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UsersUpdateOneRequiredWithoutUser1NestedInput
    message?: MessagesUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutUser2Input = {
    id?: IntFieldUpdateOperationsInput | number
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user1_id?: IntFieldUpdateOperationsInput | number
    message?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateManyWithoutUser2Input = {
    id?: IntFieldUpdateOperationsInput | number
    last_message_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user1_id?: IntFieldUpdateOperationsInput | number
  }

  export type LikesUpdateWithoutUserInput = {
    auction?: AuctionUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    auction_id?: IntFieldUpdateOperationsInput | number
  }

  export type LikesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    auction_id?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationsUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    message_id?: NullableIntFieldUpdateOperationsInput | number | null
    auction?: AuctionUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auction_id?: IntFieldUpdateOperationsInput | number
    message_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auction_id?: IntFieldUpdateOperationsInput | number
    message_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PurchasesUpdateWithoutUserInput = {
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    final_price?: FloatFieldUpdateOperationsInput | number
    auction?: AuctionUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchasesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    final_price?: FloatFieldUpdateOperationsInput | number
    auction_id?: IntFieldUpdateOperationsInput | number
  }

  export type PurchasesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    final_price?: FloatFieldUpdateOperationsInput | number
    auction_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuctionCreateManyFileInput = {
    id?: number
    title: string
    description: string
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    buyerId?: number | null
    stateId: number
  }

  export type AuctionUpdateWithoutFileInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: UsersUpdateOneWithoutBuyerNestedInput
    seller?: UsersUpdateOneRequiredWithoutSellerNestedInput
    state?: StateUpdateOneRequiredWithoutAuctionsNestedInput
    tag?: TagUpdateOneRequiredWithoutAuctionsNestedInput
    likes?: LikesUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
    likes?: LikesUncheckedUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateManyWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
  }

  export type LikesCreateManyAuctionInput = {
    id?: number
    user_id: number
  }

  export type NotificationsCreateManyAuctionInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    user_id: number
    message_id?: number | null
  }

  export type PictureCreateManyAuctionInput = {
    id?: number
    path: string
  }

  export type PurchasesCreateManyAuctionInput = {
    id?: number
    purchase_date?: Date | string
    final_price: number
    user_id: number
  }

  export type LikesUpdateWithoutAuctionInput = {
    user?: UsersUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutAuctionInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type LikesUncheckedUpdateManyWithoutAuctionInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationsUpdateWithoutAuctionInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    message_id?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UsersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutAuctionInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    message_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationsUncheckedUpdateManyWithoutAuctionInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    message_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PictureUpdateWithoutAuctionInput = {
    path?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateWithoutAuctionInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateManyWithoutAuctionInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
  }

  export type PurchasesUpdateWithoutAuctionInput = {
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    final_price?: FloatFieldUpdateOperationsInput | number
    user?: UsersUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchasesUncheckedUpdateWithoutAuctionInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    final_price?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PurchasesUncheckedUpdateManyWithoutAuctionInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    final_price?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuctionCreateManyTagInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sellerId: number
    buyerId?: number | null
    stateId: number
  }

  export type AuctionUpdateWithoutTagInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: UsersUpdateOneWithoutBuyerNestedInput
    file?: FileUpdateOneRequiredWithoutAuctionsNestedInput
    seller?: UsersUpdateOneRequiredWithoutSellerNestedInput
    state?: StateUpdateOneRequiredWithoutAuctionsNestedInput
    likes?: LikesUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
    likes?: LikesUncheckedUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: IntFieldUpdateOperationsInput | number
  }

  export type AuctionCreateManyStateInput = {
    id?: number
    title: string
    description: string
    fileId: number
    initialPrice: number
    actualBidPrice: number
    startBidDate: Date | string
    endBidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tagId: number
    sellerId: number
    buyerId?: number | null
  }

  export type AuctionUpdateWithoutStateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: UsersUpdateOneWithoutBuyerNestedInput
    file?: FileUpdateOneRequiredWithoutAuctionsNestedInput
    seller?: UsersUpdateOneRequiredWithoutSellerNestedInput
    tag?: TagUpdateOneRequiredWithoutAuctionsNestedInput
    likes?: LikesUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: LikesUncheckedUpdateManyWithoutAuctionNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutAuctionNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutAuctionNestedInput
    purchases?: PurchasesUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    initialPrice?: FloatFieldUpdateOperationsInput | number
    actualBidPrice?: FloatFieldUpdateOperationsInput | number
    startBidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endBidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tagId?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
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