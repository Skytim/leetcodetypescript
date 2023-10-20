/*
 * @lc app=leetcode id=2623 lang=typescript
 *
 * [2666] Memoize
 */

// @lc code=start
module AllowOneFunctionCall {
    type Fn = (...params: number[]) => number

    function memoize(fn: Fn): Fn {
        const cache = new Map();
        return function (...args) {
            const cacheKey = JSON.stringify(args);
            if (cache.has(cacheKey)) {
                return cache.get(cacheKey);
            }
            const result = fn(...args);
            cache.set(cacheKey, result);
            return result;
        }
    }

    let callCount = 0;
    const memoizedFn = memoize(function (a, b) {
        callCount += 1;
        return a + b;
    })
    memoizedFn(2, 3) // 5
    memoizedFn(2, 3) // 5
    console.log(callCount) // 1 


}

// @lc code=end
