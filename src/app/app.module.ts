import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeFormComponent } from './components/jokes/joke-form/joke-form.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { JokeListComponent } from './components/jokes/joke-list/joke-list.component';
import { JokeCardComponent } from './components/jokes/joke-card/joke-card.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeFormComponent,
    JokesComponent,
    JokeListComponent,
    JokeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
