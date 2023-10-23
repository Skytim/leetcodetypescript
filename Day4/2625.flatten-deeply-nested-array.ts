/*
 * @lc app=leetcode id=2625 lang=typescript
 *
 * [2625] Flatten Deeply Nested Array
 */

// @lc code=start
module FlattenDeeplyNestedArray {
    type MultiDimensionalArray = (number | MultiDimensionalArray)[];

    var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
        if (n === 0) {
            return arr;
        }
        
        let answer: any[] = [];
        
        arr.forEach(element => {
            if (n > 0 && Array.isArray(element)) {
                answer.push(...flat(element, n - 1));
            } else {
                answer.push(element);
            }
        });
        
        return answer;
    };
}
// @lc code=end
