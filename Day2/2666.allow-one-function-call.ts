/*
 * @lc app=leetcode id=2666 lang=typescript
 *
 * [2666] Allow One Function Call
 */

// @lc code=start
module AllowOneFunctionCall {
    type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
    type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

    function once(fn: Function): OnceFn {
        let called = false
        return function (...args) {
            if (called) return;
            called = true;
            return fn(...args);
        };
    }

    let fn = (a: number, b: number, c: number) => (a + b + c)
    let onceFn = once(fn)

    onceFn(1, 2, 3); // 6
    onceFn(2, 3, 6); // returns undefined without calling fn

}

// @lc code=end
