var Utility;
(function (Utility) {
    var useful = /** @class */ (function () {
        function useful() {
            this.timesTwo = function (n) { return n * 2; };
        }
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
/// <reference path="timesTwo.ts" />
var use = new Utility.useful();
console.log(use.timesTwo(9));
