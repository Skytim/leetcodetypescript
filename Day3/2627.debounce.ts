/*
 * @lc app=leetcode id=2627 lang=typescript
 *
 * [2620] Debounce
 */

// @lc code=start
module Debounce {
    // type F = (...args: number[]) => void

    // function debounce(fn: F, t: number): F {
    //     // let timer: NodeJS.Timeout | null;
    //     // return function (...args) {
    //     //     if (timer) clearTimeout(timer);
    //     //     timer = setTimeout(() => {
    //     //         timer = null;
    //     //         fn(...args);
    //     //     }, t);
    //     // };
    //     /// Apporach 1 : setTimeout + clearTimeout
    //     // let timer: ReturnType<typeof setTimeout>;
    //     // return function (...args) {
    //     //     clearTimeout(timer);
    //     //     timer = setTimeout(() => fn(...args), t);
    //     // }
    //     /// Apporach 2 : setInterval + clearInterval
    //     let interval: ReturnType<typeof setInterval>;
    //     return function (...args) {
    //         const lastCall = Date.now();
    //         clearInterval(lastCall);
    //         interval = setInterval(() => {
    //             if (Date.now() - lastCall >= t) {
    //                 fn(...args);
    //                 clearInterval(interval);
    //             }
    //         }, 1);
    //     }
    // };

    type F = (...args: number[]) => void

    function debounce(fn: F, t: number): F {
        let timer: NodeJS.Timeout;
        return function (...args) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn(...args)
            }, t)
        }
    };

    const fn = debounce((x: number) => console.log(x), 50)
    fn(1) 
    fn(2) 
    // 2


}
// @lc code=end
