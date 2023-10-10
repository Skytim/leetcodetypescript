/*
 * @lc app=leetcode id=2629 lang=typescript
 *
 * [2629] Function Composition
 */

// @lc code=start
type F = (x: number) => number;

function compose(functions: F[]): F {
    const reversedFns = [...functions];
    reversedFns.reverse();
	return function(x) {
        let result  = x;
        for (const fn of reversedFns) {
            result = fn(result);
        }
        return result
    }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(3)) // 7