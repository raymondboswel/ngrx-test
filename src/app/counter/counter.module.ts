import { EffectsModule } from '@ngrx/effects';
import { CounterComponent } from './counter/counter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter';
import { CounterEffects } from './counter/counter.effects';

@NgModule({
  declarations: [
      CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature('counter', { count: counterReducer }),
    EffectsModule.forFeature([CounterEffects])
  ],
  providers: [],
})
export class CounterModule { }
