/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const x = target - nums[i];
        if (map.has(x)) {

            return [map.get(x)!, i];
        } else {
            map.set(nums[i], i);
        }

    }
    return [];
};

console.log(twoSum([3, 2, 4], 6));
// @lc code=end

