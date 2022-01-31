interface User {
    name: string
}
interface Action {
    do(): void;
}

function createUserAction(u: User, a: Action): User & Action {
    return { ...u, ...a };
}
const u = createUserAction({name: 'jay'}, { do() {}})
// u.do();
// u.name;

function compare(x: string, y: string) : string | number
function compare(x: number, y: number) : string | number

function compare(x: string | number, y: string | number) { // union type
    if(typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if(typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}
const v1 = compare(1, 2);
const v2 = compare('1', '2');
// const v3 = compare(1, '2');
// console.log([3,2,1].sort(compare));
// console.log(['3','2','1'].sort(compare));

function isAction(v: User | Action): v is Action {
    return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
    // if((<Action>v).do) { // v = Action 이라는 확신을 갖고 Action Interface의 메서드 접근
    //     (<Action>v).do()
    // }
    if(isAction(v)) {
        v.do();
    } else {
        console.log(v.name);
    }
}

