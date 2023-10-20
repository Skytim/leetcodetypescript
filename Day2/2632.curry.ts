/*
 * @lc app=leetcode id=2632 lang=typescript
 *
 * [2632] Curry
 */

// @lc code=start
module Curry {
    // function curry(fn: Function): Function {
    //     // 用 Function.length 來表示該 function 預期被傳入的參數數量
    //     return function curried(...args: any[]) {
    //         if (args.length >= fn.length) {
    //             return fn(...args);
    //         }
    //         return (...nextArgs: any[]) => curried(...args, ...nextArgs);
    //     }
    // };

    function curry(fn: Function): Function {
        return function curried(this: Function, ...args: any[]) {
            if (args.length >= fn.length) {
                return fn.apply(this, args);
            }
            return function (this: Function, ...innerArgs: any[]) {
                return curried.apply(this, args.concat(innerArgs));
            };
        };
    }

    function sum(a: number, b: number) { return a + b; }
    const csum = curry(sum);
    csum(1)(2) // 3


}

// @lc code=end
