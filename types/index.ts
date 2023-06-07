interface Quokka {
  name: string;
  age: number;
  cuteLevel: number;
}
interface Human {
  name: string;
  age: number;
  job: string;
}

interface Roni extends Quokka {
  power: number;
}

class ato implements Quokka {
  name: string;
  age: number;
  cuteLevel: number;

  smartLevel: number;

  constructor() {
    this.name = "ato";
    this.age = 10;
    this.cuteLevel = 100;
    this.smartLevel = 20;
  }
}

// Computed Property
interface QuokkasAge {
  [key: string]: number; // OK
  // [key: `${string}_quokka_age_is_`]: number; // Error
}
type QuokkasAge2 = {
  [K in `${string}_quokka_age_is_`]: number; // OK
};

type QuokkaKeys = "name" | "age" | "cuteLevel";
type QuokkaKeys2 = keyof Quokka; // Quokka의 속성 이름들을 union 타입으로 반환

type QuokkaOrHuman = Quokka | Human; // Quokka와 Human의 공통된 속성만 사용 가능
type QuokkaAndHuman = Quokka & Human; // Quokka와 Human의 모든 속성을 사용 가능

// Enum
enum atommerces {
  Roni,
  Ato,
  Quokka,
  Bear,
}

let a: atommerces;

a = atommerces.Roni; // 0
a = atommerces.Ato; // 1
a = atommerces.Quokka; // 2
a = atommerces.Bear; // 3

// Enum 2
enum Atommerces {
  Roni = "Roni",
  Ato = "Ato",
  Quokka = "Quokka",
  Bear = "Bear",
}

// 각 Atommerces 값에 대한 추가 정보 매핑
const AtommercesInfo = {
  [Atommerces.Roni]: { age: 10, hobby: "Programming" },
  [Atommerces.Ato]: { age: 12, hobby: "Designing" },
  [Atommerces.Quokka]: { age: 5, hobby: "Sleeping" },
  [Atommerces.Bear]: { age: 3, hobby: "Eating" },
};

// Atommerces 타입의 변수를 정의합니다.
let member: Atommerces = Atommerces.Roni;

// 해당 변수에 대한 추가 정보를 출력합니다.
console.log(`Member: ${member}`); // Roni
console.log(`Age: ${AtommercesInfo[member].age}`); // 10
console.log(`Hobby: ${AtommercesInfo[member].hobby}`); // Programming

// unknown
let unknownVar: unknown;
unknownVar = "Hello World"; // 에러남

let anyVar: any;
anyVar = "Hello World"; // 에러 안남

if (typeof unknownVar === "string") {
  unknownVar = "Hello World"; // 에러안남
}

// 타입 추론
let roniAge = 10;
// number 타입으로 추론
let roniMessage = "hello";
// string 타입으로 추론

let newRoni = {
  id: 1,
  name: "로니",
  profile: {
    nickname: "김로니",
  },
  urls: ["https://mindcafe.co.kr"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

let justRoni;
// any 타입으로 추론

let singerInfo = [516, "IU"];
// (string | number)[] 타입으로 추론

//타입 단언
type man = {
  name: string;
  age: number;
};

// let person = {} // 에러남
let person = {} as man;
person.name = "doo";
person.age = 23;

// 다중 타입 단언
// 타입을 number에서 unknown으로 변경
let someValue: unknown = 10;

// 이제 unknown에서 string으로 변경
let str: string = someValue as unknown as string;

console.log(str); // 출력: "10"

// 제네릭
let numbers: Array<number> = [1, 2, 3];
let strings: Array<string> = ["hello", "world"];

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// 제네릭 2
function func<T>(value: T): T {
  return value;
}

let arr = func<[number, number, number]>([1, 2, 3]);

// 제네릭 3
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 제네릭 타입 제약
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123"); // o
getLength([1, 2, 3]); // o
getLength({ length: 1 }); // o

getLength(undefined); // x
getLength(null); // x

// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 제네릭 인터페이스 + 인덱스 시그니처
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};
