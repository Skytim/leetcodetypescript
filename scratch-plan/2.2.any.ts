namespace Any {
    // let myFavoriteNumber: string = 'seven';
    // myFavoriteNumber = 7;

    // index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

    let myFavoriteNumber: any = "seven";
    myFavoriteNumber = 7;

    // let anyThing: any = 'hello';
    // console.log(anyThing.myName);
    // console.log(anyThing.myName.firstName);

    // let anyThing: any = 'Tom';
    // anyThing.setName('Jerry');
    // anyThing.setName('Jerry').sayHello();
    // anyThing.myName.setFirstName('Cat');
    // console.log(anyThing.myName.firstName);

    let something;
    something = "seven";
    something = 7;

    // something.setName('Tom');
}
