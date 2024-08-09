// multiple type variables
function getInfo<T, U>(id: T, name: U) : void {
    console.log(typeof id + ', ' + typeof name, " getInfo");
}

getInfo<number, string>(1, 'Sujon'); // number, string

// generic with non generic type
function displayType<T>(id: T, name: string) : void {
    console.log(typeof id + ', ' + typeof name);
}

displayType<number>(2, 'Uzzal'); // number, string