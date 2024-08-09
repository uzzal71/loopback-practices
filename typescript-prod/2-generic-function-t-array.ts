function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

// const myNumArr = getArray<number>([1, 2, 3]);
// const myStrArr = getArray<string>(['Hello', 'World']);

const myNumArr = getArray([1, 2, 3]);
const myStrArr = getArray(['Hello', 'World']);


console.log(myNumArr);
console.log(myStrArr);