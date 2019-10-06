var n = 1;
var printName = function (stark) {
    if (stark.name) {
        console.log(stark.name);
    }
    if (stark.label) {
        console.log(stark.label);
    }
    if (stark.age) {
        return console.log(stark.age);
    }
};
printName({ name: 'Eddard', age: 24 });
printName({ label: 'Joe' });
