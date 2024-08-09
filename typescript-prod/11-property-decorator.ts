function propertyDecorator(target: any, key: string) {
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

class PersonClass {
    @propertyDecorator
    public firstName: string;
}

const personObj1 = new PersonClass();
// set the firstName
personObj1.firstName = "Uzzal Kumar Roy";
// call the getter
console.log(personObj1.firstName); // Output: Uzzal Kumar Roy