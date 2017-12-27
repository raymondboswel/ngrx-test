// ./effects/auth.ts
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { RANDOM_SEED_FAILED, RANDOM_SEED_SUCCESS } from './counter.actions';

@Injectable()
export class CounterEffects {
  // Listen for the 'LOGIN' action
  @Effect() randomSeed$: Observable<Action> = this.actions$.ofType('RANDOM_SEED')
    .mergeMap(action =>
      this.http.get('https://www.random.org/integers/?num=1&min=1&max=600&col=1&base=10&format=plain&rnd=new')
        // If successful, dispatch success action with result
        .map(data => ({ type: RANDOM_SEED_SUCCESS, payload: data.json() }))
        // If request fails, dispatch failed action
        .catch(() => of({ type: RANDOM_SEED_FAILED }))
    );

  constructor(
    private http: Http,
    private actions$: Actions
  ) {}
}

