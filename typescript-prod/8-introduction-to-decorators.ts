function log1(target, key, descriptor) {
    console.log(`${key} was called`);
}

class Calculator1 {
    // Using the decorator @log
    @log1
    square(n: number) {
        return n * n;
    }
}