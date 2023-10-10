/*
 * @lc app=leetcode id=2629 lang=typescript
 *
 * [2629] Function Composition
 */

// @lc code=start
type F = (x: number) => number;

function compose(functions: F[]): F {
    // const reversedFns = [...functions];
    // reversedFns.reverse();
    // return function(x) {
    //     let result  = x;
    //     for (const fn of reversedFns) {
    //         result = fn(result);
    //     }
    //     return result
    // }

    /// Approach 1
    // return function (x) {
    //     let result = x;
    //     for (let i = functions.length - 1; i >= 0; i--) {
    //       result = functions[i](result);
    //     }
    //     return result;
    //   };
    /// Approach 2
    return function (x: number) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(3)) // 7