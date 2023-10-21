/*
 * @lc app=leetcode id=2621 lang=typescript
 *
 * [2621] Sleep
 */

// @lc code=start
module Sleep {
    async function sleep(millis: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, millis));
    }
    let t = Date.now()
    sleep(100).then(() => console.log(Date.now() - t)) // 100
}

// @lc code=end
