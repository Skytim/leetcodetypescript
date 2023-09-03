module Generics {
    function createArray<T>(length: number, value: T): Array<T> {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
    console.log(createArray<string>(3, 'x')); // ['x', 'x', 'x']
    console.log(createArray(3, 5)); // ['x', 'x', 'x']
}
