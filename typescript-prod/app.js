var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function property(target, key) {
    var value = target[key];
    // Replacement getter
    var gettter = function () {
        console.log("Getter for ".concat(key, " returned ").concat(value));
        return value;
    };
    // Replacement setter
    var setter = function (newVal) {
        console.log("Set ".concat(key, " to ").concat(newVal));
        value = newVal;
    };
    // Replace the property
    var isDeleted = delete this[key];
    if (isDeleted) {
        Object.defineProperty(target, key, {
            get: gettter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
function parameterDecorator(target, key, index) {
    console.log("Key is ".concat(key, " and index is ").concat(index));
}
function model(constructor) {
    console.log(constructor);
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.calculateSalary = function (taxes, discount) {
        return this.salary * taxes;
    };
    __decorate([
        property
    ], Person.prototype, "firstName", void 0);
    __decorate([
        property
    ], Person.prototype, "salary", void 0);
    __decorate([
        __param(0, parameterDecorator),
        __param(1, parameterDecorator)
    ], Person.prototype, "calculateSalary", null);
    Person = __decorate([
        model
    ], Person);
    return Person;
}());
var personOb = new Person();
// set the firstName
personOb.firstName = "Uzzal Kumar Roy";
// call the getter
console.log(personOb.firstName); // Output: Uzzal Kumar Roy
