module Enum {
    /// Sample
    enum Days {
        Sun,
        Mon,
        Tue,
        Wed,
        Thu,
        Fri,
        Sat,
    }

    console.log(Days["Sun"] === 0); // true
    console.log(Days["Mon"] === 1); // true
    console.log(Days["Tue"] === 2); // true
    console.log(Days["Sat"] === 6); // true

    console.log(Days[0] === "Sun"); // true
    console.log(Days[1] === "Mon"); // true
    console.log(Days[2] === "Tue"); // true
    console.log(Days[6] === "Sat"); // true

    enum MannualDays {
        Sun = 7,
        Mon = 1,
        Tue,
        Wed,
        Thu,
        Fri,
        Sat,
    }

    console.log(MannualDays["Sun"] === 7); // true
    console.log(MannualDays["Mon"] === 1); // true
    console.log(MannualDays["Tue"] === 2); // true
    console.log(MannualDays["Sat"] === 6); // true

    enum MannualDays2 {
        Sun = 3,
        Mon = 1,
        Tue,
        Wed,
        Thu,
        Fri,
        Sat,
    }

    console.log(MannualDays2["Sun"] === 3); // true
    console.log(MannualDays2["Wed"] === 3); // true
    console.log(MannualDays2[3] === "Sun"); // false
    console.log(MannualDays2[3] === "Wed"); // true

    enum SetDays {
        Sun = 7,
        Mon,
        Tue,
        Wed,
        Thu,
        Fri,
        Sat = <any>"S",
    }

    enum Color {
        Red,
        Green,
        Blue = "blue".length,
    }

    enum Color2 {
        Red = "red".length,
        // index.ts(1,33): error TS1061: Enum member must have initializer.
        // Green,
        // // index.ts(1,40): error TS1061: Enum member must have initializer.
        // Blue,
    }

    const enum Directions {
        Up,
        Down,
        Left,
        Right,
    }

    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

    declare enum Directions2 {
        Up,
        Down,
        Left,
        Right,
    }

    let directions2 = [Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right];

    declare const enum Directions3 {
        Up,
        Down,
        Left,
        Right,
    }

    let directions3 = [Directions3.Up, Directions3.Down, Directions3.Left, Directions3.Right];
}
