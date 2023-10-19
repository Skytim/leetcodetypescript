import { name, getName, Animal, Directions, Options } from "foo";
import { foo } from "poo";
import boo from "boo";

// 整體匯入
const fooq = require('foo');
// 單個匯入
const name2 = require('foo').name

// 整體匯入
import foo3 = require('foo');
// 單個匯入
import bar = foo.bar;
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
    // jQuery2 = function (selector) {
    //     return document.querySelector(selector);
    // };
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
        // sayHi() {
        //     return `My name is ${this.name}`;
        // }
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
                // this.checked = true;
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
                // this.checked = true;
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
        method: "POST",
        data: {
            name: "foo",
        },
    };
    jQuery8.ajax("/api/post_something", settings);

    // src/jQuery.d.ts

    declare namespace jQuery9 {
        interface AjaxSettings {
            method?: "GET" | "POST";
            data?: any;
        }
        function ajax(url: string, settings?: AjaxSettings): void;
    }

    // src/index.ts

    let settings2: jQuery9.AjaxSettings = {
        method: "POST",
        data: {
            name: "foo",
        },
    };
    jQuery9.ajax("/api/post_something", settings2);

    // src/jQuery.d.ts

    declare function jQuery10(selector: string): any;
    declare namespace jQuery10 {
        function ajax(url: string, settings?: any): void;
    }

    // src/index.ts

    jQuery10("#foo");
    jQuery10.ajax("/api/get_something");

    console.log(name);
    let myName = getName();
    let tommy = new Animal("Tom");
    let directions2 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
    let options: Options = {
        data: {
            name: "foo",
        },
    };

    console.log(foo.name);
    foo.bar.baz();

    boo();
    console.log(name2);

    console.log(fooq.name);

    /// 直接擴充套件全域變數(Cann't work)
    interface String {
        prependHello(): string;
    }
    
    'foo'.prependHello();


    // src/index.ts
    
    'bar'.prependHello();
}


declare global {
    interface String {
        prependHello(): string;
    }
}