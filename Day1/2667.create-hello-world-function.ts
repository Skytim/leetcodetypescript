/*
 * @lc app=leetcode id=2667 lang=typescript
 *
 * [2667] Create Hello World Function
 */

// @lc code=start
function createHelloWorld() {
	return function(...args:any): string {
        return "Hello World"
    };
};

console.log(createHelloWorld()())
console.log(createHelloWorld()({},null,42))
// @lc code=end

