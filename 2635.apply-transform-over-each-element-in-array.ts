/*
 * @lc app=leetcode id=2635 lang=typescript
 *
 * [2635] Apply Transform Over Each Element in Array
 */

// @lc code=start
module ApplyTransformOverEachElementInArray {
    function map(arr: number[], fn: (n: number) => number): number[] {
        let result: number[] = [];
        for (let i = 0; i < arr.length; ++i) {
            result[i] = fn(arr[i]);
        }
        return result;
    }
    // @lc code=end

    function plusone(n: number) {
        return n + 1;
    }

    let arr = [1, 2, 3];
    console.log(map(arr, plusone));

}