function add(x, y) {
    return x + y;
}
const result = add(1, 2);
function buildUserInfo(name = "-", email = "-") {
    return { name, email };
}
const user = buildUserInfo();
const add2 = (a, b) => a + b;
function store(type) {
    if (type === '통조림')
        return { a: '황도 통조림' };
    else if (type === '아이스크림')
        return { b: '쭈쭈바' };
    else
        throw new Error('unSupported type');
}
const s = store('통조림');
s.a;
const x = store('아이스크림');
s.b;
//# sourceMappingURL=function.js.map