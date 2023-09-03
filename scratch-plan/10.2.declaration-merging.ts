module DeclarationMerging {
    function reverse(x: number): number;
    function reverse(x: string): string;
    function reverse(x: number | string): number | string {
        if (typeof x === "number") {
            return Number(x.toString().split("").reverse().join(""));
        } else if (typeof x === "string") {
            return x.split("").reverse().join("");
        }

        return x;
    }

    interface Alarm {
        price: number;
    }
    interface Alarm {
        weight: number;
    }

    interface Cat {
        price: number;
    }
    interface Cat {
        price: number; // 雖然重複了，但是型別都是 `number`，所以不會報錯
        weight: number;
    }
    interface Dog {
        price: number;
    }
    interface Dog {
        price: string; // 型別不一致，會報錯
        weight: number;
    }


    interface Bird {
        price: number;
        alert(s: string): string;
    }
    interface Bird {
        weight: number;
        alert(s: string, n: number): string;
    }
}
