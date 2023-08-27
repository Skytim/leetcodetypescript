module DeclarationFiles {
    // src/jQuery.d.ts
    // declare var
    declare var jQuery: (selector: string) => any;
    // src/index.ts

    jQuery = function (selector) {
        return document.querySelector(selector);
    };

    declare const jQuery2: (selector: string) => any;

    jQuery2("#foo");
    // 使用 declare const 定義的 jQuery 型別，禁止修改這個全域變數
    jQuery2 = function (selector) {
        return document.querySelector(selector);
    };
    /// declare function
    declare function jQuery3(selector: string): any;

    declare class Animal {
        name: string;
        constructor(name: string);
        sayHi(): string;
    }

    let cat = new Animal("Tom");

    declare class Human {
        name: string;
        constructor(name: string);
        sayHi() {
            return `My name is ${this.name}`;
        }
        // ERROR: An implementation cannot be declared in ambient contexts.
    }

    declare enum Directions {
        Up,
        Down,
        Left,
        Right,
    }

    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

    // src/jQuery.d.ts
    declare namespace jQuery4 {
        function ajax(url: string, settings?: any): void;
    }
    // src/index.ts

    jQuery4.ajax("/api/get_something");

    // src/jQuery.d.ts

    declare namespace jQuery5 {
        function ajax(url: string, settings?: any): void;
        const version: number;
        class Event {
            blur(eventType: EventType): void;
        }
        enum EventType {
            CustomClick,
        }
    }

    // src/index.ts

    jQuery5.ajax("/api/get_something");
    console.log(jQuery5.version);
    const e = new jQuery5.Event();
    e.blur(jQuery5.EventType.CustomClick);

    declare namespace jQuery6 {
        function ajax(url: string, settings?: any): void;
        namespace fn {
            function extend(object: any): void;
        }
    }
    // src/index.ts

    jQuery6.ajax("/api/get_something");
    jQuery6.fn.extend({
        check: function () {
            return this.each(function () {
                this.checked = true;
            });
        },
    });

    // src/jQuery.d.ts

    declare namespace jQuery7.fn {
        function extend(object: any): void;
    }
    // src/index.ts

    jQuery7.fn.extend({
        check: function () {
            return this.each(function () {
                this.checked = true;
            });
        },
    });

    interface AjaxSettings {
        method?: "GET" | "POST";
        data?: any;
    }
    declare namespace jQuery8 {
        function ajax(url: string, settings?: AjaxSettings): void;
    }

    let settings: AjaxSettings = {
        method: 'POST',
        data: {
            name: 'foo'
        }
    };
    jQuery8.ajax('/api/post_something', settings);
}
