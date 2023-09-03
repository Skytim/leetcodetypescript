module ClassAndInterfaces {
    interface Alarm {
        alert(): void;
    }

    class Door {}

    class SecurityDoor extends Door implements Alarm {
        alert() {
            console.log("SecurityDoor alert");
        }
    }

    class Car implements Alarm {
        alert() {
            console.log("Car alert");
        }
    }

    interface Light {
        lightOn(): void;
        lightOff(): void;
    }

    class Car2 implements Alarm, Light {
        alert() {
            console.log("Car alert");
        }
        lightOn() {
            console.log("Car light on");
        }
        lightOff() {
            console.log("Car light off");
        }
    }

    /// 介面繼承介面
    interface LightableAlarm extends Alarm {
        lightOn(): void;
        lightOff(): void;
    }
    /// 介面繼承類別
    class Point {
        x: number;
        y: number;
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    interface Point3d extends Point {
        z: number;
    }

    let point3d: Point3d = { x: 1, y: 2, z: 3 };

    /// 混合型別
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = function (source: string, subString: string) {
        return source.search(subString) !== -1;
    };
    
    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }
    
    function getCounter(): Counter {
        let counter = <Counter>function (start: number) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    
    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
}
