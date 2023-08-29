module Tuple {
    let tom: [string, number] = ["Tom", 25];
    /// 當賦值或訪問一個已知索引的元素時，會得到正確的型別：
    let tony: [string, number];
    tony[0] = "Tom";
    tony[1] = 25;

    tony[0].slice(1);
    tony[1].toFixed(2);

    let tobe: [string, number];
    tobe = ["Tom", 25];

    let tommy: [string, number];
    tommy = ["Tom"];
}
