function property(target: any, key: string) {
    let value = target[key];
    // Replacement getter
    const gettter = function() {
        console.log(`Getter for ${key} returned ${value}`);
        return value;
    };

    // Replacement setter
    const setter = function(newVal) {
        console.log(`Set ${key} to ${newVal}`);
        value = newVal;
    };

    // Replace the property
    const isDeleted = delete this[key];
    if (isDeleted) {
        Object.defineProperty(target, key, {
            get: gettter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}


function parameterDecorator(target: any, key: string, index: number) {
    console.log(`Key is ${key} and index is ${index}`);
}

function model(constructor: Function) {
    console.log(constructor);
}

@model
class Person {
    @property
    public firstName: string;

    @property
    public salary: number;

    calculateSalary(@parameterDecorator taxes: number, @parameterDecorator discount: number): number {
        return this.salary * taxes;
    }
}

const personOb = new Person();
// set the firstName
personOb.firstName = "Uzzal Kumar Roy";
// call the getter
console.log(personOb.firstName); // Output: Uzzal Kumar Roy