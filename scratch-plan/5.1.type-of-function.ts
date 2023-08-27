module TypeOfFunction {
    // 函式宣告（Function Declaration）
    function sum(x: number, y: number) {
        return x + y;
    }

    // 函式表示式（Function Expression）
    let mySum = function (x: number, y: number) {
        return x + y;
    };

    function sum2(x: number, y: number): number {
        return x + y;
    }

    // sum2(1, 2, 3);
    // sum2(1);

    let mySum4 = function (x: number, y: number): number {
        return x + y;
    };

    let mySum5: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y;
    };
    /// 用介面定義函式的形狀
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = function (source: string, subString: string) {
        return source.search(subString) !== -1;
    };
    /// 可選引數
    function buildName(firstName: string, lastName?: string) {
        if (lastName) {
            return firstName + " " + lastName;
        } else {
            return firstName;
        }
    }
    let tomcat = buildName("Tom", "Cat");
    let tom = buildName("Tom");

    function buildName2(firstName?: string, lastName: string) {
        if (firstName) {
            return firstName + " " + lastName;
        } else {
            return lastName;
        }
    }
    let tim = buildName2("Tom", "Cat");
    let timmy = buildName2(undefined, "Tom");

    /// 引數預設值
    function buildName3(firstName: string, lastName: string = "Cat") {
        return firstName + " " + lastName;
    }
    let golden = buildName3("Golden", "Cat");
    let gary = buildName3("Gary");

    /// 剩餘引數
    function push(array: number[], ...items: number[]) {
        items.forEach(function (item) {
            array.push(item);
        });
    }

    let a: number[] = [];
    push(a, 1, 2, 3);

    /// 過載
    // function reverse(x: number | string): number | string {
    //     if (typeof x === "number") {
    //         return Number(x.toString().split("").reverse().join(""));
    //     } else if (typeof x === "string") {
    //         return x.split("").reverse().join("");
    //     }
    //     return "";
    // }

    /// 過載
    function reverse(x: number): number;
    function reverse(x: string): string;
    function reverse(x: number | string): number | string {
        if (typeof x === "number") {
            return Number(x.toString().split("").reverse().join(""));
        } else if (typeof x === "string") {
            return x.split("").reverse().join("");
        }
        return "";
    }
}
