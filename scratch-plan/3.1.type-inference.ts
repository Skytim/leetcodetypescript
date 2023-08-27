module TypeInference {
    let myFavoriteNumber = "seven";
    myFavoriteNumber = 7;
    // index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

    let myFavoriteNumber2;
    myFavoriteNumber2 = "seven";
    myFavoriteNumber2 = 7;
}
