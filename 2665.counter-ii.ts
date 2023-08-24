/*
 * @lc app=leetcode id=2665 lang=typescript
 *
 * [2665] Counter II
 */

// @lc code=start
type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

export function createCounter(init: number): ReturnObj {
    let n = init;
    return {
        increment: () => {
            return ++n;
        },
        decrement: () => {
            return --n;
        },
        reset: () => {
            n = init;
            return n;
        }
    }
};
// @lc code=end



const counterII = createCounter(5)

console.log(counterII.increment()); // 6
console.log(counterII.reset()); // 5
console.log(counterII.decrement()); // 4
