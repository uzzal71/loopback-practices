function log3(target, key, descriptor) {
    console.log(target);
    const original = descriptor.value;
    descriptor.value = function(...args: any[]) {
        // Call the original method
        const result = original.apply(this, args);
        // Log the call, and the result
        console.log(`${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(result)}`);
        // Return the result
        return result;
    };
    return descriptor;
}

class Calculator3 {
    // Using the decorator @log
    @log3
    square(n: number) {
        return n * n;
    }
}

const calculator3 = new Calculator3();
// square with args [2] returned 4
calculator3.square(2);
// square with args [3] returned 9
calculator3.square(3);