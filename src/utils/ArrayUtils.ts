export function* choose<A, B>(values:A[], f:(value:A)=>(B|undefined)):IterableIterator<B> {
    for (const value of values) {
        const result = f(value);
        if (result !== undefined) {
            yield result;
        }
    }
}
export function flatten<T>(input: T[][]):T[] {
    return Array.prototype.concat.apply([], input);
}
export function uniq<T>(input: T[]):T[] {
    return Array.from(new Set(input));
}