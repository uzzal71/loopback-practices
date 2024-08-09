// Decorator factory function: title
function log(title: string) {
    return function (target, key, descriptor) {
        console.log(target);
        const original = descriptor.value;
        descriptor.value = function(...args: any[]) {
            // Call the original method
            const result = original.apply(this, args);
            // Log the call, and the result
            console.log(`title ${title} ${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(result)}`);
            // Return the result
            return result;
        };
        return descriptor;
    }
}

class Calculator {
    // Using the decorator @log
    @log('Calculator')
    square(n: number) {
        return n * n;
    }
}

const calculator = new Calculator();
// square with args [2] returned 4
calculator.square(2);
// square with args [3] returned 9
calculator.square(3);