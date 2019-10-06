var Stark = /** @class */ (function () {
    function Stark() {
        this.name = "Bran";
        this.saying = "Winterfell";
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello " + person);
    };
    Stark.castle = "Winterfell";
    return Stark;
}());
var ned = new Stark();
ned.saying = "winter is coming";
ned.hello('Rob');
