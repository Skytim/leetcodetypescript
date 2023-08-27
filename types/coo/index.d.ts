// types/foo/index.d.ts
// export default enum Directions {
//     // ERROR: Expression expected.
//         Up,
//         Down,
//         Left,
//         Right
// }

declare enum Directions {
    Up,
    Down,
    Left,
    Right,
}

export default Directions;
