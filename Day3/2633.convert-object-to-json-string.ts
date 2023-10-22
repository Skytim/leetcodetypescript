/*
 * @lc app=leetcode id=2633 lang=typescript
 *
 * [2628] Convert Object to JSON String
 */

// @lc code=start
module CovertObjectToJSONString {
    type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

    function jsonStringify(object: JSONValue): string {
        // array
        if (Array.isArray(object)) {
            const keyString = object.map((el) => jsonStringify(el)).join();
            return `[${keyString}]`;
        }

        // object
        if (typeof object === "object" && object !== null) {
            const keyString = Object.entries(object)
                .map(([key, value]) => `"${key}":${jsonStringify(value)}`)
                .join(",");
            return `{${keyString}}`;
        }

        // string
        if (typeof object === "string") {
            return `"${object}"`;
        }
        // integer, boolean, null
        return `${object}`;
    };
}

// @lc code=end
