function add(x: number, y: number): number {
    return x + y;
}

const result: number = add(1, 2);

function buildUserInfo(name = "-", email = "-"): object {
    return { name, email };
}

const user = buildUserInfo();

const add2 = (a: number, b: number): number => a + b;

interface Storage {
    a: string
}
interface ColdStorage {
    b: string
}

// functional Signature

function store(type: "통조림"): Storage
function store(type: "아이스크림"): ColdStorage


function store(type: "통조림" | "아이스크림") {
    if(type === '통조림') return { a: '황도 통조림' };
    else if(type === '아이스크림') return { b: '쭈쭈바' };
    else throw new Error('unSupported type')
}

const s = store('통조림');
s.a 
const x = store('아이스크림');
s.b