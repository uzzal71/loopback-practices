function LoggerAndReturn<T>(thing: T) : T {
    return thing;
}

// const message: string = LoggerAndReturn<string>("Hello world!");
const message: string = LoggerAndReturn("Hello world!");
console.log(message);

const message2: number = LoggerAndReturn(2);
console.log(message2);
