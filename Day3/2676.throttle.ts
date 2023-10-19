/*
 * @lc app=leetcode id=2676 lang=typescript
 *
 * [2620] Throttle
 */

// @lc code=start
module Throttle {
    type F = (...args: any[]) => void

    function throttle(fn: F, t: number): F {
        let lastArgs: any[] | null = null;
        let shouldCall = true;

        function execute() {
            if (shouldCall && lastArgs) {
                fn(...lastArgs);
                lastArgs = null;
                shouldCall = false;
                setTimeout(() => {
                    shouldCall = true;
                    execute();
                }, t);
            }
        }

        return function (...args) {
            lastArgs = args;
            execute();
        };
    }
    const throttled = throttle(console.log, 2000);
    throttled("log"); // logged immediately.
    throttled("Hello"); // logged at t=100ms.
}
// @lc code=end
