/*
 * @lc app=leetcode id=2636 lang=typescript
 *
 * [2637] Promise Pool
 */

// @lc code=start
module PromisePool {
    type F = () => Promise<any>;

    function promisePool(functions: F[], n: number): Promise<any> {
        return new Promise((resolve) => {
            // 紀錄目前執行中的 Promise 數量
            let inProgressCount = 0;
            // 紀錄當前要執行的函式索引
            let functionIndex = 0;
            function helper() {
                // 如果 functionIndex 大於或等於 functions 陣列的長度，表示所有的 Promise 已經被執行完畢。
                if (functionIndex >= functions.length) {
                    // 此時檢查 inProgressCount 是否為 0，如果是，則調用 resolve 並傳遞 0 作為解析的值，表示所有 Promise 均已成功完成
                    if (inProgressCount === 0) resolve(0);
                    return;
                }
                // 檢查 inProgressCount 是否小於 n，且 functionIndex 是否小於 functions 陣列的長度時持續執行
                while (inProgressCount < n && functionIndex < functions.length) {
                    // 增加 inProgressCount 的數量，表示有一個新的 Promise 開始執行
                    inProgressCount++;
                    // 使用 functionIndex 索引從 functions 陣列中獲取下一個要執行的 Promise 函式
                    const promise = functions[functionIndex]();
                    // 將 functionIndex 增加 1，以便下一輪遞迴時執行下一個 Promise 函式
                    functionIndex++;
                    // 執行該 Promise 函式，並獲得一個 Promise 物件
                    // 使用 promise.then() 註冊一個回調函式，當 Promise 完成時執行。
                    promise.then(() => {
                        // 減少 inProgressCount 的數量，表示有一個 Promise 完成了執行
                        inProgressCount--;
                        // 遞迴調用 helper 函式，以檢查是否可以執行更多的 Promise
                        helper();
                    });
                }
            }
            helper();
        });
    };

    const sleep = (t: number) => new Promise(res => setTimeout(res, t));
    promisePool([() => sleep(500), () => sleep(400)], 1)
        .then(console.log) // After 900ms


}

// @lc code=end
