export class Question {
  constructor(
    id: string,
    public title: string,
    public answer: boolean,
    public score: number,
  ) {}
}
