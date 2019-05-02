import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../common/question.model';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  hidden: boolean =  false;
  showReponse: boolean = true;
  id: string;
  trueAnswer: boolean;
  falseAnswer: boolean;
  valide: boolean = true;
  answer: boolean;

  @Output()
  getAnswer: EventEmitter<any> = new EventEmitter();
  @Output()
  getFinish: EventEmitter<any> = new EventEmitter();

  @Input() public question: string;
  @Input() public bonneReponse: boolean;

  constructor() { }

  ngOnInit() {
  }

  sendAnswer(): void {
    if (this.bonneReponse === this.trueAnswer) {
      this.answer = true;
    } else {
      this.answer = false;
    }
    console.log(this.answer);
    if (this.bonneReponse === this.answer) {
    this.hidden = true;
    this.showReponse = false;
    this.getAnswer.emit(this.question);
    console.log(this.question);
    this.trueAnswer = undefined;
    this.falseAnswer = undefined;
    this.valide = true;
    } else {
      this.hidden = true;
      this.showReponse = false;
      this.trueAnswer = undefined;
      this.falseAnswer = undefined;
      this.valide = true;
    }
  }

  check() {
    this.valide = false;
  }
}
