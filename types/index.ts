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

type QuokkaOrHuman = Quokka | Human; // Quokka와 Human의 공통된 속성만 사용 가능
type QuokkaAndHuman = Quokka & Human; // Quokka와 Human의 모든 속성을 사용 가능

export interface Cave {
  name: {
    uniqueName: [[string, number]];
  };
  item: number;
  index: number;
}
