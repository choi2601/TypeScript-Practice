function createPromise<T>(x: T, timeoute: number) {
    return new Promise<T>((resolve: (v: T) => void , reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeoute);
    })
}

createPromise<string>('ef', 100)
    .then(v => console.log(v));

function createTuple2<T1, T2>(v: T1, v2: T2): [T1, T2] {
    return [v, v2];
}
function createTuple3<T, U, D>(v: T, v2: U, v3: D): [T, U, D] {
    return [v, v2, v3];
}

const t1 = createTuple2('user1', 1000);
