var result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
console.log(result); // "Barry"

(function () {
    var aName = "Barry";
})();
// Variable name is not accessible from the outside scope
aName; // throws "Uncaught ReferenceError: aName is not defined"
