export class Sentence {
  n!: number;
  s!: string;
  v!: string;
  o!: string;

  constructor(sentence: Sentence) {
    this.n = sentence.n;
    this.s = sentence.s;
    this.v = sentence.v;
    this.o = sentence.o;
  }
}
