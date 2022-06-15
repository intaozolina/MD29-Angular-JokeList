import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokeModel } from '../../models/joke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss'],
})
export class JokeCardComponent {
  answerVisibility = false;

  @Input()
  joke: JokeModel | undefined;

  ngOnInit() {
    console.log(this.joke?.questions);
  }

  @Output()
  deleteJokeEvent = new EventEmitter<null>();

  showAnswer(): void {
    this.answerVisibility = !this.answerVisibility;
  }

  deleteJoke(): void {
    this.deleteJokeEvent.emit();
  }
}
