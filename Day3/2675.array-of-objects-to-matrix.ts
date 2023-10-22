/*
 * @lc app=leetcode id=2675 lang=typescript
 *
 * [2620] Array Of Objects To Matrix
 */

// @lc code=start
module ArrayOfObjectsToMatrix {
    type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

    const jsonToMatrix = (arr: any[]): JSONValue => {
        const res: (string | number | boolean | null)[][] = [[]];
        // this is a core of the func 
        // where we populate new values and keys
        const setValue = (index: number, key: string, value: string | number | boolean | null) => {
            let keyPos = res[0].indexOf(key);
            if (keyPos == -1) {
                // here i determine new key position
                // using binary search
                let L = 0, R = res[0].length;
                while (L < R) {
                    const mid = L + ((R - L) >>> 1);
                    if (res[0][mid] as string > key) {
                        R = mid
                    } else {
                        L = mid + 1
                    }
                }
                // new key insertion
                keyPos = L;
                res[0].splice(keyPos, 0, key);
                for (let i = 1; i <= index; i++)
                    res[i].splice(keyPos, 0, '');
                res[index + 1].splice(keyPos, 0, value);
            } else {
                // old key insertion
                res[index + 1][keyPos] = value;
            }
        }

        // recursion through an object
        const parseObj = (obj: any, index: number, name: string) => {
            for (const k in obj) {
                const value = obj[k];
                const key = name == '' ? k : name + '.' + k
                if (value === null || typeof value !== 'object') {
                    setValue(index, key, value)
                } else {
                    parseObj(value, index, key)
                }
            }
        }

        // main loop over the object's array
        arr.forEach((o, index) => {
            res[index + 1] = new Array(res[0].length).fill('')
            parseObj(o, index, '');
        })

        return res
    };
}
// @lc code=end
