/*
 * @lc app=leetcode id=2634 lang=typescript
 *
 * [2634] Apply Transform Over Each Element in Array
 */

// @lc code=start
export type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    /// user array Push
	// const newArr = []
    // for (let i = 0; i < arr.length; ++i) {
    //     if (fn(arr[i], i)) {
    //         newArr.push(arr[i])
    //     }
    // }
    // return newArr
    
    /// Preallocate Memory
    // const result: number[] = new Array<number>(arr.length);
    // // 紀錄為真值的元素數量
    // let size = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   if (fn(arr[i], i)) {
    //     result[size] = arr[i];
    //     size++;
    //   }
    // }
    // // 從尾端開始移除多餘的初始未定義值
    // while (result.length > size) {
    //   result.pop();
    // }
  
    // return result;
    /// Perform Operations In-Place
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        result[count] = arr[i];
        count++;
      }
    }
  
    while (result.length > count) {
      result.pop();
    }
  
    return result;
};

let result = [0,10,20,30]
let fn = function greaterThan10(n:number) { return n > 10; }
const newArray = filter(result, fn); // [20, 30]
console.log(newArray)