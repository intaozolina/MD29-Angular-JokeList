import { Component } from '@angular/core';
import { JokeModel } from '../models/joke.model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  jokes: JokeModel[] = [];

  addJoke(joke: JokeModel): void {
    this.jokes = [...this.jokes, joke];
  }

  deleteJoke(i: number): void {
    let newJokes = [...this.jokes];
    newJokes.splice(i, 1);
    this.jokes = newJokes;
  }
}
