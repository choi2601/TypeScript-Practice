#TypeScript 요약 정리

### Chapter 1

- TypeScript란?

1. 오픈소스 프로그래밍 언어
2. 자바스크립트 상위 집합 => ECMA스크립트 최신 표준 지원
3. 정적인 언어로 컴파일 시간에 타입을 검사

### chapter 2

> tsc hello.ts --target es6 =>es6 문법 변환
> tsc hello.ts --lib es5,es2015.promise,es2015.iterable,dom => 최신 라이브러리 추가
> tsc hello.ts --lib es2015,dom => 별 다른 라이브러리 추가 없이 전체를 추가
