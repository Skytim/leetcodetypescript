/*
 * @lc app=leetcode id=2635 lang=typescript
 *
 * [2635] Apply Transform Over Each Element in Array
 */

// @lc code=start
export function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    /// Method: 1
    let result: number[] = [];
    let result2: Array<number> = [];
    let result3 = new Int32Array(arr.length);
    for (let i = 0; i < arr.length; ++i) {
        result[i] = fn(arr[i], i);
    }
    return result;

    /// Method: 2
    result = new Array(arr.length);
    for (const i in arr) {
        result[i] = fn(arr[i], Number(i));
    }
    return result;

    /// Method: 3
    result = [];
    for (let i = 0; i < arr.length; ++i) {
        result.push(fn(arr[i], i));
    }
    return result;
    /// Method: 4
    result2 = new Array<number>(arr.length);
    for (let i = 0; i < arr.length; ++i) {
        result2[i] = fn(arr[i], i);
    }
    return result2;
    /// Method: 5
    result3 = new Int32Array(arr.length);
    for (let i = 0; i < arr.length; ++i) {
        result3[i] = fn(arr[i], i);
    }
    return result3 as unknown as number[];
    /// Method: 6
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
}
// @lc code=end

let arr = [1, 2, 3];
function plusone(n: number) {
    return n + 1;
}

console.log(map(arr, plusone));

function plusI(n: number, i: number) {
    return n + i;
}

console.log(map(arr, plusI));

function constant() {
    return 42;
}

console.log(map(arr, constant));
