/*
 * @lc app=leetcode id=2619 lang=typescript
 *
 * [2625] Array Prototype Last
 */

// @lc code=start

declare global {
    interface Array<T> {
        last(): T | -1;
        groupBy(fn: (item: T) => string): Record<string, T[]>;
    }
}

Array.prototype.last = function () {
    if(!this.length) {
        return -1;
    }
    return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};

// @lc code=end
