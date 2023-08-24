/*
 * @lc app=leetcode id=2620 lang=typescript
 *
 * [2620] Counter
 */

// @lc code=start
function createCounter(n: number): () => number {
    return function () {
        return n++;
    };
}

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
// @lc code=end
