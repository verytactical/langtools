import * as B from './runtime';
import * as L from './located';
export type Parser<T> = {
    keep: L.Parser<T>;
    skip: (space: L.Parser<unknown>) => L.Parser<T>;
};
export type Located<T> = T & {
    readonly loc: L.Loc;
};
export declare const terminal: <T>(child: L.Parser<T>) => Parser<T>;
export declare const rule: <T>(child: Parser<T>) => Parser<T>;
export declare const pure: <const T>(t: T) => Parser<T>;
export declare const ap: <T, U>(left: Parser<(t: T) => U>, right: Parser<T>) => Parser<U>;
export declare const left: <T, U>(left: Parser<T>, right: Parser<U>) => Parser<T>;
export declare const right: <T, U>(left: Parser<T>, right: Parser<U>) => Parser<U>;
export declare const seq: <T, U>(left: Parser<T>, right: Parser<U>) => Parser<[T, U]>;
export declare const field: <T, K extends string, V>(left: Parser<T>, key: K, right: Parser<V>) => Parser<Record<K, T> & V>;
export declare const alt: <T, U>(left: Parser<T>, right: Parser<U>) => Parser<T | U>;
export declare const str: <K extends string>(s: K) => Parser<K>;
export declare const sat: (cond: (c: string) => boolean, message: string) => Parser<string>;
export declare const regex: <K = string>(s: string, insensitive?: boolean) => Parser<K>;
export declare const stry: <T>(child: Parser<T>) => Parser<string>;
export declare const app: <A, B>(child: Parser<A>, f: (a: A) => B) => Parser<B>;
export declare const ref: <A>(child: () => Parser<A>) => Parser<A>;
export declare const star: <T>(child: Parser<T>) => Parser<T[]>;
export declare const any: Parser<string>;
export declare const eps: Parser<{}>;
export declare const plus: <T>(child: Parser<T>) => Parser<T[]>;
export declare const opt: <T>(child: Parser<T>) => Parser<T | undefined>;
export declare const lookPos: <T>(child: Parser<T>) => Parser<T>;
export declare const lookNeg: <T>(child: Parser<T>) => Parser<undefined>;
export declare const eof: Parser<undefined>;
export declare const debug: <T>(child: Parser<T>) => Parser<T>;
export declare const where: Parser<number>;
export declare const withLoc: <T>(child: Parser<T>) => Parser<[T, L.Loc]>;
export declare const loc: <T>(child: Parser<T>) => Parser<Located<T>>;
export declare const lex: <T>(child: Parser<T>) => Parser<T>;
export declare const compile: <T>(child: Parser<T>, space: Parser<unknown>) => B.Parser<T>;
//# sourceMappingURL=spaced.d.ts.map