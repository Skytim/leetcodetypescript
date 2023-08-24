/*
 * @lc app=leetcode id=2635 lang=typescript
 *
 * [2635] Apply Transform Over Each Element in Array
 */

// @lc code=start
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result: number[] = [];
    arr.forEach((item, index) => {
        result.push(fn(item, index));
    });
    return result;
}
// @lc code=end

let arr = [1, 2, 3];
function plusone(n: number) {
    return n + 1;
}

const newArray = map(arr, plusone);
