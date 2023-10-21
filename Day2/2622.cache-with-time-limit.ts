/*
 * @lc app=leetcode id=2622 lang=typescript
 *
 * [2622] Cache With Time Limit
 */

// @lc code=start
module CatchWithTimeLimit {

    class TimeLimitedCache {
        
        cacheMap: Map<number, { value: number; expireTime: number }>;
        constructor() {
            this.cacheMap = new Map();
        }

        set(key: number, value: number, duration: number): boolean {
            const valid = this.get(key) !== -1;
            this.cacheMap.set(key, { value, expireTime: Date.now() + duration });
            return valid;
        }

        get(key: number): number {
            const cache = this.cacheMap.get(key);
            if (cache && cache.expireTime >= Date.now()) {
                return cache.value;
            }
            return -1;
        }

        count(): number {
            return Array.from(this.cacheMap.keys()).reduce(
                (acc, key) => (this.get(key) === -1 ? acc : acc + 1),
                0
            );
        }
    }

    /**
     * const timeLimitedCache = new TimeLimitedCache()
     * timeLimitedCache.set(1, 42, 1000); // false
     * timeLimitedCache.get(1) // 42
     * timeLimitedCache.count() // 1
     */
}

// @lc code=end
