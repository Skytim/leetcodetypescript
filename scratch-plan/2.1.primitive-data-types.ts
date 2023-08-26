let isDone: boolean = false;

//  let createdByNewBoolean: boolean = new Boolean(1);
// 事實上 new Boolean() 返回的是一個 Boolean 物件：
let createdByNewBoolean: Boolean = new Boolean(1);


/// Number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二進位制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八進位制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

/// String
let myName: string = 'Tom';
let myAge: number = 25;

// String Template
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

function alertName(): void {
    alert('My name is Tom');
}
let unusable: void = undefined


/// Null 和 Undefined

let u: undefined = undefined;
let n: null = null;

// 這樣不會報錯
let num: number = undefined;

let u2: undefined;
let num2: number = u;

// Type 'void' is not assignable to type 'number'.
let u3: void;
let num3: number = u;

