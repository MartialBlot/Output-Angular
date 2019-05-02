import { Component, OnInit } from '@angular/core';
import { Question } from '../common/question.model';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.css']
})
export class YodaComponent implements OnInit {

  public answers: Question [] = [];
  public average: number;
  finish: boolean = true;
  yodaSentence: string;
  score: number;
  decompte: number = 10;
  btnResult: boolean = true;

  question1 = new Question('1' , 'Aimes-tu les logiciels libres ?' , true, 3 );
  question2 = new Question('2', 'La force a-t-elle créé Linux ?', true, 1);
  question3 = new Question('3', "Est-ce que le code, c'est la vie ?", true, 2);
  question4 = new Question('4', 'Préféres-tu les GUI au CLI ?', false, 3);
  question5 = new Question('5', "L'histoire de la force a-t-elle écrite par Git ?", true, 2);
  question6 = new Question('6', "La documentation est-elle le meilleur ami de la force ?", true, 2);
  question7 = new Question('7', "Penses-tu que tester c'est douter ?", false, 1);
  question8 = new Question('8', "Javascript est-il le Java du web ?", false, 1);
  question9 = new Question('9', "L'open source se situe dans les Alpes ?", false, 4);
  question10 = new Question('10', "Angular est-il une pierre magique ?", false, 1);

  public questions: Question [] = [this.question1, this.question2, this.question3,
          this.question4, this.question5, this.question6, this.question7, this.question8,
          this.question9, this.question10 ];


  constructor() { }

  ngOnInit() {
  }

  onGetAnswer(): void {}

  reponseAnswers(question) {
    this.answers.push(question);
    console.log(this.answers);
  }

  compteur($event) {
    this.decompte -= 1;
    if(this.decompte === 0){
      this.btnResult = false;
    }
  }

  questionFinish() {
    if (this.calculateAverage(0, 0) > 12) {
      this.yodaSentence = "Okay young padawan now you feel the dev force !";
    } else {
      this.yodaSentence = "Go and never come back...";
    }
    this.finish = false;
  }

  calculateAverage(nbPoint, nbTotalPoint): number {
    for (let i = 0; i < this.answers.length; i++) {
      nbPoint = this.answers[i].score;
      nbTotalPoint += nbPoint;
    }
    this.score = nbTotalPoint;
    return nbTotalPoint;
  }

}
