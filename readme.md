#TypeScript 요약 정리

### Chapter 1

- Typescript란?

1. 오픈소스 프로그래밍 언어
2. 자바스크립트 상위 집합 => ECMA스크립트 최신 표준 지원(이전 버전부터 최신버전까지)
3. 정적인 언어로 컴파일 시간에 타입을 검사

### chapter 2

- Typescript 컴파일러

1. tsc hello.ts --target es6: es6 문법 변환
2. tsc hello.ts --lib es5,es2015.promise,es2015.iterable,dom: 최신 라이브러리 추가
3. tsc hello.ts --lib es2015,dom: 별 다른 라이브러리 추가 없이 전체를 추가
4. tsc hello.ts --target es6 --lib es2015,dom --module commonjs: node 런타임 실행 시 최신 라이브러리 및 문법으로 동작되도록 해줌
5. tsc hello.ts --target es6 --lib es2015,dom --module commonjs --showConfig: 매번 컴파일 옵션을 작성할 필요 없이 Typescript 옵션을 지정할 수 있음(tsconfig.json) => 이에 대한 옵션을 볼 수 있게 해주는 명령어
