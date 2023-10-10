/*
 * @lc app=leetcode id=2627 lang=typescript
 *
 * [2620] Debounce
 */

// @lc code=start
module Debounce {
    type F = (...args: number[]) => void

    function debounce(fn: F, t: number): F {
        let timer: NodeJS.Timeout | null;
        return function (...args) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                fn(...args);
            }, t);
        };
    };

    const fn = debounce((x: number) => console.log(x), 50)
    fn(1) // 1
    fn(2) // 1
}
// @lc code=end
