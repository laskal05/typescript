// First article example
console.log("#########################");
console.log("########### First article");
console.log("#########################");
var User = /** @class */ (function () {
    function User(_name, _email) {
        this._name = _name;
        this._email = _email;
        this.assertValidName(_name);
    }
    User.prototype.assertValidName = function (name) {
        if (name.length < User.minimumNameLength) {
            throw Error("hogehoge");
        }
    };
    User.prototype.speak = function () {
        console.log("I am " + this._name);
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this.assertValidName(newName);
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    User.minimumNameLength = 4;
    return User;
}());
var user = new User("laskal05-before", "example@sample.com");
console.log("## Get name");
console.log(user.name);
console.log(user.email);
console.log("## Set name & Get name");
user.name = "laskal05-after";
console.log(user.name);
console.log(user.email);
console.log("");
// Second article example
console.log("#########################");
console.log("########## Second article");
console.log("#########################");
var students = [
    { name: "Harry", age: 17, hasScar: true },
    { name: "Ron", age: 17, hasScar: false },
    { name: "Hermione", age: 16, hasScar: false }
];
var getBy = function (model, prop, value) {
    return model.filter(function (item) { return item[prop] === value; })[0];
};
var gotten;
gotten = getBy(students, "name", "Harry");
console.log(gotten);
Array.prototype.getBy = function (prop, value) {
    return this.filter(function (item) { return item[prop] === value; })[0];
};
gotten = students.getBy("name", "Ron");
console.log(gotten);
var myWand = { length: 11, core: "phoenix feather" };
console.log(myWand);
