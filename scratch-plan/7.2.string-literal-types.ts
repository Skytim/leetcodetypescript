module StringLiteralTypes {
    type EventNames = "click" | "scroll" | "mousemove";
    function handleEvent(ele: Element | null, event: EventNames) {
        // do something
    }

    handleEvent(document.getElementById("hello"), "scroll"); // 沒問題
    // handleEvent(document.getElementById("world"), "dbclick"); // 報錯，event 不能為 'dbclick'

    // index.ts(7,47): error TS2345: Argument of type '"dbclick"' is not assignable to parameter of type 'EventNames'.
}
