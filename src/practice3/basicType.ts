let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;
let anyValue: any;

numValue = 3;
stringValue = 'hello';
stringValue = "hello";
stringValue = `${numValue} 입니다`;
booleanValue = true;
undefinedValue = undefined;
undefinedValue = null;

numValue = null;
numValue = undefined;

anyValue = 3;
anyValue = "3";
anyValue = null;

objValue = { name: 'jay' };
objValue = { };
// objValue = String('hello');
objValue = new String('hello');

symbolValue = Symbol();

let nameList: string[];
nameList = ['1', '3'];
nameList.push("hello");

let list: any[];
list = [1, 2, 3];
list.push('2');

let user1: { name: string, score: number }; 
user1.name = 'choi';
user1.score = 3;

let tuple2: [number, string];
let tuple3: [number, number, number];
tuple2 = [1, '3'];
tuple3 = [1, 2, 3];
