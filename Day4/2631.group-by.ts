/*
 * @lc app=leetcode id=2619 lang=typescript
 *
 * [2625] Array Prototype Last
 */

// @lc code=start

Array.prototype.groupBy = function(fn) {
    const hash = {}
    for (let item of this){
        const key = fn(item)
        hash[key] ||= []
        hash[key].push(item)
    }
    return hash
}


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// @lc code=end
