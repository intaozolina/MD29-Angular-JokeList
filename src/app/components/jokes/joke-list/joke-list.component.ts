import {Component, EventEmitter, Input, Output} from '@angular/core';
import { JokeModel } from '../../models/joke.model';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss'],
})
export class JokeListComponent {
  @Input()
  jokes: JokeModel[] | undefined;

  @Output()
  deleteJokeEvent = new EventEmitter<number>();

  deleteJoke(i: number): void {
    this.deleteJokeEvent.emit(i);
  }
}
