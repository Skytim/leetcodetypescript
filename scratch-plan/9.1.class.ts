module Class {
    class Animal {
        public age: number | undefined;
        name: string;
        private account: string;
        protected cost: number;
        static num = 42;
        constructor(name: string, account: string, cost: number, age?: number | undefined) {
            this.name = name;
            this.account = account;
            this.age = age;
            this.cost = cost;
        }
        sayHi() {
            return `My name is ${this.name}`;
        }
        static isAnimal(a: Animal) {
            return a instanceof Animal;
        }
    }

    let a = new Animal("Jack", "12345");
    console.log(a.sayHi()); // My name is Jack

    class Cat extends Animal {
        name = "Jack";

        constructor(name: string) {
            super(name, "20"); // 呼叫父類別的 constructor(name)
            console.log(this.name);
        }
        sayHi() {
            return "Meow, " + super.sayHi(); // 呼叫父類別的 sayHi()
        }
    }

    let c = new Cat("Tom"); // Tom
    console.log(c.sayHi()); // Meow, My name is Tom

    class Dog extends Animal {
        constructor(name: string) {
            super(name, "12345"); // 呼叫父類別的 constructor(name)
            console.log(this.name);
            // index.ts(11,17): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
            // console.log(this.account);
        }
        get name(): string {
            return "Jack";
        }
        set name(value) {
            console.log("setter: " + value);
        }
    }

    let jack = new Animal("Jack", "2345");
    Animal.isAnimal(jack); // true
    // TypeError: a.isAnimal is not a function
    // jack.isAnimal(a);
    console.log(Animal.num); // 42

    class Animal2 {
        public name;
        private constructor(name: string) {
            this.name = name;
        }
    }
    class Cat2 extends Animal2 {
        constructor(name: string) {
            super(name);
        }
    }

    let jackson = new Animal("Jack");

    class Animal3 {
        public name;
        protected constructor(name: string) {
            this.name = name;
        }
    }
    class Cat3 extends Animal3 {
        constructor(name: string) {
            super(name);
        }
    }

    let animal3 = new Animal3("Jack");


    abstract class Animal4 {
        public name;
        public constructor(name) {
            this.name = name;
        }
        public abstract sayHi():void;
    }
    
    class Cat4 extends Animal4 {
        public eat() {
            console.log(`${this.name} is eating.`);
        }

        public sayHi() {
            console.log(`Meow, My name is ${this.name}`);
        }
    }
    let cat = new Cat4('Tom')

    class Animal5 {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHi(): string {
          return `My name is ${this.name}`;
        }
    }
    
    let Jacky: Animal5 = new Animal5('Jacky');
    console.log(Jacky.sayHi()); // My name is Jack
    
}
