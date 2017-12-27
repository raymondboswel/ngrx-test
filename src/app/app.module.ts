import { CounterModule } from './counter/counter.module';
import { CounterComponent } from './counter/counter/counter.component';
import { DetailsModule } from './details/details.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Params } from '@angular/router';
import { StoreModule, ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromCounter from './counter/counter/counter';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details-component/details.component';
import { HttpModule } from '@angular/http/http';

// // console.log all actions
// export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
//   return function(state: State, action: any): State {
//     console.log('state', state);
//     console.log('action', action);

//     return reducer(state, action);
//   };
// }

// export const metaReducers: MetaReducer<State>[] = [];

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export interface State {

  // layout: fromLayout.State;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}


export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
  // counterReducer: fromCounter.counterReducer,
  // detailsReducer: fromDetails.detailsReducer
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DetailsModule,
    CounterModule,
    StoreModule.forRoot({routerReducer: fromRouter.routerReducer}),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 30
    }),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([
      { path: 'counter', component: CounterComponent},
      { path: 'details', component: DetailsComponent},
      ], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
