module Interface {
    interface Person {
        name: string;
        age: number;
    }

    let tom: Person = {
        name: "Tom",
        age: 25,
    };

    let tony: Person = {
        name: "Tom",
    };

    interface Dog {
        name: string;
        age?: number;
    }

    let white: Dog = {
        name: "Tom",
    };

    let black: Dog = {
        name: "Tom",
        age: 25,
    };
    /// 這時仍然不允許新增未定義的屬性：
    let yello: Person = {
        name: "Tom",
        age: 25,
        gender: "male",
    };

    interface Cat {
        name: string;
        age?: number;
        [propName: string]: any;
    }

    let red: Cat = {
        name: "Tom",
        gender: "male",
    };

    let fat: Cat = {
        name: "Tom",
        age: 25,
        gender: "male",
    };

    interface People {
        readonly id: number;
        name: string;
        age?: number;
        [propName: string]: any;
    }

    let thin: People = {
        id: 89757,
        name: "Tom",
        gender: "male",
    };

    thin.id = 9527;
    // index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
}
