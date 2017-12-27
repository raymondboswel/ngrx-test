import { CounterComponent } from './counter/counter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter';

@NgModule({
  declarations: [
      CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature('counter', { count: counterReducer }),
  ],
  providers: [],
})
export class CounterModule { }
