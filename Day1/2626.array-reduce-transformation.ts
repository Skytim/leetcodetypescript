/*
 * @lc app=leetcode id=2626 lang=typescript
 *
 * [2626] Array Reduce Transformation
 */

// @lc code=start
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    // let result = init
    // for (let i = 0; i < nums.length; i++) {
    //     result = fn(result, nums[i])
    // }
    // return result
    /// Approach 1: For...of Loop
    let accumulator = init;
    for (const element of nums) {
        accumulator = fn(accumulator, element);
    }
    /// Approach 2: Array.forEach Loop
    // nums.forEach((element) => {
    //     accumulator = fn(accumulator, element);
    // });

    return accumulator;

    // 1. 陣列中所有的值相加
    // 2. 根據鍵值建立索引（常見）
    // 3. 結合 Array.filter 和 Array.map 效能較高
};


const nums = [1, 2, 3];

const sum = reduce(nums, (a, b) => a + b, 0);
console.log(sum); // 6
