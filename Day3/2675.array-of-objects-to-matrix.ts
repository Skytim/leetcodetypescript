/*
 * @lc app=leetcode id=2675 lang=typescript
 *
 * [2620] Array Of Objects To Matrix
 */

// @lc code=start
module ArrayOfObjectsToMatrix {
    type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

    const jsonToMatrix = (arr: any[]): (string | number | boolean | null)[][] => {
        const paths: { [key: string]: (string | number | boolean | null)[] } = {};
        const dfs = (index: number, path: string, el: any) => {
            if (el !== null && typeof el === 'object') {
                Object.keys(el).forEach(k => dfs(index, path + (path ? '.' : '') + k, el[k]))
            } else {
                if (!paths.hasOwnProperty(path)) paths[path] = (new Array(arr.length)).fill("")
                paths[path][index] = el
            }
        }
        arr.forEach((a, k) => dfs(k, "", a))
        const header = Object.keys(paths).sort() as (string | number | boolean | null)[]
        return [header, ...arr.map((_, i) => header.map(path => paths[path][i]))];
    }
}
// @lc code=end
