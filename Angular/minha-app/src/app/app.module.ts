import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './c1.component';
import { C2Component } from './c2/c2.component';
import { CounterComponent } from './counter/counter.component';
import { GameComponent } from './game/game.component'; /* importando o componente */

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    CounterComponent,
    GameComponent /* incluindo o componente no declarations. */
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
