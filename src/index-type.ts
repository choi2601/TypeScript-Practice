interface Props {
    name: string;
    [key: string]: string; // [key: boolean] 인덱스 시그니쳐는 string 또는 number가 와야 함 / string일 경우에는 키 값이 string, number가 올 수 있음
    // [key: number]: string string으론 받을 수 없게 됨 => number로 밖에 접근 불가능
}

const p: Props = {
    name: 'hello',
    a: 'd',
    b: 'e',
    c: '3',
    0: 'd',
    1: 'b'
}
// p[0];
p.name;

let Keys: keyof Props;

interface User {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser: keyof User;
keysOfUser = "age";

let helloMethod: User['hello'];
helloMethod = function(msg: string) {}