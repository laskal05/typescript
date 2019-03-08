var User = /** @class */ (function () {
    function User(_name) {
        this._name = _name;
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
    User.minimumNameLength = 4;
    return User;
}());
var user = new User("laskal05-before");
console.log("Get name");
console.log(user.name);
console.log("");
console.log("Set name & Get name");
user.name = "laskal05-after";
console.log(user.name);
user.name = "aa";
console.log(user.name);
