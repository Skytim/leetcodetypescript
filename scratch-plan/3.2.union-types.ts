module UnionTypes {
    let myFavoriteNumber: string | number;
    myFavoriteNumber = "seven";
    myFavoriteNumber = 7;

    let myFavoriteNumber2: string | number;
    myFavoriteNumber2 = true;

    function getLength(something: string | number): number {
        return something.length;
    }

    function getString(something: string | number): string {
        return something.toString();
    }

    let myFavoriteNumber3: string | number;
    myFavoriteNumber3 = "seven";
    console.log(myFavoriteNumber3.length); // 5
    myFavoriteNumber3 = 7;
    console.log(myFavoriteNumber3.length); // 編譯時報錯
    // index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.

}
