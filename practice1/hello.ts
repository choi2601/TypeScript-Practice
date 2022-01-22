var hello = 'hello';
let hello2 = "hello2";
let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1 sec");
    }, 1000)
})
timeoutPromise.then(console.log);

import add from './util';
const returnVal = add(1, 2);
console.log(returnVal);
//tsc hello.ts --target es6 =>es6 문법 변환
//tsc hello.ts --lib es5,es2015.promise,es2015.iterable,dom => 최신 라이브러리 추가
//tsc hello.ts --lib es2015,dom => 별 다른 라이브러리 추가 없이 전체를 추가