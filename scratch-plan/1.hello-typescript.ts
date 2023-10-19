module HelloTypescript {
    // function sayHello(person: string) {
    //     return 'Hello, ' + person;
    // }

    // let user = 'Tom';
    // console.log(sayHello(user));
    // Have Error
    let sayHello = (person: string) => {
        
        return  "Hello, " + person
    }

    // let user = [0, 1, 2];
    let user = 'Tim'
    console.log(sayHello(user));
}