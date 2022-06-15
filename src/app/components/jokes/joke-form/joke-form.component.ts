import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JokeModel} from "../../models/joke.model";

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {

  @Output()
  addJokeEvent = new EventEmitter<JokeModel>();

  jokeForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.jokeForm.markAllAsTouched();

  }

  buildForm(): void {
    this.jokeForm = this.fb.group({
      questions: ['', [Validators.required]],
      answers: ['', [Validators.required]],
    })
  }

  addJoke(): void {
    if(this.jokeForm.valid) {
  this.addJokeEvent.emit(this.jokeForm.value)
    }
  }
}
